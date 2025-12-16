import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Information - Zido Ecom | Company Details',
  description: 'Legal information for ZIDOECOM L.L.C including company registration details, business address, and legal entity information.',
}

export default function Legal() {
  return (
    <div className="py-24 bg-background-empty">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-primary mb-8">
          Legal Information
        </h1>

        <div className="space-y-16">
          <section>
            <p className="text-neutral-mineral leading-relaxed text-base">
              This page provides official legal information for ZIDOECOM L.L.C. 
              This information is provided for verification purposes and compliance 
              with payment processor and platform requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Company Registration Details
            </h2>
            <div className="bg-white p-8 border border-neutral-athens">
              <dl className="space-y-6">
                <div className="border-b border-neutral-athens pb-4">
                  <dt className="text-xs font-medium text-primary mb-2 uppercase tracking-wide flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    Legal Company Name
                  </dt>
                  <dd className="text-lg text-primary font-medium">
                    ZIDOECOM L.L.C
                  </dd>
                </div>
                <div className="border-b border-neutral-athens pb-4">
                  <dt className="text-xs font-medium text-primary mb-2 uppercase tracking-wide flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v3M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008V11.25zm-3 0h.008v.008h-.008V11.25z" />
                    </svg>
                    Business Type
                  </dt>
                  <dd className="text-lg text-neutral-mineral">
                    Limited Liability Company (LLC)
                  </dd>
                </div>
                <div className="border-b border-neutral-athens pb-4">
                  <dt className="text-xs font-medium text-primary mb-2 uppercase tracking-wide flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    Country of Registration
                  </dt>
                  <dd className="text-lg text-neutral-mineral">
                    United States
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-primary mb-2 uppercase tracking-wide flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Registered Business Address
                  </dt>
                  <dd className="text-lg text-neutral-mineral leading-relaxed">
                    30 N Gould St Ste N<br />
                    Sheridan, WY 82801<br />
                    United States
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Contact Information
            </h2>
            <div className="bg-white p-8 border border-neutral-athens">
              <dl>
                <div>
                  <dt className="text-xs font-medium text-primary mb-2 uppercase tracking-wide flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    Business Email
                  </dt>
                  <dd className="text-lg text-neutral-mineral">
                    <a
                      href="mailto:info@zidoecom.us"
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      info@zidoecom.us
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Business Purpose
            </h2>
            <div className="bg-white p-8 border border-neutral-athens">
              <p className="text-neutral-mineral leading-relaxed text-base mb-4">
                ZIDOECOM L.L.C is engaged in:
              </p>
              <ul className="list-none text-neutral-mineral space-y-2 text-base">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Cross-border e-commerce operations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Online retail management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Digital commerce solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Order processing and customer support</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="p-8 bg-white border border-neutral-athens">
            <h3 className="text-lg font-semibold text-primary mb-3">
              Verification Purposes
            </h3>
            <p className="text-neutral-mineral text-sm leading-relaxed">
              This information is provided for verification purposes with payment 
              processors (including PayPal, Stripe, Shopify Payments) and e-commerce 
              platforms (including Meta). All information is accurate as of the date 
              of publication and is maintained in compliance with US business regulations.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}


