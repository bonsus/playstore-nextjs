import { Metadata } from 'next';
import { Mail, MessageCircle, Phone, MapPin, Send, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - APKmory | Get in Touch',
  description: 'Contact APKmory team for support, feedback, or business inquiries. We are here to help you with your Android app discovery needs.',
  keywords: ['contact apkmory', 'support', 'feedback', 'help', 'customer service'],
  openGraph: {
    title: 'Contact APKmory - We are Here to Help',
    description: 'Contact APKmory team for support, feedback, or business inquiries.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">apkmorys@gmail.com</p>
                <p className="text-sm text-gray-500">For general inquiries and support</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MessageCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Feedback</h3>
                <p className="text-gray-600">apkmorys@gmail.com</p>
                <p className="text-sm text-gray-500">Share your suggestions and ideas</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Business</h3>
                <p className="text-gray-600">apkmorys@gmail.com</p>
                <p className="text-sm text-gray-500">For partnerships and business inquiries</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Response Time</h3>
                <p className="text-gray-600">Within 24-48 hours</p>
                <p className="text-sm text-gray-500">We typically respond to all emails</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">How do I request a new app to be added?</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Simply email us the app name and Play Store link at apkmorys@gmail.com
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Can I suggest new features?</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Absolutely! Send your feature requests to apkmorys@gmail.com
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Is APKmory free to use?</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Yes, APKmory is completely free for all users
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your last name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="support">General Support</option>
                <option value="feedback">Feedback & Suggestions</option>
                <option value="business">Business Inquiry</option>
                <option value="bug">Bug Report</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Please describe your inquiry in detail..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
          
          <p className="text-sm text-gray-500 mt-4 text-center">
            * Required fields. We respect your privacy and will never share your information.
          </p>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
          <p className="text-gray-600 mb-4">
            Find answers to common questions in our help center.
          </p>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            Coming Soon
          </a>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibent text-gray-900 mb-2">Community</h3>
          <p className="text-gray-600 mb-4">
            Join our community forum to connect with other users.
          </p>
          <a href="#" className="text-green-600 hover:text-green-800 font-medium">
            Coming Soon
          </a>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border p-6 text-center">
          <Phone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Updates</h3>
          <p className="text-gray-600 mb-4">
            Stay informed about new features and updates.
          </p>
          <a href="#" className="text-purple-600 hover:text-purple-800 font-medium">
            Follow Us
          </a>
        </div>
      </div>
    </div>
  );
}
