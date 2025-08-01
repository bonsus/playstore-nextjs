import { Metadata } from 'next';
import { Shield, Eye, Lock, User, Database, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - APKmory | Your Privacy Matters',
  description: 'Read APKmory privacy policy to understand how we collect, use, and protect your personal information when using our Android app discovery platform.',
  keywords: ['privacy policy', 'apkmory privacy', 'data protection', 'user privacy'],
  openGraph: {
    title: 'Privacy Policy - APKmory',
    description: 'Read APKmory privacy policy to understand how we protect your personal information.',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600">
          Last updated: August 1, 2025
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        {/* Introduction */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Eye className="w-6 h-6 mr-2" />
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At APKmory (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website apkmory.com and use our services.
          </p>
        </div>

        {/* Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Database className="w-6 h-6 mr-2" />
            Information We Collect
          </h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Contact us through our contact form</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Participate in surveys or feedback forms</li>
              <li>Report bugs or technical issues</li>
            </ul>
            <p className="text-gray-700 mt-4">
              This may include: name, email address, and any information you choose to include in your communications with us.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>IP address and location information</li>
              <li>Browser type and version</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website or source</li>
              <li>Click patterns and navigation behavior</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies and Tracking Technologies</h3>
            <p className="text-gray-700">
              We use cookies, web beacons, and similar tracking technologies to enhance your experience on our website. 
              These technologies help us understand how you use our site, remember your preferences, and provide personalized content.
            </p>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <User className="w-6 h-6 mr-2" />
            How We Use Your Information
          </h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you updates, newsletters, and promotional materials (with your consent)</li>
              <li>Analyze website usage and user behavior to improve our platform</li>
              <li>Detect, prevent, and address technical issues or security threats</li>
              <li>Comply with legal obligations and enforce our terms of service</li>
              <li>Personalize your experience and provide relevant content</li>
            </ul>
          </div>
        </section>

        {/* Information Sharing */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Globe className="w-6 h-6 mr-2" />
            Information Sharing and Disclosure
          </h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and providing our services</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              <li><strong>Business Transfer:</strong> In connection with a merger, acquisition, or sale of business assets</li>
              <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our users or others</li>
              <li><strong>Consent:</strong> With your explicit consent for any other purpose</li>
            </ul>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Lock className="w-6 h-6 mr-2" />
            Data Security
          </h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Secure hosting and infrastructure</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <p className="text-gray-700 mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to certain exceptions)</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise these rights, please contact us at privacy@apkmory.com. We will respond to your request within a reasonable timeframe.
            </p>
          </div>
        </section>

        {/* Third-Party Links */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <p className="text-gray-700">
              Our website may contain links to third-party websites, including links to Google Play Store. 
              We are not responsible for the privacy practices or content of these external sites. 
              We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>
        </section>

        {/* Children&apos;s Privacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Children&apos;s Privacy</h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <p className="text-gray-700">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. 
              If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
            </p>
          </div>
        </section>

        {/* Changes to Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
              We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last updated&quot; date. 
              Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About This Policy?</h2>
          <p className="text-lg mb-6 opacity-90">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="space-y-2">
            <p>Email: privacy@apkmory.com</p>
            <p>Website: apkmory.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
