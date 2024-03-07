import {cookies} from 'next/headers';
import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  cookies();
  return (
    <main className={styles.main}>
      <Link href="/scorpion">
        scorpion
      </Link>
      <Link href="/bogomol">
        bogomol
      </Link>
      <Link href="/spider/aid">
        aid
      </Link>
    </main>
  );
}
