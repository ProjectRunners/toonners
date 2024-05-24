import styles from "@/styles/webtoon/SearchedWebtoonCard.module.scss";
import { ReactNode } from "react";

interface Props {
  title: string;
  imgUrl: string;
  clicked: boolean;
  children?: ReactNode;
  onClick: () => void;
}

const SearchedWebtoonCard = ({ title, imgUrl, onClick, children }: Props) => {
  return (
    <div className={styles.itemContainer} onClick={onClick}>
      {children}
      <img className={styles.img} src={imgUrl} alt="" />
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default SearchedWebtoonCard;
