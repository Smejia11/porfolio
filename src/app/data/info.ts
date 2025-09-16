export const aboundMe = {
  description: `Ingeniero Full Stack con más de 4 años de experiencia participando activamente en equipos de desarrollo
e investigación en empresas como Noatec S.A.S. y Sistran Andina. A lo largo de este tiempo, he asumido
distintos roles en el ciclo de vida de los proyectos, aportando en el diseño, desarrollo e implementación
de soluciones tanto en el frontend como en el backend.`,
  name: "Santiago Mejia Oquendo",
  title: "Ingeniero de Desarrollo Full Stack",
  srcImage:
    "https://avatars.githubusercontent.com/u/146378532?s=400&u=b663b545c885854967531c4fe51cf522abdfa085&v=4",
};

export const experience = [
  {
    date: `Julio 2021 – Enero 2023`,
    position: "INGENIERO I+D",
    items: [
      `-Desarrollé lógica de negocio para resolver problemas de sincronización de registros en
la nube, garantizando la consistencia de datos en entornos distribuidos.`,
      `-Optimicé aplicaciones web mediante técnicas avanzadas como render-as-you-fetch y estrategias de memoization
en React.`,
    ],
    image: "/noatec.svg",
    company: "Noatec S.A.S.",
    description: `Noatec es una empresa que desarrolla soluciones tecnológicas para la industria del vending con productos en SmartVending, SmartLogistics, SmartDevices y PCBA.`,
  },
  {
    date: "Enero 2023 - Actualidad",
    position: "INGENIERO DESARROLLO",
    items: [
      `-Contribuí a la mejora de la estabilidad y el rendimiento de la aplicación, soportando un incremento de más de
4,000 usuarios en seis meses sin comprometer la calidad`,
      `-Implementé soluciones de caché y procesamiento asíncrono utilizando Redis, mejorando el rendimiento de
la aplicación en un 40%.`,
      `-Desarrollé microservicios escalables con Node.js e integré un API Gateway para la gestión
centralizada, segura y eficiente de los endpoints. Además, construí interfaces de usuario dinámicas y reutilizables
con React.js.`,
    ],
    image: "/noatec.svg",
    company: "Sistran Andina",
    description: `SISTRAN es una empresa que ofrece soluciones de software y consultoría para compañías de seguros de todo el mundo.`,
  },
];

export const projects = [
  {
    title: "Noacloud",
    image: "https://noatec.co/wp-content/uploads/Noacloud-01.png",
    business: "Noatec S.A.S.",
    description: `Plataforma de almacenamiento y gestión de información en la nube que permite a los usuarios 
    mantenerse conectados con su negocio en todo momento y lugar.
    El sistema facilita el monitoreo de información veraz, precisa y en tiempo real, 
    con un enfoque transversal que aporta valor a distintas unidades de negocio.`,
    readMore: "https://noatec.co/unidades-de-negocio/noacloud/",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MySQL",
      "AWS",
      "Spring Boot",
      "Serverless",
    ],
    typeProject: "Plataforma Web",
    isPrivate: true,
  },
  {
    title: "iConnectance",
    image:
      "https://www.sistran.com/latam/andina/colombia/images/sistran-iconnectance.jpg",
    business: "Sistran Andina Colombia",
    description: `iConnectance es la plataforma de portales de autogestión
Omnicanal y configurable, iConnectance acelera y potencia las transacciones entre compañías de seguros, productores, asegurados 
y otras entidades del sector asegurador.`,
    readMore: "https://www.sistran.com/latam/es/iconnectance/",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Azure",
      "Docker",
      "Kubernetes",
      "Redis",
      "MongoDB",
      "Microservicios",
    ],
    typeProject: "Plataforma Web",
    isPrivate: true,
  },
  {
    title: "Paginate-Custom",
    image: "/github.svg",
    business: "Personal",
    description: `
Esta biblioteca está diseñada para proporcionar funcionalidad de paginación de datos en diversas aplicaciones. 
Aprovecha la potencia de TypeScript y Zod para la validación y el análisis de parámetros de paginación con seguridad de tipos.`,
    readMore: "https://github.com/Smejia11/paginate-custom",
    technologies: ["TypeScript"],
    typeProject: "Utilidad",
    isPrivate: false,
  },
  {
    title: "Spring Boot JWT Ejemplo",
    image: "/github.svg",
    business: "Personal",
    description: `Ejemplo de autenticación y autorización en una aplicación de Spring Boot utilizando JWT (JSON Web Tokens).`,
    readMore: "https://github.com/Smejia11/spring-boot-jwt-auth-example",
    technologies: ["Spring Boot", "Java", "JWT", " MySQL"],
    typeProject: "Utilidad",
    isPrivate: false,
  },
  {
    title: "FetchCustom",
    image: "/github.svg",
    business: "Personal",
    description: `FetchCustom es un contenedor liviano para la API nativa "fetch" 
    en Node.js, que proporciona funcionalidad adicional para manejar 
    solicitudes y respuestas HTTP mediante el patron resolver.`,
    readMore: "https://github.com/Smejia11/FetchCustom",
    technologies: ["TypeScript"],
    typeProject: "Utilidad",
    isPrivate: false,
  },
  {
    title: "QueueApi",
    image: "/github.svg",
    business: "Personal",
    description: `API para crear colas basadas en bull mq y express.`,
    readMore: "https://github.com/Smejia11/QueueApi",
    technologies: ["TypeScript", "Node.js", "Express", "Redis", "BullMQ"],
    typeProject: "Utilidad",
    isPrivate: false,
  },
];

export const infoData = {
  email: "santiago.mejia.oquendo1@gmail.com",
  phone: "+57 305 439 6914",
  gitHub: "https://github.com/Smejia11",
  linkedIn: "https://www.linkedin.com/in/santiago-mejia-oquendo-285bba21a/",
  cv: "https://drive.google.com/file/d/1TsopFdwdGGHU9Pj93x00jeXOYVSX_eNp/view?usp=drive_link",
};
