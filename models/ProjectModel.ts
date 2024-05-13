export interface ProjectModel {
  id: number;
  title: string;
  company: string;
  imageUrl?: string;
  content: string;
}

export const projects: ProjectModel[] = [
  {
    id: 1,
    title: "SSSAMS Revamp Project",
    imageUrl: "https://sssams.org/img/MoGEI%20logo_128x128_white.png",
    company: "Strathmore iLab",
    content: `Revitalization of the Student Management System for South Sudan (SSSAMS).
      Ongoing enhancements for system functionality and user experience.`,
  },
  {
    id: 2,
    title: "File Management System Revitalization",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/7a/c1/8a/7ac18a3c-07cd-6fd9-1c26-d2d0a2a97e09/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
    company: "Strathmore Business School",
    content: `Revitalization of an existing file management system for university staff.
      Tailoring for efficient utilization and enhancing accessibility.`,
  },
  {
    id: 3,
    title: "Faculty Management System",
    company: "Strathmore Business School",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/7a/c1/8a/7ac18a3c-07cd-6fd9-1c26-d2d0a2a97e09/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
    content: `Conceptualization, design, and implementation of a comprehensive Faculty Management System.
      Integration of diverse functionalities for seamless administrative processes.`,
  },
  {
    id: 4,
    title: "Events Management System",
    company: "Strathmore University",
    imageUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/7a/c1/8a/7ac18a3c-07cd-6fd9-1c26-d2d0a2a97e09/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
    content: `Development of an Events Management System for Strathmore University.`,
  },
  {
    id: 5,
    title: "Mobile Application Development for 360 Beauty Scents",
    company: "Dezanna Hub",
    imageUrl: "https://dezanahub.co.ke/wp-content/uploads/2024/03/logoweb.png",
    content: `Development of a customer-facing mobile application.
      Implementation of an admin panel for streamlined product management and payments.`,
  },
  {
    id: 6,
    title: "ALiVE Platform Development",
    company: "Alive (Zizi Afrique)",
    imageUrl:
      "http://www.alive-reli.org/wp-content/uploads/2021/10/WhatsApp-Image-2024-03-07-at-22.29.37.jpeg",
    content: `Spearheading the development of an innovative open-source content distribution platform.
      Conceptualization, design, and implementation of features to optimize content delivery.`,
  },
  {
    id: 7,
    title: "Upesy Client System Development",
    company: "Upesy",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1145333180779651073/D0A7O5fZ_400x400.png",
    content: `Development and maintenance of client systems.
      Back-end maintenance and deployment of the Upesy client system.`,
  },
  {
    id: 8,
    company: "Skylab Systems",
    title: "Cleanisha and Apptivate Africa UI and Functionality Enhancement",
    imageUrl:
      "https://play-lh.googleusercontent.com/YHJKpC5nHh4LwPikkibhUs2FIU_X0en-k6VN6zm86N7iUDSWSKFjt-s2fWdpyGRIyRs=w240-h480-rw",
    content: `UI and functionality improvements for mobile applications.`,
  },
  {
    id: 9,
    company: "Skylab Systems",
    title: "Majidata GIS Utility",
    imageUrl:
      "https://scontent.fnbo8-1.fna.fbcdn.net/v/t39.30808-1/279052075_352697200229178_2534054679759365391_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=B79R7eTtocIQ7kNvgFTwjZ0&_nc_ht=scontent.fnbo8-1.fna&oh=00_AYBnP9s6itwS1s1SxkfXUqsSZJsqCww88KxeOmWPJrgUAw&oe=6647CCE5",
    content: `UI and functionality improvements for mobile applications.`,
  },
  {
    id: 9,
    company: "Skylab Systems",
    title: "Apptivate Adrica",
    imageUrl:
      "https://scontent.fnbo8-1.fna.fbcdn.net/v/t39.30808-1/236565456_216350100500436_5065310756289660292_n.png?stp=dst-png_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-Os0VFCAZA0Q7kNvgEr-Hgl&_nc_ht=scontent.fnbo8-1.fna&oh=00_AYD-_R4640eCYI_QI9hwPGfHZf9-phkdkW4OwI8Xyx68Zg&oe=6647F3C7",
    content: `UI and functionality improvements for mobile applications.`,
  },
];
