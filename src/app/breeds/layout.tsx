import type { Metadata } from "next";
import SearchHeader from '@/components/organisms/SearchHeader'

export const metadata: Metadata = {
  title: "Breeds",
  description: "Breeds Description",
};

export default function BreedsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SearchHeader />
      {children}
    </>
  );
}
