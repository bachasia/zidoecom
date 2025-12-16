import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Zido Ecom | Business Contact Information',
  description: 'Contact information for ZIDOECOM L.L.C. Business email: info@zidoecom.us. Registered office: 30 N Gould St Ste N, Sheridan, WY 82801, United States.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


