import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/>
      <h1>Hello Next js</h1>
    </div>
  );
}
