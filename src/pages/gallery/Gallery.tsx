import Head from "next/head";
import { MainLayout } from "layouts";
import { Button, GalleryCard, Select } from "components";
import { MATERIAL_OPTIONS, MEDIUMS_OPTIONS, MOCK_CARDS } from "invariable";
import { FormEvent, useState } from "react";
import { FilterIcon } from "assets";
import { SelectOption } from "components/Select/Select.types";
import homeStyles from "../home/Home.module.scss";
import styles from "./Gallery.module.scss";

const Gallery = () => {
  const [material, setMaterial] = useState<SelectOption | null>(null);
  const [mediums, setMediums] = useState<SelectOption | null>(null);

  const onSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    // TODO: submit form
    console.log("submit", material, mediums);
  };

  return (
    <MainLayout>
      <Head>
        {/* TODO: Head */}
        <title>Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={homeStyles.section}>
        <div className={styles.filter}>
          <h2 className={styles.filterTitle}>
            Filters
            <FilterIcon className={styles.filterIcon} />
          </h2>
          <form onSubmit={onSubmit} className={styles.filterFrom}>
            <Select
              value={material}
              onChange={setMaterial}
              label="Materials"
              options={MATERIAL_OPTIONS}
              className={styles.filterSelect}
            />
            <Select
              value={mediums}
              onChange={setMediums}
              label="Mediums"
              options={MEDIUMS_OPTIONS}
              className={styles.filterSelect}
            />
            <Button type="submit" className={styles.filterButton}>
              Apply
            </Button>
          </form>
        </div>

        <div className={homeStyles.cardList}>
          {MOCK_CARDS.map((item) => (
            <GalleryCard
              key={item.id}
              id={item.id}
              price={item.price}
              img={item.img}
              title={item.title}
              description={item.description}
              altImg={item.altImg}
              className={homeStyles.cardItem}
              isForSell={item.isForSell}
            />
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Gallery;
