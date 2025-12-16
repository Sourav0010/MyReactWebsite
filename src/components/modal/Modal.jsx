import { createPortal } from 'react-dom';

export default function Modal({ children, isOpen, onClose }) {
   if (!isOpen) return null;

   return createPortal(
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80'>
         <div className='absolute inset-0 bg-black/50' onClick={onClose} />
         <div className='relative bg-white dark:bg-slate-800 dark:text-white p-6 rounded'>
            {children}
         </div>
      </div>,
      document.getElementById('modal-holder')
   );
}
