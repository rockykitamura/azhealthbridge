export function FaviconSVG() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <circle cx="16" cy="16" r="16" fill="#f14e42"/>
      
      {/* White Cross/Plus Symbol for Healthcare */}
      <path
        d="M14 8h4v16h-4V8zm-6 6h16v4H8v-4z"
        fill="white"
      />
      
      {/* Arizona State Outline (simplified) - subtle in background */}
      <path
        d="M10 20 L10 24 L12 26 L20 26 L22 24 L22 20 L20 18 L12 18 Z"
        fill="white"
        opacity="0.2"
      />
    </svg>
  );
}