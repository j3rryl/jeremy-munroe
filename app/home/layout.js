import Header from "../layouts/header";

export const metadata = {
  title: "Home",
  description: "Hello there!",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
