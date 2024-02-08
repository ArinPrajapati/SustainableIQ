import { Hero } from "../components";
import ActionContainer from "../components/Home/ActionContainer";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";

const Home = () => {
  return (
    <div className=" flex flex-col gap-[6rem] ">
      <Hero />
      <ActionContainer />
      <Section2 />
      <Section3 />
      <Section4 />
      </div>
  );  
};

export default Home;
