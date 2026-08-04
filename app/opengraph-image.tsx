import { ImageResponse } from "next/og";
import { siteConfig } from "./seo.config";

// Required for `output: export` — render the OG PNG once at build time.
export const dynamic = "force-static";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Premium dark OG card with the brand-red accent — generated at build time.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#111827",
          color: "#F9FAFB",
          fontFamily: "sans-serif",
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              background: "#DC2626",
            }}
          />
          <div
            style={{
              fontSize: "26px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#9CA3AF",
            }}
          >
            Marketing × Technology
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            Vithaya Chanthasy
          </div>
          <div
            style={{
              fontSize: "38px",
              color: "#DC2626",
              fontWeight: 600,
              letterSpacing: "-1px",
            }}
          >
            International Marketing &amp; MarCom Professional
          </div>
        </div>

        {/* Baseline */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "26px",
            color: "#9CA3AF",
            borderTop: "1px solid #1F2937",
            paddingTop: "32px",
          }}
        >
          <span>Master&apos;s in International Marketing · AI-Driven Productivity</span>
          <span>Vientiane, Laos</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
