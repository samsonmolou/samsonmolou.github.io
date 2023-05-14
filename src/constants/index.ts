import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  mtn,
  atos,
  fcbai,
  ey,
  carrent,
  jobit,
  tripguide,
  threejs,
  uipath,
  sap,
  blueprism,
  rails,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Technology Consultant",
    icon: creator,
  },
  {
    title: "Senior RPA Developer",
    icon: web,
  },
  {
    title: "Fullstack Web Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "UiPath",
    icon: uipath,
  },
  {
    name: "SAP iRPA",
    icon: sap,
  },
  {
    name: "BluePrism",
    icon: blueprism,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Ruby on Rails",
    icon: rails,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mid Software Engineer",
    company_name: "FCB.ai",
    icon: fcbai,
    iconBg: "#FFFFFF",
    date: "May 2022 - Present",
    points: [
      "Automated the reporting processes of a mid-sized organization using UiPath.",
      "Developed UiPath workflows to gather, process, and generate reports on key business metrics on a regular basis.",
      "Implemented automated data entry processes to reduce manual input errors and improve the overall efficiency of the reporting system.",
      "Automated the testing process of the organization's Chatbot.",
      "Created UiPath workflows to simulate user interactions with the Chatbot and verify the accuracy and effectiveness of its responses.",
      "Automated the PowerBI dashboard refresh for 20 clients with data coming from multiple DataSource (Metabase, AWS, Google Drive, etc)",
      "Improved overall accuracy and efficiency of the organization's reporting and Chatbot testing processes by leveraging UiPath's automation capabilities.",
    ],
  },
  {
    title: "Technology Consultant",
    company_name: "EY Consulting",
    icon: ey,
    iconBg: "#383e56",
    date: "Dec 2019 - Apr 2022 (2 yrs 4 mos)",
    points: [
      "Conducted intrusion tests for Sir, Eranove, and Air Côte d'Ivoire to identify vulnerabilities and improve their security posture.",
      "Conducted configuration review for SIR, Eranove for their network Equipements",
      "Assisted in the deployment of the SAP custom solution in 9 French-speaking African countries, including Senegal, Ivory Coast, Cameroon, Congo, Congo Brazzaville, Equatorial Guinea, Chad, Guinea, and Gabon.",
      "Developed UiPath robots to automate customer reporting and clients accounts situations for Laborex Senegal, reducing manual effort and improving efficiency (UiPath, AS400, Office).",
      "Automated bank reconciliation solution for Allianz CI using UiPath, improving the accuracy and speed of the process.",
      "Developed robots using UiPath as part of the operational improvement of BICICI's Back-Office activities, reducing manual effort and improving efficiency.",
      "Conducted a POC RPA for the robotization of Allianz CI processes, exploring the potential of UiPath, BluePrism, and SAP iRPA.",
      "Successfully developed and delivered bug-free projects within the initially established deadline, improving the efficiency of the company's processes.",
    ],
  },
  {
    title: "Research and Development Engineer Intern",
    company_name: "Atos",
    icon: atos,
    iconBg: "#0065A0",
    date: "May 2019 - December 2019 (7 mos)",
    points: [
      "Automated NSIA Bank business processes during tenure as a Research and Development Engineer Intern.",
      "Utilized Oracle Weblogic and Oracle Database 12c to implement scalable and reliable solutions that met the bank's specific requirements.",
      "Worked closely with the NSIA Bank team to identify areas where automation could be leveraged to improve business processes and developed solutions to meet those needs.",
      "Successfully integrated the developed applications into the NSIA Bank's existing systems, ensuring seamless adoption and minimal disruption to operations.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "MTN CI",
    icon: mtn,
    iconBg: "#FFC303",
    date: "May 2016 - November 2016",
    points: [
      "Conducted analysis of repeated complaints.",
      "Conducted extensive testing of prepaid offers, identifying areas for improvement and implementing changes to enhance customer experience.",
      "Developed an expert system for the analysis of repeated complaints using C#, ASP.NET MVC, HTML, CSS, JavaScript, and SQL Server.",
      "Developed a user-friendly interface for the expert system using HTML and CSS, ensuring easy adoption and minimal disruption to operations.",
      "Successfully integrated the expert system into the organization's existing systems, ensuring seamless adoption and minimal disruption to operations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
