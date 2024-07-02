import { Inter } from "next/font/google";
import "./globals.css";
import ShadcnThemeProvider from "@/theme/themeProvider";
import LogginChecker from "@/components/login/login-checker";
import PrivyWrapper from "@/privy/privyProvider";
import { Toaster } from "@/components/ui/toaster";
import { TmaSDKProvider } from "@/components/tma";
import Footer from "@/components/footer";
import ReduxProvider from "@/redux/reduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Payroll Protocol",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <TmaSDKProvider> */}
        <ShadcnThemeProvider>
          <PrivyWrapper>
            <ReduxProvider>
              <main className="grid place-items-center min-h-screen bg-main/15 pb-20">
                <div className="h-full w-full grid md:max-w-6xl px-6 md:px-12 pb-10">
                  <LogginChecker>{children}</LogginChecker>
                </div>
              </main>
              <Footer />
              <Toaster />
            </ReduxProvider>
          </PrivyWrapper>
        </ShadcnThemeProvider>
        {/* </TmaSDKProvider> */}
      </body>
    </html>
  );
}
