import { ImageResponse } from "next/og";

export const alt = "AkoStack - From Chaos to Clarity";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#111111",
          fontFamily: "system-ui, -apple-system, sans-serif",
          border: "24px solid #111111",
          padding: "60px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Logo */}
          <div style={{ display: "flex", fontWeight: 900, fontSize: 88, letterSpacing: "-0.05em" }}>
            <span style={{ color: "#111111" }}>Ako</span>
            <span style={{ fontWeight: 400, color: "#4b5563" }}>Stack</span>
          </div>
          {/* Tagline */}
          <div style={{ display: "flex", fontSize: 28, marginTop: 24, color: "#4b5563", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>
            <span>From Chaos to Clarity.</span>
          </div>
        </div>
        
        {/* Border line */}
        <div style={{ display: "flex", width: "160px", height: "2px", background: "#e5e7eb", marginTop: 40, marginBottom: 40 }} />

        {/* Description */}
        <div style={{ display: "flex", fontSize: 22, color: "#9ca3af", textAlign: "center", maxWidth: "800px", lineHeight: 1.5 }}>
          <span>Secure Enterprise AI Knowledge Platform</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
