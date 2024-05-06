import React from "react";
import img1 from "../../assets/image/deforestation1.webp";
import img2 from "../../assets/image/deforestation2.webp";
import img3 from "../../assets/image/deforestation3.jpg";
import "./Learn.css";
export const Deforestation = () => {
  return (
    <>
      <div style={{ padding: 50, height: 4850 }} className="main-content-box">
        <div
          style={{ float: "left", width: 420, height: 590, padding: 20 }}
          className="topics-content"
        >
          <ul>
            <li>
              <a href="#first-content">What Is Deforestation?</a>
            </li>
            <li>
              <a href="#second-content">
                The Causes of Deforestation: Why Is Deforestation Happening?
              </a>
            </li>
            <li>
              <a href="#third-content">
                Deforestation Effects – How Does Deforestation Affect The
                Environment?
              </a>
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
          <h2 id="first-content">What Is Deforestation?</h2>
          <p>
            Deforestation refers to the decrease in forest areas across the
            world that are lost for other uses such as agricultural croplands,
            urbanization, or mining activities. Greatly accelerated by human
            activities since 1960, deforestation has been negatively affecting
            natural ecosystems, biodiversity, and the climate. The UN’s Food and
            Agriculture Organization estimates the annual rate of deforestation
            to be around 1.3 million km2 per decade.
          </p>
          <h2 id="second-content">
            The Causes of Deforestation: Why Is Deforestation Happening?
          </h2>
          <div className="image-box">
            <img src={img2} alt="" height={400} width={750} />
          </div>
          <p>
            Multiple factors, either of human or natural origin, cause
            deforestation. Natural factors include natural forest fires or
            parasite-caused diseases which can result in deforestation.
            Nevertheless, human activities are among the main causes of global
            deforestation. According to the Food and Agriculture Organization
            (FAO), the expansion of agriculture caused nearly 80% of global
            deforestation, with the construction of infrastructures such as
            roads or dams, together with mining activities and urbanization,
            making up the remaining causes of deforestation.
          </p>
          <h2>1. Agriculture is the Number 1 Cause of Deforestation (~80%)</h2>
          <p>
            Why is deforestation happening? According to the FAO, agriculture
            causes around 80% of deforestation. And how does agriculture cause
            so much deforestation? According to the same report, 33% of
            agriculture-caused deforestation is a consequence of subsistence
            agriculture – such as local peasant agriculture in developing
            countries.
          </p>
          <p>
            Commercial or industrial agriculture (field crops and livestock)
            cause around 40% of forest loss – in the search for space to grow
            food, fibers or biofuel (such as soybeans, palm oil, beef, rice,
            maize, cotton and sugar cane). It is also particularly interesting
            to note livestock is believed to be responsible for about 14% of
            global deforestation. The main reasons why have to do with the large
            areas require both to raise livestock but also to grow its
            (soy-based) food.
          </p>
          <h2>2. Deforestation Caused By New Constructions (~15%)</h2>
          <p>
            The construction of human infrastructures has also been driving
            deforestation. More specifically, 10% of deforestation can be
            attributed to new infrastructures that serve the current human
            lifestyle in four main ways: transportation, transformation and
            energy generation.
          </p>
          <p>
            On one hand, roads, rails, ports or airports have been built to move
            all sorts of goods – from cereals and fruits to spices, minerals or
            fossil fuels – either directly to trade centers or to transformation
            sites. So while at first there were only fruit trees, roads soon
            arrived to allow transporting fruit to other regions. And while some
            goods were and are collected manually, others such as coal, oil,
            natural gas, biomass, but also meat, dairy or spirits, required the
            construction of large extraction, transportation and/or
            transformation infrastructures.
          </p>
          <h2>3. How Urbanization Is Causing Deforestation (~5%)</h2>
          <p>
            The populational shift that is leading people to move from rural
            areas to urban areas is also contributing to deforestation (5%,
            according to FAO). This urban growth – in which 68% of the world’s
            population is expected to live in cities by 2050 – is leading to an
            exponential growth of housing and consumption sites. And as cities
            become larger so they can host more people, they challenge the
            natural boundaries surrounding them, often leading to deforestation.
            This is one of the reasons why deforestation is happening.
          </p>
          <div className="image-box">
            <img src={img3} alt="" height={400} width={750} />
          </div>
          <h2 id="third-content">
            Deforestation Effects – How Does Deforestation Affect The
            Environment?
          </h2>
          <p>
            Deforestation has many consequences for natural ecosystems and it
            poses serious problems to the resilience of the planet. Let’s take a
            look at the main effects of deforestation to better understand why
            it is bad for the planet.
          </p>
          <h2>1 – The Effects of Deforestation on Biodiversity</h2>
          <p>
            The most known consequence of deforestation is its threat to
            biodiversity. In fact, forests represent some of the most veritable
            hubs of biodiversity. From mammals to birds, insects, amphibians or
            plants, the forest is home to many rare and fragile species. 80% of
            the Earth’s land animals and plants live in forests.
          </p>
          <p>
            By destroying the forests, human activities are putting entire
            ecosystems in danger, creating natural imbalances, and putting Life
            at threat. The natural world is complex, interconnected, and made of
            thousands of inter-dependencies and among other functions, trees
            provide shade and colder temperatures for animals and smaller trees
            or vegetation which may not survive with the heat of direct
            sunlight. Besides, trees also feeding animals with their fruits
            while providing them with food and shelter they need to survive.
          </p>
          <h2>
            2 – The Effects of Deforestation on Local People and Their
            Livelihoods
          </h2>
          <p>
            Healthy forests support the livelihoods of 1.6 billion people
            globally, one billion of whom are among the world’s poorest. This
            means there are many people depending on forests for survival and
            using them to hunt and gather raw products for their small-scale
            agriculture processes. But in developing countries such as Borneo,
            Indonesia, Vietnam, Brazil, or Mexico, land tenure systems are weak.
            This allows big businesses to get these lands and use them for other
            ends, disrupting local people’s lives.
          </p>
          <p>
            Locals then have to make one of two choices. They can decide to
            abandon “their” land and migrate somewhere else, avoiding conflict
            and embracing the challenge of a new different life. Or they can
            stay and work for the companies exploring it in remote plantations –
            often getting unfair wages and working under inhumane conditions. In
            some countries like Mexico, plantations’ owners are often forced to
            share their profits with local cartels to keep their families alive
            and to avoid having their crops burned
          </p>
          <h2>
            3 – Deforestation for Food May Lead to Food Insecurity in the Future
          </h2>
          <p>
            Today, 52% of all the land used for food production is moderately or
            severely impacted by soil erosion. In the long term, the lack of
            healthy, nutritious soil can lead to low yields and food insecurity.
          </p>
          <h2>4 – Soil Erosion is One of the Consequences of Deforestation</h2>
          <p>
            Deforestation weakens and degrades the soil. Forested soils are
            usually not only richer on organic matter, but also more resistant
            to erosion, bad weather, and extreme weather events. This happens
            mainly because roots help fix trees in the ground and the
            sun-blocking tree cover helps the soil to slowly dry out. As a
            result, deforestation will probably mean the soil will become
            increasingly fragile, leaving the area more vulnerable to natural
            disasters such as landslides and floods.
          </p>
          <h2>5 – Deforestation Affects and Contributes to Climate Change</h2>
          <p>
            Deforestation also has a very strong contribution to climate change.
            Why? Let’s remember trees absorb and store CO2 throughout their
            lives. If we speak about tropical forests, they hold more than 210
            gigatons of carbon, according to WWF. And what’s worrying is that
            the destruction of these trees has two big negative side-effects.
          </p>
          <div className="image-box">
            <img
              src="../src/assets/image/deforestation4.jpg"
              alt=""
              height={400}
              width={750}
            />
          </div>
          <p>
            Firstly, taking down trees means they’ll release back into the
            atmosphere the CO2 they were keeping. Secondly, fewer trees
            available means reducing the planet’s overall ability to capture and
            store CO2. Both these effects negatively contribute to the
            greenhouse effect and to climate change. As a matter of fact, while
            food and agriculture account for 24% of greenhouse gas emissions,
            deforestation is estimated to be responsible for 10-15% of all
            anthropogenic CO2 emissions.
          </p>
        </div>
      </div>
    </>
  );
};
