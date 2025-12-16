import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - Zido Ecom | Cross-Border E-commerce Operations',
  description: 'ZIDOECOM L.L.C is a United States registered Limited Liability Company engaged in cross-border e-commerce operations, online retail management, and digital commerce solutions.',
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background-empty py-24 border-b border-neutral-athens">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-semibold text-primary mb-6 tracking-tight">
              Zido Ecom
            </h1>
            <p className="text-lg md:text-xl text-neutral-mineral leading-relaxed">
              United States registered business providing cross-border e-commerce and digital commerce solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light text-primary mb-8">
              Company Information
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-base">
                ZIDOECOM L.L.C is a United States registered Limited Liability Company 
                engaged in cross-border e-commerce operations, online retail management, 
                and digital commerce solutions.
              </p>
              <p className="text-base">
                The company operates in compliance with United States business regulations 
                and maintains documentation suitable for payment processor and platform 
                verification requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background-empty border-t border-neutral-athens">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-primary mb-6">
            Business Activities
          </h2>
          <p className="text-neutral-mineral mb-12 text-base">
            ZIDOECOM L.L.C is engaged in the following business activities:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-8 border border-neutral-athens">
              <div className="w-12 h-12 bg-background-empty border border-neutral-athens flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15m-16.5 18V9.75m0 0l3-3m-3 3l3 3m9-9v9m0-9l-3-3m3 3l-3 3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                Cross-border E-commerce Operations
              </h3>
              <p className="text-neutral-mineral text-sm leading-relaxed">
                International e-commerce operations and cross-border transaction management
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-athens">
              <div className="w-12 h-12 bg-background-empty border border-neutral-athens flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                Online Retail & Brand Management
              </h3>
              <p className="text-neutral-mineral text-sm leading-relaxed">
                Online retail management and brand management services
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-athens">
              <div className="w-12 h-12 bg-background-empty border border-neutral-athens flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                Digital Commerce Strategy
              </h3>
              <p className="text-neutral-mineral text-sm leading-relaxed">
                Digital commerce planning and implementation services
              </p>
            </div>
            <div className="bg-white p-8 border border-neutral-athens">
              <div className="w-12 h-12 bg-background-empty border border-neutral-athens flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">
                Order Processing & Customer Support
              </h3>
              <p className="text-neutral-mineral text-sm leading-relaxed">
                Order processing and customer support operations
              </p>
            </div>
          </div>
          <div>
            <Link
              href="/services"
              className="inline-flex items-center text-primary hover:text-primary-dark font-semibold text-sm"
            >
              View All Business Activities
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Compliance Overview */}
      <section className="py-16 bg-white border-t border-neutral-athens">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-primary mb-6">
            Company Compliance Overview
          </h2>
          <div className="space-y-4 text-base text-neutral-mineral leading-relaxed">
            <p>
              ZIDOECOM L.L.C operates as a United States registered Limited Liability Company under the laws of the State of Wyoming.
            </p>
            <p>
              The company maintains all required documentation for regulatory compliance and payment processor review, including business registration, ownership information, and operational records.
            </p>
            <p>
              Documentation is available for verification by payment processors, financial institutions, and e-commerce platforms as required for business operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


