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

const loremIpsum150Words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat libero massa, quis blandit erat fringilla quis. Aliquam erat volutpat. Nunc malesuada neque quis lacus tristique, vel varius quam lobortis. Donec aliquam velit ligula, ac efficitur ex lobortis sed. Phasellus nisl orci, interdum in scelerisque in, tempus dapibus risus. Sed a efficitur est. Morbi mauris nunc, blandit a semper eu, malesuada non quam. Vestibulum dapibus mi eros, non rutrum risus elementum nec. Fusce gravida vehicula sem, vel gravida nulla volutpat quis. Morbi sit amet pharetra dolor, at commodo lectus. Suspendisse ut lacus molestie, interdum ligula et, ultrices purus. Ut malesuada porta augue eu convallis. Cras sed mi at sem ornare tincidunt. Sed pharetra lectus vitae dapibus fringilla. Sed in nulla id magna aliquet porta in vitae diam. Aliquam elementum enim justo, et pellentesque turpis sollicitudin a. Aenean blandit eu nunc id scelerisque. Nulla facilisi. Nullam suscipit cursus turpis eget finibus.";
const loremIpsum25Words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus lectus, aliquam vitae sem id, faucibus dapibus felis. Class aptent taciti sociosqu ad litora torquent.";

export const teamConfig = {
  adrianhoelzlwimmer: {
    id: "adrianhoelzlwimmer",
    name: "Adrian Hölzlwimmer",
    role: "Frontend Developer",
    image: adrianhoelzlwimmerImg,
    desc: loremIpsum25Words,
    own_text: loremIpsum150Words,
  },
  alexanderhuebner: {
    id: "alexanderhuebner",
    name: "Alexander Hübner",
    role: "Founder",
    image: alexanderhuebnerImg,
    desc: loremIpsum25Words,
    own_text: loremIpsum150Words,
  },
  carlheimann: {
    id: "carlheimann",
    name: "Carl Heimann",
    role: "Frontend Developer",
    image: carlheimannImg,
    desc: loremIpsum25Words,
    own_text: loremIpsum150Words,
  },
  cevataykansevinc: {
    id: "cevataykansevinc",
    name: "Cevat Aykan Sevinc",
    role: "Developer: Talente Spenden Website",
    image: cevataykansevincImg,
    desc: loremIpsum25Words,
    own_text: loremIpsum150Words,
  },
  daniellindner: {
    id: "daniellindner",
    name: "Daniel Lindner",
    role: "Projekt: Wissen",
    image: daniellindnerImg,
    desc: loremIpsum25Words,
    own_text: loremIpsum150Words,
  },
  estellekulow: {
    id: "estellekulow",
    name: "Estelle Kulow",
    role: "Frontend Developer",
    image: estellekulowImg,
    desc: loremIpsum25Words,
    own_text: loremIpsum150Words,
  },
  harryzheng: {
    id: "harryzheng",
    name: "Harry Zheng",
    role: "Projekt: Wissen",
    image: harryzhengImg,
    desc: loremIpsum25Words,
    own_text: loremIpsum150Words,
  },
  jakobbreternitz: {
    id: "jakobbreternitz",
    name: "Jakob Breternitz",
    role: "Front End Developer",
    image: jakobbreternitzImg,
    desc: loremIpsum25Words,
    own_text: loremIpsum150Words,
  },
  jakobguenther: {
    id: "jakobguenther",
    name: "Jakob Günther",
    role: "Back End Developer",
    image: jakobguentherImg,
    desc: loremIpsum25Words,
    own_text: loremIpsum150Words,
  },
  jonasitt: {
    id: "jonasitt",
    name: "Jonas Itt",
    role: "Founder",
    image: jonasittImg,
    desc: loremIpsum25Words,
    own_text: loremIpsum150Words,
  },
  kaieberl: {
    id: "kaieberl",
    name: "Kai Eberl",
    role: "Front End Developer",
    image: kaieberlImg,
    desc: loremIpsum25Words,
    own_text: loremIpsum150Words,
  },
  moritzfriedemann: {
    id: "moritzfriedemann",
    name: "Moritz Friedemann",
    role: "Front End Developer",
    image: moritzfriedemannImg,
    desc: loremIpsum25Words,
    own_text: loremIpsum150Words,
  },
  nhatnguyen: {
    id: "nhatnguyen",
    name: "Nhat Nguyen",
    role: "Design",
    image: nhatnguyenImg,
    desc: loremIpsum25Words,
    own_text: loremIpsum150Words,
  },
  ragnarfischer: {
    id: "ragnarfischer",
    name: "Ragnar Fischer",
    role: "Back End Developer",
    image: ragnarfischerImg,
    desc: loremIpsum25Words,
    own_text: loremIpsum150Words,
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
    desc: "",
    team: [teamConfig.alexanderhuebner, teamConfig.jakobbreternitz, teamConfig.carlheimann,
      teamConfig.ragnarfischer],
  },
  {
    id: "education",
    name: "Project: Education",
    image: ProjectImage,
    start: new Date(2022, 10),
    end: null,
    active: true,
    desc: "",
    team: [teamConfig.daniellindner, teamConfig.harryzheng, teamConfig.moritzfriedemann,
      teamConfig.jonasitt],
  },
  {
    id: "cfs-website",
    name: "Coding for Society Website",
    image: ProjectImage,
    start: new Date(2022, 10),
    end: null,
    active: true,
    desc: "Our own website",
    team: [teamConfig.jonasitt, teamConfig.kaieberl, teamConfig.moritzfriedemann,
      teamConfig.harryzheng, teamConfig.nhatnguyen, teamConfig.adrianhoelzlwimmer,
      teamConfig.jakobguenther],
  },
  {
    id: "hackatum22",
    name: "HackaTUM 2022",
    image: ProjectImage,
    start: new Date(2022, 10, 18),
    end: new Date(2022, 10, 20),
    active: false,
    desc: "Together we participated in the HackaTUM 2022. We are proud to score the second place in one of the sponsor challenge.",
    team: [teamConfig.alexanderhuebner, teamConfig.ragnarfischer, teamConfig.jakobbreternitz,
      teamConfig.jonasitt, teamConfig.nhatnguyen, teamConfig.jakobguenther],
  },
];