/* =========================================================
   ORBIT MAVEN - JAVASCRIPT
   Table of contents:
     1.  Mission data (all the stories live here)
     2.  Quiz data
     3.  Grabbing elements from the page
     4.  Starfield background
     5.  Hero counters
     6.  Mission cards and filters
     7.  Story pop-up (dialog)
     8.  Timeline
     9.  Quiz logic
    10.  Menu button (mobile)
    11.  Scroll reveal
    12.  Start everything
   ========================================================= */


/* =========================================================
   1. MISSION DATA
   Each machine is one "object" with the same set of fields.
   To add a new machine, copy one block and change the text.

   place:   "moon", "mars" or "deep"
   status:  "active", "silent" or "ended"
   ========================================================= */
const missions = [

  /* ---------------------------- MOON ---------------------------- */

  {
    id: "apollo11-eagle",
    name: "Eagle's Descent Stage",
    place: "moon",
    placeLabel: "Moon \u00B7 Sea of Tranquility",
    year: 1969,
    yearLabel: "Landed July 20, 1969",
    status: "silent",
    statusLabel: "Resting on the Moon",
    tagline: "The launch pad that stayed behind so humans could go home.",
    voice: [
      "I am the bottom half of the Apollo 11 lunar module. For a few minutes I was a rocket, slowing two astronauts down from orbit until they touched down gently on the Moon.",
      "Then my job changed. When Neil Armstrong and Buzz Aldrin were ready to leave, the top half of Eagle fired its own engine and lifted off, using my body as a launch platform. I stayed behind, and I have been sitting in the Sea of Tranquility ever since.",
      "I am not alone up here. The crew left a seismometer and a small panel of mirrors close to me. Those mirrors are still being used by scientists today."
    ],
    howItWorked: "The lunar module was built in two stages. The descent stage held the landing engine, the fuel tanks, the landing legs and storage for tools and experiments. The ascent stage held the crew cabin and a smaller engine. Leaving the heavy descent stage behind meant the ascent stage had much less weight to lift back into orbit.",
    learned: [
      "Humans could land safely on another world and return home.",
      "The seismometer left by Apollo 11 listened to the Moon's ground for about three weeks, giving scientists their first look at moonquakes.",
      "The laser retroreflector left nearby is still used today. Scientists fire laser beams at it from Earth to measure the distance to the Moon very precisely. This showed that the Moon drifts away from Earth by about 3.8 centimeters every year."
    ],
    facts: [
      { label: "Landing date", value: "July 20, 1969" },
      { label: "Crew on the surface", value: "Neil Armstrong and Buzz Aldrin" },
      { label: "Time on the Moon", value: "About 21 and a half hours" },
      { label: "Moon rocks brought home", value: "About 21.5 kg (47.5 lb)" }
    ]
  },

  {
    id: "lunar-rovers",
    name: "Lunar Roving Vehicles",
    place: "moon",
    placeLabel: "Moon \u00B7 Apollo 15, 16 and 17 sites",
    year: 1971,
    yearLabel: "Driven 1971\u20131972",
    status: "silent",
    statusLabel: "Parked for good",
    tagline: "Three battery-powered buggies parked on the Moon forever.",
    voice: [
      "We are three rovers, one each from Apollo 15, 16 and 17. We rode to the Moon folded up like origami inside the side of the lunar module. Astronauts pulled a few cords, and we unfolded into moon buggies.",
      "Before us, astronauts could only explore on foot, close to their landing spot. With us, they could ride kilometers away to visit different kinds of rock, each telling a different part of the Moon's story.",
      "On Apollo 17, one of us broke a fender and kicked moon dust everywhere. The crew repaired it with paper maps, duct tape and clamps. Space engineering is sometimes just creative problem solving."
    ],
    howItWorked: "Each rover ran on batteries that could not be recharged, with a separate electric motor inside each of its four wheels. The wheels were made of woven wire mesh with titanium treads, so there were no tires to go flat. A dish antenna and a TV camera let mission control in Houston watch the drives live.",
    learned: [
      "Driving far from the lander let astronauts collect rocks from many places, like ancient highlands and old volcanic plains.",
      "Altogether, the Apollo missions brought back about 382 kg (842 lb) of Moon rocks and soil, and scientists are still studying them.",
      "The camera on the Apollo 17 rover was steered from Earth and filmed the lunar module lifting off from the Moon."
    ],
    facts: [
      { label: "Rovers left on the Moon", value: "3" },
      { label: "Designed top speed", value: "About 13 km/h (8 mph)" },
      { label: "Unofficial speed record", value: "About 18 km/h (11 mph), Apollo 17" },
      { label: "Longest total drive", value: "35.9 km (22.3 mi), Apollo 17" }
    ]
  },

  {
    id: "alsep",
    name: "Apollo Lunar Surface Experiments Packages",
    place: "moon",
    placeLabel: "Moon \u00B7 Apollo 12, 14, 15, 16 and 17 sites",
    year: 1969,
    yearLabel: "Set up 1969\u20131972",
    status: "silent",
    statusLabel: "Switched off in 1977",
    tagline: "Science stations that listened to the Moon for years.",
    voice: [
      "We are the Moon's first science stations. After each Apollo landing from Apollo 12 onward, astronauts unpacked us, carried our boxes away from the lander and set us up on the dust.",
      "Our job was to measure things nobody could measure from Earth: moonquakes, heat flowing out of the ground, the thin trace of gas around the Moon and the wind of particles from the Sun.",
      "We sent our readings back by radio for years. On September 30, 1977, controllers sent the command to switch us off, mostly to save money. We were not broken. We have been quiet ever since."
    ],
    howItWorked: "Each station was powered by a small nuclear generator called a SNAP-27, which used plutonium-238 to make electricity. That let the station keep running through the Moon's two-week-long nights, when solar panels would have been useless.",
    learned: [
      "The Moon has moonquakes, including deep ones far below the surface.",
      "Seismic waves showed that the Moon is layered like Earth, with a crust, a mantle and a small core.",
      "Scientists crashed leftover spacecraft parts into the Moon on purpose and listened to the shaking, a bit like striking a bell to hear how it rings.",
      "Heat-flow probes measured warmth escaping from the Moon's interior."
    ],
    facts: [
      { label: "Stations set up", value: "5 (Apollo 12, 14, 15, 16, 17)" },
      { label: "Power source", value: "Plutonium-238 generator" },
      { label: "Switched off", value: "September 30, 1977" },
      { label: "What they recorded", value: "Thousands of moonquakes" }
    ]
  },

  {
    id: "surveyor3",
    name: "Surveyor 3",
    place: "moon",
    placeLabel: "Moon \u00B7 Ocean of Storms",
    year: 1967,
    yearLabel: "Landed April 20, 1967",
    status: "silent",
    statusLabel: "Visited by astronauts",
    tagline: "The robot scout that astronauts came back to visit.",
    voice: [
      "I was a scout. NASA sent me to the Moon in 1967, before any human had landed, to answer a worried question: is the Moon's surface firm enough to land on, or would a spacecraft sink?",
      "I touched down with a couple of bounces. Then I dug small trenches with my scoop arm and sent back thousands of photos for engineers back home.",
      "Two and a half years later, Apollo 12 astronauts Pete Conrad and Alan Bean landed a couple of hundred meters from me. They walked over, cut off my camera and some other parts, and carried them back to Earth for scientists to study. Then they left me right where I am now."
    ],
    howItWorked: "Surveyor was a three-legged lander with a TV camera and a small scoop on an extendable arm. Rocket engines slowed its descent, and solar panels and batteries powered it. Engineers on Earth sent commands to dig and take pictures. By pressing and digging into the soil, the scoop measured how strong the ground was.",
    learned: [
      "The Moon's soil is strong enough to support landers and astronauts.",
      "Surveyor 3 sent back more than 6,000 photos of the lunar surface.",
      "Studying the parts brought home by Apollo 12 showed scientists how materials hold up after more than two years of exposure to space."
    ],
    facts: [
      { label: "Landing date", value: "April 20, 1967" },
      { label: "Photos sent to Earth", value: "More than 6,000" },
      { label: "Astronaut visit", value: "November 20, 1969 (Apollo 12)" },
      { label: "Parts brought back", value: "Camera, scoop pieces and tubing" }
    ]
  },


  /* ---------------------------- MARS ---------------------------- */

  {
    id: "viking1",
    name: "Viking 1 Lander",
    place: "mars",
    placeLabel: "Mars \u00B7 Chryse Planitia",
    year: 1976,
    yearLabel: "Landed July 20, 1976",
    status: "silent",
    statusLabel: "Silent since 1982",
    tagline: "NASA's first Mars lander, and it worked for more than six years.",
    voice: [
      "I landed on Mars exactly seven years after Apollo 11 touched down on the Moon. Minutes later I took my first photograph: my own footpad sitting on rocky ground.",
      "Scientists had a giant question for me: is there life on Mars? I scooped up soil and ran three experiments inside my tiny onboard laboratory. The results were confusing, and most scientists decided they did not show clear signs of life.",
      "I was built to work for 90 days. I kept going for more than six years. In 1982 a software update accidentally wrote over part of my memory that told my antenna where Earth was, and after that nobody could hear me."
    ],
    howItWorked: "Viking 1 had two parts: an orbiter that circled Mars and a lander that touched down. The lander used a heat shield, a parachute and rocket engines to slow down. A robotic arm with a scoop fed soil into onboard experiments. It also carried two cameras and a weather station, and it was powered by plutonium generators.",
    learned: [
      "Mars is a cold, rust-colored desert with seasons, wind and dust storms.",
      "The soil tests did not find clear signs of life, but they showed that Martian soil is chemically very reactive. Decades later, other missions found salts called perchlorates that help explain some of the puzzling results.",
      "Viking's weather station recorded the first long-term weather report from another planet."
    ],
    facts: [
      { label: "Landing date", value: "July 20, 1976" },
      { label: "Planned lifetime", value: "90 days" },
      { label: "Actual lifetime", value: "More than 6 years" },
      { label: "Last contact", value: "November 11, 1982" }
    ]
  },

  {
    id: "sojourner",
    name: "Sojourner and Mars Pathfinder",
    place: "mars",
    placeLabel: "Mars \u00B7 Ares Vallis",
    year: 1997,
    yearLabel: "Landed July 4, 1997",
    status: "silent",
    statusLabel: "Silent since 1997",
    tagline: "The tiny rover that proved wheels could work on Mars.",
    voice: [
      "I am Sojourner, about the size of a microwave oven, and I was the first rover ever to roll across Mars. My name was picked in a student contest, to honor Sojourner Truth, who traveled the country speaking up for equal rights.",
      "I did not arrive alone. A lander called Pathfinder bounced to a stop inside giant airbags, opened up like flower petals, and I rolled down a ramp onto the red soil.",
      "Engineers planned for me to work for one week. I kept going for nearly three months, visiting rocks nicknamed Barnacle Bill and Yogi and checking what they were made of."
    ],
    howItWorked: "Sojourner had six wheels on a flexible frame called a rocker-bogie, which helped it climb over rocks, and a solar panel on top. It used lasers and cameras to spot hazards. A device on its arm, an X-ray spectrometer, was pressed against rocks to find out what chemicals they contained. It stayed close to Pathfinder because it talked to Earth through the lander.",
    learned: [
      "Small rovers can survive and travel on Mars. That success opened the door for Spirit, Opportunity, Curiosity and Perseverance.",
      "The landing area was an ancient flood plain full of rocks that looked like they had been carried by huge floods of water long ago.",
      "The mission's website was one of the busiest on the early Internet, as millions of people followed along."
    ],
    facts: [
      { label: "Landing date", value: "July 4, 1997" },
      { label: "Rover weight", value: "About 10.5 kg (23 lb)" },
      { label: "Planned lifetime", value: "7 sols (Mars days)" },
      { label: "Actual lifetime", value: "83 sols" }
    ]
  },

  {
    id: "opportunity",
    name: "Opportunity",
    place: "mars",
    placeLabel: "Mars \u00B7 Meridiani Planum",
    year: 2004,
    yearLabel: "Landed January 2004",
    status: "silent",
    statusLabel: "Lost in a dust storm, 2018",
    tagline: "The rover built for 90 days that explored for about 14 years.",
    voice: [
      "I am Opportunity. My twin Spirit and I were sent to Mars to follow the water. Our plan was to last about 90 Mars days. Spirit landed on the other side of the planet about three weeks before me.",
      "Right after landing I rolled into a small crater and found layers of bedrock, a perfect first stop. Soon I found tiny round pebbles of a mineral called hematite, which scientists nicknamed blueberries. Hematite often forms where there is water.",
      "Years passed. Wind cleaned my solar panels. I climbed into craters and crossed wide plains. In 2018 a planet-wide dust storm blocked the sunlight and I fell silent. Engineers sent me thousands of messages, but I never answered. A reporter turned my final data into a line that touched the world: \"My battery is low and it's getting dark.\""
    ],
    howItWorked: "Opportunity was a solar-powered rover about the size of a golf cart, with six wheels, a mast with cameras, and a robotic arm. The arm carried a tool for grinding into rocks, a microscope camera and instruments to identify minerals. It sent its data to Earth directly and through orbiters.",
    learned: [
      "Meridiani Planum was once soaked with liquid water, and the water was salty and acidic.",
      "The hematite blueberries and layered rocks are evidence of long-lasting wet conditions in Mars's past.",
      "Opportunity drove 45.16 km (28.06 miles), farther than a marathon, setting a distance record for driving on another world at the time."
    ],
    facts: [
      { label: "Landing date", value: "January 2004" },
      { label: "Planned lifetime", value: "90 sols (Mars days)" },
      { label: "Actual lifetime", value: "About 14 years" },
      { label: "Total driving distance", value: "45.16 km (28.06 mi)" },
      { label: "Last contact", value: "June 10, 2018" },
      { label: "Mission declared over", value: "February 13, 2019" }
    ]
  },

  {
    id: "phoenix",
    name: "Phoenix",
    place: "mars",
    placeLabel: "Mars \u00B7 Arctic plains",
    year: 2008,
    yearLabel: "Landed May 25, 2008",
    status: "silent",
    statusLabel: "Frozen by polar winter",
    tagline: "The lander that dug up ice on Mars.",
    voice: [
      "I am Phoenix, and I landed farther north than any Mars mission before me, in the cold arctic plains. I came down on rocket thrusters, with no airbags.",
      "My mission was simple: dig. When my robotic arm scraped a trench, bright white chunks appeared under the dirt. A few days later they had vanished, turning straight from ice into gas. That proved they were water ice.",
      "I even felt snow: my laser sensor spotted snowflakes falling from clouds high above me. But autumn grew dark, my solar panels could not get enough sunlight, and I went quiet in November 2008."
    ],
    howItWorked: "Phoenix was a stationary lander powered by two round solar panels. Its robotic arm, about 2.35 meters long, dug up soil and ice. Tiny ovens baked the samples so instruments could sniff the gases that came off. Cameras, a weather station and a laser radar studied the sky.",
    learned: [
      "Water ice lies just under the surface in the Martian arctic.",
      "The soil contains perchlorate salts, which matter for understanding Mars chemistry and whether life could survive there.",
      "Snow falls from Martian clouds, though it evaporates before reaching the ground."
    ],
    facts: [
      { label: "Landing date", value: "May 25, 2008" },
      { label: "Landing zone", value: "Arctic plain, about 68\u00B0 north" },
      { label: "Planned lifetime", value: "90 sols (Mars days)" },
      { label: "Last contact", value: "November 2, 2008" }
    ]
  },

  {
    id: "insight",
    name: "InSight",
    place: "mars",
    placeLabel: "Mars \u00B7 Elysium Planitia",
    year: 2018,
    yearLabel: "Landed November 26, 2018",
    status: "silent",
    statusLabel: "Mission ended December 2022",
    tagline: "The lander that listened to marsquakes.",
    voice: [
      "My name is InSight, and I am a geologist who never moved. I landed on a flat, plain-looking field on purpose. It was safe, and my job was to study what is inside Mars, not what is on top of it.",
      "My robotic arm lifted my seismometer onto the ground and covered it with a dome to shield it from the wind. Then I listened. I heard more than 1,300 marsquakes, plus the thumps of space rocks hitting the planet.",
      "Dust slowly buried my solar panels. In 2022 engineers used my arm to trickle sand near them, hoping the wind would carry dust away. It helped for a while, but the power faded, and on December 21, 2022 the team declared my mission complete."
    ],
    howItWorked: "InSight's seismometer, built with help from the French space agency, felt tiny ground vibrations. Seismic waves bend and bounce depending on what they pass through, like an ultrasound of Mars's insides. A heat probe nicknamed the mole tried to burrow down to measure heat, and a radio experiment tracked how Mars wobbles.",
    learned: [
      "Mars has a crust, a mantle and a liquid core. The core is about 1,800 km (1,100 miles) in radius, bigger than many scientists expected.",
      "The biggest quake InSight felt was about magnitude 5, on May 4, 2022.",
      "InSight detected space rocks hitting Mars, and orbiters later spotted some of the fresh craters they made."
    ],
    facts: [
      { label: "Landing date", value: "November 26, 2018" },
      { label: "Marsquakes detected", value: "More than 1,300" },
      { label: "Largest quake", value: "About magnitude 5 (May 2022)" },
      { label: "Mission ended", value: "December 21, 2022" }
    ]
  },

  {
    id: "ingenuity",
    name: "Ingenuity",
    place: "mars",
    placeLabel: "Mars \u00B7 Jezero Crater",
    year: 2021,
    yearLabel: "First flight April 19, 2021",
    status: "silent",
    statusLabel: "Grounded after flight 72",
    tagline: "A helicopter that flew where there is almost no air.",
    voice: [
      "I am Ingenuity, a helicopter with a body about the size of a tissue box. I rode to Mars tucked under the belly of the Perseverance rover.",
      "Mars's air is only about 1% as thick as Earth's, so my two rotors had to spin about 2,400 times a minute just to grab hold of it. On April 19, 2021 I rose three meters, hovered for about 40 seconds and landed. It was the first powered, controlled flight on another planet.",
      "Engineers planned for five flights. I flew 72. In January 2024 my rotor blades were damaged on landing and I could not fly again, so I stay in Jezero Crater, still carrying a tiny scrap of fabric from the Wright brothers' first airplane."
    ],
    howItWorked: "Ingenuity had two counter-rotating carbon-fiber rotors, a solar panel on top to recharge its battery, and cameras to see where it was going. Radio signals take too long to steer a helicopter live, so engineers sent a flight plan and the helicopter flew itself. Built-in heaters kept it from freezing during the cold Martian nights.",
    learned: [
      "Powered flight is possible on Mars.",
      "A flying scout can look ahead of a rover to find safe paths and interesting rocks.",
      "Future missions could include helicopters or drones that explore places wheels cannot reach."
    ],
    facts: [
      { label: "First flight", value: "April 19, 2021 (39 seconds)" },
      { label: "Planned flights", value: "5" },
      { label: "Actual flights", value: "72" },
      { label: "Total flying time", value: "About 2 hours" },
      { label: "Total distance", value: "About 17 km (10.5 mi)" },
      { label: "Last flight", value: "January 18, 2024" }
    ]
  },


  /* ------------------------- DEEP SPACE ------------------------- */

  {
    id: "voyager1",
    name: "Voyager 1",
    place: "deep",
    placeLabel: "Deep space \u00B7 Interstellar space",
    year: 1977,
    yearLabel: "Launched September 5, 1977",
    status: "active",
    statusLabel: "Still sending data",
    tagline: "The farthest human-made object, still whispering home.",
    voice: [
      "I am Voyager 1. I launched in 1977, a couple of weeks after my twin, Voyager 2. We used a rare lineup of the outer planets, which happens only about once every 175 years, to hop from world to world.",
      "I flew past Jupiter and Saturn and discovered erupting volcanoes on the moon Io. In 1990 I turned my camera around and photographed Earth from billions of kilometers away: a tiny pale dot floating in a beam of sunlight.",
      "In 2012 I became the first human-made object to enter interstellar space. I carry a Golden Record full of sounds and pictures from Earth, in case anyone out there ever finds it. My signals now take close to a day to reach you, and my power slowly fades, so engineers switch off instruments one at a time to keep me talking."
    ],
    howItWorked: "Voyager 1 is powered by three plutonium generators that lose a little power every year. Its computers have less memory than a single low-resolution photo on your phone, and engineers still send commands to it from Earth. In 2023 it began sending nonsense data, and the team spent months working out the problem and fixing it from billions of miles away.",
    learned: [
      "Io is the first place beyond Earth where scientists saw active volcanoes.",
      "Jupiter has faint rings, and Saturn's rings and moons are far more complicated than anyone had imagined.",
      "Voyager 1's instruments measured the plasma around it and showed exactly when it left the Sun's bubble of influence."
    ],
    facts: [
      { label: "Launch date", value: "September 5, 1977" },
      { label: "Entered interstellar space", value: "August 2012" },
      { label: "Distance from Earth", value: "More than 15 billion miles (24 billion km)" },
      { label: "Speed", value: "About 61,000 km/h (38,000 mph)" }
    ]
  },

  {
    id: "pioneer10",
    name: "Pioneer 10",
    place: "deep",
    placeLabel: "Deep space \u00B7 Beyond the planets",
    year: 1972,
    yearLabel: "Launched March 2, 1972",
    status: "silent",
    statusLabel: "Silent since 2003, still drifting",
    tagline: "Built to last 21 months, it kept talking for about 30 years.",
    voice: [
      "I am Pioneer 10, the trailblazer. Nobody knew whether a spacecraft could survive the asteroid belt, the wide band of rocks between Mars and Jupiter. I flew through it safely.",
      "In December 1973 I became the first spacecraft to fly past Jupiter. I passed about 130,000 kilometers above its clouds and sent back pictures and measurements of its fierce radiation.",
      "I carry a gold plaque showing a man and a woman, our Sun and planets, and where I came from. My last faint signal reached Earth on January 23, 2003. My radio is silent now, but I am still traveling toward the stars."
    ],
    howItWorked: "Pioneer 10 spun slowly like a top to stay steady, and it was powered by nuclear generators. A 2.7-meter dish antenna pointed at Earth. Its instruments measured magnetic fields, charged particles, dust and light.",
    learned: [
      "Spacecraft can cross the asteroid belt safely.",
      "Jupiter's radiation is so intense that Pioneer's data helped engineers shield later spacecraft like Voyager and Galileo.",
      "Pioneer 10 showed that people could try to send a message to anyone who might one day find a spacecraft, long after it falls silent."
    ],
    facts: [
      { label: "Launch date", value: "March 2, 1972" },
      { label: "Jupiter flyby", value: "December 3, 1973" },
      { label: "Planned lifetime", value: "21 months" },
      { label: "Last signal", value: "January 23, 2003" }
    ]
  },

  {
    id: "new-horizons",
    name: "New Horizons",
    place: "deep",
    placeLabel: "Deep space \u00B7 Kuiper Belt",
    year: 2006,
    yearLabel: "Launched January 19, 2006",
    status: "active",
    statusLabel: "Exploring the Kuiper Belt",
    tagline: "Our first close look at Pluto, and it is still traveling.",
    voice: [
      "I am New Horizons, about the size of a baby grand piano. I launched in 2006 on one of the fastest rockets ever flown, headed for a world nobody had ever seen up close: Pluto.",
      "It took me more than nine years to get there. On July 14, 2015 I flew past at about 12,500 kilometers, snapping pictures as fast as I could because I could not stop. Pluto turned out to have a huge heart-shaped plain of frozen nitrogen, mountains made of water ice and a blue haze in its sky.",
      "Sending my data home took about 16 months because my radio is so far away. In 2019 I flew past a snowman-shaped space rock called Arrokoth. I also carry some of the ashes of Clyde Tombaugh, the astronomer who discovered Pluto in 1930."
    ],
    howItWorked: "New Horizons has seven science instruments and is powered by one plutonium generator. During the long cruise between targets, its computers spent much of the time in hibernation, waking up for regular checkups. Its dish antenna sends data slowly, a little at a time.",
    learned: [
      "Pluto is not a dead snowball. It has moving glaciers, tall mountains and layers of haze.",
      "Pluto's atmosphere has several thin layers of blue haze.",
      "Arrokoth is made of two lumps that gently stuck together, a leftover building block from the birth of the solar system."
    ],
    facts: [
      { label: "Launch date", value: "January 19, 2006" },
      { label: "Pluto flyby", value: "July 14, 2015" },
      { label: "Arrokoth flyby", value: "January 1, 2019" },
      { label: "Closest approach to Pluto", value: "About 12,500 km (7,800 mi)" }
    ]
  },

  {
    id: "cassini",
    name: "Cassini",
    place: "deep",
    placeLabel: "Deep space \u00B7 Saturn",
    year: 1997,
    yearLabel: "Launched October 15, 1997",
    status: "ended",
    statusLabel: "Ended in Saturn's atmosphere, 2017",
    tagline: "The orbiter that dived into Saturn on purpose to protect its moons.",
    voice: [
      "I am Cassini, a spacecraft as big as a bus. I orbited Saturn for 13 years, from 2004 to 2017, circling the planet almost 300 times.",
      "I carried a passenger named Huygens, a probe built by the European Space Agency. In January 2005 it parachuted through the thick orange air of Titan and landed on the surface, the farthest landing from Earth ever made.",
      "I found geysers of water spraying from the moon Enceladus, a sign of a hidden ocean. By 2017 my fuel was almost gone, and scientists did not want me crashing into a moon that might be friendly to life. So I flew 22 daring dives between Saturn and its rings, then plunged into the planet on September 15, 2017, sending data until the very end."
    ],
    howItWorked: "Cassini was powered by plutonium generators and carried 12 science instruments. It reached Saturn using gravity assists, swinging past Venus twice, then Earth and Jupiter to gain speed without using much fuel.",
    learned: [
      "Enceladus has a salty ocean under its icy shell, and the geysers carry water and chemicals into space, which makes it one of the best places to look for life.",
      "Titan has rivers and lakes of liquid methane and a weather cycle a little like Earth's water cycle.",
      "Cassini's final dives measured how much mass Saturn's rings hold, which helps scientists work out how old they are."
    ],
    facts: [
      { label: "Launch date", value: "October 15, 1997" },
      { label: "Arrived at Saturn", value: "July 1, 2004" },
      { label: "Huygens lands on Titan", value: "January 14, 2005" },
      { label: "Final plunge", value: "September 15, 2017" }
    ]
  }

];


/* =========================================================
   2. QUIZ DATA
   correctIndex counts from 0, so 0 is the first answer.
   ========================================================= */
const quizQuestions = [
  {
    question: "Which machine was the first wheeled rover to drive on Mars?",
    options: ["Curiosity", "Sojourner", "Opportunity", "Lunar Roving Vehicle"],
    correctIndex: 1,
    explanation: "Sojourner rolled onto Mars in 1997, carried there by the Pathfinder lander."
  },
  {
    question: "NASA planned five flights for the Ingenuity helicopter. How many did it make?",
    options: ["12", "25", "72", "100"],
    correctIndex: 2,
    explanation: "Ingenuity flew 72 times before its rotor was damaged in January 2024."
  },
  {
    question: "What did the Phoenix lander find when it dug in the Martian arctic?",
    options: ["Fossils of tiny animals", "Water ice", "A buried spacecraft", "Rivers of liquid water"],
    correctIndex: 1,
    explanation: "Phoenix scooped up white chunks that vanished days later, proving they were water ice."
  },
  {
    question: "Which object left by Apollo 11 is still used by scientists today?",
    options: ["The flag", "The seismometer", "The laser retroreflector", "The TV camera"],
    correctIndex: 2,
    explanation: "Scientists bounce laser beams off the retroreflector to measure the distance to the Moon."
  },
  {
    question: "Why did Cassini dive into Saturn on purpose?",
    options: [
      "It was lost and out of control",
      "To protect moons that might support life",
      "To take a picture of the planet's core",
      "To refuel in the atmosphere"
    ],
    correctIndex: 1,
    explanation: "Its fuel was nearly gone, so NASA ended the mission safely instead of risking a crash on Enceladus or Titan."
  },
  {
    question: "Which spacecraft became the first human-made object to enter interstellar space?",
    options: ["Pioneer 10", "Voyager 1", "New Horizons", "Cassini"],
    correctIndex: 1,
    explanation: "Voyager 1 crossed into interstellar space in August 2012."
  }
];


/* =========================================================
   3. GRABBING ELEMENTS FROM THE PAGE
   We look each one up once, then reuse the variable.
   ========================================================= */
const starCanvas = document.getElementById("starfield");

const missionGrid = document.getElementById("mission-grid");
const filterButtons = document.querySelectorAll(".filter-button");
const timelineList = document.getElementById("timeline-list");

const dialog = document.getElementById("mission-dialog");
const dialogContent = document.getElementById("dialog-content");
const dialogCloseButton = document.getElementById("dialog-close");

const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");

const quizProgress = document.getElementById("quiz-progress");
const quizQuestionText = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");
const quizNextButton = document.getElementById("quiz-next");

/* This remembers which filter button is selected */
let currentFilter = "all";

/* True if the visitor asked their device to reduce animation */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;


/* =========================================================
   4. STARFIELD BACKGROUND
   Draws lots of tiny white dots on the canvas and makes
   them twinkle.
   ========================================================= */
function setupStarfield() {
  const context = starCanvas.getContext("2d");
  let stars = [];
  let lastWidth = 0;

  // Make a fresh set of random stars that fits the screen
  function createStars() {
    stars = [];

    const area = starCanvas.width * starCanvas.height;
    const starCount = Math.floor(area / 6000);

    for (let i = 0; i < starCount; i++) {
      const star = {
        x: Math.random() * starCanvas.width,
        y: Math.random() * starCanvas.height,
        size: Math.random() * 1.4 + 0.3,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.02 + 0.005
      };
      stars.push(star);
    }
  }

  // Make the canvas as big as the window
  function resizeCanvas() {
    // On phones the height changes while scrolling.
    // We only rebuild the stars if the WIDTH changed.
    if (window.innerWidth === lastWidth) {
      return;
    }

    lastWidth = window.innerWidth;
    starCanvas.width = window.innerWidth;
    starCanvas.height = window.innerHeight;
    createStars();
    drawStars();
  }

  // Paint every star once
  function drawStars() {
    context.clearRect(0, 0, starCanvas.width, starCanvas.height);

    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];

      // The sine wave makes the brightness rise and fall smoothly
      star.phase = star.phase + star.twinkleSpeed;
      const brightness = 0.35 + 0.65 * Math.abs(Math.sin(star.phase));

      context.beginPath();
      context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      context.fillStyle = "rgba(255, 255, 255, " + brightness + ")";
      context.fill();
    }
  }

  // Keep redrawing, about 60 times per second
  function animate() {
    drawStars();
    requestAnimationFrame(animate);
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Only animate if the visitor is OK with motion
  if (prefersReducedMotion === false) {
    animate();
  }
}


/* =========================================================
   5. HERO COUNTERS
   Counts how many machines are in each place and counts up
   from zero to that number.
   ========================================================= */
function countMissionsByPlace(place) {
  let count = 0;

  for (let i = 0; i < missions.length; i++) {
    if (missions[i].place === place) {
      count = count + 1;
    }
  }

  return count;
}

function animateNumber(element, targetNumber) {
  // If motion is reduced, jump straight to the final number
  if (prefersReducedMotion) {
    element.textContent = targetNumber;
    return;
  }

  let currentNumber = 0;

  const timer = setInterval(function () {
    currentNumber = currentNumber + 1;
    element.textContent = currentNumber;

    if (currentNumber >= targetNumber) {
      clearInterval(timer);
    }
  }, 90);
}

function setupHeroCounters() {
  const counterElements = document.querySelectorAll("[data-stat]");

  for (let i = 0; i < counterElements.length; i++) {
    const element = counterElements[i];
    const place = element.dataset.stat;
    const total = countMissionsByPlace(place);

    animateNumber(element, total);
  }
}


/* =========================================================
   6. MISSION CARDS AND FILTERS
   ========================================================= */

// Returns only the missions that match the selected filter
function getVisibleMissions() {
  if (currentFilter === "all") {
    return missions;
  }

  const matches = [];

  for (let i = 0; i < missions.length; i++) {
    if (missions[i].place === currentFilter) {
      matches.push(missions[i]);
    }
  }

  return matches;
}

// Finds one mission by its id
function findMissionById(missionId) {
  for (let i = 0; i < missions.length; i++) {
    if (missions[i].id === missionId) {
      return missions[i];
    }
  }

  return null;
}

// Builds the HTML text for a status badge
function buildStatusBadge(mission) {
  return (
    '<span class="status status-' + mission.status + '">' +
      mission.statusLabel +
    "</span>"
  );
}

// Builds the HTML text for one card
function buildCardHtml(mission, index) {
  const delay = index * 60;

  return `
    <article class="mission-card reveal place-${mission.place}"
             data-mission-id="${mission.id}"
             style="--delay: ${delay}ms">

      <div class="card-top">
        <span class="card-orb" aria-hidden="true"></span>
        ${buildStatusBadge(mission)}
      </div>

      <p class="card-place">${mission.placeLabel}</p>
      <h3 class="card-title">${mission.name}</h3>
      <p class="card-year">${mission.yearLabel}</p>
      <p class="card-text">${mission.tagline}</p>

      <button class="card-button" type="button">Read the story</button>
    </article>
  `;
}

// Puts all the visible cards onto the page
function renderMissionCards() {
  const visibleMissions = getVisibleMissions();
  let cardsHtml = "";

  for (let i = 0; i < visibleMissions.length; i++) {
    cardsHtml = cardsHtml + buildCardHtml(visibleMissions[i], i);
  }

  missionGrid.innerHTML = cardsHtml;
  watchRevealItems();
}

// Called when a filter button is clicked
function setFilter(newFilter) {
  currentFilter = newFilter;

  // Update the look of each filter button
  for (let i = 0; i < filterButtons.length; i++) {
    const button = filterButtons[i];
    const isSelected = button.dataset.filter === newFilter;

    if (isSelected) {
      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");
    } else {
      button.classList.remove("is-active");
      button.setAttribute("aria-pressed", "false");
    }
  }

  renderMissionCards();
}

function setupFilters() {
  for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function (event) {
      setFilter(event.currentTarget.dataset.filter);
    });
  }
}


/* =========================================================
   7. STORY POP-UP (DIALOG)
   ========================================================= */

// Turns a list of paragraphs into HTML
function buildParagraphs(paragraphList) {
  let html = "";

  for (let i = 0; i < paragraphList.length; i++) {
    html = html + "<p>" + paragraphList[i] + "</p>";
  }

  return html;
}

// Turns a list of sentences into HTML list items
function buildListItems(itemList) {
  let html = "";

  for (let i = 0; i < itemList.length; i++) {
    html = html + "<li>" + itemList[i] + "</li>";
  }

  return html;
}

// Turns the fast facts into little boxes
function buildFactBoxes(factList) {
  let html = "";

  for (let i = 0; i < factList.length; i++) {
    html = html +
      '<div class="fact">' +
        "<dt>" + factList[i].label + "</dt>" +
        "<dd>" + factList[i].value + "</dd>" +
      "</div>";
  }

  return html;
}

// Builds everything that goes inside the pop-up
function buildDialogHtml(mission) {
  return `
    <p class="dialog-place">${mission.placeLabel}</p>
    <h2 id="dialog-title">${mission.name}</h2>

    <div class="dialog-badges">
      ${buildStatusBadge(mission)}
      <span class="year-pill">${mission.yearLabel}</span>
    </div>

    <p class="dialog-tagline">${mission.tagline}</p>

    <section class="dialog-section">
      <h3>In its own words <small>(imagined voice, real facts)</small></h3>
      <div class="voice-block">
        ${buildParagraphs(mission.voice)}
      </div>
    </section>

    <section class="dialog-section">
      <h3>How it worked</h3>
      <p>${mission.howItWorked}</p>
    </section>

    <section class="dialog-section">
      <h3>What it taught us</h3>
      <ul>
        ${buildListItems(mission.learned)}
      </ul>
    </section>

    <section class="dialog-section">
      <h3>Fast facts</h3>
      <dl class="facts-grid">
        ${buildFactBoxes(mission.facts)}
      </dl>
    </section>
  `;
}

function openMissionDialog(missionId) {
  const mission = findMissionById(missionId);

  if (mission === null) {
    return;
  }

  dialogContent.innerHTML = buildDialogHtml(mission);
  dialog.setAttribute("data-place", mission.place);
  document.body.classList.add("no-scroll");

  // showModal() is the built-in way to open a <dialog> as a pop-up
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }

  // Always start reading from the top
  dialogContent.scrollTop = 0;
}

function closeMissionDialog() {
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

// Cards and timeline buttons both have a data-mission-id
function handleMissionClick(event) {
  const clickedItem = event.target.closest("[data-mission-id]");

  if (clickedItem !== null) {
    openMissionDialog(clickedItem.dataset.missionId);
  }
}

function setupDialog() {
  // Close with the X button
  dialogCloseButton.addEventListener("click", closeMissionDialog);

  // Close when clicking the dark area outside the pop-up
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) {
      closeMissionDialog();
    }
  });

  // Runs when the dialog closes in ANY way (X, outside click, Escape key)
  dialog.addEventListener("close", function () {
    document.body.classList.remove("no-scroll");
  });

  // One listener on the grid handles clicks on every card
  missionGrid.addEventListener("click", handleMissionClick);
  timelineList.addEventListener("click", handleMissionClick);
}


/* =========================================================
   8. TIMELINE
   ========================================================= */
function renderTimeline() {
  // slice() makes a copy so we do not change the original list.
  // sort() puts the oldest missions first.
  const sortedMissions = missions.slice().sort(function (a, b) {
    return a.year - b.year;
  });

  let timelineHtml = "";

  for (let i = 0; i < sortedMissions.length; i++) {
    const mission = sortedMissions[i];

    timelineHtml = timelineHtml + `
      <li class="timeline-item reveal place-${mission.place}">
        <button class="timeline-button" type="button" data-mission-id="${mission.id}">
          <span class="timeline-year">${mission.year}</span>
          <span class="timeline-name">${mission.name}</span>
          <span class="timeline-text">${mission.tagline}</span>
        </button>
      </li>
    `;
  }

  timelineList.innerHTML = timelineHtml;
}


/* =========================================================
   9. QUIZ LOGIC
   ========================================================= */
let quizIndex = 0;          // which question we are on
let quizScore = 0;          // how many answers were right
let quizAnswered = false;   // has the player answered this question yet?
let quizFinished = false;   // are we showing the final score?

function showQuizQuestion() {
  const current = quizQuestions[quizIndex];

  quizAnswered = false;
  quizFinished = false;

  quizProgress.textContent = "Question " + (quizIndex + 1) + " of " + quizQuestions.length;
  quizQuestionText.textContent = current.question;
  quizFeedback.textContent = "";
  quizNextButton.hidden = true;
  quizOptions.innerHTML = "";

  // Make one button for every answer
  for (let i = 0; i < current.options.length; i++) {
    const optionButton = document.createElement("button");

    optionButton.type = "button";
    optionButton.className = "quiz-option";
    optionButton.textContent = current.options[i];
    optionButton.dataset.index = i;

    quizOptions.appendChild(optionButton);
  }
}

function chooseAnswer(chosenIndex) {
  // Ignore extra clicks after the first answer
  if (quizAnswered) {
    return;
  }

  quizAnswered = true;

  const current = quizQuestions[quizIndex];
  const optionButtons = quizOptions.querySelectorAll(".quiz-option");
  const isCorrect = chosenIndex === current.correctIndex;

  // Lock every button and color the right / wrong ones
  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].disabled = true;

    if (i === current.correctIndex) {
      optionButtons[i].classList.add("is-correct");
    }

    if (i === chosenIndex && isCorrect === false) {
      optionButtons[i].classList.add("is-wrong");
    }
  }

  if (isCorrect) {
    quizScore = quizScore + 1;
    quizFeedback.textContent = "Correct! " + current.explanation;
  } else {
    quizFeedback.textContent = "Not quite. " + current.explanation;
  }

  // Change the button text on the last question
  const isLastQuestion = quizIndex === quizQuestions.length - 1;

  if (isLastQuestion) {
    quizNextButton.textContent = "See my score";
  } else {
    quizNextButton.textContent = "Next question";
  }

  quizNextButton.hidden = false;
}

function showQuizResult() {
  quizFinished = true;

  let message = "";

  if (quizScore === quizQuestions.length) {
    message = "Perfect score! You are officially an Orbit Maven.";
  } else if (quizScore >= quizQuestions.length / 2) {
    message = "Great work! Open a few more stories and try again for a perfect score.";
  } else {
    message = "Good start! Read some stories and have another go.";
  }

  quizProgress.textContent = "Mission complete";
  quizQuestionText.textContent = "You scored " + quizScore + " out of " + quizQuestions.length;
  quizOptions.innerHTML = "";
  quizFeedback.textContent = message;
  quizNextButton.textContent = "Play again";
  quizNextButton.hidden = false;
}

function handleNextButton() {
  // If the quiz is over, this button restarts it
  if (quizFinished) {
    quizIndex = 0;
    quizScore = 0;
    showQuizQuestion();
    return;
  }

  quizIndex = quizIndex + 1;

  if (quizIndex < quizQuestions.length) {
    showQuizQuestion();
  } else {
    showQuizResult();
  }
}

function setupQuiz() {
  // One listener on the options box handles every answer button
  quizOptions.addEventListener("click", function (event) {
    const clickedButton = event.target.closest(".quiz-option");

    if (clickedButton !== null) {
      chooseAnswer(Number(clickedButton.dataset.index));
    }
  });

  quizNextButton.addEventListener("click", handleNextButton);

  showQuizQuestion();
}


/* =========================================================
   10. MENU BUTTON (MOBILE)
   ========================================================= */
function setupMobileMenu() {
  navToggle.addEventListener("click", function () {
    const isOpen = siteNav.classList.toggle("is-open");

    navToggle.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
      navToggle.setAttribute("aria-label", "Close menu");
    } else {
      navToggle.setAttribute("aria-label", "Open menu");
    }
  });

  // Close the menu after choosing a link
  const navLinks = siteNav.querySelectorAll("a");

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    });
  }
}


/* =========================================================
   11. SCROLL REVEAL
   Items with the class "reveal" fade in when they scroll
   into view. IntersectionObserver tells us when that happens.
   ========================================================= */
let revealObserver = null;

function setupRevealObserver() {
  // Very old browsers: just show everything
  if ("IntersectionObserver" in window === false) {
    return;
  }

  revealObserver = new IntersectionObserver(
    function (entries) {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 }
  );
}

// Call this every time new items are added to the page
function watchRevealItems() {
  const items = document.querySelectorAll(".reveal:not(.visible)");

  for (let i = 0; i < items.length; i++) {
    if (revealObserver === null) {
      items[i].classList.add("visible");
    } else {
      revealObserver.observe(items[i]);
    }
  }
}


/* =========================================================
   12. START EVERYTHING
   The order matters a little: the reveal observer must exist
   before we create cards that want to be revealed.
   ========================================================= */
function startApp() {
  setupStarfield();
  setupRevealObserver();

  renderMissionCards();
  renderTimeline();
  watchRevealItems();

  setupFilters();
  setupDialog();
  setupQuiz();
  setupMobileMenu();
  setupHeroCounters();

  // Put the current year in the footer
  document.getElementById("year").textContent = new Date().getFullYear();
}

startApp();