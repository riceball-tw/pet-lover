'use client'
import type { FlattenedBreed } from '@/type/breeds'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useMemo, Suspense } from 'react'

interface BreedListItem extends FlattenedBreed {
  image?: string;
}

type BreedListProps = BreedListItem[]

function BreedListContent({ breeds }: { breeds: BreedListProps }) {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')?.toLowerCase() || ''
  const filteredBreeds = useMemo(() => {
    if (!query) return breeds
    return breeds.filter(({ breed, subBreed }) => {
      const fullName = subBreed ? `${subBreed} ${breed}` : breed
      return fullName.toLowerCase().includes(query)
    })
  }, [query, breeds])

  return (
    <div>
      <h1 className="sr-only">All Breed List</h1>
      <ul className="divide-global-divider divide-y">
        {
          filteredBreeds.map(({ breed, subBreed, image }) => {
            const subBreedClass = subBreed ? 'ml-12 border-l border-global-divider' : ''
            const breedPath = "/breed/" + (subBreed ? `${breed}/${subBreed}` : `${breed}`)
            return (
              <li className={subBreedClass} key={`${breed}${subBreed}`}>
                <Link className="flex items-center gap-4 px-5 py-2.5" href={breedPath}>
                  {image && (
                    <Image
                      width="60"
                      height="60"
                      className="aspect-square bg-global-image-fallback object-cover rounded-full"
                      src={image}
                      alt={subBreed ? subBreed : breed}
                    />
                  )}
                  <h2>{subBreed ? subBreed : breed}</h2>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default function BreedList({ breeds }: { breeds: BreedListProps }) {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <BreedListContent breeds={breeds} />
    </Suspense>
  )
}