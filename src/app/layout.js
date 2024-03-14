import "./globals.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";


export const metadata = {
  title: "EWF Capital | Achieving Crypto Investing Excellence",
  description: "Discover the future of cryptocurrency investing with EWF Capital. Our expert strategies and in-depth market analysis are designed to maximize your returns in the dynamic crypto market. Join us to unlock your investment potential.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
