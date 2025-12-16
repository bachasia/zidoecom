import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Zido Ecom | Company Information',
  description: 'ZIDOECOM L.L.C is a United States registered Limited Liability Company engaged in cross-border e-commerce operations and digital commerce solutions.',
}

export default function About() {
  return (
    <div className="py-24 bg-background-empty">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-light text-primary mb-12">
          Company Information
        </h1>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-light text-primary mb-6">
              Company Overview
            </h2>
            <div className="space-y-5 text-neutral-mineral leading-relaxed">
              <p className="text-base">
                ZIDOECOM L.L.C is a United States registered Limited Liability Company 
                engaged in cross-border e-commerce operations, online retail management, 
                and digital commerce solutions.
              </p>
              <p className="text-base">
                The company operates in compliance with United States business regulations 
                and maintains documentation required to operate as a business entity in the 
                United States.
              </p>
              <p className="text-base">
                ZIDOECOM L.L.C maintains documentation suitable for payment processor and 
                e-commerce platform verification requirements.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Legal Establishment
            </h2>
            <div className="bg-white p-8 border border-neutral-athens">
              <dl className="space-y-6">
                <div>
                  <dt className="text-xs font-medium text-primary mb-2 uppercase tracking-wide flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    Legal Company Name
                  </dt>
                  <dd className="text-base text-primary font-medium">ZIDOECOM L.L.C</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-primary mb-2 uppercase tracking-wide flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v3M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008V11.25zm-3 0h.008v.008h-.008V11.25z" />
                    </svg>
                    Business Type
                  </dt>
                  <dd className="text-base text-neutral-mineral">Limited Liability Company (LLC)</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-primary mb-2 uppercase tracking-wide flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    Country of Registration
                  </dt>
                  <dd className="text-base text-neutral-mineral">United States</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-primary mb-2 uppercase tracking-wide flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Registered Business Address
                  </dt>
                  <dd className="text-base text-neutral-mineral leading-relaxed">
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
              Business Purpose
            </h2>
            <div className="space-y-5 text-neutral-mineral leading-relaxed">
              <p className="text-base">
                ZIDOECOM L.L.C is engaged in cross-border e-commerce operations, 
                online retail management, and digital commerce solutions. Business 
                activities include:
              </p>
              <ul className="list-none space-y-3 ml-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Cross-border e-commerce operations and transaction management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Online retail and brand management services</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Digital commerce strategy and implementation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Order processing and customer support operations</span>
                </li>
              </ul>
              <p className="text-base">
                Business operations are conducted in compliance with applicable 
                United States laws and regulations. Documentation is maintained 
                for verification purposes.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}


