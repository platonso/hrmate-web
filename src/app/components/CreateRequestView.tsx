import { useState, useRef } from 'react';
import { toast } from 'sonner';
import { api } from '../api';

interface CreateRequestViewProps {
  onBack: () => void;
}

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.66667 14.5H7.33333C2.09961 14.5 1.5 13.9004 1.5 8.66669V8.00002C1.5 2.76629 2.09961 2.16669 7.33333 2.16669H8.66667C13.9004 2.16669 14.5 2.76629 14.5 8.00002V8.66669C14.5 13.9004 13.9004 14.5 8.66667 14.5ZM7.33333 3.16669C2.68067 3.16669 2.5 3.34735 2.5 8.00002V8.66669C2.5 13.3194 2.68067 13.5 7.33333 13.5H8.66667C13.319 13.5 13.5 13.3194 13.5 8.66669V8.00002C13.5 3.34735 13.319 3.16669 8.66667 3.16669H7.33333Z" fill="currentColor"/>
    <path d="M6 3.83333C5.72396 3.83333 5.5 3.60937 5.5 3.33333V2C5.5 1.72396 5.72396 1.5 6 1.5C6.27604 1.5 6.5 1.72396 6.5 2V3.33333C6.5 3.60937 6.27604 3.83333 6 3.83333ZM10 3.83333C9.72396 3.83333 9.5 3.60937 9.5 3.33333V2C9.5 1.72396 9.72396 1.5 10 1.5C10.276 1.5 10.5 1.72396 10.5 2V3.33333C10.5 3.60937 10.276 3.83333 10 3.83333ZM12 6.5H4C3.72396 6.5 3.5 6.27604 3.5 6C3.5 5.72396 3.72396 5.5 4 5.5H12C12.276 5.5 12.5 5.72396 12.5 6C12.5 6.27604 12.276 6.5 12 6.5ZM5.18001 9.16667C5.04655 9.16667 4.91309 9.11328 4.81999 9.01986C4.72656 8.92643 4.67318 8.79981 4.67318 8.66667C4.67318 8.5332 4.72657 8.40657 4.81999 8.31315C5.00651 8.12663 5.34668 8.12663 5.5332 8.31315C5.62663 8.40658 5.68001 8.53321 5.68001 8.66667C5.68001 8.79981 5.62662 8.92643 5.5332 9.01986C5.43978 9.11329 5.30665 9.16667 5.18001 9.16667ZM8 9.16667C7.86653 9.16667 7.73991 9.11328 7.64649 9.01986C7.59994 8.97331 7.56641 8.91993 7.54004 8.86003C7.51335 8.79981 7.5 8.73307 7.5 8.66667C7.5 8.59993 7.51335 8.54004 7.54004 8.47331C7.56641 8.41309 7.59993 8.36003 7.64649 8.31315C7.83333 8.12663 8.16667 8.12663 8.35319 8.31315C8.39974 8.36003 8.43327 8.41309 8.45997 8.47331C8.48666 8.54004 8.50001 8.59993 8.50001 8.66667C8.50001 8.73307 8.48666 8.79981 8.45997 8.86003C8.43327 8.91992 8.39975 8.97331 8.35319 9.01986C8.25977 9.11329 8.13314 9.16667 8 9.16667ZM10.8197 9.16667C10.7598 9.16667 10.6934 9.15332 10.6335 9.12663C10.5729 9.10645 10.5202 9.06641 10.4733 9.01985C10.3796 8.92643 10.3268 8.7998 10.3268 8.66666C10.3268 8.53319 10.3796 8.40657 10.4733 8.31315C10.5202 8.2666 10.5729 8.23307 10.6335 8.2067C10.8131 8.12662 11.0397 8.17317 11.1797 8.31315C11.2663 8.40657 11.3268 8.5332 11.3268 8.66666C11.3268 8.7998 11.2663 8.92643 11.1797 9.01985C11.0866 9.11328 10.9531 9.16667 10.8197 9.16667ZM5.18001 11.8333C5.04655 11.8333 4.91309 11.7799 4.81999 11.6865C4.72656 11.5931 4.67318 11.4665 4.67318 11.3333C4.67318 11.1999 4.72657 11.0732 4.81999 10.9798C5.00651 10.7933 5.34668 10.7933 5.5332 10.9798C5.62663 11.0732 5.68001 11.1999 5.68001 11.3333C5.68001 11.4665 5.62662 11.5931 5.5332 11.6865C5.43978 11.7799 5.30665 11.8333 5.18001 11.8333Z" fill="currentColor"/>
  </svg>
);

const UploadIcon = () => (
  <svg className="w-[26px] h-[26px]" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.43616 8.35249L11.917 5.86082V16.25C11.917 16.5373 12.0311 16.8129 12.2343 17.016C12.4375 17.2192 12.713 17.3333 13.0003 17.3333C13.2876 17.3333 13.5632 17.2192 13.7664 17.016C13.9695 16.8129 14.0837 16.5373 14.0837 16.25V5.86082L16.5645 8.35249C16.6652 8.45403 16.785 8.53462 16.917 8.58962C17.049 8.64462 17.1906 8.67294 17.3337 8.67294C17.4767 8.67294 17.6183 8.64462 17.7503 8.58962C17.8823 8.53462 18.0021 8.45403 18.1028 8.35249C18.2044 8.25178 18.285 8.13196 18.34 7.99995C18.395 7.86793 18.4233 7.72634 18.4233 7.58332C18.4233 7.44031 18.395 7.29871 18.34 7.1667C18.285 7.03468 18.2044 6.91487 18.1028 6.81416L13.7695 2.48082C13.6665 2.3822 13.545 2.30488 13.412 2.25332C13.1482 2.14497 12.8524 2.14497 12.5887 2.25332C12.4557 2.30488 12.3342 2.3822 12.2312 2.48082L7.89783 6.81416C7.79682 6.91516 7.71669 7.03508 7.66203 7.16705C7.60736 7.29903 7.57923 7.44048 7.57923 7.58332C7.57923 7.72617 7.60736 7.86762 7.66203 7.99959C7.71669 8.13157 7.79682 8.25148 7.89783 8.35249C7.99883 8.4535 8.11875 8.53362 8.25072 8.58829C8.3827 8.64295 8.52414 8.67109 8.66699 8.67109C8.80984 8.67109 8.95129 8.64295 9.08326 8.58829C9.21524 8.53362 9.33515 8.4535 9.43616 8.35249Z" fill="currentColor"/>
    <path d="M22.7503 15.1667C22.463 15.1667 22.1875 15.2808 21.9843 15.484C21.7811 15.6871 21.667 15.9627 21.667 16.25V20.5833C21.667 20.8706 21.5529 21.1462 21.3497 21.3494C21.1465 21.5525 20.871 21.6667 20.5837 21.6667H5.41699C5.12967 21.6667 4.85412 21.5525 4.65096 21.3494C4.4478 21.1462 4.33366 20.8706 4.33366 20.5833V16.25C4.33366 15.9627 4.21952 15.6871 4.01636 15.484C3.81319 15.2808 3.53764 15.1667 3.25033 15.1667C2.96301 15.1667 2.68746 15.2808 2.48429 15.484C2.28113 15.6871 2.16699 15.9627 2.16699 16.25V20.5833C2.16699 21.4453 2.5094 22.2719 3.1189 22.8814C3.72839 23.4909 4.55504 23.8333 5.41699 23.8333H20.5837C21.4456 23.8333 22.2723 23.4909 22.8818 22.8814C23.4912 22.2719 23.8337 21.4453 23.8337 20.5833V16.25C23.8337 15.9627 23.7195 15.6871 23.5164 15.484C23.3132 15.2808 23.0376 15.1667 22.7503 15.1667Z" fill="currentColor"/>
  </svg>
);


export function CreateRequestView({ onBack }: CreateRequestViewProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const parts = dateString.split('-');
    if (parts.length === 3) {
      return `${parts[2]}.${parts[1]}.${parts[0]}`;
    }
    return dateString;
  };

  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    startDate: '',
    endDate: ''
  });
  
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await api.createForm({
        title: formData.subject,
        description: formData.description,
        startDate: formData.startDate ? new Date(formData.startDate).toISOString() : undefined,
        endDate: formData.endDate ? new Date(formData.endDate).toISOString() : undefined,
        documents: files.length > 0 ? files : undefined,
      });
      
      toast.success('Заявка отправлена');
      setTimeout(() => onBack(), 1000);
    } catch (error) {
      console.error('Failed to create form:', error);
      toast.error('Не удалось отправить заявку');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    }
  };

  return (
    <div className="h-full overflow-y-auto w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="py-6 max-w-[680px]">
        <button
          onClick={onBack}
        className="mb-4 flex items-center gap-[6px] text-[#79716b] hover:text-[#292524] transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px]">Назад</span>
      </button>

      <h1 className="font-['Geist:SemiBold',sans-serif] font-semibold text-[18px] leading-[28px] text-[#292524] mb-2">
        Создать заявку
      </h1>
      <p className="font-['Geist:Regular',sans-serif] text-[14px] leading-[20px] text-[#79716b] mb-6">
        Заполните форму для отправки новой заявки в отдел кадров.
      </p>

      <form onSubmit={handleSubmit} className="bg-white border border-[#e7e5e4] border-solid rounded-[8px] overflow-hidden flex flex-col mb-6">
        <div className="bg-[#f5f5f4] border-b border-[#e7e5e4] h-[48px] px-4 flex items-center">
          <h2 className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px]">
            Заявка
          </h2>
        </div>

        <div className="p-6 flex flex-col gap-6">
          {/* Тема */}
          <div>
            <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px] mb-2 block">
              Тема <span className="text-[#ff2056]">*</span>
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Например: Отпуск, Изменение графика"
              className="w-full h-[36px] bg-white border border-[#e7e5e4] rounded-[8px] px-3 font-['Geist:Regular',sans-serif] text-[14px] outline-none text-[#292524] placeholder:text-[#a6a09b] focus:border-[#292524] transition-colors"
              required
            />
          </div>

          {/* Описание */}
          <div>
            <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px] mb-2 block">
              Описание
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Подробно опишите ваше обращение"
              rows={5}
              className="w-full bg-white border border-[#e7e5e4] rounded-[8px] px-3 py-2 font-['Geist:Regular',sans-serif] text-[14px] resize-none outline-none text-[#292524] placeholder:text-[#a6a09b] focus:border-[#292524] transition-colors"
            />
          </div>

          {/* Даты */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px] mb-2 block">
                Дата начала
              </label>
              <div className="relative w-full h-[36px] bg-white border border-[#e7e5e4] rounded-[8px] flex items-center px-3 focus-within:border-[#292524] transition-colors cursor-pointer overflow-hidden">
                <div className="absolute left-3 top-0 bottom-0 flex items-center pointer-events-none font-['Geist:Regular',sans-serif] text-[14px] z-0">
                  {formData.startDate ? (
                    <span className="text-[#292524]">{formatDate(formData.startDate)}</span>
                  ) : (
                    <span className="text-[#a6a09b]">дд.мм.гггг</span>
                  )}
                </div>
                <input
                  type="date"
                  value={formData.startDate}
                  onClick={(e) => {
                    try {
                      if ('showPicker' in HTMLInputElement.prototype) {
                        e.currentTarget.showPicker();
                      }
                    } catch (err) {}
                  }}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="absolute right-3 pointer-events-none z-0 text-[#a6a09b]">
                  <CalendarIcon />
                </div>
              </div>
            </div>
            <div>
              <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px] mb-2 block">
                Дата окончания
              </label>
              <div className="relative w-full h-[36px] bg-white border border-[#e7e5e4] rounded-[8px] flex items-center px-3 focus-within:border-[#292524] transition-colors cursor-pointer overflow-hidden">
                <div className="absolute left-3 top-0 bottom-0 flex items-center pointer-events-none font-['Geist:Regular',sans-serif] text-[14px] z-0">
                  {formData.endDate ? (
                    <span className="text-[#292524]">{formatDate(formData.endDate)}</span>
                  ) : (
                    <span className="text-[#a6a09b]">дд.мм.гггг</span>
                  )}
                </div>
                <input
                  type="date"
                  value={formData.endDate}
                  onClick={(e) => {
                    try {
                      if ('showPicker' in HTMLInputElement.prototype) {
                        e.currentTarget.showPicker();
                      }
                    } catch (err) {}
                  }}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="absolute right-3 pointer-events-none z-0 text-[#a6a09b]">
                  <CalendarIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Документы */}
          <div>
            <label className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#292524] leading-[20px] mb-2 block">
              Документы
            </label>
            <div 
              className={`relative border border-[#e7e5e4] rounded-[8px] flex flex-col items-center justify-center p-6 cursor-pointer transition-colors group ${isDragging ? 'border-[#292524] bg-[#fafaf9] border-solid text-[#292524]' : 'border-dashed hover:bg-[#fafaf9] text-[#a6a09b]'}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <UploadIcon />
              <p className={`font-['Geist:Regular',sans-serif] text-[14px] mt-3 transition-colors ${isDragging ? 'text-[#292524]' : 'text-[#79716B] group-hover:text-[#292524]'}`}>
                Нажмите для загрузки или перетащите файлы
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
                  <div key={index} className="flex items-center gap-2 text-[#292524] font-['Geist:Regular',sans-serif] text-[13px] bg-[#f5f5f4] py-1 px-3 rounded-[6px]">
                    <span className="truncate">{file.name}</span>
                    <button 
                      type="button" 
                      onClick={(e) => {
                        e.stopPropagation();
                        setFiles(prev => prev.filter((_, i) => i !== index));
                      }}
                      className="ml-auto text-[#a6a09b] hover:text-[#ff2056] px-1"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Кнопки */}
          <div className="flex items-center justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={onBack}
              className="h-[36px] px-4 bg-white border-2 border-[#e7e5e4] rounded-[12px] font-['Geist_Mono:Medium',sans-serif] font-medium text-[13px] text-[#292524] uppercase hover:bg-[#fafaf9] transition-colors tracking-[0.7px]"
              disabled={isSubmitting}
            >
              ОТМЕНА
            </button>
            <button
              type="submit"
              className="bg-[#44403b] border-2 border-[#292524] border-solid h-[36px] px-4 rounded-[12px] flex items-center justify-center hover:bg-[#292524] transition-colors disabled:opacity-50"
              disabled={isSubmitting}
            >
              <span className="font-['Geist_Mono:Medium',sans-serif] font-medium text-[13px] text-[#fafaf9] uppercase tracking-[0.7px]">
                {isSubmitting ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ'}
              </span>
            </button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
}