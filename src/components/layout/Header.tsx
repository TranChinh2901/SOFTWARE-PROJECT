import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header style={{padding: '1rem', borderBottom: '1px solid #eaeaea'}}>
      <nav style={{display: 'flex', gap: '1rem'}}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/admin">Admin</Link>
      </nav>
    </header>
  )
}
