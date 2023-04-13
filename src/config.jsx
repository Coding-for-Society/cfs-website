// team images
import adrianhoelzlwimmerImg from "./img/team/adrianhoelzlwimmer.jpg";
import alexanderhuebnerImg from "./img/team/alexanderhuebner.jpg";
import carlheimannImg from "./img/team/carlheimann.jpg";
import cevataykansevincImg from "./img/team/cevataykansevinc.jpg";
import daniellindnerImg from "./img/team/daniellindner.jpg";
import estellekulowImg from "./img/team/estellekulow.jpg";
import harryzhengImg from "./img/team/harryzheng.jpg";
import jakobbreternitzImg from "./img/team/jakobbreternitz.jpg";
import jakobguentherImg from "./img/team/jakobguenther.jpg";
import jonasittImg from "./img/team/jonasitt.jpg";
import kaieberlImg from "./img/team/kaieberl.jpg";
import moritzfriedemannImg from "./img/team/moritzfriedemann.jpg";
import nhatnguyenImg from "./img/team/nhatnguyen.jpg";
import ragnarfischerImg from "./img/team/ragnarfischer.jpg";

// project images
import ProjectImage from "./img/projects/SampleProject.jpg";

const loremIpsum25Words =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus lectus, aliquam vitae sem id, faucibus dapibus felis. Class aptent taciti sociosqu ad litora torquent.";

export const teamConfig = {
  jonasitt: {
    id: "jonasitt",
    name: "Jonas Itt",
    role: "Founder & Project Lead",
    image: jonasittImg,
    desc: loremIpsum25Words,
    own_text:
      "Coding for Society, to me, is the perfect way to work on socially valuable projects. It is great to always improve personal skills and being in a diverse, motivated team of like-minded people.",
  },
  alexanderhuebner: {
    id: "alexanderhuebner",
    name: "Alexander Hübner",
    role: "Founder & Project Lead",
    image: alexanderhuebnerImg,
    desc: loremIpsum25Words,
    own_text: "",
  },
  adrianhoelzlwimmer: {
    id: "adrianhoelzlwimmer",
    name: "Adrian Hölzlwimmer",
    role: "Frontend Developer",
    image: adrianhoelzlwimmerImg,
    desc: loremIpsum25Words,
    own_text: "",
  },
  carlheimann: {
    id: "carlheimann",
    name: "Carl Heimann",
    role: "Frontend Developer",
    image: carlheimannImg,
    desc: loremIpsum25Words,
    own_text: "",
  },
  cevataykansevinc: {
    id: "cevataykansevinc",
    name: "Cevat Aykan Sevinc",
    role: "Full Stack Developer",
    image: cevataykansevincImg,
    desc: loremIpsum25Words,
    own_text: "",
  },
  daniellindner: {
    id: "daniellindner",
    name: "Daniel Lindner",
    role: "Educator",
    image: daniellindnerImg,
    desc: loremIpsum25Words,
    own_text: "",
  },
  estellekulow: {
    id: "estellekulow",
    name: "Estelle Kulow",
    role: "Frontend Developer",
    image: estellekulowImg,
    desc: loremIpsum25Words,
    own_text: "",
  },
  harryzheng: {
    id: "harryzheng",
    name: "Harry Zheng",
    role: "Frontend Developer & Educator",
    image: harryzhengImg,
    desc: loremIpsum25Words,
    own_text: "",
  },
  jakobbreternitz: {
    id: "jakobbreternitz",
    name: "Jakob Breternitz",
    role: "Front End Developer",
    image: jakobbreternitzImg,
    desc: loremIpsum25Words,
    own_text: "",
  },
  jakobguenther: {
    id: "jakobguenther",
    name: "Jakob Günther",
    role: "Back End Developer",
    image: jakobguentherImg,
    desc: loremIpsum25Words,
    own_text: "",
  },
  kaieberl: {
    id: "kaieberl",
    name: "Kai Eberl",
    role: "Front End Developer",
    image: kaieberlImg,
    desc: loremIpsum25Words,
    own_text: "",
  },
  moritzfriedemann: {
    id: "moritzfriedemann",
    name: "Moritz Friedemann",
    role: "Front End Developer",
    image: moritzfriedemannImg,
    desc: loremIpsum25Words,
    own_text: "",
  },
  nhatnguyen: {
    id: "nhatnguyen",
    name: "Nhat Nguyen",
    role: "Front End Developer & Designer",
    image: nhatnguyenImg,
    desc: loremIpsum25Words,
    own_text: "",
  },
  ragnarfischer: {
    id: "ragnarfischer",
    name: "Ragnar Fischer",
    role: "Back End Developer",
    image: ragnarfischerImg,
    desc: loremIpsum25Words,
    own_text: "",
  },
};

export const projectConfig = [
  {
    id: "ts-website",
    name: "Talente Spenden Website",
    image: ProjectImage,
    start: new Date(2022, 9),
    end: null,
    active: false,
    desc: "Currently we are reworking the internet presence of the social student club Talente Spenden.",
    team: [
      teamConfig.alexanderhuebner,
      teamConfig.jakobbreternitz,
      teamConfig.carlheimann,
      teamConfig.ragnarfischer,
    ],
  },
  {
    id: "education",
    name: "Project: Education",
    image: ProjectImage,
    start: new Date(2022, 10),
    end: null,
    active: true,
    desc: "Project Education helps school students to find their way into computer science.",
    team: [
      teamConfig.daniellindner,
      teamConfig.harryzheng,
      teamConfig.moritzfriedemann,
      teamConfig.jonasitt,
    ],
  },
  {
    id: "cfs-website",
    name: "Coding for Society Website",
    image: ProjectImage,
    start: new Date(2022, 10),
    end: null,
    active: true,
    desc: "This project is rather personal, our own, somewhat special, website.",
    team: [
      teamConfig.jonasitt,
      teamConfig.kaieberl,
      teamConfig.moritzfriedemann,
      teamConfig.harryzheng,
      teamConfig.nhatnguyen,
      teamConfig.adrianhoelzlwimmer,
      teamConfig.jakobguenther,
    ],
  },
  {
    id: "hackatum22",
    name: "HackaTUM 2022",
    image: ProjectImage,
    start: new Date(2022, 10, 18),
    end: new Date(2022, 10, 20),
    active: false,
    desc: "Together we participated in the HackaTUM 2022. We scored 2nd in one the challenges.",
    team: [
      teamConfig.alexanderhuebner,
      teamConfig.ragnarfischer,
      teamConfig.jakobbreternitz,
      teamConfig.jonasitt,
      teamConfig.nhatnguyen,
      teamConfig.jakobguenther,
    ],
  },
];

export const faqTSW = [
  {
    question: "Frontend Developer",
    answer:
      "Help us implement the Talente Spenden website concept using HTML and Javascript.",
    id: 1,
  },
  {
    question: "Backend Developer",
    answer:
      "Create and maintain the databases that power the Talente Spenden website.",
    id: 2,
  },
];

export const faqEducation = [
  {
    question: "Education Consultant",
    answer: "Support us with conducting coding projects at schools. [TBD]",
    id: 1,
  },
];

export const faqCFSW = [
  {
    question: "Full Stack Developer",
    answer:
      "Can you see yourself extending and maintaining this website? Do you have basic knowledge in Javascript, HTML and SQL and are a quick learner? Then this one is for you!",
    id: 1,
  },
  {
    question: "Frontend Developer",
    answer:
      "Help us implement our website prototype using HTML and Javascript. [TBD, just copy over some To-Dos from the Kanban board]",
    id: 2,
  },
  {
    question: "Backend Developer",
    answer:
      "Develop the SQL pipeline for this website and get practical experience with building a website.",
    id: 3,
  },
  {
    question: "Designer",
    answer: "Help us design the website and create a great user experience.",
    id: 4,
  },
  {
    question: "HR Manager",
    answer:
      "You like socializing with people and discovering people’s talents? In this position, you help us look out for people that would be a great addition to our team.",
    id: 5,
  },
];

export const faqApply = [
  {
    question: "What are the next steps in the application process?",
    answer:
      "We will invite you to a personal interview where we will talk about what you can do and what you can expect from us.",
    id: 1,
  },
  {
    question: "Do I have to study computer science?",
    answer:
      "No, all study areas are welcome. We are also looking for members in the areas: design, ...",
    id: 2,
  },
  {
    question: "What is the minimum time requirement for participating?",
    answer:
      "Most of our members do 5 hours a week. Of course this can be adapted in the exam phase etc.",
    id: 3,
  },
  {
    question:
      "Do I have to be a current scholarship owner of the Deutschlandstipendium?",
    answer: "This is not a strict requirement.",
    id: 4,
  },
];
