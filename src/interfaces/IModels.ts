export interface IModel {
  _id: string;
}
export interface IWardrobe extends IModel {
  name: string;
  bio: string;
  otherOutfits: IOutfit[];
  collections: ICollection[];
  firebase_id: string;
}
export interface IOutfit extends IModel {
  wardrobe?: IWardrobe;
  vid_url: string;
  collection?: ICollection;
  products: IProduct[];
  caption: string;
  clicks?: number;
  buys?: number;
}

export interface IProduct extends IModel {
  name: string;
  images: string[];
}

export interface ICollection extends IModel {
  wardrobes: IWardrobe[];
  name: string;
  bannerImg: string;
  tags: string[];
  description: string;
  outfits: IOutfit[];
  clicks?: number;
  buys?: number;
}
