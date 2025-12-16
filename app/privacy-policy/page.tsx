import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Zido Ecom | Data Protection',
  description: 'Privacy Policy for ZIDOECOM L.L.C. Learn how we collect, use, and protect personal information in compliance with data protection regulations.',
}

export default function Privacy() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-primary mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-neutral-mineral mb-12">
          Last updated: December 2025
        </p>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              1. Introduction
            </h2>
            <div className="space-y-4 text-neutral-mineral text-base leading-relaxed">
              <p>
                Zido Ecom ("Zido Ecom", "we", "our", or "us") operates under the legal name ZIDOECOM L.L.C, a Limited Liability Company registered in the United States.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit our website or contact us. We are committed to handling personal data in a transparent and lawful manner.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              2. Company Information
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
                  <dd className="text-base text-neutral-mineral font-medium">ZIDOECOM L.L.C</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-primary mb-2 uppercase tracking-wide flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v3M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008V11.25zm-3 0h.008v.008h-.008V11.25z" />
                    </svg>
                    Business Name
                  </dt>
                  <dd className="text-base text-neutral-mineral">Zido Ecom</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-primary mb-2 uppercase tracking-wide flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Business Address
                  </dt>
                  <dd className="text-base text-neutral-mineral leading-relaxed">
                    30 N Gould St Ste N<br />
                    Sheridan, WY 82801<br />
                    United States
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-primary mb-2 uppercase tracking-wide flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    Contact Email
                  </dt>
                  <dd className="text-base text-neutral-mineral">
                    <a
                      href="mailto:info@zidoecom.us"
                      className="text-neutral-mineral hover:text-neutral-mineral transition-colors"
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
              3. Information We Collect
            </h2>
            <div className="space-y-6 text-neutral-mineral text-base leading-relaxed">
              <p>
                We may collect the following types of information:
              </p>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  3.1 Information You Provide Voluntarily
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Any information you submit through our contact form or email communications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  3.2 Automatically Collected Information
                </h3>
                <p className="mb-3">
                  When you visit our website, we may automatically collect limited technical information, such as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Pages visited and access times</li>
                </ul>
                <p className="mt-3">
                  This information is collected for security, analytics, and website functionality purposes only.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              4. How We Use Information
            </h2>
            <div className="space-y-4 text-neutral-mineral text-base leading-relaxed">
              <p>
                We use collected information solely for legitimate business purposes, including:
              </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Responding to inquiries and communications</li>
                <li>Operating and maintaining our website</li>
                <li>Improving website performance and user experience</li>
                <li>Ensuring compliance with legal and regulatory requirements</li>
                <li>Protecting against fraud, abuse, or unauthorized access</li>
              </ul>
              <p>
                We do not sell, rent, or trade personal information to third parties.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              5. Legal Basis for Processing
            </h2>
            <div className="space-y-4 text-neutral-mineral text-base leading-relaxed">
              <p>
                Where applicable, we process personal data based on one or more of the following legal grounds:
              </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Your consent</li>
                <li>Performance of legitimate business activities</li>
                <li>Compliance with legal obligations</li>
                <li>Legitimate interests such as website security and operational integrity</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              6. Information Sharing and Disclosure
            </h2>
            <div className="space-y-4 text-neutral-mineral text-base leading-relaxed">
              <p>
                We may disclose personal information only in the following circumstances:
              </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                <li>When required by law or legal process</li>
                <li>To comply with regulatory or law enforcement requests</li>
                <li>To protect the rights, property, or safety of ZIDOECOM L.L.C or others</li>
              </ul>
              <p>
                We do not share personal data for advertising or marketing purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              7. Data Retention
            </h2>
            <div className="text-neutral-mineral text-base leading-relaxed">
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              8. Data Security
            </h2>
            <div className="text-neutral-mineral text-base leading-relaxed">
              <p>
                We implement reasonable administrative, technical, and organizational measures to protect personal information against unauthorized access, loss, misuse, or alteration. However, no method of data transmission or storage can be guaranteed to be completely secure.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              9. Cookies and Tracking Technologies
            </h2>
            <div className="space-y-4 text-neutral-mineral text-base leading-relaxed">
              <p>
                Our website may use essential cookies or similar technologies strictly necessary for:
              </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Website functionality</li>
                <li>Security</li>
                <li>Basic analytics</li>
              </ul>
              <p>
                We do not use cookies for behavioral advertising or profiling.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              10. Third-Party Links
            </h2>
            <div className="text-neutral-mineral text-base leading-relaxed">
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external sites. We encourage users to review the privacy policies of any third-party websites they visit.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              11. International Data Transfers
            </h2>
            <div className="text-neutral-mineral text-base leading-relaxed">
              <p>
                As a U.S.-registered company, personal information may be processed or stored in the United States or other jurisdictions where service providers operate, in accordance with applicable data protection laws.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              12. Your Privacy Rights
            </h2>
            <div className="space-y-4 text-neutral-mineral text-base leading-relaxed">
              <p>
                Depending on your location, you may have certain rights regarding your personal data, including:
              </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                <li>The right to access your personal information</li>
                <li>The right to request correction or deletion</li>
                <li>The right to object to certain processing activities</li>
              </ul>
              <p>
                Requests may be submitted by contacting us at{' '}
                <a
                  href="mailto:info@zidoecom.us"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  info@zidoecom.us
                </a>
                .
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              13. Children's Privacy
            </h2>
            <div className="text-neutral-mineral text-base leading-relaxed">
              <p>
                Our website is not directed to individuals under the age of 13. We do not knowingly collect personal information from children.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              14. Changes to This Privacy Policy
            </h2>
            <div className="text-neutral-mineral text-base leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in legal requirements or business practices. Updates will be posted on this page with a revised "Last updated" date.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              15. Contact Us
            </h2>
            <div className="bg-white p-8 border border-neutral-athens">
              <p className="text-neutral-mineral text-base leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs font-medium text-primary mb-2 uppercase tracking-wide">
                    Email
                  </dt>
                  <dd className="text-base text-neutral-mineral">
                    <a
                      href="mailto:info@zidoecom.us"
                      className="text-neutral-mineral hover:text-neutral-mineral transition-colors"
                    >
                      info@zidoecom.us
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-primary mb-2 uppercase tracking-wide">
                    Company
                  </dt>
                  <dd className="text-base text-neutral-mineral">ZIDOECOM L.L.C</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-primary mb-2 uppercase tracking-wide">
                    Address
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
        </div>
      </div>
    </div>
  )
}


