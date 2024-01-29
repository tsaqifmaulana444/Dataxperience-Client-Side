"use client"

import Navbar from "../components/frontend/Navbar"
import Footer from "../components/frontend/Footer"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation"

// export const metadata = {
//   title: 'Contact | Dataxperience'
// }

interface Feedback {
    id?: number
    name: string
    email: string
    type: string
    description: string
}

export default function PrivacyPolicy() {
    const router = useRouter()

    return (
        <div>
            <Navbar />
            <section className="flex sm:w-[82%] w-[86%] mx-auto mb-[90px] justify-between mt-[40px] sm:flex-row flex-col">
                <div>
                    <h1 className="font-bold text-[14px] sm:text-[20px] text-black">Privacy Policy</h1>

                    <p className="text-[12px] sm:text-[18px]">
                        Welcome to Dataxpertise! Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our website.
                    </p>

                    <h2 className="mt-6 font-bold text-[14px] sm:text-[20px] text-black" id="faq"># FAQ</h2>

                    <p className="text-[12px] sm:text-[18px]">
                        We collect both personal and non-personal information when you use our website. Personal information may include your name, email address, phone number, and other details you provide voluntarily. Non-personal information may include technical details such as your IP address, browser type, and device information.
                    </p>

                    <h2 className="mt-6 font-bold text-[14px] sm:text-[20px] text-black">How We Use Your Information</h2>

                    <p className="text-[12px] sm:text-[18px]">
                        We use the information we collect to improve your experience on our website, personalize content, and send you relevant updates. Your personal information may be used to communicate with you, respond to inquiries, and send newsletters or promotional materials. We may also analyze data to improve our services and offerings.
                    </p>

                    <h2 className="mt-6 font-bold text-[14px] sm:text-[20px] text-black">Cookies</h2>

                    <p className="text-[12px] sm:text-[18px]">
                        We may use cookies to enhance your browsing experience. Cookies are small data files stored on your device that help us analyze website usage and customize content. You can disable cookies in your browser settings, but this may affect certain functionalities of the site. By using our website, you consent to the use of cookies as described in this Privacy Policy.
                    </p>

                    <h2 className="mt-6 font-bold text-[14px] sm:text-[20px] text-black">Third-Party Links</h2>

                    <p className="text-[12px] sm:text-[18px]">
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any linked sites before providing any personal information.
                    </p>

                    <h2 className="mt-6 font-bold text-[14px] sm:text-[20px] text-black">Security</h2>

                    <p className="text-[12px] sm:text-[18px]">
                        We prioritize the security of your information and take reasonable measures to protect it. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security. We implement security protocols to safeguard your data and regularly review and update our security measures.
                    </p>

                    <h2 className="mt-6 font-bold text-[14px] sm:text-[20px] text-black">Changes to this Privacy Policy</h2>

                    <p className="text-[12px] sm:text-[18px]">
                        We may update this Privacy Policy periodically to reflect changes in our practices and legal requirements. Any changes will be posted on this page, and the date of the last update will be indicated. We recommend checking this page regularly for updates.
                    </p>

                    <p className="text-[12px] sm:text-[18px]">
                        If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:privacy@dataxpertise.com">privacy@dataxpertise.com</a>.
                    </p>

                    <h2 className="mt-6 font-bold text-[14px] sm:text-[20px] text-black" id="terms">Terms and Conditions</h2>

                    <p className="text-[12px] sm:text-[18px]">
                        By accessing and using our website, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with these terms, please refrain from using our website.
                    </p>
                    <div className="ml-5">
                        <h3 className="mt-4 font-bold text-[14px] sm:text-[20px] text-black">1. Use of Website</h3>

                        <p className="text-[12px] sm:text-[18px]">
                            You must use our website in accordance with all applicable laws and regulations. Unauthorized use or access to our website may lead to legal action.
                        </p>

                        <h3 className="mt-4 font-bold text-[14px] sm:text-[20px] text-black">2. Intellectual Property</h3>

                        <p className="text-[12px] sm:text-[18px]">
                            All content on this website, including text, graphics, logos, images, and software, is the property of Dataxpertise and is protected by intellectual property laws. Unauthorized use of any content may violate copyright, trademark, and other laws.
                        </p>
                    </div>

                    <h2 className="mt-6 font-bold text-[14px] sm:text-[20px] text-black" id="get-news">How We Get The News</h2>

                    <p className="text-[12px] sm:text-[18px]">
                        Our news section aims to provide you with timely and relevant information. We source our news from trusted authors and reputable sources in the industry. These authors are experts in their respective fields, ensuring the accuracy and reliability of the information we deliver to you.
                    </p>
                    <br />
                    <p className="text-[12px] sm:text-[18px]">
                        To enhance our news content, we occasionally leverage the advantages of artificial intelligence (AI). AI technologies help us analyze data trends, generate insights, and automate the creation of news articles. While AI plays a role in content creation, it is always guided and supervised by our editorial team to maintain quality and accuracy.
                    </p>
                    <br />
                    <p className="text-[12px] sm:text-[18px]">
                        We are committed to transparency and ethical journalism. If you have any concerns about our news content or would like to report an issue, please contact our editorial team at <a href="mailto:news@dataxpertise.com">news@dataxpertise.com</a>.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    )
}
