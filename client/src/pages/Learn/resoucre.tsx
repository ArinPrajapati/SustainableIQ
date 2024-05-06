import React from "react";
import "./Learn.css";
import img1 from "../../assets/image/resourceDepletion1.jpg";
import img2 from "../../assets/image/resourceDepletion2.jpg";
import img3 from "../../assets/image/resourceDepletion4.jpg";
export const ResourceDepletion = () => {
  return (
    <>
      <div style={{ padding: 50, height: 2685 }} className="main-content-box">
        <div
          style={{ float: "left", width: 420, height: 590, padding: 20 }}
          className="topics-content"
        >
          <ul>
            <li>
              <a href="#first-content">Resource depletion</a>
            </li>
            <li>
              <a href="#second-content">
                What causes the depletion of our natural resources?
              </a>
            </li>
            <li>
              <a href="#third-content">What resources are in decline?</a>
            </li>
            <li>
              <a href="#fourth-content">How can we help</a>
            </li>
          </ul>
        </div>
        <div
          className="content"
          style={{ width: 870, float: "right", marginLeft: 20, padding: 20 }}
        >
          <div className="image-box">
            <img src={img1} alt="" height={400} width={750} />
          </div>
          <h2 id="first-content">Resource depletion</h2>
          <p>
            Resources are depleted when it is being used faster than it can
            replenish itself. The industrial revolution is when it all began. As
            our culture advanced and our species invented many things that will
            make our lives easier, our demand for raw materials increased by
            leaps and bounds. We get these resources from the other. The problem
            is, we’re using too much and without care. Our planet just can’t
            keep up with our ever increasing demands.
          </p>
          <div className="image-box">
            <img src={img2} alt="" height={400} width={750} />
          </div>
          <h2 id="second-content">
            What causes the depletion of our natural resources?
          </h2>
          <p>
            1. Overpopulation. With 7 billion people on the planet, the demand
            on Earth’s resources continue to increase.
          </p>
          <p>
            2. Overconsumption and waste. This is the excessive and unnecessary
            use of resources.
          </p>
          <p>
            3. Deforestation and the Destruction of Ecosystems leading to loss
            of biodiversity.
          </p>
          <p>4. Mining of Minerals and Oil.</p>
          <p>5. Technological and Industrial Development.</p>
          <p>6. Erosion.</p>
          <p>7. Pollution and Contamination of resources.</p>
          <div className="image-box">
            <img src={img3} alt="" height={400} width={750} />
          </div>
          <h2 id="third-content">What resources are in decline?</h2>
          <p>
            <span>Water –</span> Even though you see water everywhere and our
            planet is 70% water, only 2.5% of that 70% is fresh water. The rest
            is salt water and not useful to humans at all. That small percentage
            of fresh water is mostly in the form of ice or permanent snow cover.
            So, we really have only a few percent available for use. The Food
            and Agriculture Organization of the United Nations predict that by
            2025, 1.8 billion people will have no water to drink.
          </p>
          <p>
            <span>Coal –</span> This is the most used fossil fuel and a
            non-renewable energy source. Peak coal extraction is predicted
            between 2025 and 2048. In 2011, it was estimated that we have enough
            coal to meet global demands for 188 years.If the demand increases,
            the timeframe will decrease.
          </p>
          <p>
            <span>Oil –</span> Without oil, global transportation will be
            severely debilitated. The BP Statistical Review of World Energy
            estimates that there is 188.8 million tons of oil left in the known
            oil reserves as of 2010. If our current demand continues, this oil
            will only be enough to supply the world demands for the next 46.2
            years.
          </p>
          <p>
            <span>Natural Gas –</span> As of 2010, the known reserves of natural
            gas was estimated to last 58.6 years with the current global
            production.
          </p>
          <p>
            <span>Fish –</span> Fishermen from a lot of coastal provinces report
            a decline in their catch. Other marine species such as the tuna is
            close to extinction due to overfishing. This is a resource since
            Fish is part of our major food group.
          </p>
          <p>
            <span>Phosphorous –</span> This resource is used for fertilizers to
            help plants grow. Scientists from the Global Phosphorous Research
            initiative estimates that peak phosphorous will be reached by 2030.
            Phosphorous is derived from phosphorous rock and guano.
          </p>
          <p id="fourth-content">
            How can we help stop our natural resources from running out? Many
            countries are now developing sources of renewable and sustainable
            energy such as solar, wind and hydro power. These are natural
            resources and are clean sources of energy. They will not pollute the
            environment.
          </p>
        </div>
      </div>
    </>
  );
};
