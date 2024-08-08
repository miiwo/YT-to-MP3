import { Footer } from "./components/base/footer";
import { Navbar } from "./components/base/nav";
import styles from "./page.module.css";
import { YTLDLComponent } from "./components/app/ytdlcontainer";

export default function Home() {
  const navItems = {}
  
  return (
    <main className={styles.main}>
      
      <Navbar title={'Youtube to MP3'} navItems={navItems} />

      <div className="text-center">
        Welcome! This is a Youtube-to-MP3 downloader that is self hosted! 
        Please paste your Youtube URL into the bar below and hit DL! The website will let you know when
        it is done downloading.
      </div>

      <YTLDLComponent />


      <div><Footer /></div>
    </main>
  );
}
