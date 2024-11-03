import { card } from "../assets";
import styles, {layout} from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find better card deal<br className="sm:block hidden"/>in a few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-lg mt-5`}>Quickly discover card options tailored to your needs. Compare rates, benefits, and rewards with ease to find the perfect card that fits your lifestyle—all in just a few clicks.</p>
      <Button className='mt-10' />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="Credit card illustration" className="w-full h-full"/>
    </div>
  </section>
  );

export default CardDeal;
