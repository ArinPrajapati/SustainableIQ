import React from "react";
import img1 from "../../assets/image/plasticPollution1.png";
import img2 from "../../assets/image/plasticPollution2.jpg";
import img3 from "../../assets/image/plasticPollution3.jpg";
import img4 from "../../assets/image/plasticPollution4.png";
import "./Learn.css";
export default function PlasticPollution() {
  return (
    <>
      <div style={{ padding: 50, height: 5140 }} className="main-content-box">
        <div
          style={{ float: "left", width: 420, height: 590, padding: 20 }}
          className="topics-content"
        >
          <ul>
            <li>
              <a href="#first-content">What is Plastic?</a>
            </li>
            <li>
              <a href="#second-content">
                Plastic Pollution in the Ocean: Where does it come from?
              </a>
            </li>
            <li>
              <a href="#third-content">Plastic Pollution: Key Facts</a>
            </li>
            <li>
              <a href="#fourth-content">Garbage Patches in the Ocean</a>
            </li>
            <li>
              <a href="#fifth-content">Harm to Wildlife</a>
            </li>
            <li>
              <a href="#sixth-content">Harm to Human Beings</a>
            </li>
            <li>
              <a href="#seven-content">Climate Change</a>
            </li>
            <li>
              <a href="#eight-content">Economic effects</a>
            </li>
            <li>
              <a href="#ninth-content">
                Why it is Vital to Prevent Plastic Pollution
              </a>
            </li>
            <li>
              <a href="#tenth-content">
                How to Stop Plastic Pollution in the Ocean
              </a>
            </li>
          </ul>
        </div>
        <div
          className="content"
          style={{ width: 870, float: "right", marginLeft: 20, padding: 20 }}
        >
          <p id="first-content">
            Plastic is one of the most enduring materials man has created.
            Nowadays, we all know that it can take hundreds of years for plastic
            to degrade, and research is showing that it is possible that it does
            not even fully degrade, but becomes what we call microplastic.
          </p>
          <p>
            Microplastics are tiny particles of plastic that can be eaten by
            marine animals and end up in their bodies and tissues, entering the
            food chain and leading to disastrous consequences for the health of
            our planet and all its inhabitants.
          </p>
          <p>
            Even if human beings are becoming more and more aware of the hazards
            this material poses to life, the presence of plastic in our ocean is
            continually increasing, and plastic pollution is still one of the
            main causes of marine species extinction, health problems for human
            beings and animals alike, and the destruction of our ecosystems.
          </p>
          <p>
            In this article, we will look at ocean plastic pollution and lay out
            the data and statistics you need to understand the daunting issue we
            are facing. Most importantly, we will also look at what we can do as
            individuals and as part of our society to prevent plastic pollution
            and save our planet.
          </p>
          <div className="image-box">
            <img src={img1} alt="" height={400} width={750} />
          </div>
          <h2 id="second-content">
            Plastic Pollution in the Ocean: Where does it come from?
          </h2>
          <p>
            It is clear that plastic pollution is one of the most pressing
            environmental issues we are currently facing, but how did it come to
            be? Moreover, where does all the plastic in the ocean come from?
          </p>
          <p>
            Plastics produced from fossil fuels are just over a century old, but
            they revolutionized our life completely. It allowed the invention of
            many life-saving devices and the implementation of new technologies
            that changed the course of history.
          </p>
          <p>
            However, the great advantages plastic offered led to a throwaway
            trend that made us discover plastic’s dark side: the threat it poses
            to our environment and life.
          </p>
          <p>
            The majority of plastic pollution in the ocean is caused by
            littering: we buy or use disposable plastic items (food wrappings,
            plastic bags, razors, bottles, etc.) and do not dispose of them
            properly, which cause them to end up in the waterways and eventually
            in the ocean.
          </p>
          <p>
            Yet, not all-plastic waste in the ocean is an effect of littering:
            many plastics and microplastics are the product of improper
            manufacturing processes and about 20% of the ocean’s plastic
            pollution comes from industrial fishing.
          </p>
          <h2 id="third-content">Plastic Pollution: Key Facts</h2>
          <p>
            1. Plastic waste makes up 80% of all marine pollution and around 8
            to 10 million metric tons of plastic end up in the ocean each year.
          </p>
          <p>
            2. Research states that, by 2050, plastic will likely outweigh all
            fish in the sea.
          </p>
          <p>
            3. In the last ten years, we have produced more plastic products
            than in the previous century.
          </p>
          <p>
            4. The EPA (Environmental Protection Agency) has stated that
            basically 100% of all plastics human beings have ever created are
            still in existence.
          </p>
          <p>
            5. Plastic generally takes between 500-1000 years to degrade. Even
            then, it becomes microplastics, without fully degrading.
          </p>
          <p>
            6. Currently, there are about 50-75 trillion pieces of plastic and
            microplastics in the ocean.
          </p>
          <p>
            7. This plastic either breaks down into microplastic particles (see
            below), or floats around and ends up forming garbage patches.
          </p>
          <div className="image-box">
            <img src={img2} alt="" height={400} width={750} />
          </div>
          <h2 id="fourth-content">Garbage Patches in the Ocean</h2>
          <p>
            Most of the plastic we find in the ocean comes from land: it flows
            downstream through rivers all the way to the sea. At first, it may
            stay in coastal waters, but it can soon be picked up by rotating
            ocean currents, called gyres, and transported literally anywhere in
            the world.
          </p>
          <p>
            According to National Geographic, scientists found plastic coming
            from Russia, the United States, Europe, South America, Japan, and
            China on Henderson Island, an uninhabited isolated atoll halfway
            between Chile and New Zealand.
          </p>
          <p>
            Usually, marine plastic debris groups up in what we call garbage
            patches, plastic accumulation areas, in the center of the ocean’s
            gyres. The biggest is the Great Pacific garbage patch, located
            between Hawaii and California.
          </p>
          <div className="image-box">
            <img src={img3} alt="" height={400} width={750} />
          </div>
          <h2>Consequences</h2>
          <p>
            Today, plastic production and use is still at its highest, but the
            data on recycling are not at all promising: only about 10% of the
            plastic we produce is currently being recycled. The rest is either
            incinerated, causing air pollution, or it ends up in our oceans and
            environment.
          </p>
          <h2 id="fifth-content">Harm to Wildlife</h2>
          <p>
            Plastic pollution in the ocean has a devastating impact on marine
            life and ecosystems. The most obvious one being the damage plastic
            items cause to animals when they come into contact with or ingest
            them, which include suffocation, entanglement, laceration,
            infections and internal injuries.
          </p>
          <p>
            17% of the species affected by the presence of plastic in the ocean
            are on the International Union for Conservation of Nature Red List
            of Threatened Species.
          </p>
          <p>
            Yet, there are more problems related to plastic: floating plastic
            items can help transport invasive species, which leads to threats
            for marine ecosystems, biodiversity and the food web.
          </p>
          <h2 id="sixth-content">Harm to Human Beings</h2>
          <p>
            As we explained above, microplastics have now become part of the
            food chain and have been found everywhere: in drinking water, salt,
            beer and in the soil where we grow our vegetables.
          </p>
          <p>
            Plastic materials are carcinogenic and can affect the body’s
            endocrine system, causing developmental, neurological, reproductive
            and immune disorders. Another health hazard is given by toxic
            contaminants that often accumulate on plastic’s surface, and are
            then transferred to humans through the consumption of seafood.
          </p>
          <h2 id="seven-content">Climate Change</h2>
          <p>
            Plastic pollution and climate change are two sides of the same coin:
            plastic production, as it is created from fossil fuels, highly
            contributes to the climate crisis.
          </p>
          <p>
            Moreover, as we already mentioned, when plastic waste is
            incinerated, it releases carbon dioxide and methane into the
            atmosphere, increasing emissions and worsening global warming.
          </p>
          <h2 id="eight-content">Economic effects</h2>
          <p>
            According to research, the yearly economic costs of plastic in the
            ocean are estimated to be between $6-19bn USD. These costs are given
            by its impact on tourism, fisheries and aquaculture, and
            (governmental) cleanups.
          </p>
          <div className="image-box">
            <img src={img4} alt="" height={400} width={750} />
          </div>
          <h2 id="ninth-content">
            Why it is Vital to Prevent Plastic Pollution
          </h2>
          <p>
            Plastic pollution is undoubtedly an issue that requires worldwide
            cooperation. Its consequences affect the whole planet and its
            inhabitants: it threatens ocean health, the health of marine
            species, food safety and quality, human health, coastal tourism, and
            contributes to climate change.
          </p>
          <p>
            Reducing the presence of plastic in our oceans will not only allow
            us to save marine species and ecosystems, but will improve our
            overall health and that of the environment in general, helping us
            fight climate change and working towards a more sustainable future.
          </p>
          <h2 id="tenth-content">How to Stop Plastic Pollution in the Ocean</h2>
          <p>
            It is quite hard to retrieve plastic from the ocean once it has
            entered it. New technologies allow us to catch larger marine debris,
            but small plastic items and microplastics are virtually impossible
            to reach, especially when they are deep in the ocean.
          </p>
          <p>
            Therefore, many scientists and conservationists have declared that
            the best solution is to prevent plastic waste from entering rivers
            and seas in the first place.
          </p>
          <p>
            This could be accomplished with the improvement of our waste
            management systems and the implementation of recycling. In addition,
            it is essential to reconsider the design and usage of disposable
            packaging, and the reduction in manufacturing of unnecessary
            single-use plastics.
          </p>
        </div>
      </div>
    </>
  );
}
