import React from "react";
import img1 from "../../assets/image/habitatLoss1.jpg";
import img2 from "../../assets/image/habitatLoss2.png";
import img3 from "../../assets/image/habitatLoss3.webp";
import "./Learn.css";
export const HabitatLoss = () => {
  return (
    <>
      <div style={{ padding: 50, height: 2470 }} className="main-content-box">
        <div
          style={{ float: "left", width: 420, height: 590, padding: 20 }}
          className="topics-content"
        >
          <ul>
            <li>
              <a href="#first-content">Habitat loss</a>
            </li>
            <li>
              <a href="#second-content">Major Kinds of Habitat Loss</a>
            </li>
            <li>
              <a href="#third-content">Main Causes of Habitat Loss</a>
            </li>
          </ul>
        </div>
        <div
          className="content"
          style={{ width: 870, float: "right", marginLeft: 20, padding: 20 }}
        >
          <div className="image-box">
            <img src={img1} alt="" height={200} width={830} />
          </div>
          <p id="first-content">
            Habitat loss refers to the reduction in the amount of space where a
            particular species, or group of species can survive and reproduce.
            Habitat loss is a consequence of human activities such as
            agriculture, urbanization, deforestation, resource extraction,
            alteration of the sea-floor due to trawling (fishing), or the
            release of pollutants. Habitat loss can also occur due to
            environmental changes, such as volcanic eruptions or tsunamis, or
            changes in climate or sea level, which today are largely the result
            of human activities. Habitat loss can decrease biodiversity and
            alters species ranges and interactions.
          </p>
          <p>
            Humans have altered Earth’s land for thousands of years, but
            industrialization and population growth over the last 300 years, and
            especially over the last 70 years, has led to a great expansion in
            our land use and disturbance of habitats worldwide.
          </p>
          <p>
            Habitat restoration is the purposeful rehabilitation of an area to
            recreate a functioning ecosystem. Successful habitat restoration
            requires understanding species life cycles and interactions, and the
            food, water, nutrients, space, and shelter that is necessary to
            sustain species populations. When habitats cannot be restored to
            their original size or condition, land can be set aside that
            connects open spaces and habitats, called wildlife corridors, that
            allow species to survive in and around areas occupied by humans. For
            example, marshes are important resting spots for migratory birds,
            bridges allow animals to cross highways, and protected creek
            habitats create space for plants and animals even within developed
            areas.
          </p>
          <div className="image-box">
            <img src={img2} alt="" height={400} width={750} />
          </div>
          <h2 id="second-content">Major Kinds of Habitat Loss</h2>
          <p>
            <span style={{ fontSize: 19, fontWeight: "bold" }}>
              Habitat destruction:
            </span>{" "}
            A bulldozer pushing down trees is the iconic image of habitat
            destruction. Other ways people directly destroy habitat include
            filling in wetlands, dredging rivers, mowing fields, and cutting
            down trees.
          </p>
          <p>
            <span style={{ fontSize: 19, fontWeight: "bold" }}>
              Habitat fragmentation:
            </span>{" "}
            Much of the remaining terrestrial wildlife habitat in the U.S. has
            been cut up into fragments by roads and development. Aquatic
            species’ habitats have been fragmented by dams and water diversions.
            These fragments of habitat may not be large or connected enough to
            support species that need a large territory where they can find
            mates and food. The loss and fragmentation of habitats makes it
            difficult for migratory species to find places to rest and feed
            along their migration routes.
          </p>
          <p>
            <span style={{ fontSize: 19, fontWeight: "bold" }}>
              Habitat degradation:
            </span>{" "}
            Pollution, invasive species, and disruption of ecosystem processes
            (such as changing the intensity of fires in an ecosystem) are some
            of the ways habitats can become so degraded, they no longer support
            native wildlife.
          </p>
          <div className="image-box">
            <img src={img3} alt="" height={400} width={750} />
          </div>
          <h2 id="third-content">Main Causes of Habitat Loss</h2>
          <p>
            <span style={{ fontSize: 19, fontWeight: "bold" }}>
              Agriculture:
            </span>{" "}
            Much of the habitat loss from agriculture was done long ago when
            settlers converted forests and prairies to cropland. Today, there is
            increasing pressure to redevelop conservation lands for high-priced
            food and biofuel crops.
          </p>
          <p>
            <span style={{ fontSize: 19, fontWeight: "bold" }}>
              Land conversion for development:
            </span>{" "}
            The conversion of lands that once provided wildlife habitat to
            housing developments, roads, office parks, strip malls, parking lots
            and industrial sites continues, even during the current economic
            crisis.
          </p>
          <p>
            <span style={{ fontSize: 19, fontWeight: "bold" }}>
              Water development:
            </span>{" "}
            Dams and other water diversions siphon off and disconnect waters,
            changing hydrology and water chemistry (when nutrients are not able
            to flow downstream). During the dry season, the Colorado River has
            little to no water in it by the time it reaches the Sea of Cortez.
          </p>
          <p>
            <span style={{ fontSize: 19, fontWeight: "bold" }}>Pollution:</span>{" "}
            Freshwater wildlife are most impacted by pollution. Pollutants such
            as untreated sewage, mining waste, acid rain, fertilizers and
            pesticides concentrate in rivers, lakes and wetlands and eventually
            end up in estuaries and the food web.
          </p>
          <p>
            <span style={{ fontSize: 19, fontWeight: "bold" }}>
              Climate change:
            </span>{" "}
            The emerging driver of habitat loss is climate change. Wildlife that
            need the cool temperatures of high elevations, such as the American
            pika, may soon run out of habitat. Coastal wildlife may find their
            habitat underwater as sea levels rise.
          </p>
        </div>
      </div>
    </>
  );
};
