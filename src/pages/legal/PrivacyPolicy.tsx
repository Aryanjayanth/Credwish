import { LegalLayout } from "@/components/legal/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout 
      title="Privacy Policy"
      lastUpdated="October 27, 2024"
    >
      <p className="mb-6 text-gray-700">
        At CredWish, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
        disclose, and safeguard your information when you visit our website credwish.in and use our services.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Register for an account on our platform</li>
              <li>Apply for a loan or financial product</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Contact our customer support team</li>
              <li>Participate in surveys or promotions</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <div className="space-y-4 text-gray-700">
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and manage your loan applications</li>
              <li>Verify your identity and prevent fraud</li>
              <li>Communicate with you about your account and our services</li>
              <li>Improve and personalize your experience on our platform</li>
              <li>Send you important notices and updates</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Banks and financial institutions for loan processing</li>
              <li>Credit bureaus for credit checks and verification</li>
              <li>Service providers who assist in our operations</li>
              <li>Legal and regulatory authorities when required by law</li>
            </ul>
            <p>
              We never sell your personal information to third parties for marketing purposes.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, 
              alteration, disclosure, or destruction. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of sensitive data</li>
              <li>Secure server infrastructure</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
          <div className="space-y-4 text-gray-700">
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
