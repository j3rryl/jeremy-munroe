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
    content: "Amazing!",
    startDate: new Date("February 2, 2016"),
    endDate: new Date("November 19, 2019"),
  },
  {
    id: 2,
    imageUrl:
      "https://strathmore.edu/wp-content/uploads/2023/08/University-Logo-01-1.png",
    title: "Strathmore University",
    type: "University",
    content: "Went by fast",
    startDate: new Date("June 26, 2020"),
    endDate: new Date("June 28, 2024"),
  },
  {
    id: 3,
    imageUrl:
      "https://skylabsystems.co.ke/wp-content/uploads/2013/10/skylab-logo.png",
    title: "Skylab Systems",
    type: "Internship",
    content: "How was this?",
    startDate: new Date("February 1, 2023"),
    endDate: new Date("April 30, 2023"),
  },
];
