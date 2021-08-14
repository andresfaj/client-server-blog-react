import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const useSocialIcons = () => {
  const socialIconHash = {
    facebook: FaFacebook,
    instagram: FaInstagram,
    youtube: FaYoutube,
    twitter: FaTwitter,
  };
  return { socialIconHash };
};

export default useSocialIcons;
