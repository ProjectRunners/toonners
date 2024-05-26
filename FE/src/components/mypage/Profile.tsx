import styles from "@styles/mypage/Mypage.module.scss";
import Img from "@assets/characters/character_1.svg?react";

interface Props {
  imgUrl: string;
}

const Profile = ({ imgUrl }: Props) => {
  return (
    <div className={styles.ImgContainer}>
      <Img className={styles.profileImg} />
      {imgUrl ? undefined : undefined}
    </div>
  );
};

export default Profile;
