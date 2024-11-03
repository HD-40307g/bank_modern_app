import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

interface FeatureCardProps {
  icon: string;
  title: string;
  content: string;
  index: number;
};

const FeatureCard = ({ icon, title, content, index }: FeatureCardProps ) => (
  <div className={`flex flex-row p-6 rounded-2xl ${index !== features.length - 1 ? 'mb-6' : "mb-0"} feature-card`}>
    <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt={`${title} icon`} className="w-1/2 h-1/2 object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-lg leading-[23.4px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-base leading-6 mb-1">{content}</p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden"/>we'll handle the money.</h2>
      <p className={`${styles.paragraph} max-w-lg mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
      <Button className='mt-10' />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
  )

export default Business;
