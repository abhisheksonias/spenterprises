import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2D1B14",
          color: "#F5F2ED",
          fontSize: 64,
          fontStyle: "italic",
          fontFamily: "Georgia, serif",
          letterSpacing: "-0.04em",
        }}
      >
        SPE
      </div>
    ),
    size,
  );
}
