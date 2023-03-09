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
  Slider,
  Brand,
  Video,
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
      <Title
        heading="Explore Nfts Video"
        paragraph="Click on play button and enjoy the video"
      />
      <Slider />
      <FollowerTab />
      <Collection />
      <NFTCard />
      <Title
        heading="Feadtured Nfts"
        paragraph="Discover the most outstanding NFTs in all topics"
      />
      <Filter />
      <Title
        heading="Browse by Category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </>
  );
}
