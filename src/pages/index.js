import Head from "next/head";
import styles from "@/styles/Home.module.css";

import { Navigation } from "@/components/Navigation";
import { Balance } from "@/components/Balance";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Solana React Scaffold</title>
        <meta name="description" content="Solana React Scaffold" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navigation />
        <Header />
        <Balance />
      </main>
    </>
  );
}
