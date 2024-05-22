import styles from "@styles/home/Home.module.scss";
import Tag from "@/components/common/Tag";
import Text from "@components/common/Text";

const RankingChatItem = () => {
  return (
    <div className={styles.ranking__item}>
      <div className={styles.ranking__img}>
        <div />
        <Tag label="🔥 NN" size="small" />
      </div>
      <div>
        <Text types="title" bold="semi-bold">
          웹툰 이름입니다.
        </Text>
        <div className={styles.ranking__comments}>
          <Text>최신 댓글입니다.</Text>
          <Text>최신 댓글입니다.</Text>
        </div>
      </div>
    </div>
  );
};

export default RankingChatItem;
