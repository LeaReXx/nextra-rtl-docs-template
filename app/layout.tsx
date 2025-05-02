import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Link from "next/link";
import "./global.css";
import Image from "next/image";
export const metadata = {
  title: "نکسترا",
  description: "قالب داکیومنت ساخته شده با نکسترا",
};

const banner = (
  <Banner storageKey="some-key">
    این قالب ساخته شده با ❤️ توسط{" "}
    <Link href="https://github.com/LeaReXx" className="text-blue-500">
      سپهر
    </Link>
  </Banner>
);
const navbar = (
  <Navbar
    logo={
      <Image
        src="/images/general/logo.png"
        quality={100}
        alt="Nextra Logo"
        width={150}
        height={50}
      />
    }
  />
);
const footer = <Footer>MIT {new Date().getFullYear()} © نکسترا.</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="fa"
      // Required to be set
      dir="rtl"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        <link rel="shortcut icon" href="/images/general/icon.svg" />
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/phucbm/nextra-docs-starter/tree/main"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
