import {
  HeroSection,
  Services,
  BigNftSlider,
  Subscribe,
  Title,
  Category,
} from "@/components/componentIndex";
import { Filter } from "web3uikit";

export default function index() {
  return (
    <>
      <HeroSection />
      <Services />
      <BigNftSlider />
      <Title
        heading="Feadtured Nfts"
        paragraph="Discover the most outstanding NFTs in all topics"
      />
      <Filter />
      <Category />
      <Subscribe />
    </>
  );
}
