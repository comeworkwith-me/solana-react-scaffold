import Link from "next/link";
import styles from "@/styles/navigation.module.css";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletMultiButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";

export function Navigation() {
  const wallet = useWallet();
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation_items}>
        {!wallet.publicKey ? <WalletMultiButton className={styles.button} /> : <WalletDisconnectButton className={styles.button} />}
      </div>

      <div className={styles.navigation_items}>
        <ul className={styles.page_links}>
          <li className={styles.links}>
            <Link href="/">home</Link>
          </li>
          <li className={styles.links}>
            <Link href="/about">about</Link>
          </li>
          <li className={styles.links}>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
