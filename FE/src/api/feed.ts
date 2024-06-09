import Axios from "@api/JsonAxios";

const HOST = import.meta.env.VITE_BASE_API_URL;
const getFeedList = async () => {
  const res = await Axios.get(HOST + "/feed/search/all/parent-feed");
  return res.data.data;
};

const getFeedItem = async (feedId: string) => {
  const res = await Axios.get(HOST + `/feed/search/detail/parent-feed?parent-feed-id=${feedId}`);
  return res.data.data;
};

const postBookMark = async (feedId: string) => {
  try {
    await Axios.post(HOST + `/bookmark/feed?feed-id=${feedId}`);
  } catch (e) {
    console.log("북마크 전송 실패");
  }
};

const getSearchFeed = async (keyword: string) => {
  const res = await Axios.get(HOST + `/feed/search/feed-list?part-of-title=${keyword}`);
  return res.data.data;
};

const getUserFeed = async (keyword: string) => {
  const res = await Axios.get(HOST + `/feed/search/parent-feed/member?member-id=${keyword}`);
  return res.data.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const putUserFeed = async (feedId: number, feed: any) => {
  await Axios.put(HOST + `/feed/update/${feedId}`, feed);
};

export { getFeedList, getFeedItem, postBookMark, getSearchFeed, getUserFeed, putUserFeed };
