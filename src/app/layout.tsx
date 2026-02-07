import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "MediStore",
  description: "Your Trusted Online Medicine Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />

          <main className="pt-20 min-h-screen">
            {children}
          </main>

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
