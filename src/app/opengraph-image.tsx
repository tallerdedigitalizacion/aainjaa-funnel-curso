import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at top left, rgba(220,38,38,0.9), transparent 35%), linear-gradient(135deg, #060606 0%, #140303 55%, #000000 100%)",
          color: "white",
          padding: "64px",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase" }}>
          AAINJAA x Homero Cortes
        </div>
        <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 0.9, maxWidth: "80%" }}>
          Digital percussion landing placeholder
        </div>
        <div style={{ fontSize: 24, opacity: 0.8 }}>
          Multi-language, packs, Stripe-ready, manual-payment ready
        </div>
      </div>
    ),
    size,
  );
}
