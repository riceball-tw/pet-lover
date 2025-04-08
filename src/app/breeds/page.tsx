import BreedList from '@/components/atoms/BreedList'
import { getBreeds, getBreedImage, getFlattenBreeds } from '@/utility/breeds'

export default async function BreedListPage() {
  const breeds = await getBreeds()
  if (!breeds) return <p>Failed to fetch data.</p>

  const flatBreeds = getFlattenBreeds(breeds)

  const flatBreedsWithImage = await Promise.all(
    flatBreeds.map(async (flatBreed) => {
      const { breed, subBreed } = flatBreed
      const breedImagePath = subBreed ? `${breed}/${subBreed}` : breed
      const breedImage = await getBreedImage(breedImagePath)
      return {
        ...flatBreed,
        ...(breedImage && { image: breedImage })
      }
    })
  )

  return (
    <BreedList breeds={flatBreedsWithImage} />
  );
}
