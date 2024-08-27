import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Personal Information: Name, email address, shipping address, billing address, phone number, and payment information.</p>
          <p>Automatically Collected Information: IP address, browser type, device information, pages visited, and interactions with our site.</p>
          <p>To Process Orders: Manage orders, process payments, fulfill shipping, and provide order status updates.</p>
          <p>Service Providers: With trusted third-party service providers who assist us with payment processing, shipping, email communication, and marketing.</p>
          <p>Track the pages you visit and your behavior on the website.</p>
          <p>add privacy policyWe may update this Privacy Policy from time to time. Any changes will be posted on this page, with the updated effective date.</p>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at:

Email: [your-email@domain.com]
Mailing Address: [Your Company Address]
</p>
        </div>
      </div>
    </Layout>
  );
};



export default Policy
