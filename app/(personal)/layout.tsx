import Footer from "components/global/Footer";
import Header from "components/global/Header";
import { getFooter, getHeader } from "lib/sanity.client";
import { previewData } from "next/headers";
import "styles/globals.css";

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = previewData().token;
  const [header, footer] = await Promise.all([
    getHeader({ token }),
    getFooter({ token }),
  ]);

  return (
    <>
      <Header data={header} />
      <div className="flex flex-col">
        <main className="flex-grow">{children}</main>
      </div>
      <Footer data={footer} />
    </>
  );
}
