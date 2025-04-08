'use client';

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface Props {
  images: {
    url: string
    alt: string
  }[],
  width: number,
  height: number
}

export default function Carousel({images, width, height}: Props) {
  const [imageIndex, setImageIndex] = useState(0)

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return images.length -1
      return index -1
    })
  }

  function showNextImage() {
    setImageIndex(index => {
      if (index === images.length -1) return 0
      return index + 1
    })
  }

  useEffect(() => {
    setImageIndex(0)
  }, [images])

  return <div style={{width: width, height: height}} className="flex overflow-hidden">
    <button className="fixed left-1 top-1/2 -translate-y-1/2 cursor-pointer z-10" onClick={showPrevImage} type="button">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="chevron-left">
        <g id="arrow-down">
        <path id="Path 3" d="M14 6L8 12L14 18" stroke="currentColor" strokeLinecap="round"/>
        </g>
        </g>
      </svg>
    </button>
    <button className="fixed right-1 top-1/2 -translate-y-1/2 cursor-pointer z-10" onClick={showNextImage} type="button">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="chevron-right">
        <g id="arrow-down">
        <path id="Path 3" d="M10 18L16 12L10 6" stroke="currentColor" strokeLinecap="round"/>
        </g>
        </g>
      </svg>
    </button>
    {
      images.map(({url, alt}) => {
        return <Image width="250" height="250" key={url} className=" flex-shrink-0 transition-transform object-cover bg-global-image-fallback" style={{ translate: `${-100 * imageIndex}%`}} src={url} alt={alt} />
      })
    }
  </div>
}