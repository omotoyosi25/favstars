import React from 'react'

export const metadata = {
    title: 'product information',
    description: 'more about our product',
  }

export default function layout({children}) {
  return (
    <div>
            {children}
    </div>
  )
}