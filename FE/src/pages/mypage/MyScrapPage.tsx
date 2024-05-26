import { getonMyFeed } from "@/api/myPage";
import styles from "@styles/mypage/Mypage.module.scss";
import Header from "@/components/common/Header";
import Input from "@/components/common/Input";
import FeedItem from "@/components/home/feed/FeedItem";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyScrapPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();
  const [feedList, setFeedList] = useState([]);

  const goMypage = () => {
    navigate("/mypage");
  };

  const onSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const fe = async () => {
      const res = await getonMyFeed();
      setFeedList(res.data);
    };
    fe();
  });

  return (
    <div
      style={{
        width: "393px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Header title="내 스크랩" before={goMypage} />
      <div style={{ width: "340px", margin: "30px 0" }}>
        <Input
          value={searchQuery}
          types="search"
          placeholder="검색어로 빠르게 스크랩한 글 찾기"
          onChange={onSearchQueryChange}
        />
        <div className={styles.feed}>
          {feedList.map((feed, i) => {
            return feed.feedTitle.includes(searchQuery) ? <FeedItem key={i} feed={feed} /> : "";
          })}
        </div>
      </div>
    </div>
  );
};

export default MyScrapPage;
