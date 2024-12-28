import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#f0f0f0", marginBottom: "20px" }}>
        <Link href="/" style={{ marginRight: "15px" }}>
          Pagina Principală
        </Link>
        <Link href="/search" style={{ marginRight: "15px" }}>
          Căutare
        </Link>
        <Link href="/city" style={{ marginRight: "15px" }}>
          Oraș
        </Link>
        <Link href="/favorites">
          Favorite
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}
