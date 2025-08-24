"use client";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#f9fafb",
        padding: "1rem",
      }}
    >
      <h1
        style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#111827",
          lineHeight: "1.6",
          maxWidth: "600px",
        }}
      >
        Vi bygger om sidan och kontakt görs via{" "}
        <a
          href="mailto:ops@artslogistics.se"
          style={{ color: "#2563eb", textDecoration: "underline" }}
        >
          ops@artslogistics.se
        </a>
        , tele{" "}
        <a
          href="tel:0705491414"
          style={{ color: "#2563eb", textDecoration: "underline" }}
        >
          070-549 14 14
        </a>
      </h1>
    </div>
  );
}
