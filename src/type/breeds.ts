export interface GetBreedsResponse {
  message: { [key: string]: string[] };
  status: string;
}

export interface GetBreadImage {
  message: string;
  status: string;
}

export interface GetImagesFromBreed {
  message: string[];
  status: string;
}

export interface FlattenedBreed {
  breed: string;
  subBreed?: string;
}