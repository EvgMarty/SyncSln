import HeaderCoocePrivac from '../../components/HeaderCoocePrivac/HeaderCoocePrivac';
import ParagraphBl from '../../components/ParagraphBl/ParagraphBl';
import ParagraphW from '../../components/ParagraphW/ParagraphW';
import SectionBlue from '../../components/SectionBlue/SectionBlue';
import SectionPolicy from '../../components/SectionPolicy/SectionPolicy';
import SectionSimple from '../../components/SectionSimple/SectionSimple';
import TitleBl from '../../components/TitleBl/TitleBl';
import TitleW from '../../components/TitleW/TitleW';
import styles from './TermsService.module.scss';

const TermsService = () => {
  return (
    <>
      <HeaderCoocePrivac
        page="Terms of Service"
        img="./img/coocePrivac/termHead.svg"
      />
      <SectionPolicy>
        <div className={styles.wrap}>
          <TitleBl>Cookie Policy</TitleBl>
          <div className={styles.textWrap}>
            <ParagraphBl>
              We use cookies to help improve your experience of our website at
              cloudtime365. This cookie policy is part of cloudtime365 privacy
              policy. It covers the use of cookies between your device and our
              site.
            </ParagraphBl>
            <ParagraphBl>
              We also provide basic information on third-party services we may
              use, who may also use cookies as part of their service. This
              policy does not cover their cookies.
            </ParagraphBl>
            <ParagraphBl>
              If you don’t wish to accept cookies from us, you should leave the
              website or instruct your browser to refuse cookies from
              cloudtime365. In such a case, we may be unable to provide you with
              some of your desired content and services.
            </ParagraphBl>
          </div>
        </div>
        <div className={styles.wrap}>
          <TitleBl>What is a cookie?</TitleBl>
          <div className={styles.textWrap}>
            <ParagraphBl>
              A cookie is a small piece of data that a website stores on your
              device when you visit. It typically contains information about the
              website itself, a unique identifier that allows the site to
              recognise your web browser when you return, additional data that
              serves the cookie’s purpose, and the lifespan of the cookie
              itself.
            </ParagraphBl>
            <ParagraphBl>
              Cookies are used to enable certain features (eg logging in), track
              site usage (eg analytics), store your user settings (eg time zone,
              notification preferences), and to personalise your content (eg
              advertising, language).
            </ParagraphBl>
            <ParagraphBl>
              Cookies set by the website you are visiting are usually referred
              to as first-party cookies. They typically only track your activity
              on that particular site.
            </ParagraphBl>
            <ParagraphBl>
              Cookies set by other sites and companies (i.e. third parties) are
              called third-party cookies They can be used to track you on other
              websites that use the same third-party service.
            </ParagraphBl>
          </div>
        </div>
      </SectionPolicy>

      <SectionBlue>
        <div className={styles.wrap}>
          <TitleW>Types of cookies and how we use them</TitleW>
          <div className={styles.subheading}>Essential cookies</div>
          <div className={styles.textWrap}>
            <ParagraphW>
              Essential cookies are crucial to your experience of a website,
              enabling core features like user logins, account management,
              shopping carts, and payment processing.
            </ParagraphW>
            <ParagraphW>
              We use essential cookies to enable certain functions on our
              website
            </ParagraphW>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.subheading}>Performance cookies</div>
          <div className={styles.textWrap}>
            <ParagraphW>
              Performance cookies track how you use a website during your visit.
              Typically, this information is anonymous and aggregated, with
              information tracked across all site users. They help companies
              understand visitor usage patterns, identify and diagnose problems
              or errors their users may encounter, and make better strategic
              decisions in improving their audience’s overall website
              experience. These cookies may be set by the website you’re
              visiting (first-party) or by third-party services. They do not
              collect personal information about you.
            </ParagraphW>
            <ParagraphW>We use performance cookies on our site.</ParagraphW>
          </div>
        </div>
      </SectionBlue>

      <SectionSimple>
        <div className={styles.wrap}>
          <TitleBl>Functionality cookies</TitleBl>
          <div className={styles.textWrap}>
            <ParagraphBl>
              Functionality cookies are used to collect information about your
              device and any settings you may configure on the website you’re
              visiting (like language and time zone settings). With this
              information, websites can provide you with customised, enhanced,
              or optimised content and services. These cookies may be set by the
              website you’re visiting (first-party) or by third-party services.
            </ParagraphBl>
            <ParagraphBl>
              We use functionality cookies for selected features on our site.
            </ParagraphBl>
          </div>
        </div>
        <div className={styles.wrap}>
          <TitleBl>Targeting/advertising cookies</TitleBl>
          <div className={styles.textWrap}>
            <ParagraphBl>
              Targeting/advertising cookies help determine what promotional
              content is most relevant and appropriate to you and your
              interests. Websites may use them to deliver targeted advertising
              or limit the number of times you see an advertisement. This helps
              companies improve the effectiveness of their campaigns and the
              quality of content presented to you. These cookies may be set by
              the website you’re visiting (first-party) or by third-party
              services. Targeting/advertising cookies set by third-parties may
              be used to track you on other websites that use the same
              third-party service.
            </ParagraphBl>
            <ParagraphBl>
              We use targeting/advertising cookies on our site.
            </ParagraphBl>
          </div>
        </div>
      </SectionSimple>
    </>
  );
};

export default TermsService;
