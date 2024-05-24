import styles from "../../styles/webtoon/SelectedWebtoonBox.module.scss";
import SearchedWebtoonCard from "@/components/Webtoon/SearchedWebtoonCard";
import WebtoonPlusBtn from "./plusBtn";

type Webtoon = {
  title: string;
  url: string;
  img: string;
  updateDays: string[];
  fanCount: number;
};

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  lastSelectedWebtoonRef?: any;
  selectedList: Webtoon[];
  removeSelect: (webtoon: Webtoon) => void;
}

const SelectedWebtoonBox = ({ selectedList, removeSelect, lastSelectedWebtoonRef }: Props) => {
  return (
    <div className={styles.SelectedWebtoonBox}>
      {selectedList.map((webtoon, index) => (
        <div key={`${index}_li`} ref={index === selectedList.length - 1 ? lastSelectedWebtoonRef : null}>
          <SearchedWebtoonCard
            title={webtoon.title}
            imgUrl={webtoon.img}
            clicked={true}
            onRemove={() => removeSelect(webtoon)}
          />
        </div>
      ))}
      {selectedList.length < 4 ? <WebtoonPlusBtn /> : null}
    </div>
  );
};

export default SelectedWebtoonBox;