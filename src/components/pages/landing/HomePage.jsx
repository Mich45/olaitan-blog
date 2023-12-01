import Hero from '../../hero/Hero';
import Faq from '../../faq/Faq';
import Community from '../../community/Community';
import Slide from '../../slider/carosel/Slide';
import TabContent from '../../Tab/TabContent/Tab';
import Blog from '../../blog/Blog';
import Reason from '../../reason/ReasonPage';
import Members from '../../members/Members';
export default function Landing() {
  return (
    <>
      <div>
        <Hero />
        <Community />
        <Members />
        <Reason />
        <TabContent />
        <Faq />
        <Slide />
        <Blog />
      </div>
    </>
  );
}
