import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import Loading from "./Loading";
import NftCard from "./NftCard";

const NftList = (props, ref) => {
  const [listNft, setListNft] = useState([]);
  const [loading, setLoading] = useState(false);
  const { walletAddress } = props;

  useEffect(() => {
    if (!walletAddress) {
      setListNft([]);
    }
  }, [walletAddress]);

  useImperativeHandle(ref, () => ({
    getNftData: async (accounts) => await getNftList(accounts),
  }));

  const getNftList = async (account) => {
    setLoading(true);
    try {
      let response = await fetch(
        `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${account}`
      );

      let data = await response.json();
      setListNft(data.items);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-20 max-w-5xl m-auto nft-list grid grid-cols-3 gap-5">
      {loading ? (
        <Loading />
      ) : (
        <>
          {listNft?.map((res, index) => (
            <NftCard data={res} key={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default forwardRef(NftList);
