import styles from './PrivacyPolicy.module.scss';
import HeaderCoocePrivac from '../../components/HeaderCoocePrivac/HeaderCoocePrivac';
import SectionPolicy from '../../components/SectionPolicy/SectionPolicy';
import ParagraphBl from '../../components/ParagraphBl/ParagraphBl';
import TitleBl from '../../components/TitleBl/TitleBl';
import SectionBlue from '../../components/SectionBlue/SectionBlue';
import TitleW from '../../components/TitleW/TitleW';
import ParagraphW from '../../components/ParagraphW/ParagraphW';
import SectionSimple from '../../components/SectionSimple/SectionSimple';
import SectionGray from '../../components/SectionGray/SectionGray';

const PrivacyPolicy = () => {
  return (
    <>
      <HeaderCoocePrivac
        page="Privacy Policy"
        img="./img/coocePrivac/pryvacyHead.svg"
      />

      <SectionPolicy>
        <div className={styles.wrap}>
          <TitleBl>Privacy Policy</TitleBl>
          <div className={styles.textWrap}>
            <ParagraphBl>
              Your privacy is important to us. The company “cloudtime365”
              respects your privacy and comply with any applicable law and
              regulation regarding any personal information we may collect about
              you, including across our website and other sites we own and
              operate.
            </ParagraphBl>
            <ParagraphBl>
              Personal information is any information about you which can be
              used to identify you. This includes information about you as a
              person (such as name, address, and date of birth), your devices,
              payment details, and even information about how you use a website
              or online service.
            </ParagraphBl>
            <ParagraphBl>
              In the event our site contains links to third-party sites and
              services, please be aware that those sites and services have their
              own privacy policies. After following a link to any third-party
              content, you should read their posted privacy policy information
              about how they collect and use personal information. This Privacy
              Policy does not apply to any of your activities after you leave
              our site.
            </ParagraphBl>
            <ParagraphBl>
              This policy is effective as of 27 October 2021.
            </ParagraphBl>
            <ParagraphBl>Last updated: 27 October 2021</ParagraphBl>
          </div>
        </div>
        <div className={styles.wrap}>
          <TitleBl>Information We Collect</TitleBl>
          <div className={styles.textWrap}>
            <ParagraphBl>
              Information we collect falls into one of two categories:
              'voluntarily provided' information and 'automatically collected'
              information.
            </ParagraphBl>
            <ParagraphBl>
              'Voluntarily provided' information refers to any information you
              knowingly and actively provide us when using or participating in
              any of our services and promotions.
            </ParagraphBl>
            <ParagraphBl>
              'Automatically collected' information refers to any information
              automatically sent by your devices in the course of accessing our
              products and services.
            </ParagraphBl>
          </div>
        </div>
        <div className={styles.wrap}>
          <TitleBl>Log Data</TitleBl>
          <div className={styles.textWrap}>
            <ParagraphBl>
              When you visit our website, our servers may automatically log the
              standard data provided by your web browser. It may include your
              device’s Internet Protocol (IP) address, your browser type and
              version, the pages you visit, the time and date of your visit, the
              time spent on each page, and other details about your visit.
            </ParagraphBl>
            <ParagraphBl>
              Additionally, if you encounter certain errors while using the
              site, we may automatically collect data about the error and the
              circumstances surrounding its occurrence. This data may include
              technical details about your device, what you were trying to do
              when the error happened, and other technical information relating
              to the problem. You may or may not receive notice of such errors,
              even in the moment they occur, that they have occurred, or what
              the nature of the error is.
            </ParagraphBl>
            <ParagraphBl>
              Please be aware that while this information may not be personally
              identifying by itself, it may be possible to combine it with other
              data to personally identify individual persons.
            </ParagraphBl>
          </div>
        </div>
      </SectionPolicy>

      <SectionBlue>
        <div className={styles.wrap}>
          <TitleW>Device Data</TitleW>
          <div className={styles.textWrap}>
            <span className={styles.headListW}>
              When you visit our website or interact with our services, we may
              automatically collect data about your device, such as:
            </span>
            <ul className={styles.listW}>
              <li>
                <span className={styles.numW}>1</span>Device Type
              </li>
              <li>
                <span className={styles.numW}>2</span>Operating System
              </li>
              <li>
                <span className={styles.numW}>3</span>Unique device identifiers
              </li>
              <li>
                <span className={styles.numW}>4</span>Device settings
              </li>
              <li>
                <span className={styles.numW}>5</span>Geo-location data
              </li>
            </ul>
            <ParagraphW>
              When you visit our website or interact with our services, we may
              automatically collect data about your device, such as:
            </ParagraphW>
          </div>
        </div>
      </SectionBlue>

      <SectionSimple>
        <div className={styles.wrap}>
          <TitleBl>Personal Information</TitleBl>
          <div className={styles.textWrap}>
            <span className={styles.headListB}>
              We may ask for personal information — for example, when you
              subscribe to our newsletter or when you contact us — which may
              include one or more of the following:
            </span>
            <ul className={styles.listB}>
              <li>
                <span className={styles.numB}>1</span>Name
              </li>
              <li>
                <span className={styles.numB}>2</span>Email
              </li>
              <li>
                <span className={styles.numB}>3</span>Phone/mobile number
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.wrap}>
          <TitleBl>
            Legitimate Reasons for Processing Your Personal Information
          </TitleBl>
          <div className={styles.textWrap}>
            <ParagraphBl>
              We only collect and use your personal information when we have a
              legitimate reason for doing so. In which instance we only collect
              personal information that is reasonably necessary to provide our
              services to you.
            </ParagraphBl>
          </div>
        </div>
        <div className={styles.wrap}>
          <TitleBl>Collection and Use of Information</TitleBl>
        </div>
      </SectionSimple>

      <SectionGray>
        <div className={styles.textWrap}>
          <span className={styles.headListB}>
            We may collect personal information from you when you do any of the
            following on our website:
          </span>
          <ul className={styles.listB}>
            <li>
              <span className={styles.numB}>1</span>Sign up to receive updates
              from us via email or social media channels
            </li>
            <li>
              <span className={styles.numB}>2</span>Use a mobile device or web
              browser to access our content
            </li>
            <li>
              <span className={styles.numB}>3</span>Contact us via email, social
              media, or on any similar technologies
            </li>
            <li>
              <span className={styles.numB}>4</span>When you mention us on
              social media
            </li>
          </ul>
        </div>
        <div className={styles.textWrap}>
          <span className={styles.headListB}>
            We may collect, hold, use and disclose information for the following
            purposes, and personal information will not be further processed in
            a manner that is incompatible with these purposes:
          </span>
          <ul className={styles.listB}>
            <li>
              <span className={styles.numB}>1</span>to provide you with our
              platform's core features and services
            </li>
            <li>
              <span className={styles.numB}>2</span>to contact and communicate
              with you
            </li>
            <li>
              <span className={styles.numB}>3</span>for analytics, market
              research, and business development, including to operate and
              improve our website, associated applications, and associated
              social media platforms
            </li>
            <li>
              <span className={styles.numB}>4</span>for advertising and
              marketing, including to send you promotional information about our
              products and services and information about third parties that we
              consider may be of interest to you
            </li>
          </ul>
          <ParagraphBl>
            We may combine voluntarily provided and automatically collected
            personal information with general information or research data we
            receive from other trusted sources. For example, Our marketing and
            market research activities may uncover data and insights, which we
            may combine with information about how visitors use our site to
            improve our site and your experience on it.
          </ParagraphBl>
        </div>
      </SectionGray>

      <SectionSimple>
        <div className={styles.wrap}>
          <TitleBl>Security of Your Personal Information</TitleBl>
          <div className={styles.textWrap}>
            <ParagraphBl>
              When we collect and process personal information, and while we
              retain this information, we will protect it within commercially
              acceptable means to prevent loss and theft, as well as
              unauthorised access, disclosure, copying, use or modification.
            </ParagraphBl>
            <ParagraphBl>
              Although we will do our best to protect the personal information
              you provide to us, we advise that no method of electronic
              transmission or storage is 100% secure and no one can guarantee
              absolute data security.
            </ParagraphBl>
            <ParagraphBl>
              You are responsible for selecting any password and its overall
              security strength, ensuring the security of your own information
              within the bounds of our services. For example, ensuring you do
              not make your personal information publicly available via our
              platform.
            </ParagraphBl>
          </div>
        </div>
        <div className={styles.wrap}>
          <TitleBl>How Long We Keep Your Personal Information</TitleBl>
          <div className={styles.textWrap}>
            <ParagraphBl>
              We keep your personal information only for as long as we need to.
              This time period may depend on what we are using your information
              for, in accordance with this privacy policy. For example, if you
              have provided us with personal information such as an email
              address when contacting us about a specific enquiry, we may retain
              this information for the duration of your enquiry remaining open
              as well as for our own records so we may effectively address
              similar enquiries in future. If your personal information is no
              longer required for this purpose, we will delete it or make it
              anonymous by removing all details that identify you.
            </ParagraphBl>
            <ParagraphBl>
              However, if necessary, we may retain your personal information for
              our compliance with a legal, accounting, or reporting obligation
              or for archiving purposes in the public interest, scientific, or
              historical research purposes or statistical purposes.
            </ParagraphBl>
          </div>
        </div>
        <div className={styles.wrap}>
          <TitleBl>Children’s Privacy</TitleBl>
          <div className={styles.textWrap}>
            <ParagraphBl>
              We do not aim any of our products or services directly at children
              under the age of 13 and we do not knowingly collect personal
              information about children under 13.
            </ParagraphBl>
          </div>
        </div>
        <div className={styles.wrap}>
          <TitleBl>Disclosure of Personal Information to Third Parties</TitleBl>
        </div>
      </SectionSimple>

      <SectionGray>
        <div className={styles.textWrap}>
          <span className={styles.headListB}>
            We may disclose personal information to:
          </span>
          <ul className={styles.listB}>
            <li>
              <span className={styles.numB}>1</span>a parent, subsidiary or
              affiliate of our company
            </li>
            <li>
              <span className={styles.numB}>2</span>third-party service
              providers for the purpose of enabling them to provide their
              services including (without limitation) IT service providers, data
              storage, hosting and server providers, ad networks, analytics,
              error loggers, debt collectors, maintenance or problem-solving
              providers, marketing or advertising providers, professional
              advisors, and payment systems operators
            </li>
            <li>
              <span className={styles.numB}>3</span>our employees, contractors,
              and/or related entities
            </li>
            <li>
              <span className={styles.numB}>4</span>our existing or potential
              agents or business partners
            </li>
            <li>
              <span className={styles.numB}>5</span>credit reporting agencies,
              courts, tribunals, and regulatory authorities, in the event you
              fail to pay for goods or services we have provided to you
            </li>
            <li>
              <span className={styles.numB}>6</span>courts, tribunals,
              regulatory authorities, and law enforcement officers, as required
              by law, in connection with any actual or prospective legal
              proceedings, or in order to establish, exercise, or defend our
              legal rights
            </li>
            <li>
              <span className={styles.numB}>7</span>third parties, including
              agents or sub-contractors who assist us in providing information,
              products, services, or direct marketing to you
            </li>
            <li>
              <span className={styles.numB}>8</span>third parties to collect and
              process data
            </li>
            <li>
              <span className={styles.numB}>9</span>an entity that buys, or to
              which we transfer all or substantially all of our assets and
              business
            </li>
          </ul>
        </div>
        <div className={styles.textWrap}>
          <span className={styles.headListB}>
            Third parties we currently use include:
          </span>
          <ul className={`${styles.listB} ${styles.listFlex}`}>
            <li>
              <span className={styles.numB}>1</span>Google Analytics
            </li>
            <li>
              <span className={styles.numB}>2</span>Clicky
            </li>
            <li>
              <span className={styles.numB}>3</span>Kissmetrics
            </li>
            <li>
              <span className={styles.numB}>4</span>Statcounter
            </li>
            <li>
              <span className={styles.numB}>5</span>Open Web Analytics
            </li>
            <li>
              <span className={styles.numB}>6</span>Mixpanel
            </li>
            <li>
              <span className={styles.numB}>7</span>MailChimp
            </li>
            <li>
              <span className={styles.numB}>8</span>TinyLetter
            </li>
            <li>
              <span className={styles.numB}>9</span>mailerlite
            </li>
            <li>
              <span className={styles.numB}>10</span>Aweber
            </li>
            <li>
              <span className={styles.numB}>11</span>SendFox
            </li>
            <li>
              <span className={styles.numB}>12</span>CampaignMonitor
            </li>
            <li>
              <span className={styles.numB}>13</span>Google Adsense
            </li>
            <li>
              <span className={styles.numB}>14</span>Bing Ads
            </li>
            <li>
              <span className={styles.numB}>15</span>AdColony
            </li>
            <li>
              <span className={styles.numB}>16</span>AppLovin
            </li>
            <li>
              <span className={styles.numB}>17</span>Facebook
            </li>
            <li>
              <span className={styles.numB}>18</span>Linkedin
            </li>
            <li>
              <span className={styles.numB}>18</span>Youtube
            </li>
          </ul>
        </div>
      </SectionGray>

      <SectionSimple>
        <div className={styles.wrap}>
          <TitleBl>International Transfers of Personal Information</TitleBl>
          <div className={styles.textWrap}>
            <ParagraphBl>
              The personal information we collect is stored and/or processed in
              Ukraine, or where we or our partners, affiliates, and third-party
              providers maintain facilities.
            </ParagraphBl>
            <ParagraphBl>
              The countries to which we store, process, or transfer your
              personal information may not have the same data protection laws as
              the country in which you initially provided the information. If we
              transfer your personal information to third parties in other
              countries: (i) we will perform those transfers in accordance with
              the requirements of applicable law; and (ii) we will protect the
              transferred personal information in acco
            </ParagraphBl>
          </div>
        </div>
        <div className={styles.wrap}>
          <TitleBl>
            Your Rights and Controlling Your Personal Information
          </TitleBl>
          <div className={styles.textWrap}>
            <ul className={styles.listB}>
              <li>
                <span className={styles.numB}>Your choice:</span> By providing
                personal information to us, you understand we will collect,
                hold, use, and disclose your personal information in accordance
                with this privacy policy. You do not have to provide personal
                information to us, however, if you do not, it may affect your
                use of our website or the products and/or services offered on or
                through it.
              </li>
              <li>
                <span className={styles.numB}>
                  Information from third parties:
                </span>
                If we receive personal information about you from a third party,
                we will protect it as set out in this privacy policy. If you are
                a third party providing personal information about somebody
                else, you represent and warrant that you have such person’s
                consent to provide the personal information to us.
              </li>
              <li>
                <span className={styles.numB}>Marketing permission:</span>If you
                have previously agreed to us using your personal information for
                direct marketing purposes, you may change your mind at any time
                by contacting us using the details below.
              </li>
              <li>
                <span className={styles.numB}>Access:</span>You may request
                details of the personal information that we hold about you.
              </li>
              <li>
                <span className={styles.numB}>Correction:</span>If you believe
                that any information we hold about you is inaccurate, out of
                date, incomplete, irrelevant, or misleading, please contact us
                using the details provided in this privacy policy. We will take
                reasonable steps to correct any information found to be
                inaccurate, incomplete, misleading, or out of date.
              </li>
              <li>
                <span className={styles.numB}>Non-discrimination:</span>We will
                not discriminate against you for exercising any of your rights
                over your personal information. Unless your personal information
                is required to provide you with a particular service or offer
                (for example providing user support), we will not deny you goods
                or services and/or charge you different prices or rates for
                goods or services, including through granting discounts or other
                benefits, or imposing penalties, or provide you with a different
                level or quality of goods or services.
              </li>
              <li>
                <span className={styles.numB}>
                  Notification of data breaches:
                </span>
                We will comply with laws applicable to us in respect of any data
                breach.
              </li>
              <li>
                <span className={styles.numB}>Complaints:</span>If you believe
                that we have breached a relevant data protection law and wish to
                make a complaint, please contact us using the details below and
                provide us with full details of the alleged breach. We will
                promptly investigate your complaint and respond to you, in
                writing, setting out the outcome of our investigation and the
                steps we will take to deal with your complaint. You also have
                the right to contact a regulatory body or data protection
                authority in relation to your complaint.
              </li>
              <li>
                <span className={styles.numB}>Unsubscribe:</span>To unsubscribe
                from our email database or opt-out of communications (including
                marketing communications), please contact us using the details
                provided in this privacy policy, or opt-out using the opt-out
                facilities provided in the communication. We may need to request
                specific information from you to help us confirm your identity.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.wrap}>
          <TitleBl>Use of Cookies</TitleBl>
          <div className={styles.textWrap}>
            <ParagraphBl>
              We use 'cookies' to collect information about you and your
              activity across our site. A cookie is a small piece of data that
              our website stores on your computer, and accesses each time you
              visit, so we can understand how you use our site. This helps us
              serve you content based on preferences you have specified.
            </ParagraphBl>
            <ParagraphBl>
              Please refer to our Cookie Policy for more information.
            </ParagraphBl>
          </div>
        </div>
      </SectionSimple>

      <SectionBlue>
        <div className={styles.wrap}>
          <TitleW>Business Transfers</TitleW>
          <div className={styles.textWrap}>
            <ParagraphW>
              If we or our assets are acquired, or in the unlikely event that we
              go out of business or enter bankruptcy, we would include data,
              including your personal information, among the assets transferred
              to any parties who acquire us. You acknowledge that such transfers
              may occur, and that any parties who acquire us may, to the extent
              permitted by applicable law, continue to use your personal
              information according to this policy, which they will be required
              to assume as it is the basis for any ownership or use rights we
            </ParagraphW>
          </div>
        </div>
      </SectionBlue>

      <SectionSimple>
        <div className={styles.wrap}>
          <TitleBl>Limits of Our Policy</TitleBl>
          <div className={styles.textWrap}>
            <ParagraphBl>
              Our website may link to external sites that are not operated by
              us. Please be aware that we have no control over the content and
              policies of those sites, and cannot accept responsibility or
              liability for their respective privacy practices.
            </ParagraphBl>
          </div>
        </div>
        <div className={styles.wrap}>
          <TitleBl>Changes to This Policy</TitleBl>
          <div className={styles.textWrap}>
            <ParagraphBl>
              At our discretion, we may change our privacy policy to reflect
              updates to our business processes, current acceptable practices,
              or legislative or regulatory changes. If we decide to change this
              privacy policy, we will post the changes here at the same link by
              which you are accessing this privacy policy.
            </ParagraphBl>
            <ParagraphBl>
              If required by law, we will get your permission or give you the
              opportunity to opt in to or opt out of, as applicable, any new
              uses of your personal information.
            </ParagraphBl>
          </div>
        </div>
        <div className={styles.wrap}>
          <TitleBl>
            Additional Disclosures for General Data Protection Regulation (GDPR)
            Compliance (EU)
          </TitleBl>
        </div>
      </SectionSimple>

      <SectionGray>
        <div className={styles.wrap}>
          <TitleBl>Data Controller / Data Processor</TitleBl>
          <div className={styles.textWrap}>
            <ParagraphBl>
              The GDPR distinguishes between organisations that process personal
              information for their own purposes (known as “data controllers”)
              and organizations that process personal information on behalf of
              other organizations (known as “data processors”).
            </ParagraphBl>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.prevHeader}>
            Legal Bases for Processing Your Personal Information
          </div>
          <div className={styles.textWrap}>
            <ParagraphBl>
              We will only collect and use your personal information when we
              have a legal right to do so. In which case, we will collect and
              use your personal information lawfully, fairly and in a
              transparent manner. If we seek your consent to process your
              personal information, and you are under 16 years of age, we will
              seek your parent or legal guardian’s consent to process your
              personal information for that specific purpose.
            </ParagraphBl>
          </div>
        </div>
        <div className={styles.textWrap}>
          <span className={styles.headListB}>
            Our lawful bases depend on the services you use and how you use
            them. This means we only collect and use your information on the
            following grounds:
          </span>
        </div>
        <div className={styles.wrap}>
          <div className={styles.prevHead}>Consent From You</div>
          <div className={styles.textWrap}>
            <ParagraphBl>
              Where you give us consent to collect and use your personal
              information for a specific purpose. You may withdraw your consent
              at any time using the facilities we provide; however this will not
              affect any use of your information that has already taken place.
              You may consent to providing your email address for the purpose of
              receiving marketing emails from us. While you may unsubscribe at
              any time, we cannot recall any email we have already sent. If you
              have any further enquiries about how to withdraw your consent,
              please feel free to enquire using the details provided in the
              Contact Us section of this privacy policy.
            </ParagraphBl>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.prevHead}>
            Performance of a Contract or Transaction
          </div>
          <div className={styles.textWrap}>
            <ParagraphBl>
              Where you have entered into a contract or transaction with us, or
              in order to take preparatory steps prior to our entering into a
              contract or transaction with you. For example, if you contact us
              with an enquiry, we may require personal information such as your
              name and contact details in order to respond.
            </ParagraphBl>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.prevHead}>Our Legitimate Interests</div>
          <div className={styles.textWrap}>
            <ParagraphBl>
              Where we assess it is necessary for our legitimate interests, such
              as for us to provide, operate, improve and communicate our
              services. We consider our legitimate interests to include research
              and development, understanding our audience, marketing and
              promoting our services, measures taken to operate our services
              efficiently, marketing analysis, and measures taken to protect our
              legal rights and interests.
            </ParagraphBl>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.prevHead}>Compliance with Law</div>
          <div className={styles.textWrap}>
            <ParagraphBl>
              In some cases, we may have a legal obligation to use or keep your
              personal information. Such cases may include (but are not limited
              to) court orders, criminal investigations, government requests,
              and regulatory obligations. If you have any further enquiries
              about how we retain personal information in order to comply with
              the law, please feel free to enquire using the details provided in
              the Contact Us section of this privacy policy.
            </ParagraphBl>
          </div>
        </div>
      </SectionGray>

      <SectionSimple>
        <div className={styles.wrap}>
          <TitleBl>
            International Transfers Outside of the European Economic Area (EEA)
          </TitleBl>
          <div className={styles.textWrap}>
            <ParagraphBl>
              We will ensure that any transfer of personal information from
              countries in the European Economic Area (EEA) to countries outside
              the EEA will be protected by appropriate safeguards, for example
              by using standard data protection clauses approved by the European
              Commission, or the use of binding corporate rules or other legally
              accepted means.
            </ParagraphBl>
          </div>
        </div>
        <div className={styles.wrap}>
          <TitleBl>
            Your Rights and Controlling Your Personal Information
          </TitleBl>
          <div className={styles.textWrap}>
            <ul className={styles.listB}>
              <li>
                <span className={styles.numB}>Restrict:</span>You have the right
                to request that we restrict the processing of your personal
                information if (i) you are concerned about the accuracy of your
                personal information; (ii) you believe your personal information
                has been unlawfully processed; (iii) you need us to maintain the
                personal information solely for the purpose of a legal claim; or
                (iv) we are in the process of considering your objection in
                relation to processing on the basis of legitimate interests.
              </li>
              <li>
                <span className={styles.numB}> Objecting to processing:</span>{' '}
                You have the right to object to processing of your personal
                information that is based on our legitimate interests or public
                interest. If this is done, we must provide compelling legitimate
                grounds for the processing which overrides your interests,
                rights, and freedoms, in order to proceed with the processing of
                your personal information.
              </li>
              <li>
                <span className={styles.numB}>Data portability:</span>You may
                have the right to request a copy of the personal information we
                hold about you. Where possible, we will provide this information
                in CSV format or other easily readable machine format. You may
                also have the right to request that we transfer this personal
                information to a third party.
              </li>
              <li>
                <span className={styles.numB}>Deletion:</span>You may have a
                right to request that we delete the personal information we hold
                about you at any time, and we will take reasonable steps to
                delete your personal information from our current records. If
                you ask us to delete your personal information, we will let you
                know how the deletion affects your use of our website or
                products and services. There may be exceptions to this right for
                specific legal reasons which, if applicable, we will set out for
                you in response to your request. Please be aware that search
                engines and similar third parties may still retain copies of
                your personal information that has been made public at least
                once, like certain profile information and public comments, even
                after you have deleted the information from our services or
                deactivated your account.
              </li>
            </ul>
          </div>
        </div>
      </SectionSimple>
    </>
  );
};

export default PrivacyPolicy;
