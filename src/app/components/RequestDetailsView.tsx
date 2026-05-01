import { useState, useRef, useEffect } from 'react';
import { FileText, Download, CheckCircle2, Clock, XCircle } from 'lucide-react';
import { useAuth } from './AuthContext';
import { toast } from 'sonner';
import { api, FormWithDocsResponse, DocumentResponse } from '../api';

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
  attachDocs?: DocumentResponse[];
  responseDocs?: DocumentResponse[];
  resolvedAt?: string;
}

interface RequestDetailsViewProps {
  request: Request;
  onBack: () => void;
}

const UploadIcon = () => (
  <svg className="w-[26px] h-[26px]" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.43616 8.35249L11.917 5.86082V16.25C11.917 16.5373 12.0311 16.8129 12.2343 17.016C12.4375 17.2192 12.713 17.3333 13.0003 17.3333C13.2876 17.3333 13.5632 17.2192 13.7664 17.016C13.9695 16.8129 14.0837 16.5373 14.0837 16.25V5.86082L16.5645 8.35249C16.6652 8.45403 16.785 8.53462 16.917 8.58962C17.049 8.64462 17.1906 8.67294 17.3337 8.67294C17.4767 8.67294 17.6183 8.64462 17.7503 8.58962C17.8823 8.53462 18.0021 8.45403 18.1028 8.35249C18.2044 8.25178 18.285 8.13196 18.34 7.99995C18.395 7.86793 18.4233 7.72634 18.4233 7.58332C18.4233 7.44031 18.395 7.29871 18.34 7.1667C18.285 7.03468 18.2044 6.91487 18.1028 6.81416L13.7695 2.48082C13.6665 2.3822 13.545 2.30488 13.412 2.25332C13.1482 2.14497 12.8524 2.14497 12.5887 2.25332C12.4557 2.30488 12.3342 2.3822 12.2312 2.48082L7.89783 6.81416C7.79682 6.91516 7.71669 7.03508 7.66203 7.16705C7.60736 7.29903 7.57923 7.44048 7.57923 7.58332C7.57923 7.72617 7.60736 7.86762 7.66203 7.99959C7.71669 8.13157 7.79682 8.25148 7.89783 8.35249C7.99883 8.4535 8.11875 8.53362 8.25072 8.58829C8.3827 8.64295 8.52414 8.67109 8.66699 8.67109C8.80984 8.67109 8.95129 8.64295 9.08326 8.58829C9.21524 8.53362 9.33515 8.4535 9.43616 8.35249Z" fill="currentColor"/>
    <path d="M22.7503 15.1667C22.463 15.1667 22.1875 15.2808 21.9843 15.484C21.7811 15.6871 21.667 15.9627 21.667 16.25V20.5833C21.667 20.8706 21.5529 21.1462 21.3497 21.3494C21.1465 21.5525 20.871 21.6667 20.5837 21.6667H5.41699C5.12967 21.6667 4.85412 21.5525 4.65096 21.3494C4.4478 21.1462 4.33366 20.8706 4.33366 20.5833V16.25C4.33366 15.9627 4.21952 15.6871 4.01636 15.484C3.81319 15.2808 3.53764 15.1667 3.25033 15.1667C2.96301 15.1667 2.68746 15.2808 2.48429 15.484C2.28113 15.6871 2.16699 15.9627 2.16699 16.25V20.5833C2.16699 21.4453 2.5094 22.2719 3.1189 22.8814C3.72839 23.4909 4.55504 23.8333 5.41699 23.8333H20.5837C21.4456 23.8333 22.2723 23.4909 22.8818 22.8814C23.4912 22.2719 23.8337 21.4453 23.8337 20.5833V16.25C23.8337 15.9627 23.7195 15.6871 23.5164 15.484C23.3132 15.2808 23.0376 15.1667 22.7503 15.1667Z" fill="currentColor"/>
  </svg>
);

export function RequestDetailsView({ request: initialRequest, onBack }: RequestDetailsViewProps) {
  const { user } = useAuth();
  const [request, setRequest] = useState<Request>(initialRequest);
  const [loading, setLoading] = useState(true);
  const [authorData, setAuthorData] = useState<{firstName: string, lastName: string, email: string, position?: string} | null>(null);
  
  const [comment, setComment] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchFormDetails = async () => {
      setLoading(true);
      try {
        let formData: FormWithDocsResponse;
        
        if (user?.role === 'admin') {
          formData = await api.getAdminForm(initialRequest.id);
        } else if (user?.role === 'hr') {
          formData = await api.getHrForm(initialRequest.id);
        } else {
          formData = await api.getForm(initialRequest.id);
        }

        let authorInfo = null;
        if (user?.role === 'admin') {
          const users = await api.getAdminUsers();
          authorInfo = users.find(u => u.id === formData.userId);
        } else if (user?.role === 'hr') {
          const users = await api.getHrUsers();
          authorInfo = users.find(u => u.id === formData.userId);
        }

        if (authorInfo) {
          setAuthorData({
            firstName: authorInfo.firstName,
            lastName: authorInfo.lastName,
            email: authorInfo.email,
            position: authorInfo.position
          });
        }

        setRequest({
          id: formData.id,
          subject: formData.title,
          description: formData.description || '',
          startDate: formData.startDate || '',
          endDate: formData.endDate || '',
          status: formData.status as RequestStatus,
          createdAt: formData.createdAt,
          authorId: formData.userId,
          authorName: authorInfo ? `${authorInfo.firstName} ${authorInfo.lastName}` : '',
          authorEmail: authorInfo?.email,
          authorPosition: authorInfo?.position,
          hrComment: formData.resolution?.comment,
          attachDocs: formData.attachDocs,
          responseDocs: formData.resolution?.responseDocs,
          resolvedAt: formData.resolution?.resolvedAt,
        });
      } catch (error) {
        console.error('Failed to fetch form details:', error);
        toast.error('Не удалось загрузить детали заявки');
      } finally {
        setLoading(false);
      }
    };

    fetchFormDetails();
  }, [initialRequest.id, user]);

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    try {
      return new Date(dateString).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).replace(' г.', '');
    } catch {
      return dateString;
    }
  };

const formatDateTime = (dateString: string) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).replace(' г.', '') + `, ${hours}:${minutes}`; 
    } catch {
      return dateString;
    }
  };

  const formatShortDateTime = (dateString: string) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }).replace(' г.', '') + `, ${hours}:${minutes}`;
    } catch {
      return dateString;
    }
  };

  const getStatusDisplay = (status: RequestStatus) => {
    const colors = {
      pending: { fill: '#7C86FF', stroke: '#4F39F6', text: 'НА РАССМОТРЕНИИ' },
      approved: { fill: '#9AE600', stroke: '#5EA500', text: 'СОГЛАСОВАНО' },
      rejected: { fill: '#FF637E', stroke: '#EC003F', text: 'ОТКЛОНЕНО' }
    };
    const color = colors[status];
    return (
      <div className="flex items-center gap-[6px]">
        <svg className="size-[11px] block shrink-0" viewBox="0 0 11 11" fill="none">
          <circle cx="5.5" cy="5.5" r="4.75" fill={color.fill} stroke={color.stroke} strokeWidth="1.5" />
        </svg>
        <span className="font-['Geist:Medium',sans-serif] font-medium text-[12px] text-[#292524] dark:text-stone-100 leading-[20px]">
          {color.text}
        </span>
      </div>
    );
  };

  const getStatusCardConfig = (status: RequestStatus) => {
    switch (status) {
      case 'approved':
        return {
          cardBg: 'bg-emerald-50 border-emerald-100',
          titleColor: 'text-emerald-800',
          icon: <CheckCircle2 className="w-4 h-4" />,
          title: 'Заявка согласована',
          timeColor: 'text-emerald-600',
          defaultComment: 'Заявка согласована. Приказ будет оформлен в течение 3 рабочих дней.'
        };
      case 'pending':
        return {
          cardBg: 'bg-indigo-50 border-indigo-100',
          titleColor: 'text-indigo-800',
          icon: <Clock className="w-4 h-4" />,
          title: 'Заявка на рассмотрении',
          timeColor: 'text-indigo-600',
          defaultComment: 'Ваша заявка находится на рассмотрении у HR-специалиста.'
        };
      case 'rejected':
        return {
          cardBg: 'bg-red-50 border-red-100',
          titleColor: 'text-red-800',
          icon: <XCircle className="w-4 h-4" />,
          title: 'Заявка отклонена',
          timeColor: 'text-red-600',
          defaultComment: 'Заявка отклонена. Пожалуйста, свяжитесь с HR для уточнения деталей.'
        };
    }
  };

  const statusConfig = getStatusCardConfig(request.status);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
      e.target.value = '';
    }
  };

  const handleHRAction = async (action: 'approved' | 'rejected') => {
    setIsSubmitting(true);
    try {
      if (action === 'approved') {
        await api.approveForm(request.id, {
          comment: comment || undefined,
          documents: files.length > 0 ? files : undefined,
        });
        toast.success('Заявка одобрена');
      } else {
        await api.rejectForm(request.id, {
          comment: comment || undefined,
          documents: files.length > 0 ? files : undefined,
        });
        toast.error('Заявка отклонена');
      }
      setTimeout(() => onBack(), 1000);
    } catch (error) {
      console.error('Failed to process form:', error);
      toast.error('Не удалось обработать заявку');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteRequest = async () => {
    if (confirm('Вы уверены, что хотите удалить эту заявку? Это действие нельзя отменить.')) {
      try {
        await api.deleteForm(request.id);
        toast.success('Заявка удалена');
        setTimeout(() => onBack(), 1000);
      } catch (error) {
        console.error('Failed to delete form:', error);
        toast.error('Не удалось удалить заявку');
      }
    }
  };

  const handleDownloadDocument = async (docId: string, docName: string) => {
    try {
      const blob = await api.downloadDocument(docId);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = docName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Failed to download document:', error);
      toast.error('Не удалось скачать документ');
    }
  };

  if (loading) {
    return (
      <div className="h-full py-6 overflow-y-auto">
        <div className="flex items-center justify-center h-64">
          <div className="text-[#79716b] dark:text-stone-400 font-['Geist:Regular',sans-serif]">Загрузка...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full py-6 overflow-y-auto w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* Header */}
      <div>
        <button
          onClick={onBack}
          className="mb-4 flex items-center gap-[6px] text-[#79716b] dark:text-stone-400 hover:text-[#292524] dark:text-stone-100 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px]">Назад</span>
        </button>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-5">
        <div className="space-y-5">
          {/* Main Details Card */}
          <div className="border border-[#e7e5e4] dark:border-stone-800 border-solid rounded-[8px] overflow-hidden">
            <div className="bg-[#f5f5f4] dark:bg-stone-800/50 border-b border-[#e7e5e4] dark:border-stone-800 h-[48px] px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-500" />
                <h2 className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] dark:text-stone-100 leading-[20px]">
                  Заявка
                </h2>
              </div>
              {getStatusDisplay(request.status)}
            </div>

            <div className="bg-white dark:bg-stone-900 p-4 space-y-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Тема</p>
                <p className="text-sm text-gray-900 dark:text-stone-100 font-medium">{request.subject}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Описание</p>
                <p className="text-sm text-gray-700 dark:text-stone-300 leading-relaxed whitespace-pre-wrap">{request.description || '—'}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Начало</p>
                  <p className="text-sm text-gray-700 dark:text-stone-300">{request.startDate ? formatDate(request.startDate) : '—'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Конец</p>
                  <p className="text-sm text-gray-700 dark:text-stone-300">{request.endDate ? formatDate(request.endDate) : '—'}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Создано</p>
                <p className="text-sm text-gray-700 dark:text-stone-300">{formatDateTime(request.createdAt)}</p>
              </div>
              {request.attachDocs && request.attachDocs.length > 0 && (
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Вложения</p>
                  <div className="flex flex-col gap-2">
                    {request.attachDocs.map((doc) => (
                      <div key={doc.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 group w-fit min-w-[280px]">
                        <div className="w-8 h-8 bg-white dark:bg-stone-900 border border-gray-200 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                          📄
                        </div>
                        <div className="flex-1 min-w-0 pr-4">
                          <p className="text-sm text-gray-900 truncate">{doc.name}</p>
                        </div>
                        <button 
                          onClick={() => handleDownloadDocument(doc.id, doc.name)}
                          className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-white dark:bg-stone-900 rounded-lg transition-all"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Status Card or HR Action Form */}
          {user?.role === 'hr' && request.status === 'pending' ? (
            <div className="border border-[#e7e5e4] dark:border-stone-800 border-solid rounded-[8px] overflow-hidden">
              <div className="bg-[#f5f5f4] dark:bg-stone-800/50 border-b border-[#e7e5e4] dark:border-stone-800 h-[48px] px-4 flex items-center">
                <h2 className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] dark:text-stone-100 leading-[20px]">
                  Принять решение
                </h2>
              </div>

              <div className="bg-white dark:bg-stone-900 p-4">
                <div className="mb-5">
                  <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] dark:text-stone-100 leading-[20px] mb-2 block">
                    Комментарий
                  </label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Оставьте комментарий к решению..."
                    rows={3}
                    className="w-full bg-[#fafaf9] dark:bg-stone-950 border border-[#e7e5e4] dark:border-stone-800 rounded-[8px] px-3 py-2 font-['Geist:Regular',sans-serif] text-[14px] resize-none outline-none text-[#292524] dark:text-stone-100 placeholder:text-[#a6a09b] focus:bg-white dark:bg-stone-900 focus:border-[#292524] dark:border-stone-700 transition-colors"
                  />
                </div>

                <div className="mb-6">
                  <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] dark:text-stone-100 leading-[20px] mb-2 block">
                    Прикрепить документы
                  </label>
                  <div 
                    className={`relative border border-[#e7e5e4] dark:border-stone-800 rounded-[8px] flex flex-col items-center justify-center p-4 cursor-pointer transition-colors group ${isDragging ? 'border-[#292524] dark:border-stone-700 bg-[#fafaf9] dark:bg-stone-950 border-solid text-[#292524] dark:text-stone-100' : 'border-dashed hover:bg-[#fafaf9] dark:bg-stone-950 text-[#a6a09b]'}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <UploadIcon />
                    <p className={`font-['Geist:Regular',sans-serif] text-[13px] mt-2 transition-colors ${isDragging ? 'text-[#292524] dark:text-stone-100' : 'text-[#79716B] group-hover:text-[#292524] dark:text-stone-100'}`}>
                      Нажмите или перетащите файлы
                    </p>
                    <p className="font-['Geist:Regular',sans-serif] text-[12px] text-[#A6A09B] mt-1">
                      PDF до 10MB
                    </p>
                    <input 
                      type="file" 
                      multiple 
                      className="hidden" 
                      ref={fileInputRef}
                      onChange={handleFileSelect} 
                    />
                  </div>
                  
                  {files.length > 0 && (
                    <div className="mt-3 flex flex-col gap-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center gap-2 text-[#292524] dark:text-stone-100 font-['Geist:Regular',sans-serif] text-[13px] bg-[#f5f5f4] dark:bg-stone-800/50 py-1 px-3 rounded-[6px]">
                          <span className="truncate flex-1">{file.name}</span>
                          <button 
                            type="button" 
                            onClick={(e) => {
                              e.stopPropagation();
                              setFiles(prev => prev.filter((_, i) => i !== index));
                            }}
                            className="text-[#a6a09b] hover:text-[#ff2056] flex items-center justify-center leading-none"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => handleHRAction('rejected')}
                    disabled={isSubmitting}
                    className="flex-1 h-[36px] bg-white dark:bg-stone-900 border-2 border-[#e7e5e4] dark:border-stone-800 text-[#292524] dark:text-stone-100 rounded-[12px] font-['Geist_Mono:Medium',sans-serif] font-medium text-[13px] uppercase hover:bg-[#fafaf9] dark:bg-stone-950 hover:border-[#ff2056] hover:text-[#ff2056] transition-colors tracking-[0.7px] disabled:opacity-50"
                  >
                    Отклонить
                  </button>
                  <button 
                    onClick={() => handleHRAction('approved')}
                    disabled={isSubmitting}
                    className="flex-1 h-[36px] bg-[#44403b] dark:bg-stone-800 border-2 border-[#292524] dark:border-stone-700 text-[#fafaf9] dark:text-stone-100 rounded-[12px] font-['Geist_Mono:Medium',sans-serif] font-medium text-[13px] uppercase hover:bg-[#292524] dark:bg-stone-700 transition-colors tracking-[0.7px] disabled:opacity-50"
                  >
                    Согласовать
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="border border-[#e7e5e4] dark:border-stone-800 border-solid rounded-[8px] overflow-hidden">
              <div className={`h-[48px] px-4 flex items-center ${statusConfig.cardBg.replace('bg-', 'bg-').replace(' border-', ' border-').replace('50', '100')}`}>
                <div className={`flex items-center gap-2 ${statusConfig.titleColor}`}>
                  {statusConfig.icon}
                  <h2 className="font-['Geist:Medium',sans-serif] font-medium text-[14px] leading-[20px]">
                    {statusConfig.title}
                  </h2>
                </div>
              </div>

              <div className="bg-white dark:bg-stone-900 p-4">
                {request.hrComment && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Комментарий</p>
                    <div className="bg-[#f5f5f4] dark:bg-stone-800/50 rounded-lg p-3">
                      <p className="text-sm text-gray-700 dark:text-stone-300">
                        {request.hrComment}
                      </p>
                    </div>
                  </div>
                )}
                
                {request.responseDocs && request.responseDocs.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Ответные документы</p>
                    <div className="flex flex-col gap-2">
                      {request.responseDocs.map((doc) => (
                        <div className="flex items-center gap-3 p-2 bg-[#f5f5f4] dark:bg-stone-800/50 rounded-lg">
                          <div className="w-6 h-6 bg-white dark:bg-stone-900 border border-gray-200 rounded flex items-center justify-center text-xs flex-shrink-0">
                            📄
                          </div>
                          <span className="text-sm text-gray-700 dark:text-stone-300 truncate flex-1">{doc.name}</span>
                          <button 
                            onClick={() => handleDownloadDocument(doc.id, doc.name)}
                            className="p-1 text-gray-400 hover:text-gray-600 hover:bg-white dark:bg-stone-900 rounded transition-all"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {request.status === 'pending' && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#292524] dark:text-stone-100">
                      Заявка отправлена в отдел кадров
                    </span>
                  </div>
                )}
                {request.status !== 'pending' && request.resolvedAt && (
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Дата выполнения</span>
                    <span className="text-sm text-[#292524] dark:text-stone-100">
                      {formatShortDateTime(request.resolvedAt)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Employee Info (for HR/Admins) or History (for regular users) */}
        <div className="space-y-5">
          {(user?.role === 'hr' || user?.role === 'admin') ? (
            <>
            {/* Employee Info Column for HR/Admins */}
            <div className="border border-[#e7e5e4] dark:border-stone-800 border-solid rounded-[8px] overflow-hidden">
              <div className="bg-[#f5f5f4] dark:bg-stone-800/50 border-b border-[#e7e5e4] dark:border-stone-800 h-[48px] px-4 flex items-center">
                <h2 className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] dark:text-stone-100 leading-[20px]">
                  Информация о сотруднике
                </h2>
              </div>

              <div className="bg-white dark:bg-stone-900 p-4 space-y-3">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Имя</p>
                  <p className="text-sm text-gray-900 dark:text-stone-100">{request.authorName.split(' ')[0] || '—'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Фамилия</p>
                  <p className="text-sm text-gray-900 dark:text-stone-100">{request.authorName.split(' ').slice(1).join(' ') || '—'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-sm text-gray-900 dark:text-stone-100">{request.authorEmail ?? 'не указан'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Должность</p>
                  <p className="text-sm text-gray-900 dark:text-stone-100">{request.authorPosition ?? 'не указано'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">ID</p>
                  <p className="text-sm text-gray-900 dark:text-stone-100">{request.authorId}</p>
                </div>
              </div>
            </div>
            </>
          ) : (
            <>
            {/* History Column for regular users */}
            <div className="border border-[#e7e5e4] dark:border-stone-800 border-solid rounded-[8px] overflow-hidden">
              <div className="bg-[#f5f5f4] dark:bg-stone-800/50 border-b border-[#e7e5e4] dark:border-stone-800 h-[48px] px-4 flex items-center">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <h2 className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] dark:text-stone-100 leading-[20px]">
                    История
                  </h2>
                </div>
              </div>

              <div className="bg-white dark:bg-stone-900 p-4 space-y-3">
                {/* Step 1: Created */}
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-3 h-3 text-indigo-600" />
                    </div>
                    {request.status !== 'pending' && (
                      <div className="w-0.5 h-full bg-gray-100 mt-1"></div>
                    )}
                  </div>
                  <div className="pb-3">
                    <p className="text-sm text-gray-700 dark:text-stone-300 font-medium">Заявка создана</p>
                    <p className="text-xs text-gray-400">{formatShortDateTime(request.createdAt)}</p>
                  </div>
                </div>

                {/* Step 2: Resolved */}
                {request.status !== 'pending' && (
                  <div className="flex gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      request.status === 'approved' ? 'bg-emerald-100' : 'bg-red-100'
                    }`}>
                      {request.status === 'approved' ? (
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <XCircle className="w-3 h-3 text-red-600" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 dark:text-stone-300 font-medium">
                        {request.status === 'approved' ? 'Согласовано' : 'Отклонено'}
                      </p>
                      <p className="text-xs text-gray-400">{formatShortDateTime(request.resolvedAt || request.createdAt)}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            </>
          )}
        </div>

        {/* Delete Button for Admin */}
        {user?.role === 'admin' && (
          <div className="mt-4">
            <button 
              onClick={handleDeleteRequest}
              className="w-full h-[36px] bg-white dark:bg-stone-900 border-2 border-[#ff2056] text-[#ff2056] rounded-[12px] font-['Geist_Mono:Medium',sans-serif] font-medium text-[13px] uppercase hover:bg-[#ff2056] hover:text-white transition-colors tracking-[0.7px]"
            >
              Удалить заявку
            </button>
          </div>
        )}
      </div>
    </div>
  );
}