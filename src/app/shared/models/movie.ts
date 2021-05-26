import {Comment} from "./comment";

export interface Movie {
  categoryId: number;
  description: string;
  id: string;
  imageUrl:string;
  imdbId: string;
  name: string;
  comments?: Comment[];
}
