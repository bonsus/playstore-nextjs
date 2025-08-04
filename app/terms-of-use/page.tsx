import { Metadata } from 'next';
import { FileText, Users, Shield, AlertTriangle, Scale, Mail, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Use - APKmory | Service Terms and Conditions',
  description: 'APKmory terms of use outlining user responsibilities, service conditions, and legal terms for using our Android app discovery platform.',
  keywords: ['terms of use', 'terms of service', 'user agreement', 'apkmory terms'],
  openGraph: {
    title: 'Terms of Use - APKmory',
    description: 'APKmory terms of use and service conditions for our Android app discovery platform.',
    type: 'website',
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Use</h1>
        <p className="text-lg text-gray-600">
          Last updated: August 1, 2025
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        {/* Introduction */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Scale className="w-6 h-6 mr-2" />
            Agreement to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to APKmory! These Terms of Use (&quot;Terms&quot;) govern your use of the APKmory website and services. 
            By accessing or using APKmory, you agree to be bound by these Terms. If you do not agree to these Terms, 
            please do not use our service.
          </p>
        </div>

        {/* Service Description */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <CheckCircle className="w-6 h-6 mr-2" />
            Description of Service
          </h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <p className="text-gray-700 mb-4">
              APKmory is an Android application discovery platform that provides:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Information about Android applications available on Google Play Store</li>
              <li>App search and discovery functionality</li>
              <li>App categorization and recommendations</li>
              <li>User reviews and ratings aggregation</li>
              <li>App comparison and analysis tools</li>
              <li>Links to official Google Play Store listings</li>
            </ul>
            <p className="text-gray-700 mt-4 font-semibold">
              Important: APKmory does not host, distribute, or provide download links for Android applications. 
              All downloads must be conducted through the official Google Play Store.
            </p>
          </div>
        </section>

        {/* User Responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Users className="w-6 h-6 mr-2" />
            User Responsibilities
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Acceptable Use</h3>
              <p className="text-gray-700 mb-4">You agree to use APKmory only for lawful purposes and in accordance with these Terms. You must not:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems or data</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Use automated systems to scrape or harvest data</li>
                <li>Transmit any malicious code, viruses, or harmful content</li>
                <li>Impersonate others or provide false information</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Security</h3>
              <p className="text-gray-700">
                If you create an account with APKmory, you are responsible for maintaining the security of your account 
                and password. You must notify us immediately of any unauthorized use of your account.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Submission</h3>
              <p className="text-gray-700 mb-4">
                If you submit content to APKmory (such as reviews or comments), you represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You own or have the necessary rights to the content</li>
                <li>The content does not violate any third-party rights</li>
                <li>The content is accurate and not misleading</li>
                <li>The content does not contain harmful or offensive material</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Prohibited Activities */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertTriangle className="w-6 h-6 mr-2" />
            Prohibited Activities
          </h2>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <p className="text-red-800 font-semibold mb-4">The following activities are strictly prohibited:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Technical Violations:</h4>
                <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
                  <li>Reverse engineering our systems</li>
                  <li>Automated data collection or scraping</li>
                  <li>Attempting to bypass security measures</li>
                  <li>Overloading our servers with requests</li>
                  <li>Using proxy servers to mask your identity</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-2">Content Violations:</h4>
                <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
                  <li>Posting false or misleading information</li>
                  <li>Submitting spam or promotional content</li>
                  <li>Sharing malicious links or content</li>
                  <li>Posting offensive or harmful material</li>
                  <li>Violating intellectual property rights</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">APKmory Content</h3>
            <p className="text-gray-700">
              All content, features, and functionality of APKmory, including but not limited to text, graphics, logos, 
              icons, images, audio clips, digital downloads, and data compilations, are owned by APKmory or its licensors 
              and are protected by copyright, trademark, and other intellectual property laws.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Content</h3>
            <p className="text-gray-700">
              App information, descriptions, screenshots, and other content related to Android applications are owned by 
              their respective developers and publishers. This content is used under fair use provisions for informational 
              and discovery purposes only.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Generated Content</h3>
            <p className="text-gray-700">
              By submitting content to APKmory, you grant us a non-exclusive, worldwide, royalty-free license to use, 
              reproduce, modify, and display your content in connection with our service. You retain ownership of your content.
            </p>
          </div>
        </section>

        {/* Disclaimers */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Shield className="w-6 h-6 mr-2" />
            Disclaimers and Limitations
          </h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Service Availability</h3>
              <p className="text-yellow-700">
                APKmory is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. We do not guarantee 
                that the service will be uninterrupted, error-free, or completely secure. We reserve the right to modify, 
                suspend, or discontinue the service at any time.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information Accuracy</h3>
              <p className="text-gray-700">
                While we strive to provide accurate and up-to-date information about Android applications, we cannot guarantee 
                the completeness, accuracy, or timeliness of all information. App information is sourced from public APIs and 
                may not always reflect the most current status.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Links</h3>
              <p className="text-gray-700">
                APKmory contains links to third-party websites and services, including the Google Play Store. We are not 
                responsible for the content, privacy policies, or practices of third-party sites. Your use of third-party 
                services is subject to their respective terms and conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, APKmory and its affiliates, officers, employees, agents, and licensors 
              shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Loss of profits, data, or business opportunities</li>
              <li>Service interruptions or system failures</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Statements or conduct of third parties on the service</li>
              <li>Any other matters relating to the service</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Our total liability for any claims arising from your use of APKmory shall not exceed the amount you paid to us 
              in the twelve months preceding the claim.
            </p>
          </div>
        </section>

        {/* Indemnification */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <p className="text-gray-700">
              You agree to indemnify, defend, and hold harmless APKmory and its affiliates, officers, employees, agents, 
              and licensors from and against any and all claims, damages, costs, and expenses (including reasonable attorneys&apos; fees) 
              arising from or relating to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li>Your use of the APKmory service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of third parties</li>
              <li>Any content you submit or share through the service</li>
            </ul>
          </div>
        </section>

        {/* Termination */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Termination by You</h3>
            <p className="text-gray-700 mb-4">
              You may stop using APKmory at any time. If you have an account, you may delete it by contacting us.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Termination by Us</h3>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access to APKmory immediately, without prior notice, if you:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Violate these Terms of Use</li>
              <li>Engage in prohibited activities</li>
              <li>Cause harm to other users or our service</li>
              <li>Fail to comply with applicable laws</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Upon termination, your right to use APKmory will cease immediately. Provisions that by their nature should 
              survive termination will remain in effect.
            </p>
          </div>
        </section>

        {/* Governing Law */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Disputes</h2>
          
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Governing Law</h3>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where APKmory is operated, 
              without regard to conflict of law principles.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Dispute Resolution</h3>
            <p className="text-gray-700">
              Any disputes arising from these Terms or your use of APKmory will be resolved through binding arbitration, 
              except that you may assert claims in small claims court if they qualify. You waive any right to a jury trial 
              or to participate in a class action lawsuit.
            </p>
          </div>
        </section>

        {/* Changes to Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
          
          <div className="bg-blue-50 rounded-xl p-6">
            <p className="text-blue-800">
              We reserve the right to modify these Terms at any time. We will notify users of significant changes by posting 
              a notice on our website or sending an email notification. Your continued use of APKmory after changes are posted 
              constitutes acceptance of the new Terms. We encourage you to review these Terms periodically.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <Mail className="w-6 h-6 mr-2" />
            Questions About These Terms?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            If you have any questions about these Terms of Use, please contact us:
          </p>
          <div className="space-y-2">
            <p>Email: apkmorys@gmail.com</p> 
            <p>Website: apkmory.com</p>
          </div>
          <p className="text-sm opacity-75 mt-6">
            We typically respond to inquiries within 2-3 business days.
          </p>
        </div>
      </div>
    </div>
  );
}
