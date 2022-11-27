import Alert from "./alert";

export default function Layout({ children, preview }) {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
    </>
  );
}
