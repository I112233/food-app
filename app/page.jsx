import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>ProFood for Pro Foodies</h1>
            <p>Taste and share food from all over <br /> the world</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main className={classes.mainContainer}>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            ProFood is a platform for foodies to share their favorite
            recipes with the world. It lets you upload dishes and recipes of your own in the browse meals area.
          </p>
          <p>
            Don't forget to also upload a photo to show everyone how beautiful your dish is.
          </p>
        </section>

        <section className={classes.section}>
          <h2 style={{ width: "77.5%" }}>Why ProFood?</h2>
          <p style={{ marginLeft: "1rem", width: "77.5%" }}>
            ProFood is an authorized website for foodies, reviewed by them all over the world. It&apos;s a place to discover new dishes,
            and connect with other food lovers.
          </p>
          <p style={{ marginLeft: "1rem", width: "77.5%" }}>
            It has the best collection of high-quality food you can find on the web.
          </p>
        </section>
      </main>
    </>
  );
}
