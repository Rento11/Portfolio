import {
  web,
  creator,
  backend,
  javascript,
  css,
  html,
  bootstrap,
  jakarta,
  java,
  nodejs,
  reactjs,
  threejs,
  sofimed,
  um6p,
  bakery,
  gestionstock,
  
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
    title: "Web Developer",
    icon: creator,
  },
  {
    title: "Java Developer",
    icon: web,
  },
  {
    title: "Desktop-App Developer",
    icon: backend,
  },
];

const technologies = [
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
    name: "Java",
    icon: java,
  },
  {
    name: "Jakarta",
    icon: jakarta,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "STAGE EN BIOINFORMATIQUE",
    company_name: "UM6P",
    icon: um6p,
    iconBg: "#383E56",
    date: "Juillet 2023 - Aout 2023",
    points: [
      "Collection de données à partir de Bases de données scientifiques.",
      "Visualisation graphique de données en utilisant des bibliotheques du language R.",
      "Developpement d'interface de visualisation de données",
    ],
  },
  {
    title: "STAGE D'INITIATION",
    company_name: "Sofimed",
    icon: sofimed,
    iconBg: "#E6DEDD",
    date: "Fev 2022",
    points: [
      "Developpement d'une application Desktop de gestion de stock.",
      "Maintenance informatique .",
      "Assisstance aux reunions du departement informatique",
      "Premiere decouverte du monde professionnel.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Au-delà de ses compétences techniques remarquables, Ayoub est un étudiant déterminé, curieux et collaboratif. Il a la capacité de travailler de manière autonome tout en étant un membre précieux de l'équipe.",
    name: "SAAD MADANI",
    designation: "Professeur",
    company: "Institut Specialisé de Technologie Appliqué",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Sa forte éthique de travail, son engagement envers l'apprentissage continu et sa capacité à communiquer clairement ses idées sont des atouts qui lui distinguent.",
    name: "OUSSAMA LAZARI",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Rento's Bakery",
    description:
      "Application web presentant une patisserie/boulangerie en ligne, permettent au client d'effectuer des achats tout en permettent de gerer le panier selon besoin.",
    tags: [
      {
        name: "Jakarta EE",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: bakery,
    source_code_link: "https://github.com/",
  },
  {
    name: "Stock Management App",
    description:
      "Application desktop de gestion de stock permettant aux utilisateurs de rechercher, ajouter, supprimer ou modifier les produits",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "java swing",
        color: "green-text-gradient",
      },
    ],
    image: gestionstock,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
