import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Zido Ecom | Business Activities',
  description: 'ZIDOECOM L.L.C is engaged in cross-border e-commerce operations, online retail management, digital commerce strategy, and order processing services.',
}

export default function Services() {
  const services = [
    {
      title: 'Cross-border E-commerce Operations',
      description: 'Cross-border e-commerce operations including international transaction management, customs compliance coordination, and logistics coordination across different markets and regulatory environments.',
      features: [
        'International transaction management',
        'Cross-border payment processing',
        'Customs and compliance coordination',
        'Multi-market operations support',
      ],
    },
    {
      title: 'Online Retail & Brand Management',
      description: 'Online retail management services including brand positioning, product catalog management, and retail channel optimization.',
      features: [
        'Brand management and positioning',
        'Product catalog management',
        'Retail channel optimization',
        'Marketplace integration',
      ],
    },
    {
      title: 'Digital Commerce Strategy',
      description: 'Digital commerce planning and implementation services including market analysis, technology integration, and strategy development.',
      features: [
        'Digital commerce planning',
        'Market analysis and strategy',
        'Technology integration consulting',
        'Growth optimization strategies',
      ],
    },
    {
      title: 'Order Processing & Customer Support',
      description: 'Order processing and customer support operations including order fulfillment, customer service, and inventory management coordination.',
      features: [
        'Order processing and fulfillment',
        'Customer support services',
        'Inventory management coordination',
        'Quality assurance processes',
      ],
    },
  ]

  const serviceIcons = [
    <svg key="0" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15m-16.5 18V9.75m0 0l3-3m-3 3l3 3m9-9v9m0-9l-3-3m3 3l-3 3" />
    </svg>,
    <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>,
    <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>,
    <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>,
  ]

  return (
    <div className="py-24 bg-background-empty">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-primary mb-4">
          Business Activities
        </h1>
        <p className="text-neutral-mineral mb-14 text-base">
          ZIDOECOM L.L.C is engaged in the following business activities:
        </p>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 border border-neutral-athens"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-background-empty border border-neutral-athens flex items-center justify-center flex-shrink-0">
                  <div className="text-primary">
                    {serviceIcons[index]}
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-neutral-mineral leading-relaxed mb-6 text-base">
                    {service.description}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-medium text-primary mb-4 uppercase tracking-wide">
                  Activities Include
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-neutral-mineral text-sm flex items-start"
                    >
                      <svg className="w-5 h-5 mr-2 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Contact Information
          </h3>
          <p className="text-neutral-mineral mb-6 text-base">
            For inquiries regarding business activities, contact ZIDOECOM L.L.C
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium text-sm border-b border-primary/30 hover:border-primary transition-colors"
          >
            Contact
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}


