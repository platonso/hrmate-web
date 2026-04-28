import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { api, FormResponse, FormsWithUserResponse } from '../api';
import svgPaths from "../../imports/svg-kae9lsjw89";

export type RequestStatus = 'pending' | 'approved' | 'rejected';

export interface Request {
  id: string;
  subject: string;
  description: string;
  startDate: string;
  endDate: string;
  status: RequestStatus;
  createdAt: string;
  authorId: string;
  authorName: string;
  authorEmail?: string;
  authorPosition?: string;
  hrComment?: string;
  hrAttachments?: string[];
}

interface MyRequestsViewProps {
  onViewRequest: (request: Request) => void;
  onCreateNew: () => void;
}

export function MyRequestsView({ onViewRequest, onCreateNew }: MyRequestsViewProps) {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | RequestStatus>('pending');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    const fetchForms = async () => {
      setLoading(true);
      setError(null);
      try {
        let forms: FormResponse[] | FormsWithUserResponse[] = [];

        if (user?.role === 'hr' || user?.role === 'admin') {
          forms = user.role === 'admin'
            ? await api.getAdminForms()
            : await api.getHrForms();

          const mappedRequests: Request[] = (forms as FormsWithUserResponse[]).flatMap((item) =>
            item.forms.map((form) => ({
              id: form.id,
              subject: form.title,
              description: form.description || '',
              startDate: form.startDate || '',
              endDate: form.endDate || '',
              status: form.status as RequestStatus,
              createdAt: form.createdAt,
              authorId: item.user.id,
              authorName: `${item.user.firstName} ${item.user.lastName}`,
              authorEmail: item.user.email,
              authorPosition: item.user.position,
            }))
          );
          setRequests(mappedRequests);
        } else {
          forms = await api.getForms();

          const mappedRequests: Request[] = (forms as FormResponse[]).map((form) => ({
            id: form.id,
            subject: form.title,
            description: '',
            startDate: form.startDate || '',
            endDate: form.endDate || '',
            status: form.status as RequestStatus,
            createdAt: form.createdAt,
            authorId: form.userId,
            authorName: user ? `${user.firstName} ${user.lastName}` : '',
            authorEmail: user?.email,
            authorPosition: user?.position,
          }));
          setRequests(mappedRequests);
        }
      } catch (err) {
        console.error('Failed to fetch forms:', err);
        setError('Не удалось загрузить заявки');
      } finally {
        setLoading(false);
      }
    };

    fetchForms();
  }, [user]);

  const filteredRequests = requests.filter(request => {
    const matchesSearch = request.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: requests.length,
    pending: requests.filter(r => r.status === 'pending').length,
    approved: requests.filter(r => r.status === 'approved').length,
    rejected: requests.filter(r => r.status === 'rejected').length
  };

  const getStatusIcon = (status: RequestStatus) => {
    const colors = {
      pending: { fill: '#7C86FF', stroke: '#4F39F6' },
      approved: { fill: '#9AE600', stroke: '#5EA500' },
      rejected: { fill: '#FF637E', stroke: '#EC003F' }
    };
    const color = colors[status];

    return (
      <svg className="size-[11px] block shrink-0" viewBox="0 0 11 11" fill="none">
        <circle cx="5.5" cy="5.5" r="4.75" fill={color.fill} stroke={color.stroke} strokeWidth="1.5" />
      </svg>
    );
  };

  const getStatusText = (status: RequestStatus) => {
    switch (status) {
      case 'pending': return 'НА РАССМОТРЕНИИ';
      case 'approved': return 'СОГЛАСОВАНО';
      case 'rejected': return 'ОТКЛОНЕНО';
    }
  };

  if (loading) {
    return (
      <div className="h-full py-6 overflow-y-auto">
        <div className="flex items-center justify-center h-64">
          <div className="text-[#79716b] font-['Geist:Regular',sans-serif]">Загрузка...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full py-6 overflow-y-auto">
        <div className="flex items-center justify-center h-64">
          <div className="text-[#ff2056] font-['Geist:Regular',sans-serif]">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full py-6 flex flex-col">
      <h1 className="font-['Geist:SemiBold',sans-serif] font-semibold text-[18px] leading-[28px] text-[#292524] mb-2">
        {user?.role === 'hr' || user?.role === 'admin' ? 'Все заявки' : 'Мои заявки'}
      </h1>
      <p className="font-['Geist:Regular',sans-serif] text-[14px] leading-[20px] text-[#79716b] mb-6">
        {user?.role === 'hr' || user?.role === 'admin' ? 'Управляйте заявками всех сотрудников и отслеживайте их статусы.' : 'Управляйте заявками и отслеживайте статус рассмотрения.'}
      </p>

      <div className="flex items-center justify-between mb-6">
        {/* Search */}
        <div className="h-[36px] w-[360px] relative">
          <input
            type="text"
            placeholder="Поиск"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="absolute bg-white border border-[#e7e5e4] border-solid h-[36px] left-0 right-0 rounded-[8px] px-3 pr-10 font-['Geist:Regular',sans-serif] text-[14px] focus:outline-none focus:border-[#292524]"
          />
          <div className="absolute bottom-[2px] right-[2px] rounded-[12px] top-[2px] w-[32px] flex items-center justify-center">
            <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
              <path d={svgPaths.p17393000} stroke="#A6A09B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
            </svg>
          </div>
        </div>

        {/* Create Button */}
        {user?.role === 'employee' && (
          <button
            onClick={onCreateNew}
            className="bg-[#44403b] border-2 border-[#292524] border-solid h-[34px] px-4 rounded-[12px] flex items-center justify-center gap-2 hover:bg-[#292524] transition-colors"
          >
            <svg className="size-[16px]" fill="none" viewBox="0 0 18 18">
              <path d="M9 3V15M15 9H3" stroke="#FAFAF9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <span className="font-['Geist_Mono:Medium',sans-serif] font-medium text-[13px] text-[#fafaf9] uppercase tracking-[0.7px]">
              Создать
            </span>
          </button>
        )}
      </div>

{/* Stats */}
      <div className="bg-white border border-[#e7e5e4] border-solid mb-6 overflow-clip rounded-[8px] h-[56px] flex shrink-0">
        {/* На рассмотрении */}
        <button
          onClick={() => setStatusFilter('pending')}
          className={`flex-1 ${statusFilter === 'pending' ? 'bg-[#f5f5f4]' : 'bg-white hover:bg-[#fafaf9]'} border-r border-[#e7e5e4] flex flex-col justify-center px-4 transition-colors text-left`}
        >
          <div className="flex items-center gap-[6px] mb-[2px]">
            {getStatusIcon('pending')}
            <p className="font-['Geist_Mono:Medium',sans-serif] font-medium text-[12px] text-[#292524] uppercase tracking-[0.48px] leading-[16px]">
              НА РАССМОТРЕНИИ
            </p>
          </div>
          <p className="font-['Geist:Medium',sans-serif] font-medium text-[16px] text-[#292524] leading-[20px]">
            {stats.pending}
          </p>
        </button>

        {/* Согласовано */}
        <button
          onClick={() => setStatusFilter('approved')}
          className={`flex-1 ${statusFilter === 'approved' ? 'bg-[#f5f5f4]' : 'bg-white hover:bg-[#fafaf9]'} border-r border-[#e7e5e4] flex flex-col justify-center px-4 transition-colors text-left`}
        >
          <div className="flex items-center gap-[6px] mb-[2px]">
            {getStatusIcon('approved')}
            <p className="font-['Geist_Mono:Medium',sans-serif] font-medium text-[12px] text-[#292524] uppercase tracking-[0.48px] leading-[16px]">
              СОГЛАСОВАНО
            </p>
          </div>
          <p className="font-['Geist:Medium',sans-serif] font-medium text-[16px] text-[#292524] leading-[20px]">
            {stats.approved}
          </p>
        </button>

        {/* Отклонено */}
        <button
          onClick={() => setStatusFilter('rejected')}
          className={`flex-1 ${statusFilter === 'rejected' ? 'bg-[#f5f5f4]' : 'bg-white hover:bg-[#fafaf9]'} border-r border-[#e7e5e4] flex flex-col justify-center px-4 transition-colors text-left`}
        >
          <div className="flex items-center gap-[6px] mb-[2px]">
            {getStatusIcon('rejected')}
            <p className="font-['Geist_Mono:Medium',sans-serif] font-medium text-[12px] text-[#292524] uppercase tracking-[0.48px] leading-[16px]">
              ОТКЛОНЕНО
            </p>
          </div>
          <p className="font-['Geist:Medium',sans-serif] font-medium text-[16px] text-[#292524] leading-[20px]">
            {stats.rejected}
          </p>
        </button>

        {/* Все заявки */}
        <button
          onClick={() => setStatusFilter('all')}
          className={`flex-1 ${statusFilter === 'all' ? 'bg-[#f5f5f4]' : 'bg-white hover:bg-[#fafaf9]'} flex flex-col justify-center px-4 transition-colors text-left`}
        >
          <div className="flex items-center gap-[6px] mb-[2px]">
            <p className="font-['Geist_Mono:Medium',sans-serif] font-medium text-[12px] text-[#292524] uppercase tracking-[0.48px] leading-[16px]">
              ВСЕ ЗАЯВКИ
            </p>
          </div>
          <p className="font-['Geist:Medium',sans-serif] font-medium text-[16px] text-[#292524] leading-[20px]">
            {stats.total}
          </p>
</button>
      </div>

      {/* Table */}
      <div className="bg-white border border-[#e7e5e4] border-solid rounded-[8px] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#f5f5f4] border-b border-[#e7e5e4] font-['Geist_Mono:Medium',sans-serif] font-medium h-[48px] text-[#79716b] text-[12px] uppercase flex items-center px-4 shrink-0">
          <div className="flex-[4] tracking-[0.48px]">ТЕМА</div>
          <div className="flex-[2] tracking-[0.48px]">СТАТУС</div>
          <div className="flex-[2] tracking-[0.48px]">СОЗДАНА</div>
          <div className="flex-[2] tracking-[0.48px]">ВЫПОЛНЕНА</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[#f5f5f4] overflow-y-auto max-h-[700px]">
          {filteredRequests.length === 0 ? (
            <div className="px-4 py-8 text-center text-[#79716b] font-['Geist:Regular',sans-serif] text-[14px]">
              Заявки не найдены
            </div>
          ) : (
            filteredRequests.map(request => (
              <div
                key={request.id}
                onClick={() => onViewRequest(request)}
                className="h-[56px] px-4 flex items-center hover:bg-[#fafaf9] transition-colors cursor-pointer"
              >
                <div className="flex-[4] flex items-center">
                  <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px]">
                    {request.subject}
                  </span>
                </div>
                <div className="flex-[2] flex items-center gap-[6px]">
                  {getStatusIcon(request.status)}
                  <span className="font-['Geist:Medium',sans-serif] font-medium text-[12px] text-[#292524] leading-[20px]">
                    {getStatusText(request.status)}
                  </span>
                </div>
                <div className="flex-[2] flex items-center">
                  <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px]">
                    {new Date(request.createdAt).toLocaleDateString('ru-RU', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex-[2] flex items-center">
                  <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px]">
                    {request.status === 'pending' ? '—' :
                      new Date(request.createdAt).toLocaleDateString('ru-RU', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                      })
                    }
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}