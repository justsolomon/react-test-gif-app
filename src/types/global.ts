export interface IGif {
  type: "gif";
  id: string;
  slug: string;
  url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: string;
  content_url: string;
  user: IUser;
  source_tld: string;
  source_post_url: string;
  update_datetime: Date;
  create_datetime: Date;
  import_datetime: Date;
  trending_datetime: Date;
  images: IGifImage;
  title: string;
}

export interface IUser {
  avatar_url: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  website: string;
  description: string;
}

interface IGifImage {
  fixed_height: IImageSize;
  fixed_height_still: IImageStillSize;
  fixed_height_downsampled: IImageDownSampledSize;
  fixed_width: IImageSize;
  fixed_width_still: IImageStillSize;
  fixed_width_downsampled: IImageDownSampledSize;
  fixed_height_small: IImageSize;
  fixed_height_small_still: IImageStillSize;
  fixed_width_small: IImageSize;
  fixed_width_small_still: IImageStillSize;
  downsized: IImageDownSized;
  downsized_still: IImageStillSize;
  downsized_large: IImageDownSized;
  downsized_medium: IImageDownSized;
  downsized_small: IImagePreview;
  original: IOriginal;
  original_still: IImageStillSize;
  looping: {
    mp4: string;
  };
  preview: IImagePreview;
  preview_gif: IImageStillSize;
}

interface IImagePreview {
  mp4: string;
  mp4_size: string;
  width: string;
  height: string;
}

interface IImageStillSize {
  url: string;
  width: string;
  height: string;
}

interface IOriginal extends IImagePreview {
  size: string;
  frames: string;
  url: string;
  webp: string;
  webp_size: string;
}

interface IImageDownSized extends IImageStillSize {
  size: string;
}

interface IImageDownSampledSize extends IImageDownSized {
  size: string;
  webp: string;
  webp_size: string;
}

interface IImageSize extends IImageDownSampledSize {
  mp4: string;
  mp4_size: string;
}
