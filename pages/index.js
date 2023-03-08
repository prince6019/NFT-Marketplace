import {
  HeroSection,
  Services,
  BigNftSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  FollowerTab,
} from "@/components/componentIndex";

export default function index() {
  return (
    <>
      <HeroSection />
      <Services />
      <BigNftSlider />
      <Title
        heading="New Collection"
        paragraph="Discover the most outstanding NFTs in all topics"
      />
      <FollowerTab />
      <Collection />
      <Title
        heading="Feadtured Nfts"
        paragraph="Discover the most outstanding NFTs in all topics"
      />
      <Filter />
      <NFTCard />
      <Category />
      <Subscribe />
    </>
  );
}
