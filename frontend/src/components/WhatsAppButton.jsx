import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "9177122356"; // User's actual contact number
  const message = encodeURIComponent("Hello Nexus Studio, I'm interested in deploying a high-performance web architecture or automation project!");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-[52px] h-[52px] bg-[#22C55E] hover:bg-[#16A34A] rounded-full flex items-center justify-center text-white z-[9000] transition-all duration-300 hover:scale-110 active:scale-95 group shadow-[0_0_20px_rgba(34,197,94,0.4)]"
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulsing rings in pure CSS */}
      <span className="absolute inset-0 w-full h-full rounded-full bg-[#22C55E]/40 animate-ping opacity-75 pointer-events-none" style={{ animationDuration: '2s' }}></span>
      
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.07 .953 11.453.953c-5.437 0-9.862 4.371-9.866 9.802-.001 1.64.453 3.24 1.314 4.676l-.991 3.616 3.705-.96c1.385.748 2.929 1.148 4.432 1.148zm11.383-7.53c-.26-.13-1.538-.759-1.776-.847-.238-.088-.413-.13-.587.13-.174.26-.673.847-.825 1.021-.152.174-.304.195-.564.065-.26-.13-1.097-.404-2.09-1.286-.772-.687-1.293-1.537-1.445-1.798-.152-.26-.016-.401.114-.53.117-.116.26-.304.39-.456.13-.152.174-.26.26-.434.088-.174.043-.326-.022-.456-.065-.13-.587-1.413-.804-1.935-.211-.51-.427-.44-.587-.448-.152-.007-.326-.008-.5-.008-.174 0-.456.065-.694.326-.239.26-.911.891-.911 2.174 0 1.283.933 2.522 1.063 2.7.13.174 1.837 2.806 4.449 3.931.622.268 1.107.427 1.485.547.624.198 1.192.171 1.64.103.5-.076 1.538-.629 1.756-1.237.217-.609.217-1.13.152-1.238-.065-.109-.239-.174-.499-.304z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
