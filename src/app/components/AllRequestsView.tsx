import { useState } from 'react';
import { mockRequests, Request, RequestStatus } from './mockData';
import svgPaths from "../../imports/svg-siklasnz9t";

interface AllRequestsViewProps {
  onViewRequest: (request: Request) => void;
}

export function AllRequestsView({ onViewRequest }: AllRequestsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<RequestStatus | 'all'>('all');

  const filteredRequests = mockRequests.filter(request => {
    const matchesSearch = request.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.authorName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: mockRequests.length,
    pending: mockRequests.filter(r => r.status === 'pending').length,
    approved: mockRequests.filter(r => r.status === 'approved').length,
    rejected: mockRequests.filter(r => r.status === 'rejected').length
  };

  const getStatusColor = (status: RequestStatus) => {
    switch (status) {
      case 'pending': return 'text-[#ea580c]';
      case 'approved': return 'text-[#16a34a]';
      case 'rejected': return 'text-[#dc2626]';
    }
  };

  const getStatusText = (status: RequestStatus) => {
    switch (status) {
      case 'pending': return 'На рассмотрении';
      case 'approved': return 'Согласовано';
      case 'rejected': return 'Отклонена';
    }
  };

  return (
    <div className="h-full py-6 overflow-y-auto">
      <h1 className="font-['Geist:SemiBold',sans-serif] font-semibold text-[18px] leading-[28px] text-[#292524] dark:text-stone-100 mb-2">
        Реестр заявок
      </h1>
      <p className="font-['Geist:Regular',sans-serif] text-[14px] leading-[20px] text-[#79716b] dark:text-stone-400 mb-6">
        Просмотр и рассмотрение всех заявок сотрудников.
      </p>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-800 rounded-[12px] p-4">
          <p className="font-['Geist_Mono:Medium',sans-serif] font-medium text-[12px] text-[#79716b] dark:text-stone-400 uppercase mb-1">Всего</p>
          <p className="font-['Geist:SemiBold',sans-serif] font-semibold text-[24px] text-[#292524] dark:text-stone-100">{stats.total}</p>
        </div>
        <div className="bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-800 rounded-[12px] p-4">
          <p className="font-['Geist_Mono:Medium',sans-serif] font-medium text-[12px] text-[#79716b] dark:text-stone-400 uppercase mb-1">На рассмотрении</p>
          <p className="font-['Geist:SemiBold',sans-serif] font-semibold text-[24px] text-[#ea580c]">{stats.pending}</p>
        </div>
        <div className="bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-800 rounded-[12px] p-4">
          <p className="font-['Geist_Mono:Medium',sans-serif] font-medium text-[12px] text-[#79716b] dark:text-stone-400 uppercase mb-1">Согласовано</p>
          <p className="font-['Geist:SemiBold',sans-serif] font-semibold text-[24px] text-[#16a34a]">{stats.approved}</p>
        </div>
        <div className="bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-800 rounded-[12px] p-4">
          <p className="font-['Geist_Mono:Medium',sans-serif] font-medium text-[12px] text-[#79716b] dark:text-stone-400 uppercase mb-1">Отклонено</p>
          <p className="font-['Geist:SemiBold',sans-serif] font-semibold text-[24px] text-[#dc2626]">{stats.rejected}</p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Поиск по теме, автору..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-[36px] bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-800 rounded-[8px] pl-3 pr-10 font-['Geist:Regular',sans-serif] text-[14px] focus:outline-none focus:border-[#292524] dark:border-stone-700"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-[14px] h-[14px]">
            <svg fill="none" viewBox="0 0 14 14">
              <path d={svgPaths.p17393000} stroke="#A6A09B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
            </svg>
          </div>
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as RequestStatus | 'all')}
          className="h-[36px] bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-800 rounded-[8px] px-3 font-['Geist:Regular',sans-serif] text-[14px] focus:outline-none focus:border-[#292524] dark:border-stone-700"
        >
          <option value="all">Все статусы</option>
          <option value="pending">На рассмотрении</option>
          <option value="approved">Согласовано</option>
          <option value="rejected">Отклонена</option>
        </select>
      </div>

      <div className="bg-white dark:bg-stone-900 border border-[#e7e5e4] dark:border-stone-800 rounded-[16px] overflow-hidden">
        <div className="bg-[#f5f5f4] dark:bg-stone-800/50 border-b border-[#e7e5e4] dark:border-stone-800 px-4 py-4">
          <div className="grid grid-cols-12 gap-4 font-['Geist_Mono:Medium',sans-serif] font-medium text-[12px] text-[#79716b] dark:text-stone-400 uppercase">
            <div className="col-span-4">Тема</div>
            <div className="col-span-2">Автор</div>
            <div className="col-span-2">Статус</div>
            <div className="col-span-3">Создана</div>
            <div className="col-span-1"></div>
          </div>
        </div>

        <div className="divide-y divide-[#f5f5f4] dark:divide-stone-800">
          {filteredRequests.length === 0 ? (
            <div className="px-4 py-8 text-center text-[#79716b] dark:text-stone-400 font-['Geist:Regular',sans-serif] text-[14px]">
              Заявки не найдены
            </div>
          ) : (
            filteredRequests.map(request => (
              <button
                key={request.id}
                onClick={() => onViewRequest(request)}
                className="w-full px-4 py-5 grid grid-cols-12 gap-4 items-center hover:bg-[#fafaf9] dark:bg-stone-950 transition-colors text-left"
              >
                <div className="col-span-4">
                  <p className="font-['Geist:SemiBold',sans-serif] font-semibold text-[14px] text-[#292524] dark:text-stone-100 leading-[20px]">
                    {request.subject}
                  </p>
                </div>
                <div className="col-span-2">
                  <span className="font-['Geist:Regular',sans-serif] text-[12px] text-[#292524] dark:text-stone-100 leading-[16px]">
                    {request.authorName}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className={`font-['Geist:Regular',sans-serif] text-[12px] leading-[16px] ${getStatusColor(request.status)}`}>
                    {getStatusText(request.status)}
                  </span>
                </div>
                <div className="col-span-3">
                  <span className="font-['Geist:Regular',sans-serif] text-[12px] text-[#292524] dark:text-stone-100 leading-[16px]">
                    {new Date(request.createdAt).toLocaleDateString('ru-RU', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <div className="col-span-1 flex justify-end">
                  <div className="w-[15px] h-[15px]">
                    <svg fill="none" viewBox="0 0 15 15">
                      <path d={svgPaths.p27852e00} fill="#A6A09B" stroke="#A6A09B" strokeWidth="0.9375" />
                    </svg>
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
