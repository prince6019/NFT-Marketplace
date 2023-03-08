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
  AudioLive,
} from "@/components/componentIndex";

export default function index() {
  return (
    <>
      <HeroSection />
      <Services />
      <BigNftSlider />

      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding Audio's NFTs in all topics"
      />
      <AudioLive />

      <FollowerTab />
      <Collection />
      <Title
        heading="Feadtured Nfts"
        paragraph="Discover the most outstanding NFTs in all topics"
      />
      <Filter />
      <NFTCard />
      <Title
        heading="Browse by Category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />
      <Subscribe />
    </>
  );
}
