const iconSize = 32;

export function IconScissors() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4L8.5 15.5" />
      <path d="M8.5 8.5L20 20" />
    </svg>
  );
}

export function IconRazor() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 14l6 6" />
      <path d="M20 4l-6 6" />
      <path d="M14 4v16" />
    </svg>
  );
}

export function IconCare() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3c-2 2-4 5-4 8a4 4 0 108 0c0-3-2-6-4-8z" />
      <path d="M12 14v6M9 17h6" />
    </svg>
  );
}
