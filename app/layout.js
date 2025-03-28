import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurios cabin hotel, located in the heart of the Italian Dolomites, surrounded by beutiful mountains and dark forests",
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
