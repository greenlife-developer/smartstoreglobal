import React from "react";
import Header from "../../components/Header/Header";
import "./home.css";
import Footer from "../../components/Footer/Footer";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img8 from "../../assets/img8.jpg";
import img3 from "../../assets/img3.jpg";
import img7 from "../../assets/img7.jpg";
import img6 from "../../assets/img6.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import info1 from "../../assets/info1.jpg";
import info2 from "../../assets/info2.jpg";
import info3 from "../../assets/info3.jpg";
import moneyback from "../../assets/moneyback.png";
import Cta from "../../components/Cta";

const Home = () => {
  return (
    <div className="homepage">
      {/* <Header /> */}
      <header>
        <h1>TREASURE MAN HERBAL SUPPLEMENT FOR MEN</h1>
        <p>Fertility Booster And Energy Enhancer</p>
      </header>

      <section class="product-section">
        <h2>About The Product</h2>
        <img src={img1} alt="Treasure Man Product Image" />
        <p>
          TREASURE MAN for men is a natural herbal formula that stimulates
          sexual activities, increases sexual pleasure, and enhances overall
          sexual well-being. It's made from potent roots and herbs sourced from
          the deep tropical virgin forests of West Africa and other parts of the
          world. TREASURE MAN has been scientifically developed to expand
          erectile tissues and significantly improve sexual performance.
        </p>
      </section>

      <Cta />

      <section class="testimonials">
        <h2>Happy Customer Feedback</h2>
        <div class="testimonial-list">
          <div class="testimonial-item">
            <img src={img2} alt="Testimonial 1" />
          </div>
          <div class="testimonial-item">
            <img src={img8} alt="Testimonial 2" />
          </div>
          <div class="testimonial-item">
            <img src={img7} alt="Testimonial 3" />
          </div>
          {/* <div class="testimonial-item">
            <img src={img5} alt="Testimonial 4" />
          </div> */}
        </div>
      </section>

      <section className="product-section section_3">
        <h2>
          HERE IS THE ONLY 60 SECONDS EXERCISE THAT YOU NEED TO EXPERIENCE A
          TRIPPLE TREAT PERFORMANCE, AND LAST UP TO 1 HOUR IN THE BEDROOM AND
          BEYOND...
        </h2>
        <p>
          What defines a real man is not just the amount of money in his bank
          account, but also the ability to satisfy his partner well in bed. Lets
          be honest, A man not being able to meet this obligation can <br />{" "}
          lead to problems in the relationship; like losing his respect, self
          confidence and worst off – losing madam to another man. This is why
          some Asian Scientists took upon themselves to find a <br /> solution –
          which led to the formulation of this herbal product called the Alpha
          Tea to help put a permanent end to this issue and help men get back
          their spark inside-out To be honest, this stuff <br /> works… No
          matter how long you have been battling with this or how severe it is
          or how many product you have tried in the past. Whether you find it
          hard to get that early morning erection, <br /> or always have loss of
          appetite when its time to do or your little man sleep off during or
          before the match begins, this product is the perfect solution.
        </p>

        <img className="small_imgs" src={img3} alt="" />
      </section>
      <Cta />

      <section class="product-section section_3">
        <h2>Technical Report</h2>
        <p>
          TREASURE MAN for men Is a natural herbal formula that stimulates
          sexual activities, increase sexual pleasure and enhances overall
          sexual wellbeing.
        </p>
        <p>
          TREASURE MAN for men is a blend of potent roots and herbs sourced from
          The deep tropical virgin forests of west Africa other parts of the
          world. it has been carefully formulated using age old African herbal
          formulas into a cocktail of natural roots and herbs that can be used
          to stimulate the enlargement the erectile tissues called corpus
          cavernosum in the penis, it also increases libido and causes longer
          lasting and stronger erections
        </p>
        <p>
          When a man is aroused blood naturally flows to the erectile tissues in
          the penis the enlarging it and keep it turgid and hard, however, due
          to host of reasons ranging from inadequate and unhealthy diets, to
          non-healthy lifestyles health issues and genetics, the ability to
          attain and maintain an erection that can maximize sexual pleasure has
          been grossly downgraded.
        </p>
        <p>
          Penile size also is being affected, while some cases are genetic some
          cases could also be caused by the factors listed above.
        </p>
      </section>

      <section class="product-section section_3">
        <h2>EFFECTIVENESS AND EFFICACY</h2>
        <p>
          TREASUREMAN for men has been scientifically developed to expand
          erectile tissues and make them larger as it does this, it also enables
          erectile tissues to hold much more blood than before keeping the penis
          Harder and more erect for longer periods, thereby improving the
          overall sexual experience.
        </p>
        <p>
          TREASUREMAN for men has been proven to increase the overall size of
          the penis from the girth to the length, there by maximizing the sexual
          pleasure you give and receive.
        </p>
        <p>
          TREASUREMAN for men African herbal formula significantly improves the
          production and quality of semen and sperm this increases a mans
          virility and fertility, and also improves sperm count.
        </p>
        <img src={img6} alt="" />
      </section>

      <section class="product-section section_3">
        <h2>ADMINISTRATION AND DOSAGE</h2>
        <p>
          TREASUREMAN for men is a capsules and is administered orally at a
          dosage of 2 capsules daily
        </p>
        <p>
          It Is required to be consumed daily or in cases of use as an emergency
          sexual
        </p>
        <p>
          stimulant, an hour before intercourse, however it is to be noted that
          TREASUREMAN for
        </p>
        <p>
          men is not meant to be an emergency supplement, it is a long term
          treatment for
        </p>
        <p>
          erectile dysfunction And As such should be taken regularly at the
          recommended dosage.
        </p>
      </section>
      <Cta />

      <section class="product-section section_3">
        <h2>WHO CAN CONSUME TREASUREMAN for men</h2>
        <p>
          TREASUREMAN for men is for sexually active adults. It is basically
          formulated for men, however
        </p>
        <p>
          it has been found to considerably increase libido in women as well and
          reduce dryness during intercourse.
        </p>
        <p>It also has a lot of benefits for the very aged.</p>
      </section>

      <section class="product-section section_3">
        <h2>CONSTITUENTS</h2>
        <p>
          TREASUREMAN for men is a safe proprietary selection of special roots
          And herbs mainly from the virgin forests of tropical Africa and
          carefully cultured into a powerful and highly effective supplement
        </p>
        <img className="small_imgs" src={img9} alt="" />
      </section>

      <section class="product-section section_3">
        <h2>SIDE EFFECTS AND CONTRA-INDICATIONS</h2>
        <p>
          TREASUREMAN for men is a non-prescription formula that is safe for you
          to use. It has no known side effects, however as with all dietary
          supplements, do not take in excess of the recommended dosage. SHOULD
          NOT BE Taken by Children
        </p>
      </section>

      <section class="product-section section_3">
        <h2>EXPECTED RESULTS</h2>
        <p>
          In the first month of taking TREASUREMAN for men you will experience
          stronger and longer lasting erections, you will also start noticing
          expansion in the size and width of your penis. And you will constantly
          experience unprovoked early morning erections and an increased penile
          bulge And from the second month onwards you will start to experience
          more dramatic changes in your sexual experience, you will also notice
          a significant increase in your sexual stamina and a higher propensity
          to engage in sexual activity (increased libido) and there is a
          consistent improvement in your Sexual prowess and overall energy
          levels.
        </p>
      </section>
      <Cta />

      <section class="product-section section_3">
        <h2>ACTVIVE INGREDIENTS</h2>
        <div className="active_ingredients">
          <h3>EPIMEDIUM GRANDIFLORUM (Horny Goat Weed Extract)</h3>
          <p>
            Epimedium Grandiflorium or Horny Goat Weed has been used for
            thousands of years as a libido enhancer it has been medically
            discovered that the active ingredients can be used to treat erectile
            dysfunction. It works by allowing more blood to flow into penis, it
            does this by allowing the nitric oxide levels to increase thereby
            relaxing smooth muscles. After centuries of use in China, top
            medical doctors now report that Epimedium Grandiflorium is highly
            effective increasing testosterone levels which naturally increases
            sex drive and endurance
          </p>
        </div>
        <div className="active_ingredients">
          <h3>PTYCHOPETALUM OLACOIDES (Purama Muira)</h3>
          <p>
            It is a type of tree whose roots and stems are used medicinally for
            the treatment of sexual dysfunction in both men and women. It has a
            long history of use in Brazilian and west African traditional
            medicine as a natural aphrodisiac .
          </p>
        </div>
        <div className="active_ingredients">
          <h3>LEPIDIUM MEYENII (maca root powder)</h3>
          <p>
            Maca root powder has been scientifically proven to increase libido
            on a longer term basis. It is one of the most prominent herbal
            supplement used as a treatment for male sexual dysfunction. it could
            also help you gain more muscles and better physical build, It gives
            the mind clarity and boosts mental health and reduces enlarged
            prostate.
          </p>
        </div>
        <img src={img9} alt="" className="small_imgs" />
      </section>

      <section class="testimonials testimonials_2">
        <div class="testimonial-list">
          <div class="testimonial-item">
            <img src={info1} alt="Testimonial 1" />
            <h2>BOOSTED T LEVELS</h2>
            <p>
              Boost your libido, muscle mass and energy levels by naturally
              stimulating T production. Your stamina, drive and your ability to
              make gains will be amplified.
            </p>
          </div>
          <div class="testimonial-item">
            <img src={info2} alt="Testimonial 2" />
            <h2>SUPERCHARGED BLOOD FLOW</h2>
            <p>
              From the bedroom to the weight room, improved circulation can help
              enhance your performance, improve stamina and energy levels and
              enhance blood flow to EVERY organ in the body.
            </p>
          </div>
          <div class="testimonial-item">
            <img src={info3} alt="Testimonial 3" />
            <h2>DEEPER SLEEP</h2>
            <p>
              Quality sleep and recovery are essential for vitality. Maximize
              your body’s ability to sleep deeper, longer AND burn fat while you
              do it.
            </p>
          </div>
        </div>
      </section>

      <section class="product-section section_4">
        <div className="">
          <div className="">
            <h3>CATUABA BARK</h3>
            <p>
              helps you to perform better by simply dilating blood vessels to
              raise blood circulation in the genital area while working
            </p>
            <p>
              like a nerve stimulant, reducing exhaustion and enhancing general
              sexual virility and Performance.
            </p>{" "}
            <br /> <br />
            <h3>PIPER NIGRUM (bioperine extracts)</h3>
            <p>
              helps your body absorb vitamins and minerals for more effective
              for more effective boost to regain your sexual prowess and stamina
            </p>
          </div>
          <img src={img6} alt="" className="small_imgs" />
        </div>
      </section>
      <Cta />

      <section class="product-section section_3">
        <h2>TREASUREMAN SUPPLEMENT FOR MEN</h2>
        <p>
          Is a product of age old traditional herbal mixtures and modern
          empirical/ scientific research, it ingredients has been part of
          African diets for centuries, It the hidden secret behind the penile
          size and sexual prowess of the typical African MAN.
        </p>
        <img className="small_imgs" src={img10} alt="" />
      </section>

      <section class="product-section section_4">
        <div className="">
          <div className="">
            <h3>
              100% Satisfaction Guarantee! Here's Our 'Unconditional' 30-Days
              Guaranty!
            </h3>
            <p>
              For 30 days you can get a full refund if you’re not 100% satisfied
              with the potent, hard-rock erections you’ll be enjoying.
            </p>
            <br />
            <p>
              Heck, you can get every cents back even if you change your mind
              and decide you want to become a reverend father. You get your hard
              erections back for good or you pay nothing.
            </p>{" "}
            <br />
            <p>
              I’m pretty sure big pharma don’t offer a refund or a trial period
              when they give you a migraine and heart palpitations with their
              pills – I’m pretty sure they keep every kobo in their pockets,
              even when their pills do nothing for you
            </p>
            <br />
            <p>
              Test drive this hardening tea for a full 1 month and if you don't
              get results, we will refund you without terms and condition
            </p>
          </div>
          <img src={moneyback} alt="" className="small_imgs" />
        </div>
      </section>

      <Cta />

      <section class="pricing">
        <h2>Pricing</h2>
        <p class="price">
          Buy One for <span class="offer">15,500</span>
        </p>
        <p class="price">
          Buy Two for <span class="offer">30,000</span>
        </p>
        <p class="price">
          Buy Three for <span class="offer">45,000</span>
        </p>
        <Cta />
      </section>

      <section class="product-section section_3">
        <h2>NOTE</h2>
        <p>
          PLEASE, WE ASK THAT YOU SHOULD NOT ORDER THIS PRODUCT IF YOU WILL NOT
          BE AVAILABLE TO RECEIVE IT OR IF THE MONEY IS NOT AT HAND. PLACE ORDER
          ONLY WHEN YOU ARE FULLY EQUIPPED TO RECEIVE; THANKS...
        </p><br /><br />
        <p>
          Kindly Don’t Place An Order If You Would Be Traveling Soon, Or You Are
          Not Financially Ready To Receive The Order In 2 – 5 Days... We Spend A
          Lot Of Money & Time Shipping These Items To Different Locations Here
          In Ghana And We Don’t Want A Situation Where Your Order Arrives At
          Your Location & You Are Not Available For Pickup. Because Such
          Situations Have Caused Us Great Losses Lately. For more inquiries and
          questions of any kind, feel free to contact us and our customer team
          will respond within 24hrs. You can reach us on:
        </p>
      </section>

      <section class="contact-info">
        <h2>Contact Us</h2>
        <p>For inquiries and orders, please contact us at:</p>
        <p>
          <strong>Phone:</strong> <h2> <a href="tel:+2348064826172">+2348064826172</a></h2>
        </p>
      </section>

      <Cta />

      <section class="disclaimer">
        <p>
          DISCLAIMER: This site is not part of the Facebook website or Facebook
          Inc. This site isn't endorsed by Facebook in any way. Facebook is a
          trademark of Facebook, Inc.
        </p>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
