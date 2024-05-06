import React from "react";
import img1 from "../../assets/image/oceanAcidification1.png";
import img2 from "../../assets/image/oceanAcidification2.webp";
import img3 from "../../assets/image/oceanAcidification3.webp";
import img4 from "../../assets/image/oceanAcidification4.jpg";
import "./Learn.css";
export default function OceanAcidification() {
  return (
    <>
      <div style={{ padding: 50, height: 3810 }} className="main-content-box">
        <div
          style={{ float: "left", width: 420, height: 590, padding: 20 }}
          className="topics-content"
        >
          <ul>
            <li>
              <a href="#first-content">What is ocean acidification?</a>
            </li>
            <li>
              <a href="#second-content">How is acidification measured?</a>
            </li>
            <li>
              <a href="#third-content">What causes ocean acidification?</a>
            </li>
            <li>
              <a href="#fourth-content">
                Why is ocean acidification a problem?
              </a>
            </li>
            <li>
              <a href="#fifth-content">
                Is ocean acidification bad for people?
              </a>
            </li>
            <li>
              <a href="#sixth-content">
                What are the solutions to ocean acidification?
              </a>
            </li>
          </ul>
        </div>
        <div
          className="content"
          style={{ width: 870, float: "right", marginLeft: 20, padding: 20 }}
        >
          <div className="image-box">
            <img
              src={img1}
              alt=""
              height={400}
              width={750}
            />
          </div>
          <h2 id="first-content">What is ocean acidification?</h2>
          <p>
            Ocean acidification is the process in which seawater becomes more
            acidic because of the excess carbon dioxide (CO2) it is absorbing
            from the atmosphere. This phenomenon, which is impacting every ocean
            on Earth (as well as coastal estuaries and other waterways), is a
            direct consequence of the burning of fossil fuels and the resulting
            carbon pollution.
          </p>
          <p>
            “There is no meaningful scientific debate over whether acidification
            is occurring or what causes it,” explains NRDC oceans expert Lisa
            Suatoni. “This is simple textbook chemistry, coupled with thousands
            of reliable measurements.”
          </p>
          <div className="image-box">
            <img
              src={img2}
              alt=""
              height={400}
              width={750}
            />
          </div>
          <h2 id="second-content">How is acidification measured?</h2>
          <p>
            In chemistry 101, we learn that pH is a measure for how acidic or
            basic (alkaline) a water-based liquid is. A pH of 7, as in pure
            water, is neutral. Tart lemon juice has a pH of 2; a cup of coffee,
            a pH of 5. Ammonia and bleach, on the other hand, are basic, with a
            pH of 11 and 13.5, respectively.
          </p>
          <p>
            Our oceans support an abundance of life with an average pH level of
            8.1, making seawater slightly basic. But experts estimate that over
            the course of the 21st century, the pH of ocean water could dip down
            to 7.8. That may sound like a small change, but the last time the
            ocean pH was this low was some 14 to 17 million years ago, when the
            Earth was a very different place. Scientists predict the change will
            have serious ramifications for ocean ecologies, food security, and
            economies, big and small, that depend on marine industries.
          </p>
          <h2 id="third-content">What causes ocean acidification?</h2>
          <p>
            Let’s go over some basics (no pun intended). When carbon dioxide
            dissolves into the ocean, it triggers a chemical reaction that
            increases acidity over time. More technically: CO2 and water produce
            carbonic acid, which releases hydrogen and bicarbonate ions. The
            more hydrogen ions there are, the more acidic the water becomes.
            This is what drives ocean acidification.
          </p>
          <p>
            In addition to the burning of fossil fuels, another main culprit
            behind the sharp rise in ocean acidification is deforestation (both
            are major contributors to climate change). That’s because when a
            forest is cut or burnt down, it releases all of the carbon that was
            stored into the air.
          </p>
          <p>
            How do we know that the decrease in ocean pH isn’t part of a natural
            cycle? Because research has shown that the rise in fossil fuels and
            atmospheric CO2 correlates with the decline of ocean pH. And while
            correlation doesn't always equal causation, Suatoni explains, “the
            consistency between what scientists theorize and what we’ve
            observed—as well as the lack of good alternative explanations—gives
            us high confidence that carbon dioxide pollution is causing ocean
            acidification.”
          </p>
          <div className="image-box">
            <img
              src={img3}
              alt=""
              height={200}
              width={850}
            />
          </div>
          <h2 id="fourth-content">Why is ocean acidification a problem?</h2>
          <p>
            What is especially alarming about ocean acidification today is the
            speed of change and its direct impacts on ocean ecosystems.
          </p>
          <p>
            When CO2 dissolves into the ocean, it reduces the availability of
            carbonate: an essential building block for shellfish like mussels,
            clams, and oysters to create their protective shells and skeletons.
            Lower concentrations of carbonate in marine habitats therefore
            directly impact these animals’ chances of survival, as researchers
            studying declining shellfish options in the Gulf of Maine have
            shown. If acidity were to rise high enough, seawater could literally
            dissolve shells.
          </p>
          <p>
            Coral reefs also suffer the consequences. For example, Australia’s
            Great Barrier Reef has shown a 14 percent decline in calcification
            since 1990. Coral reefs are an essential part of marine ecosystems,
            providing shelter for 25 percent of marine species. These structures
            also protect coastal communities from erosion and storm sturges.
            Acidification is especially hard on reefs that already face natural
            bioerosion from the species of fish and worms that eat away at them.
            The reefs, which are famously slow-growing, can’t outpace this
            dissolution.
          </p>
          <h2 id="fifth-content">Is ocean acidification bad for people?</h2>
          <p>
            Absolutely. Even if you don't have a shell, the impacts of ocean
            acidification can ripple through the entire food chain, in water and
            on land.
          </p>
          <p>
            Significant portions of our economy rely on the ocean's bounty in
            one way or another. The U.S. shellfish industry, for instance, plays
            a huge role in coastal economies, providing employment to thousands
            of people and generating millions of dollars in revenue each year.
            If ocean acidification is left unchecked, it is estimated that the
            industry can lose more than $400 million annually by the year 2100.
            “As we transform the sea with our actions—by the burning of fossil
            fuels—we’re interfering with the crucial role it plays for humanity,
            from stabilizing our climate and protecting coastal communities to
            providing food for billions of people around the world,” says
            Suatoni.
          </p>
          <div className="image-box">
            <img
              src={img4}
              alt=""
              height={200}
              width={850}
            />
          </div>
          <h2 id="sixth-content">
            What are the solutions to ocean acidification?
          </h2>
          <p>We can tackle ocean acidification on multiple fronts.</p>
          <p>
            First and foremost, since we know ocean acidification is caused
            primarily by carbon pollution from fossil fuels, we know we have to
            advance the global transition to clean energy. Pollution regulations
            for power plants and stronger fuel-economy standards for our cars
            can help with that. Government leaders can also step up conservation
            efforts to protect and enhance the resilience of our forests,
            wetlands, and other critical carbon sinks, through initiatives like
            the 30x30 pledge, which sets aside 30 percent of our lands and
            waters to let ecosystems recover and withstand these growing
            challenges. Policymakers—recognizing the job sectors and other
            economic engines at risk from ocean acidification—are introducing
            climate action plans that promote increased investments in
            monitoring, forecasting, and mitigation.
          </p>
          <p>
            Considering the scale and rate of change, we need to prepare
            ourselves and safeguard vulnerable industries. “While ocean
            acidification’s effects have a global reach, local factors also
            influence how at risk regions are,” says Suatoni. Some managers of
            West Coast oyster hatcheries, for example, have invested in
            monitoring systems. When harmful acidic water upwells on the coast,
            they shut off their intake valves to prevent baby oysters from being
            exposed. Other solutions include cultivating ocean
            acidification–resistant strains of shellfish and diversifying
            aquaculture systems. For example, scientists are teaming up with
            fishermen to see how cultivating seaweeds like sugar kelp can
            potentially buffer farmed oysters, clams, and mussels from
            acidification as they absorb carbon dioxide from the salty water.
          </p>
          <p>
            The changes in our oceans are startling, and we don’t yet fully
            understand what’s to come as oceans acidify. But we know we must
            act. “We both love and need our oceans,” says Suatoni. “If they
            fail, we all do.”
          </p>
        </div>
      </div>
    </>
  );
}
