import { LegalLayout } from "@/components/legal/LegalLayout";

export default function TermsOfService() {
  return (
    <LegalLayout 
      title="Terms of Service"
      lastUpdated="October 27, 2024"
    >
      <p className="mb-6 text-gray-700">
        Welcome to CredWish. These Terms of Service ("Terms") govern your access to and use of the CredWish 
        website and services (collectively, the "Service"). Please read these Terms carefully before using our Service.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy. 
              If you disagree with any part of these terms, you may not access the Service.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Service</h2>
          <div className="space-y-4 text-gray-700">
            <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Service in any way that violates any applicable law or regulation</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use of the Service</li>
              <li>Attempt to gain unauthorized access to any portion of the Service</li>
              <li>Use the Service to impersonate any person or entity</li>
              <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
              <li>Use any robot, spider, or other automatic device to access the Service for any purpose</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Account Registration</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              To access certain features of the Service, you may be required to create an account. You agree to provide 
              accurate, current, and complete information during the registration process and to update such information 
              to keep it accurate, current, and complete.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities 
              that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Loan Applications</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              When you apply for a loan through our Service, you authorize us to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Obtain your credit report and verify the information you provide</li>
              <li>Share your information with our partner banks and financial institutions</li>
              <li>Communicate with you regarding your application and loan status</li>
            </ul>
            <p>
              Loan approval is subject to credit check and verification of the information provided. We do not 
              guarantee loan approval or specific loan terms.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              The Service and its original content, features, and functionality are owned by CredWish and are 
              protected by international copyright, trademark, patent, trade secret, and other intellectual 
              property or proprietary rights laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly 
              perform, republish, download, store, or transmit any of the material on our Service, except as 
              expressly permitted by these Terms.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              In no event shall CredWish, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential, or punitive damages, including 
              without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your access to or use of or inability to access or use the Service</li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Any content obtained from the Service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will 
            provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material 
            change will be determined at our sole discretion.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
