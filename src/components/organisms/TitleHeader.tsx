import Header from '@/components/molecules/Header'
import Link from 'next/link';

interface Props {
  title: string
  goBackUrl: string
}

export default function TitleHeader({ title, goBackUrl }: Props) {
  return (
    <Header>
      {
        goBackUrl && <Link className="absolute" href={goBackUrl}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 6L8 12L14 18" stroke="currentColor" strokeLinecap="round"/>
          </svg>
        </Link>
      }
      <h1 className="text-center">{ title }</h1>
    </Header>
  );
}
