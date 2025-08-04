import { Metadata } from 'next';
import { Copyright, Shield, AlertTriangle, FileText, Mail, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Copyright Policy - APKmory | Intellectual Property Rights',
  description: 'APKmory copyright policy explaining our respect for intellectual property rights and procedures for reporting copyright infringement.',
  keywords: ['copyright policy', 'DMCA', 'intellectual property', 'apkmory copyright'],
  openGraph: {
    title: 'Copyright Policy - APKmory',
    description: 'APKmory copyright policy and procedures for reporting copyright infringement.',
    type: 'website',
  },
};

export default function CopyrightPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <Copyright className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Copyright Policy</h1>
        <p className="text-lg text-gray-600">
          Last updated: August 1, 2025
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        {/* Introduction */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Shield className="w-6 h-6 mr-2" />
            Our Commitment to Copyright Protection
          </h2>
          <p className="text-gray-700 leading-relaxed">
            APKmory respects the intellectual property rights of others and expects our users to do the same. We comply with the Digital Millennium Copyright Act (DMCA) and other applicable copyright laws. This policy outlines our procedures for addressing copyright infringement claims.
          </p>
        </div>

        {/* Respect for Copyright */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Scale className="w-6 h-6 mr-2" />
            Respect for Intellectual Property
          </h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <p className="text-gray-700 mb-4">
              APKmory is an information platform that provides details about Android applications available on the Google Play Store. We:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Do not host, distribute, or provide download links for any applications</li>
              <li>Display publicly available information from the Google Play Store</li>
              <li>Respect trademark and copyright ownership of app developers</li>
              <li>Use app information for informational and discovery purposes only</li>
              <li>Direct users to official Google Play Store pages for downloads</li>
            </ul>
          </div>
        </section>

        {/* Content Sources */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Sources and Usage</h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">App Information</h3>
            <p className="text-gray-700 mb-4">All app information displayed on APKmory is sourced from:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Google Play Store public listings</li>
              <li>Publicly available app metadata</li>
              <li>Official developer descriptions and materials</li>
              <li>User reviews and ratings from Google Play Store</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
            <h3 className="text-xl font-semibent text-gray-900 mb-3">Fair Use</h3>
            <p className="text-gray-700">
              Our use of app information, screenshots, and descriptions falls under fair use provisions for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li>Educational and informational purposes</li>
              <li>Commentary and criticism</li>
              <li>Search and discovery functionality</li>
              <li>Transformative use for app discovery services</li>
            </ul>
          </div>
        </section>

        {/* DMCA Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FileText className="w-6 h-6 mr-2" />
            DMCA Takedown Policy
          </h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Notice to Copyright Holders</h3>
                <p className="text-yellow-700">
                  If you believe that content on APKmory infringes your copyright, you may submit a DMCA takedown notice. 
                  Please ensure your claim is valid, as false claims may result in legal consequences.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Required Information for DMCA Notice</h3>
            <p className="text-gray-700 mb-4">
              To file a valid DMCA takedown notice, you must provide the following information:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-3">
              <li>
                <strong>Identification of the copyrighted work:</strong> Describe the copyrighted work that you claim has been infringed
              </li>
              <li>
                <strong>Identification of the infringing material:</strong> Provide the specific URL(s) where the allegedly infringing material is located on our site
              </li>
              <li>
                <strong>Contact information:</strong> Include your name, address, telephone number, and email address
              </li>
              <li>
                <strong>Good faith statement:</strong> A statement that you have a good faith belief that the use is not authorized by the copyright owner
              </li>
              <li>
                <strong>Accuracy statement:</strong> A statement that the information in your notice is accurate and that you are authorized to act on behalf of the copyright owner
              </li>
              <li>
                <strong>Signature:</strong> Your physical or electronic signature
              </li>
            </ol>
          </div>
        </section>

        {/* How to Submit */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Mail className="w-6 h-6 mr-2" />
            How to Submit a Copyright Notice
          </h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <p className="text-gray-700 mb-4">
              Please send your DMCA takedown notice to our designated copyright agent:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Copyright Agent:</h4>
              <div className="space-y-1 text-gray-700">
                <p>Email: apkmorys@gmail.com</p>
                <p>Subject: DMCA Takedown Notice</p>
                <p>Website: apkmory.com</p>
              </div>
            </div>

            <p className="text-gray-700">
              We will review your notice and take appropriate action within a reasonable timeframe, typically within 2-5 business days.
            </p>
          </div>
        </section>

        {/* Counter-Notice */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Counter-Notification Procedure</h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <p className="text-gray-700 mb-4">
              If you believe that content was removed in error, you may submit a counter-notification that includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Your contact information (name, address, phone, email)</li>
              <li>Identification of the material that was removed</li>
              <li>A statement under penalty of perjury that you have a good faith belief the material was removed in error</li>
              <li>A statement consenting to jurisdiction of federal court in your district</li>
              <li>Your physical or electronic signature</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Send counter-notifications to: apkmorys@gmail.com with subject &quot;DMCA Counter-Notice&quot;
            </p>
          </div>
        </section>

        {/* Repeat Infringers */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Repeat Infringer Policy</h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <p className="text-gray-700">
              APKmory has a policy of terminating, in appropriate circumstances, the accounts of users who are repeat infringers of copyright. 
              We may also remove content that has been the subject of multiple valid copyright infringement notices.
            </p>
          </div>
        </section>

        {/* Trademark Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Trademark Policy</h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <p className="text-gray-700 mb-4">
              APKmory also respects trademark rights. If you believe your trademark is being used inappropriately on our platform:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Contact us at apkmorys@gmail.com</li>
              <li>Provide proof of trademark ownership</li>
              <li>Specify the allegedly infringing use</li>
              <li>Include your contact information</li>
            </ul>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700">
              This policy does not constitute legal advice. If you have questions about copyright law or your rights, 
              we recommend consulting with a qualified attorney. APKmory reserves the right to modify this policy at any time.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About Copyright?</h2>
          <p className="text-lg mb-6 opacity-90">
            For all copyright-related inquiries, please contact our copyright team:
          </p>
          <div className="space-y-2">
            <p>Email: apkmorys@gmail.com</p> 
            <p>Website: apkmory.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
