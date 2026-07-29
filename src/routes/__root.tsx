import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const SITE_URL = "https://biochemdefensetech.com";
const SITE_TITLE =
  "BCDT — 5H-EAF pH-Gated Histidine Nanochelant Platform | BioChem Defense Technology";
const SITE_DESCRIPTION =
  "BioChem Defense Technology develops 5H-EAF, a pH-gated histidine nanochelant platform for biodefense-relevant research, heavy-metal detoxification, and dual-use stewardship. Public ChemRxiv science only.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "theme-color", content: "#050506" },
      { name: "application-name", content: "BCDT" },
      { name: "author", content: "BioChem Defense Technology Inc." },
      { name: "robots", content: "index, follow" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:site_name", content: "BioChem Defense Technology" },
      { property: "og:title", content: "BCDT — 5H-EAF Platform" },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: `${SITE_URL}/bcdt-logo.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "BCDT — 5H-EAF Platform" },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/bcdt-logo.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/bcdt-icon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/bcdt-icon.png" },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            className: "font-sans",
            style: {
              background: "#0e0e10",
              border: "1px solid #26262c",
              color: "#ececee",
            },
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}
