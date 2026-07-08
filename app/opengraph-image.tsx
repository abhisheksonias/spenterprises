import { ImageResponse } from "next/og";

export const alt = "S.P. Enterprises — Branding & Packaging Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F5F2ED",
          color: "#2D1B14",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            fontFamily: "Arial, sans-serif",
            color: "#A89068",
          }}
        >
          EST. 2002
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontStyle: "italic",
              lineHeight: 1.05,
            }}
          >
            S.P. Enterprises
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              fontStyle: "italic",
              color: "rgba(45,27,20,0.75)",
              maxWidth: 820,
            }}
          >
            Effective Packaging Signifies Quality Products
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontFamily: "Arial, sans-serif",
            color: "rgba(45,27,20,0.55)",
          }}
        >
          Branding & Packaging · Ludhiana, India
        </div>
      </div>
    ),
    size,
  );
}
