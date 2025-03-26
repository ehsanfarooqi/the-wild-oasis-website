import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "The wild oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="eng">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
