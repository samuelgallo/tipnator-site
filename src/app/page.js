import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="header"></div>
      <div className={styles.content}>
        <div className={`${styles.grid} ${styles.phone}`}>
          <Image
            className={styles.screen}
            src="/screen.png"
            alt="Tipnator Screen"
            width={383}
            height={772}
            priority
          />
        </div>
        <div className={styles.grid}>
          <div className={styles.logo}>
            <Image
              className={styles.screen}
              src="/tipnator.png"
              alt="Tipnator Logo"
              width={200}
              height={200}
              priority
            />
          </div>
          <h1 className={styles.disclaimer}>
            Tipnator: Your chill sidekick for stress-free tip calculations.
            Easy, breezy, and as relaxed as it gets – because tipping should be
            as simple as a summer day. Cheers to the easiest way to calculate
            your tips!
          </h1>
          <div className={styles.icons}>
            <a href="#">
              <Image
                src="/apple.png"
                alt="App Store"
                width={180}
                height={53}
                priority
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.galloit.tipnator">
              <Image
                src="/google.png"
                alt="Google Play"
                width={180}
                height={53}
                priority
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>
          &copy; Tipnator | <a href="/privacy-policy">Privacy Policy</a>
        </p>
        <a href="https://galloit.com/" target="_blank">
          Gallo IT Consulting &amp; Solutions, LLC
        </a>
      </div>
    </main>
  );
}
