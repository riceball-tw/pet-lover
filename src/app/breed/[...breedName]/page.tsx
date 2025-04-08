
import { getBreeds, getFlattenBreeds, getImagesFromBreed } from '@/utility/breeds'
import type { Metadata } from 'next'
import Image from 'next/image'

interface Query {
  params: Promise<{
    breedName: string[]
  }>
}

export async function generateStaticParams() {
  const breeds = await getBreeds()
  if (!breeds) throw Error('Could not get breeds')
  const flatBreeds = getFlattenBreeds(breeds)
  return [
    flatBreeds
  ]
}

export async function generateMetadata({ params }: Query): Promise<Metadata> {
  const { breedName } = await params
  const title = Array.isArray(breedName) ? breedName.join('/') : breedName;
  return {
    title,
  };
}

export default async function BreedPage({ params }: Query) {
  const { breedName } = await params;
  const breedPath = breedName.join('/')
  const data = await getImagesFromBreed(breedPath)
  if (!data) return
  return (
    <div className="grid grid-cols-3 gap-1 p-3">
      {data.message.map((url, index) => (
        <button key={index} type="button">
          <Image
            className="bg-global-image-fallback w-full aspect-square object-cover"
            width="95"
            height="95"
            src={url}
            alt={breedPath}
          />
        </button>
      ))}
    </div>
  )
}
