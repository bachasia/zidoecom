import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Zido Ecom | Website Terms',
  description: 'Terms of Service for ZIDOECOM L.L.C website. Review the terms and conditions governing your use of our website.',
}

export default function TermsOfService() {
  return (
    <div className="py-24 bg-background-empty">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-primary mb-3">
          Terms of Service
        </h1>
        <p className="text-sm text-neutral-mineral mb-12">
          Last updated: December 2025
        </p>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              1. Acceptance of Terms
            </h2>
            <div className="space-y-4 text-neutral-mineral text-base leading-relaxed">
              <p>
                These Terms of Service ("Terms") govern your access to and use of the website operated by Zido Ecom, a business operating under the legal name ZIDOECOM L.L.C ("Company", "we", "our", or "us").
              </p>
              <p>
                By accessing or using this website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must discontinue use of the website.
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
              3. Website Purpose
            </h2>
            <div className="space-y-4 text-neutral-mineral text-base leading-relaxed">
              <p>
                This website is provided for:
              </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Business introduction and informational purposes</li>
                <li>Communication with partners, customers, and service providers</li>
                <li>Business verification by payment processors and third-party platforms</li>
              </ul>
              <p>
                The website does not provide direct e-commerce transactions, payment processing, or checkout functionality.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              4. Use of the Website
            </h2>
            <div className="space-y-4 text-neutral-mineral text-base leading-relaxed">
              <p>
                You agree to use this website only for lawful purposes and in accordance with these Terms. You must not:
              </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Use the website in violation of applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to systems or data</li>
                <li>Interfere with website security or functionality</li>
                <li>Use the website to transmit malicious code or harmful content</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              5. Intellectual Property
            </h2>
            <div className="space-y-4 text-neutral-mineral text-base leading-relaxed">
              <p>
                All content on this website, including text, layout, logos, and design elements, is the property of ZIDOECOM L.L.C or its licensors and is protected by applicable intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works from any content without prior written permission, except as permitted by law.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              6. No Professional or Legal Advice
            </h2>
            <div className="text-neutral-mineral text-base leading-relaxed">
              <p>
                Information provided on this website is for general informational purposes only and does not constitute legal, financial, or professional advice. You should consult qualified professionals before making business or financial decisions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              7. Third-Party Links
            </h2>
            <div className="space-y-4 text-neutral-mineral text-base leading-relaxed">
              <p>
                This website may contain links to third-party websites for informational purposes. ZIDOECOM L.L.C does not control and is not responsible for the content, policies, or practices of third-party websites.
              </p>
              <p>
                Accessing third-party websites is at your own risk.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              8. Disclaimer of Warranties
            </h2>
            <div className="space-y-4 text-neutral-mineral text-base leading-relaxed">
              <p>
                This website is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding:
              </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Website availability</li>
                <li>Accuracy or completeness of content</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              9. Limitation of Liability
            </h2>
            <div className="text-neutral-mineral text-base leading-relaxed">
              <p>
                To the fullest extent permitted by law, ZIDOECOM L.L.C shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or related to your use of this website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              10. Indemnification
            </h2>
            <div className="text-neutral-mineral text-base leading-relaxed">
              <p>
                You agree to indemnify and hold harmless ZIDOECOM L.L.C, its members, officers, and affiliates from any claims, liabilities, damages, losses, or expenses arising from your violation of these Terms or misuse of the website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              11. Privacy
            </h2>
            <div className="text-neutral-mineral text-base leading-relaxed">
              <p>
                Your use of this website is also governed by our{' '}
                <a
                  href="/privacy-policy"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  Privacy Policy
                </a>
                , which explains how we collect and process personal information. By using the website, you agree to the terms of our Privacy Policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              12. Governing Law
            </h2>
            <div className="text-neutral-mineral text-base leading-relaxed">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to conflict of law principles.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              13. Changes to These Terms
            </h2>
            <div className="text-neutral-mineral text-base leading-relaxed">
              <p>
                We reserve the right to update or modify these Terms at any time. Changes will be effective upon posting on this page with an updated "Last updated" date.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              14. Termination
            </h2>
            <div className="text-neutral-mineral text-base leading-relaxed">
              <p>
                We may suspend or terminate access to the website at any time without notice if we believe these Terms have been violated or if required for legal or security reasons.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              15. Contact Information
            </h2>
            <div className="bg-white p-8 border border-neutral-athens">
              <p className="text-neutral-mineral text-base leading-relaxed mb-6">
                If you have any questions regarding these Terms of Service, please contact us:
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


