export interface AboutModel {
  id: number;
  title: string;
  imageUrl: string;
  type: string;
  content: string;
  startDate: Date;
  endDate: Date;
}

export const aboutItems: AboutModel[] = [
  {
    id: 1,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/86/The%2BStarehe%2BLion%2BCrest.jpg",
    title: "Starehe Boys Centre",
    type: "High School",
    content:
      "Active participant in the President's Award Scheme (Kenya), a member of the Duke of Edinburgh's International Award Association. Achieved Bronze, Silver and Gold Certificates, highlighting dedication to personal development and community involvement.",
    startDate: new Date("February 2, 2016"),
    endDate: new Date("November 19, 2019"),
  },
  {
    id: 2,
    imageUrl:
      "https://strathmore.edu/wp-content/uploads/2023/08/University-Logo-01-1.png",
    title: "Strathmore University",
    type: "University",
    content: "Graduated in June!",
    startDate: new Date("June 26, 2020"),
    endDate: new Date("June 28, 2024"),
  },
  {
    id: 3,
    imageUrl:
      "https://skylabsystems.co.ke/wp-content/uploads/2013/10/skylab-logo.png",
    title: "Skylab Systems",
    type: "Internship",
    content: `Drove the development and ongoing maintenance of diverse client systems, ensuring their continual alignment with contemporary technology standards.
    Undertook the responsibility of overseeing the backend maintenance and seamless deployment to the internet of the Upesy client system, demonstrating proficiency in ensuring optimal system performance.
    In the absence of the back-end developer due to unforeseen circumstances, assumed the role of designing aesthetically pleasing user interfaces while prioritizing a seamless user experience.
    Demonstrated diligence and adaptability, resulting in the opportunity to enhance the UI and functionalities of mobile applications, Cleanisha and Apptivate Africa. Executed improvements without disrupting the existing workflow, underscoring a commitment to delivering impactful solutions.
    `,
    startDate: new Date("February 1, 2023"),
    endDate: new Date("April 30, 2023"),
  },
  {
    id: 4,
    imageUrl:
      "https://strathmore.edu/wp-content/uploads/2023/08/University-Logo-01-1.png",
    title: "Strathmore University",
    type: "Lab Assistant",
    content: `Assumed responsibility for the secure and efficient operation of a computer lab utilized by both lecturers and students, ensuring a conducive environment for academic activities.
    Safeguarded and maintained high-value computer lab equipment, demonstrating diligence and attention to detail in preserving valuable assets.
    Implemented process optimizations within the lab environment to enhance efficiency and user-friendliness, fostering a conducive space for learning and collaboration.
    `,
    startDate: new Date("February 1, 2022"),
    endDate: new Date("June 30, 2023"),
  },
  {
    id: 5,
    imageUrl:
      "https://ilabafricastrathmore.files.wordpress.com/2021/07/ilab-logo-01.jpg?w=1024",
    title: "iLab Africa",
    type: "Software Developer",
    content: `Spearheaded the revitalization of the existing Student Management System for South Sudan, accessible at SSAMS. Currently overseeing the ongoing enhancements to elevate system functionality and user experience at SSSAMS Revamp.
    Assumed responsibility for comprehensive database management, ensuring data integrity, security, and optimal performance. Implemented seamless integration mechanisms for live data updates, contributing to the system's real-time responsiveness and reliability
    `,
    startDate: new Date("Septwmber 25, 2023"),
    endDate: new Date("February 28, 2024"),
  },
  {
    id: 6,
    imageUrl:
      "http://www.alive-reli.org/wp-content/uploads/2021/10/WhatsApp-Image-2024-03-07-at-22.29.37.jpeg",
    title: "ALiVE (Zizi Afrique)",
    type: "Lead Software Developer",
    content: `As the lead developer at Alive under the Zizi Afrique Foundation, I spearheaded the development of an innovative open-source platform designed to facilitate the targeted distribution of content to clients according to their specific needs. This platform represented a cutting-edge solution aimed at optimizing content delivery strategies and enhancing user engagement.
    In this role, I was tasked with conceptualizing, designing, and implementing robust features tailored to meet the dynamic requirements of our clientele. My responsibilities encompassed overseeing the entire development lifecycle, from initial ideation to deployment and ongoing optimization.
    Through meticulous attention to detail and a commitment to excellence, I ensured that the platform not only met but exceeded industry standards for reliability, scalability, and performance. Moreover, I fostered a collaborative environment conducive to innovation, enabling the team to continually iterate and refine our solutions in response to evolving market demands.
    My contributions to the ALiVE platform played a pivotal role in empowering organizations to deliver tailored content experiences, thereby fostering deeper connections with their target audiences and driving tangible business outcomes.
    `,
    startDate: new Date("January 1, 2024"),
    endDate: new Date(),
  },
  {
    id: 7,
    imageUrl:
      "https://sbselearning.strathmore.edu/pluginfile.php/132150/course/overviewfiles/SbS.png",
    title: "Strathmore Business School",
    type: "Junior Software Developer",
    content: `Led the revitalization efforts of an existing file management system, tailoring it for efficient utilization by university staff, enhancing accessibility and streamlining document management processes.
    Collaborated within a team to conceptualize, design, and implement a comprehensive Faculty Management System for the university. This involved the integration of diverse functionalities to support seamless administrative processes.
    Additionally, successfully delivered notable projects, including the development of an Events Management System and a dedicated File Management System tailored to meet the specific needs of university staff. These initiatives underscore my commitment to advancing technological solutions within academic environments.
    `,
    startDate: new Date("July 1, 2023"),
    endDate: new Date(),
  },
  {
    id: 8,
    imageUrl: "https://dezanahub.co.ke/wp-content/uploads/2024/03/logoweb.png",
    title: "Dezanna Hub",
    type: "Lead Software Developer",
    content: `At Dezanna Hub, I held the role of Mobile Application Developer, where I led the development efforts for a comprehensive mobile application ecosystem. This ecosystem included both a customer-facing mobile application and an intuitive admin panel designed to streamline product management, payments, and other essential business functions.
    In collaboration with the Dezanna Hub team, I conceptualized, designed, and implemented a robust and user-friendly mobile application tailored to the specific needs of our client, 360 Beauty Scents. Leveraging cutting-edge technologies and best practices, I ensured that the application delivered a seamless and engaging user experience while meeting the highest standards of performance, security, and reliability.
    Additionally, I developed the accompanying admin panel, empowering 360 Beauty Scents to efficiently manage their product catalog, process payments, and oversee various aspects of their business operations. Through close collaboration with stakeholders and a keen understanding of their requirements, I delivered a comprehensive solution that streamlined workflows and enhanced productivity.
    My role at Dezanna Hub was instrumental in providing 360 Beauty Scents with a powerful digital platform to effectively showcase their products, engage customers, and drive business growth. By leveraging my expertise in mobile app development and intuitive admin panel design, I contributed to the success and competitiveness of both Dezanna Hub and its valued client.
    `,
    startDate: new Date("January 1, 2024"),
    endDate: new Date(),
  },
];
