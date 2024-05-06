import React from "react";
import "./Learn.css";
import img1 from "../../assets/image/biodiversityLoss1.png";
import img2 from "../../assets/image/biodiversityLoss2.webp";
import img3 from "../../assets/image/biodiversityLoss3.png";

export default function BiodiversityLoss() {
  return (
    <>
      <div style={{ padding: 50, height: 4500 }} className="main-content-box">
        <div
          style={{ float: "left", width: 420, height: 590, padding: 20 }}
          className="topics-content"
        >
          <ul>
            <li>
              <a href="#first-content">Biodiversity loss</a>
            </li>
            <li>
              <a href="#second-content">Natural biodiversity loss</a>
            </li>
            <li>
              <a href="#third-content">Human-driven biodiversity loss</a>
            </li>
            <li>
              <a href="#fourth-content">Solutions to biodiversity loss</a>
            </li>
          </ul>
        </div>
        <div
          className="content"
          style={{ width: 870, float: "right", marginLeft: 20, padding: 20 }}
        >
          <h2 id="first-content">Biodiversity loss</h2>
          <p>
            Biodiversity loss, a decrease in biodiversity within a species, an
            ecosystem, a given geographic area, or Earth as a whole.
            Biodiversity, or biological diversity, is a term that refers to the
            number of genes, species, individual organisms within a given
            species, and biological communities within a defined geographic
            area, ranging from the smallest ecosystem to the global biosphere.
            (A biological community is an interacting group of various species
            in a common location.) Likewise, biodiversity loss describes the
            decline in the number, genetic variability, and variety of species,
            and the biological communities in a given area. This loss in the
            variety of life can lead to a breakdown in the functioning of the
            ecosystem where decline has happened.
          </p>
          <p>
            The idea of biodiversity is most often associated with species
            richness (the count of species in an area), and thus biodiversity
            loss is often viewed as species loss from an ecosystem or even the
            entire biosphere (see also extinction). However, associating
            biodiversity loss with species loss alone overlooks other subtle
            phenomena that threaten long-term ecosystem health. Sudden
            population declines may upset social structures in some species,
            which may keep surviving males and females from finding mates, which
            may then produce further population declines. Declines in genetic
            diversity that accompany rapid falls in population may increase
            inbreeding (mating between closely related individuals), which could
            produce a further decline in genetic diversity.
          </p>
          <p>
            Even though a species is not eliminated from the ecosystem or from
            the biosphere, its niche (the role the species play in the
            ecosystems it inhabits) diminishes as its numbers fall. If the
            niches filled by a single species or a group of species are critical
            to the proper functioning of the ecosystem, a sudden decline in
            numbers may produce significant changes in the ecosystem’s
            structure. For example, clearing trees from a forest eliminates the
            shading, temperature and moisture regulation, animal habitat, and
            nutrient transport services they provide to the ecosystem.
          </p>
          <div className="image-box">
            <img
              src={img1}
              alt=""
              height={400}
              width={750}
            />
          </div>
          <h2 id="second-content">Natural biodiversity loss</h2>
          <p>
            An area’s biodiversity increases and decreases with natural cycles.
            Seasonal changes, such as the onset of spring, create opportunities
            for feeding and breeding, increasing biodiversity as the populations
            of many species rise. In contrast, the onset of winter temporarily
            decreases an area’s biodiversity, as warm-adapted insects die and
            migrating animals leave. In addition, the seasonal rise and fall of
            plant and invertebrate populations (such as insects and plankton),
            which serve as food for other forms of life, also determine an
            area’s biodiversity.
          </p>
          <p>
            Biodiversity loss is typically associated with more permanent
            ecological changes in ecosystems, landscapes, and the global
            biosphere. Natural ecological disturbances, such as wildfire,
            floods, and volcanic eruptions, change ecosystems drastically by
            eliminating local populations of some species and transforming whole
            biological communities. Such disturbances are temporary, however,
            because natural disturbances are common and ecosystems have adapted
            to their challenges (see also ecological succession).
          </p>
          <div className="image-box">
            <img
              src={img2}
              alt=""
              height={400}
              width={750}
            />
          </div>
          <h2 id="third-content">Human-driven biodiversity loss</h2>
          <p>
            In contrast, biodiversity losses from disturbances caused by humans
            tend to be more severe and longer-lasting. Humans (Homo sapiens),
            their crops, and their food animals take up an increasing share of
            Earth’s land area. Half of the world’s habitable land (some 51
            million square km [19.7 million square miles]) has been converted to
            agriculture, and some 77 percent of agricultural land (some 40
            million square km [15.4 million square miles]) is used for grazing
            by cattle, sheep, goats, and other livestock. This massive
            conversion of forests, wetlands, grasslands, and other terrestrial
            ecosystems has produced a 60 percent decline (on average) in the
            number of vertebrates worldwide since 1970, with the greatest losses
            in vertebrate populations occurring in freshwater habitats (83
            percent) and in South and Central America (89 percent). Between 1970
            and 2014 the human population grew from about 3.7 billion to 7.3
            billion people. By 2018 the biomass of humans and their livestock
            (0.16 gigaton) greatly outweighed the biomass of wild mammals (0.007
            gigaton) and wild birds (0.002 gigaton). Researchers estimate that
            the current rate of species loss varies between 100 and 10,000 times
            the background extinction rate (which is roughly one to five species
            per year when the entire fossil record is considered). In addition,
            a 2019 report by the Intergovernmental Science-Policy Platform on
            Biodiversity and Ecosystem Services noted that up to one million
            plant and animal species are facing extinction due to human
            activities.
          </p>
          <p>
            Forest clearing, wetland filling, stream channeling and rerouting,
            and road and building construction are often part of a systematic
            effort that produces a substantial change in the ecological
            trajectory of a landscape or a region. As human populations grow,
            the terrestrial and aquatic ecosystems they use may be transformed
            by the efforts of human beings to find and produce food, adapt the
            landscape to human settlement, and create opportunities for trading
            with other communities for the purposes of building wealth.
            Biodiversity losses typically accompany these processes.
          </p>
          <p>
            Researchers have identified five important drivers of biodiversity
            loss:
          </p>
          <p>
            1. Habitat loss and degradation—which is any thinning,
            fragmentation, or destruction of an existing natural habitat—reduces
            or eliminates the food resources and living space for most species.
            Species that cannot migrate are often wiped out.
          </p>
          <p>
            2. Invasive species—which are non-native species that significantly
            modify or disrupt the ecosystems they colonize—may outcompete native
            species for food and habitat, which triggers population declines in
            native species. Invasive species may arrive in new areas through
            natural migration or through human introduction.
          </p>
          <p>
            3. Overexploitation—which is the harvesting of game animals, fish,
            or other organisms beyond the capacity for surviving populations to
            replace their losses—results in some species being depleted to very
            low numbers and others being driven to extinction.
          </p>
          <p>
            4. Pollution—which is the addition of any substance or any form of
            energy to the environment at a rate faster than it can be dispersed,
            diluted, decomposed, recycled, or stored in some harmless
            form—contributes to biodiversity loss by creating health problems in
            exposed organisms. In some cases, exposure may occur in doses high
            enough to kill outright or create reproductive problems that
            threaten the species’s survival.
          </p>
          <p>
            5. Climate change associated with global warming—which is the
            modification of Earth’s climate caused by the burning of fossil
            fuels—is caused by industry and other human activities. Fossil fuel
            combustion produces greenhouse gases that enhance the atmospheric
            absorption of infrared radiation (heat energy) and trap the heat,
            influencing temperature and precipitation patterns.
          </p>
          <div className="image-box">
            <img
              src={img3}
              alt=""
              height={400}
              width={750}
            />
          </div>
          <h2 id="fourth-content">Solutions to biodiversity loss</h2>
          <p>
            Dealing with biodiversity loss is tied directly to the conservation
            challenges posed by the underlying drivers. Conservation biologists
            note that these problems could be solved using a mix of public
            policy and economic solutions assisted by continued monitoring and
            education. Governments, nongovernmental organizations, and the
            scientific community must work together to create incentives to
            conserve natural habitats and protect the species within them from
            unnecessary harvesting, while disincentivizing behaviour that
            contributes to habitat loss and degradation. Sustainable development
            (economic planning that seeks to foster growth while preserving
            environmental quality) must be considered when creating new farmland
            and human living spaces. Laws that prevent poaching and the
            indiscriminate trade in wildlife must be improved and enforced.
            Shipping materials at ports must be inspected for stowaway
            organisms.
          </p>
          <p>
            Developing and implementing solutions for each of these causes of
            biodiversity loss will relieve the pressure on species and
            ecosystems in their own way, but conservation biologists agree that
            the most effective way to prevent continued biodiversity loss is to
            protect the remaining species from overhunting and overfishing and
            to keep their habitats and the ecosystems they rely on intact and
            secure from species invasions and land use conversion. Efforts that
            monitor the status of individual species, such as the Red List of
            Threatened Species from the International Union for Conservation of
            Nature and Natural Resources (IUCN) and the United States Endangered
            Species list remain critical tools that help decision makers
            prioritize conservation efforts. In addition, a number of areas rich
            in unique species that could serve as priorities for habitat
            protection have been identified. Such “hot spots” are regions of
            high endemism, meaning that the species found there are not found
            anywhere else on Earth. Ecological hot spots tend to occur in
            tropical environments where species richness and biodiversity are
            much higher than in ecosystems closer to the poles.
          </p>
          <p>
            Concerted actions by the world’s governments are critical in
            protecting biodiversity. Numerous national governments have
            conserved portions of their territories under the Convention on
            Biological Diversity (CBD). A list of 20 biodiversity goals, called
            the Aichi Biodiversity Targets, was unveiled at the CBD meeting held
            in Nagoya, Japan, in October 2010. The purpose of the list was to
            make issues of biodiversity mainstream in both economic markets and
            society at large and to increase biodiversity protection by 2020.
            Since 2010, 164 countries have developed plans to reach those
            targets. One of the more prominent targets on the list sought to
            protect 17 percent of terrestrial and inland waters or more and at
            least 10 percent of coastal and marine areas. By January 2019 some
            7.5 percent of the world’s oceans (which included 17.3 percent of
            the marine environment in national waters) had been protected by
            various national governments in addition to 14.9 percent of land
            areas.
          </p>
        </div>
      </div>
    </>
  );
}
