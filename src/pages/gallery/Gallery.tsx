import Head from "next/head";
import { MainLayout } from "layouts";
import { MOCK_CARD_LIST } from "invariable";
import { GalleryCard } from "components";
import styles from "../home/Home.module.scss";

const Gallery = () => {
  return (
    <MainLayout>
      <Head>
        {/* TODO: Head */}
        <title>Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        {MOCK_CARD_LIST.map((item) => (
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
      </section>
    </MainLayout>
  );
};

export default Gallery;
