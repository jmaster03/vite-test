import { Footer } from "../navigation/Footer";
import { Menu } from "../navigation/Menu";

export function PrivacyP() {
    return (
        <div>
            <Menu />
            <main className="main container">
                <h2 className="mt-5 mb-3 text-center">Privacy Policy</h2>
                 <p style={{ textAlign: 'justify', marginBottom:'20px' }}>At Mernauta, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect information about you when you use our website.</p>
                <h5 className="text-center">Information We Collect</h5>
                <p style={{ textAlign: 'justify', marginBottom:'20px' }}>When you use our website, we may collect certain information about you, including:</p>
                <ul>
                    <li>Your name, email address, and other contact details when you create an account with us or sign up for our newsletter</li>
                    <li>Information about your device, including your IP address and browser type, when you visit our website</li>
                    <li>Information about your purchase history and preferences when you make a purchase through our website</li>
                </ul>
                <p style={{ textAlign: 'justify', marginBottom:'20px' }}>We do not collect any sensitive information such as credit card details as we use third-party payment processors to handle all payments. We do not have access to your credit card information.</p>
                <h5 className="text-center">How We Use Your Information</h5>
                <p style={{ textAlign: 'justify', marginBottom:'20px' }}>We use the information we collect from you to:</p>
                <ul>
                    <li>Process and fulfill your orders</li>
                    <li>Communicate with you about your orders and provide customer support</li>
                    <li>Send you marketing communications about our products and services</li>
                    <li>Improve our website and the products and services we offer</li>
                    <li>Prevent fraud and unauthorized access to our website</li>
                </ul>
                <h5 className="text-center">Sharing Your Information</h5>
                <p style={{ textAlign: 'justify', marginBottom:'20px' }}>We do not sell, trade, or otherwise transfer your personal information to outside parties except as described below:</p>
                <ul>
                    <li>We may share your information with third-party service providers who help us operate our website and provide services to you, such as payment processors and shipping providers</li>
                    <li>We may share your information with law enforcement or other government agencies if required by law or if we believe that the disclosure is necessary to protect our rights or the rights of others, or to prevent harm</li>
                </ul>
                <h5 className="text-center">Your Rights</h5>
                <p style={{ textAlign: 'justify', marginBottom:'20px' }}>You have certain rights regarding the information we collect about you. You can:</p>
                <ul>
                    <li>Access and receive a copy of the personal information we hold about you</li>
                    <li>Ask us to update or correct any inaccurate or incomplete personal information we hold about you</li>
                    <li>Object to the processing of your personal information or withdraw your consent to our processing of your personal information at any time</li>
                    <li>Ask us to delete your personal information in certain circumstances, such as when it is no longer necessary for us to retain your information</li>
                </ul>
                <p style={{ textAlign: 'justify', marginBottom:'20px' }}>To exercise any of these rights, please contact us using the details provided at the end of this Privacy Policy.</p>
                <h5 className="text-center">Data Retention</h5>
                <p style={{ textAlign: 'justify', marginBottom:'20px' }}>We will retain your personal information for as long as necessary to provide you with our products and services and as long as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
                <h5 className="text-center">Security</h5>
                <p style={{ textAlign: 'justify', marginBottom:'20px' }}>We take reasonable measures to protect the information we collect about you from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>

                <h5 className="text-center">Changes to this Privacy Policy</h5>
                <p style={{ textAlign: 'justify', marginBottom:'20px' }}>We may update this Privacy Policy from time to time to reflect changes to our information practices. If we make any material changes, we will notify you by email (sent to the email address specified in your account) or by posting a notice on our website prior to the change becoming effective. We encourage you to periodically review this page for the latest information on our privacy practices.</p>
                <h5 className="text-center">Contact Us</h5>
                <p style={{ textAlign: 'justify', marginBottom:'20px' }}>If you have any questions or concerns about our privacy practices or this Privacy Policy, please contact us by email at contact@maernauta.com</p>
            </main>
            <Footer />
        </div>
    )
}