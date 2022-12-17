import UxCategoryImg from "../assets/homescreen/ux-category.png";
import DevCategoryImg from "../assets/homescreen/dev-category.png";
import AvSystemThumb from "../assets/uxProjectThumbs/mdos_thumb.png";
import AudienceExpandThumb from "../assets/uxProjectThumbs/journeys_thumb.png";
import BannedBookThumb from "../assets/uxProjectThumbs/ala_thumb.png";
import WebsiteCompThumb from "../assets/uxProjectThumbs/eyetracker_thumb.png";
import ConnectFourThumb from "../assets/devProjectThumbs/connect_four_thumb.png";
import AudiophileThumb from "../assets/devProjectThumbs/audiophile_thumb.png";
import todoAppThumb from "../assets/devProjectThumbs/todo_app_thumb.png";
import EightballFortuneThumb from "../assets/devProjectThumbs/eightball_fortune_thumb.png";
import DigitalOfficeThumb from "../assets/devProjectThumbs/chadsey_thumb.png";

// undraw svgs
import {
  ChatSvg,
  FilterSvg,
  NewsletterSvg,
  ReportSvg,
  FAQSvg,
  MeetingSvg,
  Map1Svg,
  TranslationSvg,
  VideoCallSvg,
  DevelopmentSvg,
  UsabilitySvg,
  Map2Svg,
  profile1Svg,
  profile2Svg,
  DocumentationSvg,
  SurveySvg,
  InterviewSvg,
  SplitTestSvg,
  EvaluationSvg,
  AnalysisSvg,
  UserFlowSvg,
} from "../utils/undrawSvgs";
// Categories to display on home page
const workCategories = [
  {
    id: 1,
    img: `${UxCategoryImg}`,
    alt: "A large group of research post-it notes stuck to a wall",
    title: "UXR & Design",
    body: "A collection of client-based user experience projects I've had the pleasure to be a part of during my graduate studies",
  },
  {
    id: 2,
    img: `${DevCategoryImg}`,
    alt: "computer displaying ReactJS code",
    title: "Web Development",
    body: "A collection of development projects I've worked on in my spare time to gain skills and understanding in Javascript",
  },
];

//UX Projects
const uxProjects = [
  {
    id: 1,
    title: "AV Status System",
    classification: "UX research",
    client: "Michigan Department of State",
    img: `${AvSystemThumb}`,
    slug: "/av-status-system",
    time: "13 months ( May2020 - June2021 )",
    role: "UX researcher",
    team: "3",
    skills: `Interviews, Transcriptions, 
    Survey design, Usability testing, Report writing`,
    desc: "Established an automated email confirmation system for absentee ballot status updates in four Michigan cities & townships",
    tldr: {
      header: "TLDR",
      body: "Our team partnered with four Michigan Clerk's Offices to roll out an automated email confirmation system to notify those voters of their absentee applications and ballot status for the 2020 Presidential Election. We assessed the system's value by collecting clerk and voter feedback regarding their experience with the system. Finally, the team met with the Michigan Bureau of Elections to discuss publishing documentation on implementing the system for other Michigan clerks to adopt. The project originated during my summer internship as a Citizen Interaction Design Summer Fellow in May 2020.",
    },
    problem: {
      header: "Problem statement",
      body: "In 2020, due to the passage of the statewide ballot proposal 18-3, all eligible and registered voters in Michigan may now request an absent voter ballot without providing a reason. With existing limitations on resources and the increase in completed applications, Michigan's absentee voting system is facing increasing constraints, especially in the realm of transparency.",
    },
    discovery: {
      header: "Discovery",
      items: [
        {
          header: "Research",
          body: "From May 2020 to June 2020, our team conducted eight interviews with Michigan city and township clerks via virtual video conferencing. Each interview lasted 30-60 minutes and adhered to a semi-structured interview protocol. Additionally, our team reviewed data gathered from the Michigan Public Policy Survey (MPPS) during the spring of 2020 by the Center for Local, State, and Urban Policy (Closup).",
        },
        {
          header: "Initial findings",
          body: "There was a heavy clerk workload. Clerks were drowning in voter communications, especially addressing concerns about absentee ballots. Additionally, there needed to be more transparency in the absentee voting process. This lack of transparency caused voter anxiety/uncertainty about whether their vote had been counted.",
        },
        {
          header: "Path forward: automated email system",
          body: "Ann Arbor was already implementing an automated email system that spoke to our discovery findings: automated confirmation emails. We worked with them to understand their IT system and decided to focus on creating the tools needed to scale the solution to other cities and townships. The system needed to account for the various IT setups. Some clerk's offices had in-house IT while others outsourced to IT agencies.",
        },
      ],
    },
    validation: {
      header: "Step 1: Validation criteria",
      items: [
        {
          icon: `${VideoCallSvg}`,
          header: "Measure",
          body: "The demand and capability of multiple clerk's offices in Michigan through interviews and a technical walk-through of their system setup",
        },
        {
          icon: `${DevelopmentSvg}`,
          header: "Develop",
          body: "Business requirements, process integration, and implementation documentation",
        },
      ],
    },
    pilot: {
      header: "Step 2: Automation pilot",
      items: [
        {
          header: "Email testing",
          icon: `${UsabilitySvg}`,
          body: "Worked with clerk's offices and their information technology agencies to integrate automated email testing",
        },
      ],
    },
    implementation: {
      header: "Step 3: Implementation",
      items: [
        {
          header: "4 cities and townships",
          icon: `${Map2Svg}`,
          body: "(Oxford twp, Northville twp, Bay City, Ferndale) Note: These clerk's offices expressed the most interest in utilizing the system, as well as having the time to help set up the configuration",
        },
      ],
    },
    assessment: {
      header: "Step 4: Assessment",
      items: [
        {
          header: "Clerks",
          icon: `${profile1Svg}`,
          body: "Conducted assessment interviews and surveys with all participating clerk's offices to gauge the system's value",
        },
        {
          header: "Voters",
          icon: `${profile2Svg}`,
          body: "Surveyed 192 voters to understand their experience and thoughts of the system",
        },
      ],
    },
    findings: {
      header: "Key findings",
      items: [
        {
          header: "Clerks",
          body: `Generally, clerks felt that the email automation saved them time that would have been spent answering the phone or email queries about the status of absentee ballots, though not all could quantify it. Ferndale came the closest, calculating that they would have spent around 314 hours answering queries without the system. Oxford estimated that the system saved them around an hour a day. 
          On average, 5% of emails sent by the clerk's offices were bounced back, with Ferndale noting, "I find that the problems are about 50/50 split between them [voters] providing an address that is either incorrect or that we could not read it correctly".`,
        },
        {
          header: "Voters",
          body: "Voters embraced the status emails. 61% of surveyed voters felt relief when they received an email update, with 97% expressing interest in receiving future status notifications. 84% of surveyed voters stated the email notification system saved them time from contacting their clerk’s office about their absentee ballot.",
        },
      ],
    },
    conclusion: {
      header: "Step 5: Michigan Bureau of Elections hand-off",
      items: [
        {
          header: "Documentation",
          icon: `${DocumentationSvg}`,
          body: "Completed written report outlining system assessment",
        },
        {
          header: "Scaling",
          icon: `${MeetingSvg}`,
          body: "Met with the Bureau of Elections to discuss the next steps in making the system available to other Michigan clerk's offices",
        },
      ],
    },

    challenges: {
      header: "Challenges",
      list: [
        "Survey participation was limited to those who actively engage with the clerk’s office (via social media)",
        "Reaching Clerks was difficult at times given the Presidential election and workload",
        "There is a month delay between Northville, Oxford, Bay City voter data and Ferndale voter data",
        "The specific time period (the stress and misinformation around the presidential election) may have contributed to a greater interest in this kind of transparency",
        "COVID restrictions increased the demand for/interest in Absentee Ballots",
      ],
    },
    takeaway: {
      header: "Personal takeaway",
      body: "Before this project, I had little knowledge of Michigan's voting system, but I learned a great deal from speaking with professionals in the voting space and hearing their stories. I respect all civil servants dedicating their lives to protecting democracy and keeping voters informed with accurate information.",
    },
  },
  {
    id: 2,
    title: "Banned Books",
    classification: "User research",
    client: "American Library Association",
    img: `${BannedBookThumb}`,
    slug: "/banned-books",
    time: "4 months ( Jan2019 - Apr2019 )",
    role: "UX researcher",
    team: "4",
    skills: `Qualtrics, Interviews, User flows, Personas, Comparative analysis, Heuristic evaluation, A/B testing, Usability testing`,
    desc: "An updated needs and usability assessment analysis of the Banned & Challenged Books website for the American Library Association",
    tldr: {
      header: "TLDR",
      body: "The Office of Intellectual Freedom of the American Library Association redesigned the Banned Books website in 2017. They wanted to ensure the redesign met users' needs by having a website that offered easy website navigation and access to frequently requested materials. Our team conducted a needs assessment and a seven-step usability evaluation of the website to understand where users experienced difficulty and provided recommendations to address those issues.",
    },
    background: {
      header: "Project background",
      body1:
        "The Banned Books website is a resource for individuals to learn about banned or challenged books and the censorship of literature. The Office of Intellectual Freedom (OIF), a department within the American Library Association, implements policies on intellectual freedom and free access to libraries and library materials and manages the website.",
      body2:
        "The Banned Books website is easily confused with Banned Books Week, a sibling website dedicated to the week-long annual and nationally hosted event organized by the OIF.",
    },
    problem: {
      header: "Problem statement",
      body: "The OIF redesigned the Banned Books website in 2017 and wants to ensure the redesign meets users' needs by providing easy website navigation and access to frequently requested materials.",
    },
    process: {
      header: "Process",
      items: [
        {
          icon: `${UserFlowSvg}`,
          header: "Interaction mapping",
          body: "Illustrated multiple user pathways when navigating the website",
        },
        {
          icon: `${InterviewSvg}`,
          header: "User interviews",
          body: "We interviewed the appropriate user groups to discuss their general attitudes on book censorship and their opinions of the current website",
        },
        {
          icon: `${AnalysisSvg}`,
          header: "User interviews",
          body: "We analyzed competitor websites to identify the strengths and weaknesses of the current website configuration",
        },
        {
          icon: `${SurveySvg}`,
          header: "User survey",
          body: "Distributed a 30-question survey to target a larger group of users, gathering additional data about general attitudes, knowledge, and opinions about the Banned Books website",
        },
        {
          icon: `${EvaluationSvg}`,
          header: "Hueristic evaluation",
          body: "Each team member performed an evaluation of the Banned Books website to identify significant usability issues from different perspectives",
        },
        {
          icon: `${SplitTestSvg}`,
          header: "User preference",
          body: "Created a preference test for users to compare the current Banned Books landing page with a reformatted version",
        },
        {
          icon: `${UsabilitySvg}`,
          header: "User preference",
          body: "We performed a moderated usability test with users to understand their experience navigating the Banned Books website",
        },
      ],
    },
    findings: {
      header: "Overall findings",
      list: [
        "The navigation on the Banned Books website is not intuitive. It can be difficult for a user to decipher, which was highly evident in our Usability testing. Users expressed confusion with the navigation tabs located further down the page instead of at the top",
        "Users had difficulty navigating between the Banned Books Website and the ALA Store because 1) accessing the ALA store redirected users out of the Banned Books site into a different section of the larger ALA website, and 2) navigation breadcrumbs were not present.",
        "Users and potential users expressed interest in discussing censorship and banned books because they find the reasons why books are banned fascinating",
      ],
    },
    recommendations: {
      header: "Main recommendations",
      list: [
        "Create a visible navigation bar at the top or left side of the homepage",
        "Add a discussion section or forum to the webpage in place of 'Top 10 Most Challenged Books'. Can also Combine 'Most Challenged Books' and 'Frequently Challenged books' sections",
        "Highlight the link to the ALA Store, and warn users they are leaving the Banned Books Webpage when they click it",
        "Add a redirect link to the Banned Books website on both the ALA store and Banned Books Week landing page",
      ],
    },
    takeaway: {
      header: "Personal takeaway",
      body: "If I could go back and improve an aspect of the project, it would be the User Preference test. In hindsight, we could have done a more comprehensive test, incorporating additional pages rather than focusing solely on the landing page. We missed out on some rich information by limiting ourselves to one page.",
    },
  },
  {
    id: 3,
    title: "Audience Expansion",
    classification: "ux",
    client: "Journeys International",
    img: `${AudienceExpandThumb}`,
    slug: "/audience-expansion",
    time: "4 months ( Feb2020 - Apr2020 )",
    role: "UX Researcher",
    team: "4",
    skills: `Interviews, Data Analysis, Affinity Diagramming, Report Writing`,
    desc: "A customer assessment of current and potential customers to provide recommendations for attracting a new audience for Journeys International",
    tldr: {
      header: "TLDR",
      body: "Journeys International is an adventure travel company looking to expand its business by attracting new customers. As the company pivoted to broaden its market, the goal was to understand the travel habits and preferences of individuals who could serve as a future customer base for Journeys International, specifically travel-inclined people aged 30-45. Our team conducted various user research methods and provided recommendations for attracting this audience.",
    },
    background: {
      header: "What is Journeys International?",
      body: "Journeys International is a travel agency known for its highly customized travel itineraries. Joan and Will Weber founded the company in 1978 to provide more eco-friendly and culturally respectful travel options. To this day, the company adheres to this mission. A local guide accompanies tourists on each trip, and Journeys collaborates with various non-profits to offset carbon output from air travel. Despite its small size of fewer than 20 employees, the Ann Arbor-based company has received several accolades from noteworthy publishers, including Conde Nast, Travel and Leisure, and National Geographic.",
    },
    question: {
      header: "Research question",
      body: "How do people aged 30-45 that share a similar psychologic profile to current Journeys customers make decisions in regards to adventure travel?",
    },
    process: {
      header: "Process",
      items: [
        {
          header: "Background research",
          list: [
            "Client interviews",
            "Competitive Analysis",
            "Target demographic research",
          ],
        },
        {
          header: "Interviews",
          list: ["6 non-customers", "3 customers", "1 adventure specialist"],
        },
        {
          header: "Analysis",
          list: [
            "Examine interview notes",
            "Group into themes for analysis",
            "Develop findings & recommendations",
          ],
        },
      ],
    },
    findings: {
      header:
        "Primary finding: Non-Customers have a mismatched mental model about what a Journeys experience provides",
      items: [
        {
          header: "Definition of Adventure Travel",
          body: "Journeys customers think of the term 'adventure travel' as an internal experience while non-customers view it as more of an external one.",
          quote1:
            "Adventure travel sounds like a tough mudder or accomplishment - nc6",
          quote2:
            "It can... be deep culture travel. It's just not doing the same old - jc1",
        },
        {
          header: "Group travel",
          body: "The mismatched mental model extends to a hesitation toward group travel due to concerns about travel companions",
          quote1:
            "I'm hesitant to travel with people I don't know because I don't want my time and money wasted - nc2",
          quote2:
            "Group trips can be a way to connect with people you share 1 or 2 things in common with and wouldn't meet otherwise - jc3",
        },
      ],
    },
  },

  {
    id: 4,
    title: "Website Comparison",
    classification: "ux",
    client: "Tobii",
    img: `${WebsiteCompThumb}`,
    slug: "/website-comparison",
    desc: "A comparison of the navigability of multiple Behavioral Lab websites  using eye-tracking technology",
  },
];

//Dev Projects
const devProjects = [
  {
    id: 1,
    title: "Connect Four",
    classification: "Web development",
    // client: "Learning Project",
    tech: ["HTML, ", "CSS, ", "React "],
    img: `${ConnectFourThumb}`,
    slug: "/connect-four",
    site: "https://mpayneii-connect-four.netlify.app/",
    github: "https://github.com/MSPayneII/FEM_Connect_Four",
    desc: "A connect four game that allows human player vs. human player gameplay (alternating turns on the same computer)",
    tldr: {
      header: "TLDR",
      body: "Built with ReactJS, this project is a connect four game that allows human player vs. human player gameplay (alternating turns on the same computer). The project was a Frontend Mentor challenge to build the game and get it as close to the provided design specs as possible. While the player vs. player version is complete, Player vs. CPU mode will be in version 2 of the project.",
    },
    behavior: {
      header: "Expected behavior",
      body1:
        "Players start on the main menu screen, where they can select a 'Player vs. Player' game or view the game rules. After selecting 'Player vs. Player,' Player 1 goes first in the first game, with the first turn alternating in subsequent rounds.",
      body2:
        "When a player wins a round, a winner modal appears, and the winning player's score is incremented by 1. Each player has 30 seconds (real-time) to take their turn. If the timer reaches zero, the other player is declared the winner, increasing their score by 1.",
      body3:
        "Clicking the 'Menu' button on the game board opens the in-game menu. In the in-game menu, players can 'Quit Game,' which directs them to the 'Main Menu,' or restart the game by clicking the 'Restart' button, resetting both player scores to zero.",
    },
    features: {
      header: "MVP features",
      featureList: [
        "Responsive design",
        "Player vs player game mode",
        "Visual game piece animation",
        "Score updates after each game",
        "Starting player alternatives every game",
        "View the game rules",
      ],
    },
    highlight1: {
      header: "Gameboard",
      body: "Utilizing the CSS pseudo-elements '::before' and '::after' allowed me to create the gameboard, which consists of a shadow layer, a layer of 42 individual cells (one for each board slot), and the top layer. I set the z-index of the top layer to one and pointer events to none. With this in place, users can click on slots on the board even though they are in the middle layer. It also creates the effect of the game pieces displaying behind the top layer of the board. See the code snippet and accompanying figure.",
    },
    highlight2: {
      header: "Piece animation",
      body: "To create the drop animation, I calculated the heights of the unplaced game piece at the top of a column and the height of the first available row. Next, I subtracted those heights to get the difference and used that information to update the game piece's drop animation using the transform and offset properties. I added a little bounce at the end of each drop to make it more realistic. Shout out to Thomas Campbell on Youtube for this animation approach.",
    },
  },

  {
    id: 2,
    title: "Audiophile E-commerce",
    classification: "Web development",
    // client: "Learning Project",
    tech: ["HTML, ", "CSS, ", "JS "],
    img: `${AudiophileThumb}`,
    slug: "/audiophile",
    site: "https://audiophile-ecommerce-mspayneii.netlify.app/",
    github: "https://github.com/MSPayneII/Audiophile_e-commerce",
    desc: "A multi-page e-commerce website built with a JavaScript-heavy approach",
    tldr: {
      header: "TLDR",
      body: "This project is a multi-page e-commerce website built with a vanilla JavaScript-heavy approach. The project's next step will be rebuilding with ReactJS to reduce code repetition via the use of components",
    },
    features: {
      header: "MVP features",
      featureList: [
        "Responsive design",
        "Add/remove/edit products in cart",
        "Form validation",
        "Order summary confirmation",
        "Cart management via localStorage",
        "Shipping always adds $50 to the order",
        "VAT included",
      ],
    },
    cart: {
      header: "Cart",
      body: "Building with vanilla JS was a fun challenge that took a lot of mental gymnastics for the cart functionality, specifically ensuring that the UI was always in sync with the data by updating and retrieving information every time a product was added, edited, or removed from the cart. ",
    },
  },

  {
    id: 3,
    title: "Todo App",
    classification: "Web development",
    // client: "Learning Project",
    tech: ["HTML, ", "CSS, ", "React "],
    img: `${todoAppThumb}`,
    slug: "/todo-app",
    site: "https://mspayneii-todo-app.netlify.app/",
    github: "https://github.com/MSPayneII/FEM-Todo-App",
    desc: "A todo app built with ReactJS that supports drag and drop functionality and list filtering",
    tldr: {
      header: "TLDR",
      body: "This is a responsive Todo list application built with ReactJS and serves as my solution for the Todo app challenge on Frontend Mentor. For an accessible drag-and-drop list, I used React Beautiful DnD. Also, local storage is updated when data is created, updated, or deleted, ensuring the UI and data are always in sync when the list is updated.",
    },
    features: {
      header: "MVP features",
      featureList: [
        "Responsive design",
        "Drag and drop functionality",
        "Filter by all/active/complete todos",
        "Add/Remove/Update todos to the list",
        "Toggle light and dark mode",
      ],
    },
  },
  {
    id: 4,
    title: "8-Ball Fortune Teller",
    classification: "Web development",
    // client: "Bright Paths Program",
    tech: "M.E.R.N stack",
    img: `${EightballFortuneThumb}`,
    slug: "/eightball-fortune",
    site: "",
    github: "https://github.com/MSPayneII/8-ball-fortune-teller-v2",
    desc: "My Bright Paths Foundation Capstone project. A digital version of the Magic Eightball produced by Mattel",
    tldr: {
      header: "TLDR",
      body1:
        "This project is called '8-Ball Fortune Teller', a full-stack application built with M.E.R.N (MongoDB, Express, React, and Node), and is my attempt at creating a digital experience of Magic Eightball produced by Mattel.",
      body2:
        "It was my coding foundations' capstone for the Bright Paths Program coding boot camp, which ran from October 2021 - February 4th, 2022, and was split into two halves. The first eight weeks focused on coding foundations, and the latter half focused on full-stack React development specialization.",
    },
    features: {
      header: "MVP features",
      featureList: [
        "Responsive design",
        "Account login/creation with authentication",
        "Users can ask the eightball questions",
        "Receive generated answers from eightball",
        "Q&A pairings display in a user's record",
        "Session logout functionality",
      ],
    },
  },
  {
    id: 5,
    title: "Digital Office Space",
    classification: "Web development",
    client: "Chadsey Condon (CCCO)",
    img: `${DigitalOfficeThumb}`,
    slug: "/digital-office-space",
    time: "4 months ( Jan2021 - Apr2021 )",
    role: "Web developer, Content gatherer",
    team: "5",
    skills: `Agile development, Coding,
    Software integration, Copywriting, 
    Survey design`,
    desc: "A UX/development project for the creation of a digital office space for a Detroit-based non-profit community organization",
    tldr: {
      header: "TLDR",
      body: "Our team partnered with the Chadsey Condon Community Organization (CCCO) to create a new digital office space to serve their better residents in the wake of the Covid-19 pandemic. CCCO is a Detroit-based nonprofit dedicated to transforming the lives of residents of the Chadsey Condon neighborhood through community engagement.",
    },
    problem: {
      header: "Problem statement",
      body: "With the onset of the COVID-19 pandemic, the Chadsey Condon Community Organization (CCCO) lost the ability to interact with its community residents through their walk-in office - a vital part of their organization that provided a one-stop destination for help and resources. After moving its organization’s services and resources entirely online, CCCO needed a complete revamping of its website to cater to the new, powerful site utility necessary for its organization to successfully move forward and grow.",
    },
    solution: {
      header: "Solution",
      body1:
        "Our team designed a new website for CCCO, which allowed them to smoothly transition their office to a virtual environment. The focus was to facilitate increased and optimal communication with their residents, reorganize their resources for easier search and navigation and incorporate new features that increase their backend efficiency and website utility.",
      body2:
        "Due to the limited resources available at Chadsey Condon and the organization’s ingrained usage of Squarespace, our team decided to continue using Squarespace, a web content management system (CMS). The workaround was to create a new website that was more user-friendly and provided an interactive digital space for users.",
    },
    agile: {
      header: "Agile",
      body: "Our team adopted an Agile development approach with evolving requirements and solutions split into sprints. We had four 2-3 week sprint cycles, with each sprint consisting of a planning and review phase with Chadsey Condon. The goal for each sprint was to identify issues and challenges to resolve and deliver a working product.",
    },
    functionality: {
      header: "Key functionality",
      items: [
        {
          icon: `${ChatSvg}`,
          header: "Chat",
          body: "The Facebook-powered Live Chat feature allows Chadsey staff to quickly respond to resident questions and comments through their Facebook page",
        },
        {
          icon: `${Map1Svg}`,
          header: "Zone map",
          body: "Built using custom-created geographical maps, residents have access to information about essential landmarks within the Chadsey Condon neighborhood",
        },
        {
          icon: `${FilterSvg}`,
          header: "Resource filter",
          body: "Resource filtering buttons are set so residents can easily find resources they need and which category they are viewing with a visible, active state",
        },
        {
          icon: `${VideoCallSvg}`,
          header: "Booking office hours",
          body: "Residents can book a 30 minutes virtual office hour with Chadsey Condon through Calendly software integration",
        },
        {
          icon: `${TranslationSvg}`,
          header: "Translation",
          body: "The new site translations utilize the power of Google Translate to deliver website translations directed toward the target demographic of Chadsey Condon residents",
        },
        {
          icon: `${ReportSvg}`,
          header: "Report Activities",
          body: "The reporting feature allows residents to notify Chadsey Condon of many issues ranging from potholes to illegal dumping around the neighborhood",
        },
        {
          icon: `${FAQSvg}`,
          header: "FAQ",
          body: "The FAQs page provides answers to common questions that residents often have, giving them an additional avenue to obtain the answers they seek",
        },
        {
          icon: `${NewsletterSvg}`,
          header: "Newsletter",
          body: "Service integration with Mailchimp to help Chadsey Condon manage their newsletters and keep residents updated with the latest community events",
        },
      ],
    },
  },
];

const education = [
  {
    id: 1,
    header: "M.S - Information",
    school: "University of Michigan",
    year: "Grad: 2021",
    gpa: "GPA: 4.0",
  },
  {
    id: 2,
    header: "B.A - Psychology",
    school: "University of Michigan",
    year: "Grad: 2009",
  },
];

const skills = [
  {
    id: 1,
    header: "Development",
    talent: ["HTML", "CSS", "Vanilla JS", "ReactJS", "NextJS"],
  },
  {
    id: 2,
    header: "Research",
    talent: [
      "Protocol design",
      "Research scheduling",
      "Research Admin",
      "User interviews",
      "Survey design",
      "Heuristic evaluation",
      "Comparative analysis",
      "Affinity mapping",
    ],
  },
  {
    id: 3,
    header: "Design",
    talent: ["Wireframing", "Prototyping"],
  },
];

const experience = [
  {
    id: 1,
    role: "Associate Business Consultant",
    company: "Perficient",
    timeFrame: "FEB 2022 - JULY 2022",
    type: "Full-time, remote",
    description:
      "Collaborated with client stakeholders, project design, and development teams to gather business requirements for the first release of two Xcel Energy mobile applications",
  },
  {
    id: 2,
    role: "Perficient Bright Paths Student Engineer",
    company: "DevMountain",
    timeFrame: "OCT 2021 - FEB 2022",
    type: "Full-time, remote",
    description:
      "Participated in a 4-month coding boot camp where I constructed full-stack CRUD applications using HTTP REST methods in vanilla JS and React JS",
  },
  {
    id: 3,
    role: "Website Designer",
    company: "U-M School of Social Work & Urban Planning",
    timeFrame: "OCT 2020 - Sep 2021",
    type: "Part-time, remote",
    description:
      "Collaborated with U-M faculty and graduate students on creating websites for Congolese and Banyamulenge refugee communities in Michigan. Maintained a website focused on sharing the stories of missing migrants of the Mediterranean",
  },
  {
    id: 4,
    role: "UX Researcher & Student Consultant",
    company: "Michigan Department of State",
    timeFrame: "MAY 2020 - JUNE 2021",
    type: "Part-time, remote",
    description:
      "Part of a 3-person team responsible for establishing an automated email confirmation system for voter absentee ballot status in four Michigan cities. Collaborated with industry professionals to adapt the system for expansion in new cities. Administered surveys and conducted interviews to assess the automated email system’s value to clerk’s offices and voters",
  },
  {
    id: 5,
    role: "Citizen Interaction Design Summer Fellow",
    company: "U-M School of Information",
    timeFrame: "MAY 2020 - AUG 2020",
    type: "Full-time, remote",
    description:
      "Worked on three concurrent interdisciplinary teams providing solutions to information issues experienced by Michigan municipalities and organizations during the Covid 19 pandemic",
  },
  {
    id: 6,
    role: "Laboratory Coordinator",
    company: "U-M Ross School of Business",
    timeFrame: "MAY 2015 - JAN 2020",
    type: "Full-time, Ann Arbor, MI",
    description:
      "Managed an online database of 13,000 participants for paid research. Orchestrated research scheduling for all in-lab research experiments. Created official lab protocols for all research conducted in the laboratory. Oversaw participant recruitment for marketing research experiments",
  },
];

export {
  workCategories,
  uxProjects,
  devProjects,
  education,
  skills,
  experience,
};
