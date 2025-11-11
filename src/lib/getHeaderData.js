export function logRequestHeaders(host, headersList) {
  // 🎨 ANSI Color Codes
  const GREEN = "\x1b[32m";
  const RED = "\x1b[31m";
  const CYAN = "\x1b[36m";
  const YELLOW = "\x1b[33m";
  const MAGENTA = "\x1b[35m";
  const BLUE = "\x1b[34m";
  const BOLD = "\x1b[1m";
  const RESET = "\x1b[0m";
  const DIM = "\x1b[2m";

  // 🧱 Separator
  const LINE = `${DIM}${MAGENTA}──────────────────────────────────────────────────────────────${RESET}`;
  const DIVIDER = `${DIM}${CYAN}──────────────────────────────────────────────────────────────${RESET}`;

  // 🌍 Determine protocol & URL
  const protocol = host?.startsWith("localhost") ? "http" : "https";
  const fullUrl = host ? `${protocol}://${host}` : "UNKNOWN_HOST";

  // 🪵 Header Log
  console.log(`
  ${LINE}
  ${BOLD}${GREEN}🚀 NEXT.JS REQUEST CONTEXT DEBUG LOG${RESET}
  ${LINE}
  
  ${BOLD}${BLUE}🌐 Host / Domain:${RESET}     ${YELLOW}${host || "N/A"}${RESET}
  ${BOLD}${BLUE}🔗 Base URL:${RESET}          ${YELLOW}${fullUrl}${RESET}
  ${BOLD}${BLUE}🧭 Environment:${RESET}       ${
    host?.includes("ngrok-free.app")
      ? `${MAGENTA}${BOLD}NGROK TUNNEL${RESET}`
      : host?.startsWith("localhost")
      ? `${YELLOW}${BOLD}LOCAL DEVELOPMENT${RESET}`
      : `${GREEN}${BOLD}PRODUCTION${RESET}`
  }
  
  ${DIVIDER}
  ${BOLD}${CYAN}📬  Important Headers${RESET}
  ${DIVIDER}
  `);

  // 🧩 Key headers to show
  const usefulHeaders = [
    "user-agent",
    "accept-language",
    "x-forwarded-for",
    "x-vercel-ip-country",
    "referer",
  ];

  usefulHeaders.forEach((key) => {
    const value = headersList.get(key) || `${RED}N/A${RESET}`;
    const icon =
      key === "user-agent"
        ? "🧠"
        : key === "accept-language"
        ? "🗣️ "
        : key === "x-forwarded-for"
        ? "🌍"
        : key === "x-vercel-ip-country"
        ? "🏳️ "
        : "🔗";
    console.log(`  ${icon} ${YELLOW}${key.padEnd(22)}${RESET}: ${value}`);
  });

  console.log(`
  ${LINE}
  ${DIM}${MAGENTA}📅 Timestamp:${RESET} ${new Date().toLocaleString()}
  ${LINE}\n`);
}
