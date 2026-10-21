// Inline SVG icons (24×24, stroke). All decorative: labels sit next to them.
const line = (d) =>
  `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;

export const icon = {
  arrow: line('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  check: line('<path d="M20 6 9 17l-5-5"/>'),
  tv: line('<rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>'),
  stick: line('<rect x="8" y="2.5" width="8" height="15" rx="2"/><path d="M12 17.5V21M10 6.5h4"/>'),
  phone: line('<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M11 18.5h2"/>'),
  tablet: line('<rect x="4" y="2.5" width="16" height="19" rx="2.5"/><path d="M11 18.5h2"/>'),
  laptop: line('<rect x="4" y="4.5" width="16" height="11" rx="1.5"/><path d="M2 19.5h20"/>'),
  box: line('<rect x="3" y="8" width="18" height="9" rx="2"/><path d="M7 12.5h.01M17 12.5h-4M8 21l1-4M16 21l-1-4"/>'),
  remote: line('<rect x="8" y="2.5" width="8" height="19" rx="4"/><circle cx="12" cy="8" r="1.6"/><path d="M12 13v.01M12 16v.01"/>'),
  mail: line('<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 7 9-7"/>'),
  chat: line('<path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3 21l1.4-5.1A8.5 8.5 0 1 1 21 12Z"/>'),
  play: line('<circle cx="12" cy="12" r="9.5"/><path d="m10 8.5 5.5 3.5-5.5 3.5Z"/>'),
  wifi: line('<path d="M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0M12 19h.01"/>'),
  book: line('<path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h13"/>'),
  guide: line('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>'),
  key: line('<circle cx="8" cy="15" r="4.5"/><path d="m11.2 11.8 9.3-9.3M17 6l3 3M14.5 8.5l2 2"/>'),
  shield: line('<path d="M12 21.5s8-3.6 8-10V5l-8-2.5L4 5v6.5c0 6.4 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>'),
  euro: line('<path d="M17.5 6.5a7 7 0 1 0 0 11M4 10.5h9M4 13.5h9"/>'),
  menu: line('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  close: line('<path d="M6 6l12 12M18 6 6 18"/>'),
  chevron: line('<path d="m6 9 6 6 6-6"/>'),
  info: line('<circle cx="12" cy="12" r="9.5"/><path d="M12 11v5.5M12 7.5h.01"/>'),
  whatsapp: `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.05c-.24.68-1.42 1.3-1.95 1.34-.5.05-.97.23-3.27-.68-2.77-1.09-4.52-3.92-4.66-4.1-.13-.18-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.27.25-.27.54-.34.72-.34h.52c.17 0 .39-.06.61.47.24.55.79 1.9.86 2.04.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.28-.12.56.16.27.71 1.17 1.52 1.9 1.05.93 1.93 1.22 2.2 1.36.27.14.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.61-.14.25.09 1.59.75 1.86.89.27.14.45.2.52.32.07.11.07.66-.17 1.33z"/></svg>`,
};
