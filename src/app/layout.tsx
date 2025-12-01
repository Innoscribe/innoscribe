import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ClientLayout from "@/components/ClientLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="no">
      <head />
      <body>
        <ClientLayout>
          <Header/>
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
