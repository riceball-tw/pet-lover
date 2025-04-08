'use client';

import TitleHeader from '@/components/organisms/TitleHeader'
import { useParams } from "next/navigation";

export default function BreedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { breedName } = useParams();
  const title = Array.isArray(breedName) ? breedName.join('/') : breedName;

  return (
    <>
      <TitleHeader title={title ?? 'Missing Title'} goBackUrl={'/breeds'} />
      { children }
    </>
  );
}
