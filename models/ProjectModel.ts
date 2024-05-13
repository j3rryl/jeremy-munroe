export interface ProjectModel {
  id: number;
  title: string;
  company: string;
  imageUrl?: string;
  tags?: string[];
  url?: string;
  content: string;
}

export const projects: ProjectModel[] = [
  {
    id: 1,
    title: "SSSAMS Revamp Project",
    imageUrl: "https://sssams.org/img/MoGEI%20logo_128x128_white.png",
    company: "Strathmore iLab",
    tags: ["React", "NextJS", "MongoDB", "MySql"],
    url: "https://digital-learning.strathmore.edu/dashboard",
    content: `This project utilized React, Next.js, MongoDB, and MySQL for the revitalization of the Student Management System for South Sudan (SSSAMS).
      Ongoing enhancements focused on improving system functionality and user experience.`,
  },
  {
    id: 2,
    title: "File Management System Revitalization",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/7a/c1/8a/7ac18a3c-07cd-6fd9-1c26-d2d0a2a97e09/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
    company: "Strathmore Business School",
    tags: ["Bootstrap", "Laravel", "MySql"],
    url: "https://sbsdocs.strathmore.edu",
    content: `Bootstrap, Laravel, and MySQL were utilized for the revitalization of an existing file management system for university staff.
      The project focused on tailoring the system for efficient utilization and enhancing accessibility.`,
  },
  {
    id: 3,
    title: "Faculty Management System",
    company: "Strathmore Business School",
    tags: ["Bootstrap", "Laravel", "MySql"],
    url: "https://fms.strathmore.edu",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/7a/c1/8a/7ac18a3c-07cd-6fd9-1c26-d2d0a2a97e09/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
    content: `This project involved the utilization of Bootstrap, Laravel, and MySQL for the conceptualization, design, and implementation of a comprehensive Faculty Management System.
      The integration of diverse functionalities aimed to support seamless administrative processes.`,
  },
  {
    id: 4,
    title: "Events Management System",
    company: "Strathmore University",
    url: "https://ebs.strathmore.edu/",
    tags: ["Bootstrap", "Laravel", "MySql"],
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/7a/c1/8a/7ac18a3c-07cd-6fd9-1c26-d2d0a2a97e09/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
    content: `The development of an Events Management System for Strathmore University involved utilizing Bootstrap, Laravel, and MySQL.`,
  },
  {
    id: 5,
    title: "Mobile Application Development for 360 Beauty Scents",
    company: "Dezanna Hub",
    url: "https://360beautyscents.co.ke/",
    tags: ["Bootstrap", "Laravel", "MySql", "Flutter", "Dart"],
    imageUrl: "https://dezanahub.co.ke/wp-content/uploads/2024/03/logoweb.png",
    content: `Bootstrap, Laravel, MySQL, Flutter, and Dart were utilized for the development of a customer-facing mobile application.
      Additionally, an admin panel was implemented for streamlined product management and payments.`,
  },
  {
    id: 6,
    title: "ALiVE Platform Development",
    company: "Alive (Zizi Afrique)",
    url: "http://learning.alive-reli.org/",
    tags: ["React", "NextJS", "MongoDB", "MySql", "Tailwind"],
    imageUrl:
      "http://www.alive-reli.org/wp-content/uploads/2021/10/WhatsApp-Image-2024-03-07-at-22.29.37.jpeg",
    content: `This project utilized React, Next.js, MongoDB, MySQL, and Tailwind for spearheading the development of an innovative open-source content distribution platform.
      The focus was on conceptualizing, designing, and implementing features to optimize content delivery.`,
  },
  {
    id: 7,
    title: "Upesy Client System Development",
    company: "Upesy",
    url: "https://upesy.co.ke/",
    tags: [
      "React",
      "NextJS",
      "MongoDB",
      "Google Maps",
      "Tailwind",
      "Express",
      "Node JS",
    ],
    imageUrl:
      "https://pbs.twimg.com/profile_images/1145333180779651073/D0A7O5fZ_400x400.png",
    content: `For the development and maintenance of client systems, technologies such as React, Next.js, MongoDB, Google Maps, Tailwind, Express, and Node.js were utilized.
      Additionally, back-end maintenance and deployment of the Upesy client system were performed.`,
  },
  {
    id: 8,
    company: "Skylab Systems",
    url: "https://cleanisha.com/",
    tags: ["Flutter", "Android", "MySQL", "Java", "Springboot"],
    title: "Cleanisha and Apptivate Africa UI and Functionality Enhancement",
    imageUrl:
      "https://play-lh.googleusercontent.com/YHJKpC5nHh4LwPikkibhUs2FIU_X0en-k6VN6zm86N7iUDSWSKFjt-s2fWdpyGRIyRs=w240-h480-rw",
    content: `This project focused on UI and functionality improvements for mobile applications using Flutter, Android, MySQL, Java, and Spring Boot.`,
  },
  {
    id: 9,
    company: "Skylab Systems",
    url: "http://majidata.wasreb.go.ke/",
    title: "Majidata GIS Utility",
    tags: ["React", "Node JS", "OpenLayers"],
    imageUrl:
      "https://scontent.fnbo8-1.fna.fbcdn.net/v/t39.30808-1/279052075_352697200229178_2534054679759365391_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=B79R7eTtocIQ7kNvgFTwjZ0&_nc_ht=scontent.fnbo8-1.fna&oh=00_AYBnP9s6itwS1s1SxkfXUqsSZJsqCww88KxeOmWPJrgUAw&oe=6647CCE5",
    content: `UI and functionality improvements for the web application was achieved using React, Node.js, and OpenLayers.`,
  },
  {
    id: 10,
    company: "Skylab Systems",
    url: "https://apptivateafrica.com/",
    tags: ["Android", "MySQL", "Java", "Springboot"],
    title: "Apptivate Adrica",
    imageUrl:
      "https://scontent.fnbo8-1.fna.fbcdn.net/v/t39.30808-1/236565456_216350100500436_5065310756289660292_n.png?stp=dst-png_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-Os0VFCAZA0Q7kNvgEr-Hgl&_nc_ht=scontent.fnbo8-1.fna&oh=00_AYD-_R4640eCYI_QI9hwPGfHZf9-phkdkW4OwI8Xyx68Zg&oe=6647F3C7",
    content: `Developed using Android, MySQL, Java, and Spring Boot.`,
  },
];
