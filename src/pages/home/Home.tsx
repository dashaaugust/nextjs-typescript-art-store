import Head from "next/head";
import { MainLayout } from "layouts";
import { LinkButton, GalleryCard } from "components";
import { MOCK_CARDS, Paths } from "invariable";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <MainLayout>
      <Head>
        {/* TODO: Head */}
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.main}>
        <div className={styles.mainContent}>
          <h1 className={styles.mainTitle}>Welcome to Example Art Gallery</h1>
          <p className={styles.mainSubtitle}>Abstract art painting</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>New items</h2>

        <div className={styles.cardList}>
          {MOCK_CARDS.map((item) => (
            <GalleryCard
              key={item.id}
              id={item.id}
              price={item.price}
              img={item.img}
              title={item.title}
              description={item.description}
              altImg={item.altImg}
              className={styles.cardItem}
              isForSell={item.isForSell}
            />
          ))}
        </div>

        {/* TODO: correct link */}
        <div className={styles.sectionButton}>
          <LinkButton href={Paths.buyArt} className={styles.linkButton}>
            Show more
          </LinkButton>
        </div>
      </section>

      <footer>{/* WIP: footer */}</footer>
    </MainLayout>
  );
};

export default Home;
