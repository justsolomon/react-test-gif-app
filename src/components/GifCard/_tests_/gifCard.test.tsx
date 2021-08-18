import { render } from "@testing-library/react";
import GifCard from "../gifCard";

const gif = {
  type: "gif",
  id: "QAU5Bd0Js9w3arZ4UD",
  url: "https://giphy.com/gifs/roosterteeth-rooster-teeth-wfh-chump-QAU5Bd0Js9w3arZ4UD",
  slug: "roosterteeth-rooster-teeth-wfh-chump-QAU5Bd0Js9w3arZ4UD",
  bitly_gif_url: "https://gph.is/g/aXJ5XyP",
  bitly_url: "https://gph.is/g/aXJ5XyP",
  embed_url: "https://giphy.com/embed/QAU5Bd0Js9w3arZ4UD",
  username: "roosterteeth",
  source: "",
  title: "Work From Home Hello GIF by Rooster Teeth",
  rating: "g",
  content_url: "",
  source_tld: "",
  source_post_url: "",
  is_sticker: 0,
  import_datetime: "2020-04-03 18:35:23",
  trending_datetime: "0000-00-00 00:00:00",
  images: {
    downsized_medium: {
      height: "270",
      size: "2063322",
      url: "https://media3.giphy.com/media/QAU5Bd0Js9w3arZ4UD/giphy.gif",
      width: "480"
    },
    downsized_large: {
      height: "270",
      size: "2063322",
      url: "https://media3.giphy.com/media/QAU5Bd0Js9w3arZ4UD/giphy.gif",
      width: "480"
    },
    original_mp4: {
      height: "270",
      mp4: "https://media3.giphy.com/media/QAU5Bd0Js9w3arZ4UD/giphy.mp4",
      mp4_size: "141771",
      width: "480"
    },
    fixed_width_downsampled: {
      height: "113",
      size: "82327",
      url: "https://media3.giphy.com/media/QAU5Bd0Js9w3arZ4UD/200w_d.gif",
      width: "200"
    },
    fixed_height: {
      height: "200",
      size: "1362180",
      url: "https://media3.giphy.com/media/QAU5Bd0Js9w3arZ4UD/200.gif",
      width: "356"
    },
    original: {
      frames: "49",
      hash: "810ac7876a78170bbd6acd0891c91625",
      height: "270",
      mp4: "https://media3.giphy.com/media/QAU5Bd0Js9w3arZ4UD/giphy.mp4",
      mp4_size: "141771",
      size: "2063322",
      url: "https://media3.giphy.com/media/QAU5Bd0Js9w3arZ4UD/giphy.gif",
      width: "480"
    },
    original_still: {
      height: "270",
      size: "67310",
      url: "https://media3.giphy.com/media/QAU5Bd0Js9w3arZ4UD/giphy_s.gif",
      width: "480"
    },
    fixed_height_downsampled: {
      height: "200",
      size: "239625",
      url: "https://media3.giphy.com/media/QAU5Bd0Js9w3arZ4UD/200_d.gif",
      width: "356"
    },
    fixed_width_still: {
      height: "113",
      size: "16278",
      url: "https://media3.giphy.com/media/QAU5Bd0Js9w3arZ4UD/200w_s.gif",
      width: "200"
    },
    fixed_width: {
      height: "113",
      size: "435988",
      url: "https://media3.giphy.com/media/QAU5Bd0Js9w3arZ4UD/200w.gif",
      webp: "https://media3.giphy.com/media/QAU5Bd0Js9w3arZ4UD/200w.webp",
      webp_size: "91096",
      width: "200"
    },
    fixed_height_still: {
      height: "200",
      size: "42828",
      url: "https://media3.giphy.com/media/QAU5Bd0Js9w3arZ4UD/200_s.gif",
      width: "356"
    },
    "480w_still": {
      url: "https://media2.giphy.com/media/QAU5Bd0Js9w3arZ4UD/480w_s.jpg",
      width: "480",
      height: "270"
    },
    downsized: {},
    downsized_small: {},
    downsized_still: {},
    fixed_height_small: {},
    fixed_height_small_still: {},
    fixed_width_small: {},
    fixed_width_small_still: {},
    looping: {},
    preview: {},
    preview_gif: {}
  },
  user: {
    avatar_url:
      "https://media3.giphy.com/avatars/roosterteeth/WSNaHIPXtMHL.jpg",
    banner_image: "",
    banner_url: "",
    profile_url: "https://giphy.com/roosterteeth/",
    username: "roosterteeth",
    display_name: "Rooster Teeth",
    description:
      "Premium dumb content. Home of Achievement Hunter, Funhaus, RWBY, RvB, a ton of podcasts, new stuff all the time, and the best community ever.",
    is_verified: true,
    website_url: "http://www.roosterteeth.com",
    instagram_url: "https://instagram.com/roosterteeth"
  }
};

// const renderGifCard = () => {
//   return render(<GifCard gif={gif} />);
// };

// describe("<GifCard />", () => {
//   it("should render the GIF card component properly", () => {
// const { asFragment } = renderGif();
//   });
// });
