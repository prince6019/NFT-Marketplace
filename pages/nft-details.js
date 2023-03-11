// ---internal import
import { Category, Brand } from "@/components/componentIndex";
import NftDetails from "@/nft-detailsPage/NftDetails";

export default function nftdetails() {
  return (
    <div>
      <NftDetails />
      <Category />
      <Brand />
    </div>
  );
}
