import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState, useEffect } from "react";
import styles from "@/styles/balance.module.css";

export function Balance() {
  const wallet = useWallet();
  const { connection } = useConnection();

  const [balance, setBalance] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getUserSOLBalance = async (PublicKey, Connection) => {
    let balance = await connection.getBalance(PublicKey);
    setBalance(balance / LAMPORTS_PER_SOL);
  };

  useEffect(() => {
    if (wallet.publicKey) {
      getUserSOLBalance(wallet.publicKey, connection);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);

  return (
    <div className={styles.balance}>
      {wallet && <p>SOL: {(balance || 0).toLocaleString()}</p>}
    </div>
  );
}
