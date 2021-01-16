import { BasketIcon, HeartFilledIcon, HeartIcon } from "assets";
import { FC, useState } from "react";
import { IGalleryCard } from "types";
import classNames from "classnames";
import { useRouter } from "next/router";
import { Paths } from "invariable";
import styles from "./GalleryCard.module.scss";

const GalleryCard: FC<IGalleryCard> = ({
  id,
  img,
  altImg,
  title,
  description,
  price,
  className,
  isForSell,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();

  // TODO: fav to localStorage
  const addToFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(true);
    console.log("favorite", id);
  };

  const addToBasket = (e) => {
    e.stopPropagation();
    console.log("basket", id);
  };

  const handleClick = () => router.push(`${Paths.paintingDetails}/${id}`);

  const heartClasses = classNames(styles.heart, isFavorite && styles.heartActive);

  return (
    <div
      className={`${styles.card} ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={handleClick}
    >
      <header className={styles.header}>
        {isForSell && <span className={styles.badge}>Sold</span>}
        {!isForSell && (
          <>
            <button type="button" className={heartClasses} onClick={addToFavorite}>
              {isFavorite ? <HeartFilledIcon /> : <HeartIcon />}
            </button>
            <button type="button" className={styles.basket} onClick={addToBasket}>
              <BasketIcon />
            </button>
          </>
        )}

        <img className={styles.img} src={img} alt={altImg} />
        <span className={styles.details}>More details</span>
      </header>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>{`$${price}`}</p>
    </div>
  );
};

export default GalleryCard;
