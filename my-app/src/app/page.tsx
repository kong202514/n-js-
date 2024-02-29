import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./component/Nav";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      this is home
      <Footer />
    </div>
  );
}
