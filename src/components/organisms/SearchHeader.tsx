'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/molecules/Header'
import Input from '@/components/atoms/Input'
import { usePathname, useSearchParams } from 'next/navigation'

export default function SearchHeader() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [query, setQuery] = useState(searchParams.get('q') || '')

  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString())
      if (query) {
        params.set('q', query)
      } else {
        params.delete('q')
      }

      const newUrl = `${pathname}?${params.toString()}`
      
      // App router push will cause server component reload, so use native window history to overwrite url
      // router.push(newUrl)
      window.history.replaceState(null, '', newUrl)

    }, 300) // 300ms debounce

    return () => clearTimeout(handler)
  }, [query])

  return (
    <Header>
      <Input value={query} setValue={setQuery} />
    </Header>
  )
}
