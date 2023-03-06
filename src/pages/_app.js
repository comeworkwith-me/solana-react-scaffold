import { WalletContextProvider } from "@/contexts/WalletContextProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <WalletContextProvider>
      <Component {...pageProps} />
    </WalletContextProvider>
  );
}
