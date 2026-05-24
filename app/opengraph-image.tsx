import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Maison — Fashion & Lifestyle";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #f5f3f0 0%, #e7e2da 60%, #d6cfc2 100%)",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", letterSpacing: 12, fontSize: 28, color: "#111" }}>MAISON</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 84, color: "#111", lineHeight: 1.05, letterSpacing: -1 }}>
            The new<br /><i>season edit.</i>
          </div>
          <div style={{ fontSize: 22, color: "#444", letterSpacing: 4, textTransform: "uppercase" }}>
            Fashion · Lifestyle · Since 2018
          </div>
        </div>
      </div>
    ),
    size
  );
}
