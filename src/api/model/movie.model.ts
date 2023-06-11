
export interface MovieDTO {
  id?: number;
  title?: string;
  img?: string;
  genres: string[];
  similar_genres: string[];
  genre_similarity?: number;
  recommended_movies?: MovieDTO[];

}