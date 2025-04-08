import { getBreeds, getFlattenBreeds, getImagesFromBreed } from '@/utility/breeds'
import type { Metadata } from 'next'
import BreedImageList from '@/components/atoms/BreedImageList'

interface Query {
  params: Promise<{
    breedName: string[]
  }>
}

export async function generateStaticParams() {
  const breeds = await getBreeds()
  if (!breeds) throw Error('Could not get breeds')
  const flatBreeds = getFlattenBreeds(breeds)
  return [flatBreeds]
}

export async function generateMetadata({ params }: Query): Promise<Metadata> {
  const { breedName } = await params
  const title = Array.isArray(breedName) ? breedName.join('/') : breedName
  return { title }
}

export default async function BreedPage({ params }: Query) {
  const { breedName } = await params
  const breedPath = breedName.join('/')
  const imageRes = await getImagesFromBreed(breedPath)
  if (!imageRes) return

  return (
    <BreedImageList
      imageUrls={imageRes.message}
      breedPath={breedPath}
    />
  )
}
