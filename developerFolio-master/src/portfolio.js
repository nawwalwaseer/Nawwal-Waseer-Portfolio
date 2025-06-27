/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nawwal Aftab Waseer",
  title: "Hi all, I'm Nawwal",
  subTitle: emoji(
    "I’m a MERN Stack Developer with over a year of experience building responsive, full-stack web applications. I’ve completed 5+ full-stack projects, delivered a couple of freelance solutions, and i am currently working on Posify, an AI-powered POS retail system. Certified Mern stack developer from Knowledge Streams, I focus on turning visions into reality!"
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1N6wdoLZ-tXC4YjCJQ0eYdfOvGrH64b7Z", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};



// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nawwalwaseer",
  linkedin: "https://www.linkedin.com/in/nawwal-aftab-waseer-826b97274",
  gmail: "waseernawwal@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/share/1DvRko6wvR/?mibextid=wwXIfr",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  twitter:"https://x.com/nawwalw84448?s=11",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER FOCUSED ON BUILDING MODERN AND RESPONSIVE APPS",
  skills: [
    emoji(
      "⚡ Developed responsive front-ends with React, Tailwind, ShadCN, and Bootstrap"
    ),
    emoji("⚡ Build secure REST APIs with Node.js, Express, MongoDB, SQL, JWT, and bcrypt"),
    emoji(
      "⚡  Deploy apps using GitHub, Vercel, Netlify, Render; trained in teamwork, communication and collaboration"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    
    
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-leaf" // FontAwesome has a leaf icon often used for MongoDB
    },
   
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Mnagement and Technology",
      logo: require("./assets/images/umtlogo.jpg"),
      subHeader: "Bachelors in Computer Science",
      duration: "November 2021 - July 2025",
      desc: "Member of ACM society.",
      descBullets: [
        "Participated actively in UMT ACM society, contributing to coding competitions and attending insightful tech talks and workshops.",
        
      ]
    },
    {
      schoolName: "Kips College",
      logo: require("./assets/images/kipslogo.jpg"),
      subHeader: "FSC Pre Engineering",
      duration: "Jan 2017 - February 2019",
      desc: "Ranked 3rd in the college.",
      descBullets: ["Participated in extra curricular activities and competitions."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mern Stack Trainee",
      company: "Knowledge Streams",
      companylogo: require("./assets/images/kslogo.jpg"),
      date: "June 2024 – October 2024",
      desc: "Full-Stack Development Experience with Frontend and Backend Technologies",
      descBullets: [
        "Designed responsive and dynamic user interfaces using React, Tailwind CSS, and JavaScript.",
        "Developed scalable backend APIs with Node.js, Express, and managed data using MongoDB and SQL databases."
      ]
    },
    {
      role: "Teachers Assistant",
      company: "University of Mnagement and Technology",
      companylogo: require("./assets/images/umtlogo.jpg"),
      date: "March 2025 – July 2025",
      desc: "Teaching Assistant for Database Management and Web Technologies courses.",
      descBullets: [
        "Supported instructors by conducting tutorials, grading assignments, and addressing student queries.",
        "Facilitated hands-on sessions to enhance student understanding of databases and modern web development."
      ]
    },
    {
      role: "Freelance Developer ",
      company: "Fiver",
      companylogo: require("./assets/images/fiverlogo.png"),
      date: "March 2023 – Present",
      desc: "Build freelance profiles offering web development & writing services.",
      descBullets: [
        "Built profiles on Fiverr and Upwork, offering web development and content writing.",
        "Prepared proposals and created a portfolio to improve outreach and client engagement."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PERSONAL PROJECTS I DID",
  projects: [
    {
      image: require("./assets/images/Untitled design (3).png"),
      projectName: "Posify AI",
      projectDesc: "AI driven point of sale retail software including human interactive design",
      projectDetails: "Built using the MERN stack with features like sales tracking, customer and inventory management, and real-time analytics to streamline retail operations.",
      footerLink: [
        {
          name: "Visit github",
          url: "https://github.com/nawwalwaseer/PosifyAI"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/a-modern-realistic-logo-design-featuring_sufqpm-FTRqnHQKaBOmFSA_eHA40IAUSHG2piY4D7QRsw.jpeg"),
      projectName: "Quick Chat App",
      projectDesc: "Online chat application using web sockets",
      footerLink: [
        {
          name: "Visit github",
          url: "https://github.com/nawwalwaseer/Quick-Chat-App-MERN"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Mern Stack Bootcamp",
      subtitle:
        "Certificate of successful completion of 12+ weeks bootcamp for Technical skills and Soft skills",
      image: require("./assets/images/kscertificatee.jpeg"),
      imageAlt: "Knowledge Streams Bootcamp Certificate",
      footerLink: [
        {
          name: "Knowledge Streams",
          url: "https://www.linkedin.com/company/knowledgestreams/"
        },

      ]
    },
    {
      title: "Mastering SEO",
      subtitle:
        "Completed an online certification course on Mastering SEO with ChatGPT, gaining practical skills in optimizing content using AI tools.",
      image: require("./assets/images/SEOcertificate.jpeg"),
      imageAlt: "SEO Mastery course certificate",
      footerLink: [
        {
          name: "Udemy",
          url: "https://www.linkedin.com/posts/nawwal-aftab-waseer-826b97274_seo-chatgpt-digitalmarketing-activity-7222916119609634817-xYOw?utm_source=share&utm_medium=member_ios&rcm=ACoAAEMYUN4BaygJJN0DftAm_iYI9mQS6sSRRyI"
        }
      ]
    },

    {
      title: "Social Service Volunteer",
      subtitle: "Awarded a certificate for completiion of volunteer training flagship program and successful fundraising  at Pakistan Citizenship Alliance ",
      image: require("./assets/images/PCA.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
       
        {
          name: "Pakistan Citizenship Alliance",
          url: "https://www.facebook.com/share/p/16eYLPSKRh/?mibextid=wwXIfr"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92 316 4900961",
  email_address: "waseernawwal@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  // blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
