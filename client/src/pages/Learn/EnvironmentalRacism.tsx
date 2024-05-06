import React from "react";
import img1 from "../../assets/image/environmentalRacism1.jpg";
import img2 from "../../assets/image/environmentalRacism2.jpg";
import img3 from "../../assets/image/environmentalRacism3.jpg";
import "./Learn.css";
export default function EnvironmentalRacism() {
  return (
    <>
      <div style={{ padding: 50, height: 3540 }} className="main-content-box">
        <div
          style={{ float: "left", width: 420, height: 590, padding: 20 }}
          className="topics-content"
        >
          <ul>
            <li>
              <a href="#first-content">Environmental Racism</a>
            </li>
            <li>
              <a href="#second-content">
                What are some environmental injustices?
              </a>
            </li>
            <li>
              <a href="#third-content">
                What are the impacts of environmental injustice?
              </a>
            </li>
          </ul>
        </div>
        <div
          className="content"
          style={{ width: 870, float: "right", marginLeft: 20, padding: 20 }}
        >
          <p id="first-content">
            Environmental racism has plagued communities of color for decades.
          </p>
          <p>
            Pollution, climate change, and more have stripped from these
            communities the right to their most basic needs: clean water, food,
            air, and safe housing.
          </p>
          <div className="image-box">
            <img
              src={img1}
              alt=""
              height={400}
              width={750}
            />
          </div>
          <h2 id="second-content">What are some environmental injustices?</h2>
          <p>
            Air pollution:This 2018 study found that communities living below
            the poverty line have a 35 percent higher burden from particulate
            matter emissions than the overall population. Non-whites had a 28
            percent higher health burden and African Americans, specifically,
            had a 54 percent higher burden than the overall population.
          </p>
          <p>
            Chemical waste: People of color make up nearly half the population
            in fence-line zones – areas closest to hazardous chemical
            facilities. They are almost twice as likely as whites to live near
            dangerous chemical plants.
          </p>
          <p>
            Chemical facilities in communities of color have almost twice the
            rate of incidents compared to those in predominately white
            neighborhoods – one incident per six facilities compared to one
            incident per 11 facilities.
          </p>
          <p>
            Lead exposure: Although childhood lead exposure in the United States
            is decreasing, children of color are still disproportionately
            affected by lead poisoning, according to the CDC.
          </p>
          <p>
            Water contamination: Concerns about drinking water contamination
            among minority groups have been reported since the 1950s. Water
            quality is certainly still an issue today; for example, people of
            the Navajo Nation have dealt with water contamination since the
            1950s uranium mining of the region, as well as the Gold King Mine
            wastewater spill in 2015. Today, one in three homes in the Navajo
            Nation do not have a tap or a toilet.
          </p>
          <p>
            1. Water quality can be affected by a host of different toxic
            chemicals or metals. For example, lead leached from aging pipes can
            pollute the drinking water. Flint, Michigan, has been dealing with
            community lead poisoning since 2014. More than half of Flint's
            population is people of color.
          </p>
          <p>
            2. A few major cities across the country such as Detroit,
            Pittsburgh, Newark, Baltimore, and Pittsburgh struggle with select
            toxics in their tap water.
          </p>
          <p>
            Climate change: The effects of climate change, such as extreme
            weather conditions, can have devastating impacts on low-income
            communities. Extreme weather can displace residents that lack a safe
            place to go or the capacity to rebuild, and even cause death,
            especially if housing is old or inadequately built.
          </p>
          <p>
            1. Hurricane Katrina was devastating to New Orleans' African
            American community. Racial discrimination had pushed Black
            communities to the outskirts of the city; these were communities
            most impacted when the levees failed and are systematically
            neglected by local government. By 2013, about 80 percent of the
            mostly Black residents of the city's Lower 9th Ward had not returned
            to their community due to inadequate rebuilding efforts.
          </p>
          <div className="image-box">
            <img
              src={img2}
              alt=""
              height={400}
              width={750}
            />
          </div>
          <h2 id="third-content">
            What are the impacts of environmental injustice?
          </h2>
          <p>
            Environmental injustices contribute to disparities in health status
            among populations of different race, ethnicity, and socioeconomic
            status. Due to disproportionate exposure to contaminated air, water,
            toxic chemicals, unsafe workplaces, and other environmental hazards,
            poor, disenfranchised, and minority communities face more health
            problems. Children, due to their developing state and age-related
            exposure patterns, are most at risk.
          </p>
          <p>
            Health problems proven to correlate with environmental setting
            include:
          </p>
          <p>1. Asthma</p>
          <p>2. Obesity</p>
          <p>3. Lead poisoning</p>
          <p>4. Lung cancer</p>
          <p>5. Diabetes</p>
          <p>5. Mental health and developmental problems</p>
          <p>
            As if health issues were not enough, the impact of environmental
            neglect compounds on itself and leaves these vulnerable communities
            facing further challenges, including:
          </p>
          <p>1. Inadequate access to healthcare and preventative care</p>
          <p>2. Lack of access to healthful foods</p>
          <p>3. Lack of safe play spaces for children</p>
          <p>4. Absence of good jobs</p>
          <p>5. Heightened crime, violence, and police brutality</p>
          <p>6. Voter suppression and systematic disenfranchisement</p>
          <p>6.1 Barriers to register</p>
          <p>6.2 Lack of access to polling stations</p>
          <p>6.3 Health problems tend to depress voter turnout</p>
          <div className="image-box">
            <img
              src={img3}
              alt=""
              height={400}
              width={750}
            />
          </div>
          <p>
            The Black Lives Matter protests of 2020 demonstrate a cry for
            justice from a faction of our society that is systematically
            oppressed, discriminated against, and ignored. Movements such as BLM
            tie into the Environmental Justice movement: race, ethnicity, or
            socioeconomic status should not affect one's right to a healthy
            environment and accompanying issues.
          </p>
        </div>
      </div>
    </>
  );
}
