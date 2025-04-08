import type { GetBreedsResponse, FlattenedBreed, GetBreadImage, GetImagesFromBreed } from '@/type/breeds'

/**
 * Get all breeds
 * @url https://dog.ceo/dog-api/documentation/#all
 */
export async function getBreeds() {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`)
    }
    const resJson: GetBreedsResponse = await res.json()
    return resJson
  } catch (err) {
    console.error('Fail to process data', err)
  }
}

/**
 * Get Random image from a breed collection
 * @url https://dog.ceo/dog-api/documentation/breed
 */
export async function getBreedImage(breedPath: string) {
  try {
    const res = await fetch(`https://dog.ceo/api/breed/${breedPath}/images/random`);
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`)
    }
    const resJson: GetBreadImage = await res.json();
    return resJson.message;
  } catch(err) {
    console.error('Fail to process data', err)
  }
};

/**
 * Get multiple images from a breed collection
 * @url https://dog.ceo/dog-api/documentation/breed
 */
export async function getImagesFromBreed(breedPath: string) {
  try {
    const res = await fetch(`https://dog.ceo/api/breed/${breedPath}/images/random/50`);
    if (!res.ok) {
      throw new Error(`Failed to fetch breeds: ${res.statusText}`)
    }
    const resJson: GetImagesFromBreed = await res.json()
    return resJson
  } catch(err) {
    console.error('Fail to process data', err)
  }
}

/**
 * Flatten BreedsResponse data
 */
export function getFlattenBreeds(breedsResponse: GetBreedsResponse): FlattenedBreed[] {
  return Object.entries(breedsResponse.message).flatMap(([breed, subBreeds]) => {
    return [
      { breed },
      ...subBreeds.map((subBreed) => ({ breed, subBreed })),
    ];
  });
}