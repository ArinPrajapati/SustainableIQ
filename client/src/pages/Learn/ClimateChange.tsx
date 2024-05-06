import React from "react";
import "./Learn.css";
import img1 from "../../assets/image/climateChange1.jpg";
import img2 from "../../assets/image/climateChange2.jpg";
import img3 from "../../assets/image/climateChange3.jpg";
import img4 from "../../assets/image/climateChange4.jpg";

export const ClimateChange = () => {
  return (
    <div className="main-content-box" style={{ padding: 50, height: 3650 }}>
      <div
        style={{ float: "left", width: 420, height: 590, padding: 20 }}
        className="topics-content"
      >
        <ul>
          <li>
            <a href="#first-header">What Is Climate Change?</a>
          </li>
          <li>
            <a href="#second-header">
              Humans are responsible for global warming
            </a>
          </li>
          <li>
            <a href="#third-header">
              People are experiencing climate change in diverse ways
            </a>
          </li>
          <li>
            <a href="#fourth-header">
              Every increase in global warming matters
            </a>
          </li>
          <li>
            <a href="#sixth-header">
              We face a huge challenge but already know many solutions
            </a>
          </li>
        </ul>
      </div>
      <div
        className="content"
        style={{ width: 870, float: "right", marginLeft: 20, padding: 20 }}
      >
        <h2 id="first-header">What Is Climate Change?</h2>
        <p>
          Climate change refers to long-term shifts in temperatures and weather
          patterns. Such shifts can be natural, due to changes in the sun’s
          activity or large volcanic eruptions. But since the 1800s, human
          activities have been the main driver of climate change, primarily due
          to the burning of fossil fuels like coal, oil and gas.
        </p>
        <p>
          Burning fossil fuels generates greenhouse gas emissions that act like
          a blanket wrapped around the Earth, trapping the sun’s heat and
          raising temperatures.
        </p>
        <p>
          The main greenhouse gases that are causing climate change include
          carbon dioxide and methane. These come from using gasoline for driving
          a car or coal for heating a building, for example. Clearing land and
          cutting down forests can also release carbon dioxide. Agriculture, oil
          and gas operations are major sources of methane emissions. Energy,
          industry, transport, buildings, agriculture and land use are among the
          main sectors causing greenhouse gases.
        </p>
        <div className="image-box">
          <img src={img1} alt="" height={400} width={750} />
        </div>
        <h2 id="second-header">Humans are responsible for global warming</h2>
        <p>
          Climate scientists have showed that humans are responsible for
          virtually all global heating over the last 200 years. Human activities
          like the ones mentioned above are causing greenhouse gases that are
          warming the world faster than at any time in at least the last two
          thousand years.
        </p>
        <p>
          The average temperature of the Earth’s surface is now about 1.1°C
          warmer than it was in the late 1800s (before the industrial
          revolution) and warmer than at any time in the last 100,000 years. The
          last decade (2011-2020) was the warmest on record, and each of the
          last four decades has been warmer than any previous decade since 1850.
        </p>
        <p>
          Many people think climate change mainly means warmer temperatures. But
          temperature rise is only the beginning of the story. Because the Earth
          is a system, where everything is connected, changes in one area can
          influence changes in all others.
        </p>
        <p>
          The consequences of climate change now include, among others, intense
          droughts, water scarcity, severe fires, rising sea levels, flooding,
          melting polar ice, catastrophic storms and declining biodiversity.
        </p>
        <div className="image-box">
          <img src={img2} alt="" height={400} width={750} />
        </div>
        <h2 id="third-header">
          People are experiencing climate change in diverse ways
        </h2>
        <p>
          Climate change can affect our health, ability to grow food, housing,
          safety and work. Some of us are already more vulnerable to climate
          impacts, such as people living in small island nations and other
          developing countries. Conditions like sea-level rise and saltwater
          intrusion have advanced to the point where whole communities have had
          to relocate, and protracted droughts are putting people at risk of
          famine. In the future, the number of people displaced by
          weather-related events is expected to rise.
        </p>
        <h2 id="fourth-header">Every increase in global warming matters</h2>
        <p>
          In a series of UN reports, thousands of scientists and government
          reviewers agreed that limiting global temperature rise to no more than
          1.5°C would help us avoid the worst climate impacts and maintain a
          livable climate. Yet policies currently in place point to a 3°C
          temperature rise by the end of the century.
        </p>
        <p>
          The emissions that cause climate change come from every part of the
          world and affect everyone, but some countries produce much more than
          others.The seven biggest emitters alone (China, the United States of
          America, India, the European Union, Indonesia, the Russian Federation,
          and Brazil) accounted for about half of all global greenhouse gas
          emissions in 2020.
        </p>
        <p>
          Everyone must take climate action, but people and countries creating
          more of the problem have a greater responsibility to act first.
        </p>
        <div className="image-box">
          <img src={img3} alt="" height={400} width={750} />
        </div>
        <h2 id="sixth-header">
          We face a huge challenge but already know many solutions
        </h2>
        <p>
          Many climate change solutions can deliver economic benefits while
          improving our lives and protecting the environment. We also have
          global frameworks and agreements to guide progress, such as the
          Sustainable Development Goals, the UN Framework Convention on Climate
          Change and the Paris Agreement. Three broad categories of action are:
          cutting emissions, adapting to climate impacts and financing required
          adjustments.
        </p>
        <p>
          Switching energy systems from fossil fuels to renewables like solar or
          wind will reduce the emissions driving climate change. But we have to
          act now. While a growing number of countries is committing to net zero
          emissions by 2050, emissions must be cut in half by 2030 to keep
          warming below 1.5°C. Achieving this means huge declines in the use of
          coal, oil and gas: over two-thirds of today’s proven reserves of
          fossil fuels need to be kept in the ground by 2050 in order to prevent
          catastrophic levels of climate change.
        </p>
        <div className="image-box">
          <img src={img4} alt="" height={400} width={750} />
        </div>
        <p>
          Adapting to climate consequences protects people, homes, businesses,
          livelihoods, infrastructure and natural ecosystems. It covers current
          impacts and those likely in the future. Adaptation will be required
          everywhere, but must be prioritized now for the most vulnerable people
          with the fewest resources to cope with climate hazards. The rate of
          return can be high. Early warning systems for disasters, for instance,
          save lives and property, and can deliver benefits up to 10 times the
          initial cost.
        </p>
      </div>
    </div>
  );
};
