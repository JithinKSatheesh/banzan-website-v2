import React from 'react'

import Fade from 'react-reveal/Fade';
import { Footer } from './Footer';
import { ZenBg } from './DummyBg';

export default function Policy(props) {
    
    const _style ={
        policy_container:{
            position: 'fixed',
            width: '100%',
            marginTop: '50px',
            height: '100%',
            overflowY: 'scroll',
            overflowX:'hidden'
        }
    }
    

    return (
        <>
        <div className="Maincontainer">
            <ZenBg/>
            <div 
                style={_style.policy_container}>
                <PolicyPage/>
            </div>
        </div> 
            
        </>
    )
}


const PolicyPage = ()=>{

    const _style = {
        hero_container: {
            position: "relative",
            margin: 'auto',
            maxWidth: '850px',
            width: '95%',
        },
    };

    return(
        <div style={_style.hero_container} >
            <div className="space-50"></div>
            <div className="space-50"></div>
            
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col col-12 h3 text-grey text-center  font-weight-bold">
                            Privacy Policy
                        </div>
                        <div className="space-50"></div>
                        <br/><br/>
                        <div className="col col-12   font-weight-light text-grey">
                            Banzan Studios (Part of Banzan Ventures Private Limited ("Banzan”, “Banzan Studios", “Banzan
                            Ventures", "we" or "us") recognizes that its customers, visitors, users, and others (collectively or
                            individually "Users") who use games, applications, and other services hosted by Banzan Ventures
                            (collectively, the "Banzan Sites") value their privacy. This Privacy Policy details important
                            information regarding the use and disclosure of User information collected on the Banzan Sites.
                            Banzan provides this Privacy Policy to help you make an informed decision about whether to use or
                            continue using the Banzan Sites.


                            <br/><br/>
                            This Privacy Policy is incorporated into and is subject to the Banzan Terms of Service. Your use of
                            the Banzan Sites and
                            any personal information you provide on the Banzan Sites remain subject to the terms of this Privacy
                            Policy and our
                            Terms of Use. If you access the Banzan Sites from a third-party social networking site or with the
                            aid of a downloadable
                            application on your device, you may also be required to read and accept the third party's terms of
                            service and privacy
                            policy.


                        </div>
                        <div className="col col-12   font-weight-light text-grey">
                            <br/><br/>
                            <div className="font-weight-bold h5"> Policy Objective</div>
                            <br/>
                            We at Banzan, are committed to protecting the privacy of our users ("you" or "users"). The objective
                            of this Privacy
                            Policy is to inform you about how we collect, store and use the information you provide in
                            connection with the use and
                            access of the game on a social network including any content in connection with the same on our
                            server side
                            infrastructure, ("Service"). This policy applies solely to the information (more particularly
                            defined below) collected
                            by us during your use of the Service. This Privacy Policy forms part of our Terms.
                        </div>
                        <div className="col col-12   font-weight-light text-grey">
                            <br/><br/>
                            <div className="font-weight-bold h5"> Amendment</div>
                            <br/>
                            You are responsible to be aware of and agree to abide by this Privacy Policy and any amendments made
                            thereto from time
                            to time. By using the Service, you agree to the collection and use of your personal information in
                            terms of this Privacy
                            Policy.

                        </div>
                        <div className="col col-12   font-weight-light text-grey">
                            <br/><br/>
                            <div className="font-weight-bold h5"> Collection of Information</div>
                            <br/>
                            When you register for obtaining the Services, we may collect and record the information you provide
                            or consent to
                            provide us, whether through the Service or through any other network or third party services.
                            <br/><br/>
                            "Information" comprises of "Personal Information" and "Non-Personal Information" as defined below:
                            <br/><br/>
                            "Account Information" includes your User ID and your password and any account security information
                            provided by you for resetting your password.
                            <br/><br/>
                            "Personal information" is such information which can be used to identify your identity or to
                            communicate with you, whether directly obtained by us or from through a third party provider or
                            network, and presently includes, without limitation, the following:
                            <br/><br/>
                            (1) Your name. <br/>
                            (2) Your network or third-party service User ID. <br/>
                            (3) Cellular device's configuration and identification number. <br/>
                            (4) Cellular Service number when you sign up for SMS notifications. <br/>
                            (5) Your identifier for purchase transactions. <br/>
                            (6) Your email address. <br/>
                            (7) Your picture. <br/>
                            (8) Your user identification number. <br/>
                            (9) Your address; and <br/>
                            (10) Any other relevant information included in your application, social network, or other online
                            profile. <br/>

                            <br/><br/>
                            "Non-Personal information" is information that is by itself insufficient to either identify you or
                            communicate with you and may be solicited by us. This may include, but is not limited to your:
                            <br/><br/>
                            (1) Date of birth and age. <br/>
                            (2) Gender. <br/>
                            (3) The specifications of the computer systems and internet services that you use. <br/>
                            (4) Information about software and application use or preference. <br/>
                            (5) Information about your websites and online services preferences. <br/>
                            (6) Your cellular service features and provider details. <br/>
                            (7) Your location. <br/>
                            (8) Browser type, IP/ Mac address, Device ID (Android), Advertiser ID (iOS); and <br/>
                            (9) Any other similar information about you which may be relevant to our purpose. <br/>

                            <br/>

                            Without limiting the generality of the foregoing, we may, for the purposes stated herein, collect
                            Information about your
                            occupation, language, postal code and location, as well as Information about your computer, cellular
                            device, software,
                            platform, incident reports, Internet Protocol (IP) address, network address and connection, browser,
                            ref pages, URLs,
                            clicks, domains, pages accessed, time spent overall and on each page, activity date and time. In
                            addition, you consent
                            to our collection and use of all Information that you provided to any social network, a cellular
                            services provider or
                            any third party provider used to connect with or access the Service and agreed with such party to
                            share such Information
                            with us. You shall be entitled to update the information provided by you by contacting us at 
                            <a className='text-now' href="mailto:info@banzan.co">info@banzan.co</a> .Your
                            information shall be updated subject to reasonable checks and confirmation by Banzan. <br/>
                            <br/>
                            We may also employ third parties to collect Information or any part thereof, to provide email
                            delivery services or to
                            facilitate any other aspect of our activity or interaction with you.
                            <br/><br/>

                            <div className="h5 font-weight-bold">Use of Information </div>
                            <br/>

                            The predominant purposes of collecting Information from you are to help improve the Service, fulfill
                            your requests,
                            resolve your issues, and support your transactions. In addition, we may use your Information in a
                            form that is not
                            personally identifiable to help us in analyzing various aspects of user behavior for the purpose of
                            improving our
                            Product and Services. We may use your Information in communicating with our users, including, but
                            not limited to the
                            purpose of promoting our Services to you and other users and disseminating information about
                            products, new features,
                            improvements, offers, upgrades, contests and other material of interest. You may have an option to
                            opt out of some
                            information of this nature. For the purpose stated herein, we can share any aggregated Non-Personal
                            Information with
                            parties who help in analyzing such information.
                            <br/><br/>
                            Use of Personal and Non-Personal Information may be done separately or in such combinations as may
                            be suitable for the relevant purpose.
                            <br/><br/>
                            Our friend referral and/or finders, whether provided directly through the Service or through a
                            network or other third party provider, will help you communicate with your contacts and will allow
                            them to associate your account maintained with us with a profile and/or email address when you
                            choose to access friend referral on the Service. If you choose to use this, we may ask you for your
                            friend's name and email address to send emails or messages on your behalf inviting him or her to try
                            out the Service. We may retain such information for a limited time solely for sending some reminders
                            messages.
                            <br/><br/>
                            All Information collected by us will be used only for the purpose specified herein. We restrict
                            access of your Information to our employees, partners, service providers, affiliates, tracking
                            utility companies, contractors and agents and only allow access to those who need to know that
                            information and only in order to process it on our behalf. Your Information may be archived by us
                            for future reference. You are aware and consent that we may employ several third parties to
                            facilitate us in providing the Services or to provide some part of the Services on our behalf.
                            <br/><br/>
                            In the event you do not wish that we use your Information for any of the purposes specified in the
                            Privacy Policy, you may close your account by uninstalling our application.
                            <br/><br/>
                            All users of the Service consent to the use of Information for the purpose stated in this Privacy
                            Policy.
                            <br/><br/>

                            <div className="h5 font-weight-bold">Message Boards and Chat</div>
                            <br/>
                            You may choose to disclose any information about yourself or about any person or organization while
                            generating any user-initiated content. Any information voluntarily provided by you without any
                            indication or request generated from us shall not be protected under this Privacy Policy. You shall
                            be responsible for all consequences of disclosing any information about yourself or about any person
                            or organization in such manner.
                            <br/>

                            <div className="h5 font-weight-bold">Exceptions to Restriction in Disclosure of Information or Account
                                Information </div>
                            <br/>
                            You understand and agree that we may be required to disclose any Information or Account Information
                            by a competent legal authority or that we may voluntarily choose to disclose any such Information or
                            Account Information under reasonable belief that this is necessary for any lawful purpose. We will
                            be under no legal obligation to either inform you about the presence of such a request or contest
                            such a request for Information or Account Information whatsoever.
                            <br/><br/>
                            Reorganisation or Change of Control
                            <br/><br/>
                            In the event of change of control, corporate reorganization or any other event which alters the
                            beneficial ownership of Banzan or there is a change in ownership of the business for the purpose of
                            which such Information or Account Information is created or collected, you grant unrestricted
                            consent to us to transfer all the Information or Account Information together with the commercial
                            interest in the successor in interest of Banzan or the owner of the business that will provides the
                            Service.
                            <br/><br/>

                            <div className="h5 font-weight-bold">Cookies & Links</div>
                            <br/>
                            We may use "cookies" to collect information. A cookie is a data file that uniquely identifies your
                            browser. The Service may send cookies to your computer or cellular device when you use or access the
                            Service. Cookies may be used for the purposes of improving the quality and ease of access to the
                            Service. Cookies on your browser are also used to target advertisements. Cookies can be disabled but
                            disabling Cookies may also impact your ability to use full functionality of the Service
                            <br/><br/>
                            The Service may contain Links to third party websites or applications. The presence of such Links
                            does not indicate any endorsement of these websites by us or that we have any affiliation with these
                            websites. Your use and access of any such website is solely at your discretion and entirely at your
                            own risk. We do not take any responsibility for the Information or Account Information that you
                            share on these third-party websites and cannot guarantee that they will adhere to privacy and
                            security practices akin to us. Furthermore, the use of cookies by our partners, affiliates, or
                            tracking utility company is not covered by our Privacy Policy. We do not have access to or control
                            of these cookies. Our partners, affiliates, or tracking utility company use session ID cookies to
                            make it easier for you to navigate our site.
                            <br/><br/>
                            If you have granted us access to your Account Information through Facebook, you may request us to
                            delete your Account Information by following the directions available at Facebook. You can request
                            deletion of your Account Information by removing the Numzy application from your social network or
                            third-party service account in accordance with the instructions provided therein.
                            <br/><br/>

                            <div className="h5 font-weight-bold">Data Security</div>
                            <br/>
                            We take appropriate organizational and technical measures to protect against unauthorized access to
                            or unauthorized alteration, disclosure or destruction of Information and Account Information. These
                            include internal reviews of our data collection, storage and processing practices and security
                            measures, including appropriate encryption and physical security measures to guard against
                            unauthorized access to systems where we store Account Information and Information. We have an
                            information security program and information security policies which contain managerial, technical,
                            operational, and physical security control measures adopted by us for that purpose.
                            <br/><br/>
                            We strive to keep utmost importance to data security with our hosting and such other third party
                            service providers. We shall ensure regular checks to identify any potential breach or risk and in
                            such event, you, the user, shall be notified immediately for necessary action.
                            <br/><br/>
                            While we would be taking appropriate measures to protect the security of Account Information and
                            Information, please do note that we do not guarantee absolute protection from security breach.
                            Further, data which is transmitted over the Internet is inherently exposed to security risks or
                            threats. Therefore, we also cannot guarantee any security for such information in the course of
                            transmission through the internet infrastructure or any unsolicited disclosures made by any user
                            availing the Services.
                            <br/><br/>
                            You are advised that if you become aware or suspect of or reasonably suspect any breach of security,
                            including compromise of your Account Information, it is your responsibility to immediately notify
                            us.
                            <br/><br/>
                            <div className="h5 font-weight-bold">Data Retention</div>
                        
                            Banzan shall retain the information provided by the users for such period of time as is required to
                            fulfil the purposes for which such information is collected, as outlined in this Privacy Policy,
                            subject to such longer time periods of retention as may be required under any applicable laws.
                            <br/><br/>
                            <div className="h5 font-weight-bold">Policy with Respect to Persons Under 18 Years of Age</div>
                        
                            This product is generally intended for use by those 18 or older for amusement purposes only or if
                            younger, under parental supervision. Without prejudice to the above, we do not knowingly collect
                            personal information from people under the age of 13. We will take immediate steps to delete such
                            Account Information as soon as it is detected.
                            <br/><br/>
                            {/* <div className="h5 font-weight-bold">Your Rights</div>
                        
                            You have the unrestricted right to withdraw consent, that you have previously provided, to our
                            processing of your data at any time. Withdrawing your consent means that we will stop processing the
                            data that you had previously given us consent to use. There will be no consequences for withdrawing
                            your consent. However, in some cases, we may continue to use the data where so permitted by having a
                            legitimate reason for doing so.
                            <br/><br/>
                            <div className="h5 font-weight-bold">Your Rights</div>
                            Request user data deletion
                            <br />
                            When you install and use Banzan Studios mobile applications, we can collect and process some of your data for different legitimate purposes.
                            You will find below explanations regarding the reasons why we may collect data.
                            <br /><br />
                            Why is data collected?
                            <br />
                            Banzan Studios and its third-party partners collect data: 
                            <br />
                            <ul>
                                <li>
                                To provide you with the services you asked for
                                </li>
                                <li>
                                To run analytics and understand how users interact with our product and services to improve them continuously
                                </li>
                            </ul>

                            <br/><br/>
                            The third-party partners that Banzan Studios will share the data with are: 
                            <br/><br/>
                            <ul>
                                <li>GameAnalytics</li>
                                <li>Facebook Analytics</li>
                                <li>Adjust</li>
                                <li>Voodoo</li>
                            </ul>
                            Data deletion requests
                            To delete user data collected by Banzan Studios, please reach out to banzanven@gmail.com.
                            If you also want to request the deletion of the data that may have been collected about you or your device by our third-party partners that are acting as independent data controllers, you will find below the contact for each partner and the link to the relevant section of their privacy policies:


                            <br /><br /> */}
                            <div className="h5 font-weight-bold">Contact Us</div>
                            If you have comments or questions about this Privacy Policy and our privacy practices, you may
                            contact us at <a className='text-now' href="mailto:info@banzan.co">info@banzan.co</a> 


                        </div>
                        <div className="space-50"></div>
                    </div>
                </div>
            </section>


            <div className="space-100"></div>
            <div className="space-100"></div>
            <Footer/>
            <div className="space-100"></div>

        </div>
    )

}
