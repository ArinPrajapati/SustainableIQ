import React from "react";
import img1 from "../../assets/image/overfishing1.jpg";
import img2 from "../../assets/image/overfishing2.jpg";
import img3 from "../../assets/image/overfishing3.jpg";
import img4 from "../../assets/image/overfishing4.png";
import "./Learn.css";
export default function Overfishing() {
  return (
    <>
      <div style={{ padding: 50, height: 3310 }} className="main-content-box">
        <div
          style={{ float: "left", width: 420, height: 590, padding: 20 }}
          className="topics-content"
        >
          <ul>
            <li>
              <a href="#first-content">
                What is overfishing and why is it a problem?
              </a>
            </li>
            <li>
              <a href="#second-content">What is driving overfishing?</a>
            </li>
            <li>
              <a href="#third-content">What is sustainable fishing?</a>
            </li>
            <li>
              <a href="#fourth-content">
                What are the consequences of overfishing?
              </a>
            </li>
            <li>
              <a href="#fifth-content">
                The impact of overfishing on biodiversity
              </a>
            </li>
            <li>
              <a href="#sixth-content">What can be done about overfishing?</a>
            </li>
          </ul>
        </div>
        <div
          className="content"
          style={{ width: 870, float: "right", marginLeft: 20, padding: 20 }}
        >
          <h3>
            Overfishing is a serious global problem that threatens ocean
            wildlife and biodiversity. Loss of marine life brings a further
            threat to the millions of people who rely on seafood for protein and
            livelihoods.
          </h3>
          <div className="image-box">
            <img src={img1} alt="" height={400} width={750} />
          </div>
          <h2 id="first-content">
            What is overfishing and why is it a problem?
          </h2>
          <p>
            Overfishing occurs when too many fish in a particular stock are
            caught and there are not enough adults to breed and sustain a
            healthy population.
          </p>
          <p>
            The level of overfishing has been increasing in recent decades and
            the number of overfished stocks is now three times higher than in
            1970. The United Nations Food and Agriculture Organization monitors
            over 500 fish stocks around the globe. In 2022, it is estimated that
            over 35% of these fish stocks were overfished.
          </p>
          <p>
            For communities reliant on fishing, the impact of stock collapses
            can be devastating. Overfishing is also a concern for the wild
            marine environment as it is one of the major causes of the loss of
            ocean biodiversity.
          </p>
          <div className="image-box">
            <img src={img2} alt="" height={300} width={830} />
          </div>
          <h2 id="second-content">What is driving overfishing?</h2>
          <p>
            There are several factors that drive overfishing, these include:
          </p>
          <p>
            <span style={{ fontSize: 19, fontWeight: "bold" }}>
              1. Rising consumption:
            </span>{" "}
            The human population reached 8 billion in November 2022 and is
            expected to reach almost 10 billion by 2050. Consumption of aquatic
            foods (farmed and wild) is rising twice as fast as the global
            population.
          </p>
          <p>
            <span style={{ fontSize: 19, fontWeight: "bold" }}>
              2. Climate change:
            </span>{" "}
            Increases in ocean temperatures change the migratory routes of fish
            stocks, causing them to move away from traditional fishing grounds.
            Overfishing occurs when fisheries continue to catch at the same
            level even though some of their target species have moved to new
            grounds.
          </p>
          <p>
            <span style={{ fontSize: 19, fontWeight: "bold" }}>
              3. Illegal, Unreported and Unregulated (IUU) fishing:
            </span>{" "}
            Catching fish without abiding to governmental and international
            regulations, for example in protected zones, or not reporting part
            of the catches.
          </p>
          <p>
            <span style={{ fontSize: 19, fontWeight: "bold" }}>
              4. Fishing subsidies:
            </span>{" "}
            It is estimated that governments have spent billions of dollars on
            subsidies to support their fishing industries. Sometimes, this might
            support fishing in overexploited areas where catch revenue will not
            be enough to cover the expense of fishing. In such cases subsidies
            end up encouraging unsustainable fishing practices.
          </p>
          <div>
            <div
              style={{
                float: "left",
                width: 500,
                height: 200,
                backgroundColor: "#dedede",
                color: "black",
                padding: 10,
                paddingLeft: 30,
              }}
            >
              <h2 id="third-content" style={{ width: 450, color: "#005daa" }}>
                What is sustainable fishing?
              </h2>
              <p style={{ width: 450 }}>
                Fishing is sustainable if it leaves enough fish in the oceans
                and minimises impacts on habitats and ecosystems. For this to
                happen, fisheries must be managed effectively.
              </p>
            </div>
            <div
              style={{
                float: "right",
                width: 330,
                height: 220,
                backgroundColor: "#dedede",
                color: "black",
              }}
            >
              <div className="image-box1">
                <img src={img3} alt="" height={170} width={310} />
              </div>
            </div>
          </div>
          <h2 id="fourth-content" style={{ marginTop: 250 }}>
            What are the consequences of overfishing?
          </h2>
          <p>
            Almost 38 million people are directly employed in the wild capture
            seafood sector. Figures from the 2020 UN FAO State of the World
            Fisheries Report show 10% of the world’s population rely, at least
            partially, on fishing and aquaculture for their livelihoods.
          </p>
          <p>
            If fish stocks collapse the impact can be immediate, but recovery
            can take decades. The collapse of Canada’s Grand Banks cod fishery
            in 1992 left over 35,000 fishers and plant workers from more than
            400 coastal communities without jobs.
          </p>
          <p>
            Seafood is also an important source of protein and micronutrients.
            More than 3 billion people are dependent on the ocean for protein,
            with fish representing at least 20% of their daily animal protein
            intake.
          </p>
          <h2 id="fifth-content">The impact of overfishing on biodiversity</h2>
          <p>
            Overfishing can affect biodiversity, habitats and ecosystems that
            make vital contributions to the climate, clean air, water and food.
          </p>
          <p>
            Biodiversity impacts can take place not only through overfishing of
            fish stocks targeted for food, but also through overfishing of
            species caught unintentionally. This can include endangered species
            such as some sharks, rays, and turtles. Removing sharks, for
            example, can have knock-on effects on their prey and species lower
            down the food chain, and negatively impact biodiversity.
          </p>
          <div className="image-box">
            <img src={img4} alt="" height={350} width={850} />
          </div>
          <h2 id="sixth-content">What can be done about overfishing?</h2>
          <p>
            Stopping overfishing doesn’t mean stopping fishing altogether.
            Fisheries that are sustainably managed are better for the
            environment and more productive in the long-term.
          </p>
          <p>
            If all fisheries were sustainably managed there would be an
            estimated 16 million more tonnes of fish a year, which would yield
            enough protein for 72 million more people.
          </p>
          <p>
            As the world grapples with how to feed its growing population,
            sustainably produced foods from the sea will have an increasingly
            important role to play.
          </p>
          <p>
            Despite the headline statistics on overfishing, there has been
            steady progress on the availability of sustainable seafood for
            consumers. 2019 figures in the FAO Blue Transformation report found
            that 82% of fish landings by volume come from sustainably managed
            stocks, an increase of nearly 4%. This means consumers are
            increasingly empowered to make sustainable choices, especially for
            popular species like tuna, pollock and anchoveta.
          </p>
        </div>
      </div>
    </>
  );
}
