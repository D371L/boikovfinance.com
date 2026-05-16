import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1535] text-white" dir="rtl">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Contact Info */}
          <div className="text-right">
            <h3 className="text-xl font-bold text-[#c9a84c] mb-6 tracking-wide">צור קשר</h3>
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={18} className="text-[#c9a84c] shrink-0" />
                <span dir="ltr" className="tabular-nums [unicode-bidi:isolate]">
                  {PHONE_DISPLAY}
                </span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={18} className="text-[#c9a84c]" />
                <span>שד מנחם בגין 135 טירת הכרמל</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock size={18} className="text-[#c9a84c]" />
                <span>שעות פעילות | 09:00 - 17:00</span>
              </div>
              <a
                href="mailto:artium07@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={18} className="text-[#c9a84c] shrink-0" />
                <span dir="ltr" className="[unicode-bidi:isolate]">
                  artium07@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Column 2: Social Media */}
          <div className="text-right">
            <h3 className="text-xl font-bold text-[#c9a84c] mb-6 tracking-wide">עקבו אחריי ברשתות</h3>
            <div className="flex flex-col gap-5">
              <a
                href="https://www.facebook.com/share/g/17J1z6o1y9/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-base group"
              >
                <svg className="w-6 h-6 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="group-hover:text-white">ארטיום בויקוב</span>
              </a>
              <a
                href="https://www.instagram.com/boikov_finance?igsh=cDVzNTkyMWgzMzBs&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-base group"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFDC80" />
                      <stop offset="25%" stopColor="#F77737" />
                      <stop offset="50%" stopColor="#E1306C" />
                      <stop offset="75%" stopColor="#C13584" />
                      <stop offset="100%" stopColor="#833AB4" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#ig-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span dir="ltr" className="group-hover:text-white [unicode-bidi:isolate]">
                  @boikov_finance
                </span>
              </a>
              <a
                href="https://www.tiktok.com/@boikovfainance?_r=1&_t=ZS-96PlKOhc1fF"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-base group"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
                <span dir="ltr" className="group-hover:text-white [unicode-bidi:isolate]">
                  @boikovfainance
                </span>
              </a>
            </div>
          </div>

          {/* Column 3: Logo */}
          <div className="text-right flex flex-col items-start">
            <div className="bg-white/95 rounded-2xl p-4 shadow-lg shadow-black/20 inline-block">
              <img
                src="/assets/logo.png"
                alt="בויקוב משכנתאות"
                className="h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent"></div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-500 text-sm">
            כל הזכויות שמורות ארטיום בויקוב {year}©
          </p>
          <p
            className="text-gray-500 text-sm mt-2 flex flex-wrap items-center justify-center gap-1.5 gap-y-2"
            dir="ltr"
          >
            <span>Developed with ❤️ by</span>
            <span className="inline-flex items-center gap-2 leading-none">
              <a
                href="https://hellsec.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c] hover:text-white transition-colors font-medium"
              >
                HellSec
              </a>
              <span className="inline-flex items-center justify-center py-0.5">
                <img
                  src="/assets/hellsec-logo.png"
                  alt=""
                  width={56}
                  height={56}
                  decoding="async"
                  className="block h-14 w-14 shrink-0 object-contain object-center"
                />
              </span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}