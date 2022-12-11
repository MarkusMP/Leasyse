import "styles/globals.css";

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col">
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
}
