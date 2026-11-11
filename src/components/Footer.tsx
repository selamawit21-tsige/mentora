import React from 'react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xs py-6 mt-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-white shadow-2xs border border-slate-200 dark:border-slate-700 p-0.5 shrink-0">
            <img
              src="/assets/aistudio/mentora_962c8b71.jpg"
              alt="Mentora Logo"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="font-bold text-slate-900 dark:text-white">
              {language === 'am' ? 'ሜንቶራ የቤት ለቤት አስጠኚዎች' : 'Mentora Education'}
            </span>
            <span className="mx-1.5">·</span>
            <span>© 2026 Mentora. {language === 'am' ? 'መብቱ በህግ የተጠበቀ ነው።' : 'All rights reserved.'}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span>{language === 'am' ? 'አዲስ አበባ · ዓለም አቀፍ የሀበሻ ማህበረሰብ' : 'Addis Ababa · Habesha Community Global'}</span>
          <span>·</span>
          <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            {language === 'am' ? 'ድልድዩ ክፍት ነው' : 'Bridge Active'}
          </span>
        </div>

      </div>
    </footer>
  );
};
