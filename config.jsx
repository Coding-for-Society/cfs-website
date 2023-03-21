// team images
import adrianhoelzlwimmer_img from "./img/team/adrianhoelzlwimmer.jpg"
import alexanderhuebner_img from "./img/team/alexanderhuebner.jpg"
import carlheimann_img from "./img/team/carlheimann.jpg"
import cevataykansevinc_img from "./img/team/cevataykansevinc.jpg"
import daniellindner_img from "./img/team/daniellindner.jpg"
import estellekulow_img from "./img/team/estellekulow.jpg"
import harryzheng_img from "./img/team/harryzheng.jpg"
import jakobbreternitz_img from "./img/team/jakobbreternitz.jpg"
import jakobguenther_img from "./img/team/jakobguenther.jpg"
import jonasitt_img from "./img/team/jonasitt.jpg"
import kaieberl_img from "./img/team/kaieberl.jpg"
import moritzfriedemann_img from "./img/team/moritzfriedemann.jpg"
import nhatnguyen_img from "./img/team/nhatnguyen.jpg"
import ragnarfischer_img from "./img/team/ragnarfischer.jpg"

// project images
import ProjectImage from "./img/projects/SampleProject.jpg";

lorem_ipsum_150_words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat libero massa, quis blandit erat fringilla quis. Aliquam erat volutpat. Nunc malesuada neque quis lacus tristique, vel varius quam lobortis. Donec aliquam velit ligula, ac efficitur ex lobortis sed. Phasellus nisl orci, interdum in scelerisque in, tempus dapibus risus. Sed a efficitur est. Morbi mauris nunc, blandit a semper eu, malesuada non quam. Vestibulum dapibus mi eros, non rutrum risus elementum nec. Fusce gravida vehicula sem, vel gravida nulla volutpat quis. Morbi sit amet pharetra dolor, at commodo lectus. Suspendisse ut lacus molestie, interdum ligula et, ultrices purus. Ut malesuada porta augue eu convallis. Cras sed mi at sem ornare tincidunt. Sed pharetra lectus vitae dapibus fringilla. Sed in nulla id magna aliquet porta in vitae diam. Aliquam elementum enim justo, et pellentesque turpis sollicitudin a. Aenean blandit eu nunc id scelerisque. Nulla facilisi. Nullam suscipit cursus turpis eget finibus.";
lorem_ipsum_25_words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus lectus, aliquam vitae sem id, faucibus dapibus felis. Class aptent taciti sociosqu ad litora torquent."

export const teamConfig = {
  adrianhoelzlwimmer: {
    id: "adrianhoelzlwimmer",
    name: "Adrian Hölzlwimmer",
    role: "Frontend Developer",
    image: adrianhoelzlwimmer_img,
    desc: lorem_ipsum_25_words,
    own_text: lorem_ipsum_150_words,
  },
  alexanderhuebner: {
    id: "alexanderhuebner",
    name: "Alexander Hübner",
    role: "Founder",
    image: alexanderhuebner_img,
    desc: lorem_ipsum_25_words,
    own_text: lorem_ipsum_150_words,
  },
  carlheimann: {
    id: "carlheimann",
    name: "Carl Heimann",
    role: "Frontend Developer",
    image: carlheimann_img,
    desc: lorem_ipsum_25_words,
    own_text: lorem_ipsum_150_words,
  },
  cevataykansevinc: {
    id: "cevataykansevinc",
    name: "Cevat Aykan Sevinc",
    role: "Developer: Talente Spenden Website",
    image: cevataykansevinc_img,
    desc: lorem_ipsum_25_words,
    own_text: lorem_ipsum_150_words,
  },
  daniellindner: {
    id: "daniellindner",
    name: "Daniel Lindner",
    role: "Projekt: Wissen",
    image: daniellindner_img,
    desc: lorem_ipsum_25_words,
    own_text: lorem_ipsum_150_words,
  },
  estellekulow: {
    id: "estellekulow",
    name: "Estelle Kulow",
    role: "Frontend Developer",
    image: estellekulow_img,
    desc: lorem_ipsum_25_words,
    own_text: lorem_ipsum_150_words,
  },
  harryzheng: {
    id: "harryzheng",
    name: "Harry Zheng",
    role: "Projekt: Wissen",
    image: harryzheng_img,
    desc: lorem_ipsum_25_words,
    own_text: lorem_ipsum_150_words,
  },
  jakobbreternitz: {
    id: "jakobbreternitz",
    name: "Jakob Breternitz",
    role: "Front End Developer",
    image: jakobbreternitz_img,
    desc: lorem_ipsum_25_words,
    own_text: lorem_ipsum_150_words,
  },
  jakobguenther: {
    id: "jakobguenther",
    name: "Jakob Günther",
    role: "Back End Developer",
    image: jakobguenther_img,
    desc: lorem_ipsum_25_words,
    own_text: lorem_ipsum_150_words,
  },
  jonasitt: {
    id: "jonasitt",
    name: "Jonas Itt",
    role: "Founder",
    image: jonasitt_img,
    desc: lorem_ipsum_25_words,
    own_text: lorem_ipsum_150_words,
  },
  kaieberl: {
    id: "kaieberl",
    name: "Kai Eberl",
    role: "Front End Developer",
    image: kaieberl_img,
    desc: lorem_ipsum_25_words,
    own_text: lorem_ipsum_150_words,
  },
  moritzfriedemann: {
    id: "moritzfriedemann",
    name: "Moritz Friedemann",
    role: "Front End Developer",
    image: moritzfriedemann_img,
    desc: lorem_ipsum_25_words,
    own_text: lorem_ipsum_150_words,
  },
  nhatnguyen: {
    id: "nhatnguyen",
    name: "Nhat Nguyen",
    role: "Design",
    image: nhatnguyen_img,
    desc: lorem_ipsum_25_words,
    own_text: lorem_ipsum_150_words,
  },
  ragnarfischer: {
    id: "ragnarfischer",
    name: "Ragnar Fischer",
    role: "Back End Developer",
    image: ragnarfischer_img,
    desc: lorem_ipsum_25_words,
    own_text: lorem_ipsum_150_words,
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
    team: [teamConfig.alexanderhuebner, teamConfig.jakobbreternitz, teamConfig.carlheimann, teamConfig.ragnarfischer],
  },
  {
    id: "education",
    name: "Project: Education",
    image: ProjectImage,
    start: new Date(2022, 10),
    end: null,
    active: true,
    desc: "",
    team: [teamConfig.daniellindner, teamConfig.harryzheng, teamConfig.moritzfriedemann, teamConfig.jonasitt]
  },
  {
    id: "cfs-website",
    name: "Coding for Society Website",
    image: ProjectImage,
    start: new Date(2022, 10),
    end: null,
    active: true,
    desc: "Our own website",
    team: [teamConfig.jonasitt, teamConfig.kaieberl, teamConfig.moritzfriedemann, teamConfig.harryzheng, teamConfig.nhatnguyen, teamConfig.adrianhoelzlwimmer, teamConfig.jakobguenther]
  },
  {
    id: "hackatum22",
    name: "HackaTUM 2022",
    image: ProjectImage,
    start: new Date(2022, 10, 18),
    end: new Date(2022, 10, 20),
    active: false,
    desc: "Together we participated in the HackaTUM 2022. We are proud to score the second place in one of the sponsor challenge.",
    team: [teamConfig.alexanderhuebner, teamConfig.ragnarfischer, teamConfig.jakobbreternitz, teamConfig.jonasitt, teamConfig.nhatnguyen, teamConfig.jakobguenther]
  },
];