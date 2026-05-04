import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../../utils/constants';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="flex fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 hover:bg-[#20ba56] active:scale-95 transition-all duration-300 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
      <span className="hidden md:block absolute right-full mr-4 bg-white text-teal-dark font-bold py-2 px-4 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
        Agende sua consulta
      </span>
    </a>
  );
}
