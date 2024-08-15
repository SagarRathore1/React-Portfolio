import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import weather from "../assets/projects/weather.png";
import expenseTracker from "../assets/projects/expense-tracker.png"
import portfolio from "../assets/projects/portfolio.png";

export const HERO_CONTENT = `I am a passionate front-end developer with 3 months of experience, specializing in responsive and user-centric web applications. Skilled in HTML, CSS, JavaScript, React.js, and Tailwind CSS, I have contributed to open source projects through the GirlScript Summer of Code, focusing on creating high-quality, visually appealing web solutions.`;

export const ABOUT_TEXT = `I am an enthusiastic Mechanical Engineering undergraduate from Delhi Technological University with a strong passion for web development. Over the past few months, I have delved into the world of front-end technologies, acquiring skills in HTML, CSS, JavaScript, React.js, and Tailwind CSS. My journey in web development has allowed me to explore creative solutions and build engaging, user-friendly interfaces. Alongside my academic pursuits, I actively contribute to open source projects and enjoy collaborating with other developers.`;

export const EXPERIENCES = [
  {
    year: "2024(May -July)",
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSsoc'24)",
    description:"I had the opportunity to contribute to open-source projects as part of the GirlScript Summer of Code (GSSoC) over a period of three months. During this time, I focused on frontend development, where I collaborated with teams to improve and build user-friendly interfaces. My contributions involved writing clean, efficient code, resolving issues, and enhancing the overall user experience for various projects. This experience not only strengthened my frontend skills but also deepened my understanding of collaborative development in the open-source community.",
    technologies: ["Javascript", "React.js", "Github", "Html","CSS"],
  },


];

export const PROJECTS = [
 
  
  {
    title: "Expence Tracker App",
    image: expenseTracker,
    description:
      "An Expense Tracker App helps users manage finances by tracking and categorizing daily expenses. It provides insights into spending habits, helps set budgets, and offers visual reports, making it easier to stay on top of finances.",
    technologies: ["HTML", "CSS", "JavaScript", ],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [ "TaiwindCSS","JavaScript", "ReactJS", "Framer motion"],
  },
  {
    title: "Weather App",
    image: weather,
    description:
      "A Weather App provides real-time weather updates, including temperature, humidity, and forecasts. Users can quickly check current conditions and future predictions for their location, making it easy to plan their day accordingly.",
    technologies: ["HTML", "CSS","JavaScript", "React"],
  },

];

export const CONTACT = {
  address: "Khajuri Khas, North East Delhi-110094 ",
  phoneNo: "+91 9310 3740 82 ",
  email: "sagarrathore.fea@gmail.com",
};