'use client'

import { useState } from "react";
import Image from 'next/image'
import Carousel from '@/components/atoms/Carousel'
import Dialog from '@/components/molecules/Dialog'

interface BreedImageListProps {
  imageUrls: string[]
  breedPath: string
}

export default function BreedImageList({ imageUrls, breedPath }: BreedImageListProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null)
  const imageUrlsWithoutSelected = imageUrls.filter(imageUrl => {
    return imageUrl !== selectedUrl 
  })

  const firstCarouselImage = selectedUrl
    ? {
        url: selectedUrl,
        alt: breedPath
      }
    : null;

  const carouselImages = [
    ...(firstCarouselImage ? [firstCarouselImage] : []),
    ...imageUrlsWithoutSelected.map(url => {
      return {
        url,
        alt: breedPath
      };
    })
  ];

  return (
    <>
      
      <Dialog isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen}>
        <Carousel images={selectedUrl ? carouselImages: []} width={250} height={250} />
      </Dialog>

      <div className="grid grid-cols-3 gap-1 p-3">
        {imageUrls.map((url, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              setSelectedUrl(url)
              setIsDialogOpen(true)
            }}
            className="cursor-pointer"
          >
            <Image
              className="bg-global-image-fallback w-full aspect-square object-cover"
              width={95}
              height={95}
              src={url}
              alt={breedPath}
            />
          </button>
        ))}
      </div>
    </>
  )
}
