// ---internal import
import Style from "../styles/uploadnft.module.css";
import { UploadNFT } from "@/uploadNft/uploadNFTIndex";

export default function uploadNft() {
  return (
    <div className={Style.uploadnft}>
      <div className={Style.uploadnft_box}>
        <div className={Style.uploadnft_box_heading}>
          <h1>Create New NFT</h1>
          <p>
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
        </div>
        <div className={Style.uploadnft_box_title}>
          <h2>Image, Video, Audio, or 3D Model</h2>
          <p>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </p>
        </div>
        <div className={Style.uploadnft_box_form}>
          <UploadNFT />
        </div>
      </div>
    </div>
  );
}
