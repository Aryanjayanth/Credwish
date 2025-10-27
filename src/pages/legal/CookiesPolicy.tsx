import { LegalLayout } from "@/components/legal/LegalLayout";

export default function CookiesPolicy() {
  return (
    <LegalLayout 
      title="Cookies Policy"
      lastUpdated="October 27, 2024"
    >
      <p className="mb-6 text-gray-700">
        This Cookies Policy explains what cookies are, how we use them on our website, and how you can manage them. 
        By using our website, you consent to our use of cookies in accordance with this policy.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies?</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Cookies are small text files that are placed on your computer, smartphone, or other device when you visit 
              a website. They are widely used to make websites work more efficiently and to provide information to the 
              website owners.
            </p>
            <p>
              Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go 
              offline, while session cookies are deleted as soon as you close your web browser.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
          <div className="space-y-4 text-gray-700">
            <p>We use different types of cookies for various purposes, including:</p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function and cannot be switched off in our systems. They are 
              usually only set in response to actions made by you which amount to a request for services, such as setting 
              your privacy preferences, logging in, or filling in forms.
            </p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Performance Cookies</h3>
            <p>
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of 
              our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
            </p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Functional Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by us 
              or by third-party providers whose services we have added to our pages.
            </p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Targeting Cookies</h3>
            <p>
              These cookies may be set through our site by our advertising partners. They may be used by those companies to 
              build a profile of your interests and show you relevant advertisements on other sites.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Third-Party Cookies</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We may also use various third-party cookies to report usage statistics of the Service, deliver advertisements 
              on and through the Service, and so on. These third-party services may place their own cookies on your device 
              and have their own privacy policies.
            </p>
            <p>
              Some common third-party services we use include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics for website analytics</li>
              <li>Facebook Pixel for advertising and analytics</li>
              <li>Hotjar for user behavior analytics</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Managing Your Cookie Preferences</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              You can manage your cookie preferences through your browser settings. Most web browsers allow you to control 
              cookies through their settings preferences. However, if you limit the ability of websites to set cookies, 
              you may worsen your overall user experience and/or lose the ability to access certain services.
            </p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Browser Controls</h3>
            <p>You can set or amend your web browser controls to accept or refuse cookies. Here's how to do this in popular browsers:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
              <li><strong>Mozilla Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
              <li><strong>Microsoft Edge:</strong> Settings &gt; Privacy, search, and services &gt; Cookies and site permissions</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Cookie Consent</h3>
            <p>
              When you first visit our website, we will ask you to consent to our use of cookies. You can withdraw or modify 
              your consent at any time through our cookie settings or by managing your browser settings.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, 
            legal, or regulatory reasons. We will post any changes on this page and, if the changes are significant, 
            we will provide a more prominent notice.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
