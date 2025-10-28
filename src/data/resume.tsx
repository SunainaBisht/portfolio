import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sunaina Bisht",
  initials: "SB",
  url: "https://dillion.io",
  resume:'https://drive.google.com/file/d/1iucZER7gaeqE8e9m0Goq_lv_uYFQ-ZWK/view',
  location: "Haldwani, Nainital, India",
  locationLink: "https://www.google.com/maps/place/haldwani",
  description:
    "Passionate software engineer with expertise in modern web technologies, AI/ML integration, and scalable application development. Proven track record of delivering high-impact solutions that drive business growth and user engagement.",
  summary: "",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "Postgres",
    "Mysql",
    "Data Structures",
    "Java",
    "C++",
    "Machine Learning",
    "OpenCV",
    "PyTorch",
    "HTML",
    "CSS",
    "Flask",
    "Git",
    "Git/GitHub",
    "RESTful APIs",
    "Data analysis",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "bishtnaina40@gmail.com",
    tel: "+91-7906160044",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SunainaBisht",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sunaina-bisht-612b34300/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "bishtnaina40@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  education: [
    {
      school: "Graphic Era Hill University",
      href: "https://www.gehu.ac.in/",
      degree: "Bachelor of Technology in Computer Science Engineering",
      logoUrl: "/gehu.jpg",
      start: "2022",
      end: "2026",
    },
    {
      school: "St. Theresa Sr. Sec. School, Kathgodam",
      href: "https://www.teresaschoolkgm.org/",
      degree: "Intermediate",
      logoUrl: "/st.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "St. Theresa Sr. Sec. School, Kathgodam",
      href: "https://www.teresaschoolkgm.org/",
      degree: "High School",
      logoUrl: "/st.png",
      start: "2019",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "MovieSense: Movie Recommendation System",
      href: "#",
      dates: "Jan 2024",
      active: true,
      description:
        "Built MovieSense — a Flask app that uses Scikit-Learn (cosine similarity) for recommendations, integrates TMDB API and BeautifulSoup for movie data and IMDB scraping, applies NLTK sentiment analysis to reviews, and provides AJAX real-time search with robust error handling.",
      technologies: ["Python", "HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://img.freepik.com/free-photo/3d-glasses-popcorn-assortment_23-2149558796.jpg?t=st=1761630656~exp=1761634256~hmac=e5ff1c2e754934d4c9fcb4c2b319c560fbeb95c61afd2dd9c8083df7afc15a6a&w=1480",
      video:
        "#",
    },
    {
      title: "MediScan: Handwritten Prescription Recognition | Medicine Info App",
      href: "#",
      dates: "July 2024",
      active: true,
      description:
        "MediScan — a Flask app using OpenCV preprocessing and PyTorch CNNs to extract medicine names from handwritten prescriptions, with a clean UI, backend processing, and validated high-accuracy recognition.",
      technologies: ["Python", "OpenCV", "Torch"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://img.freepik.com/premium-vector/medical-prescription_895423-7143.jpg?w=740",
      video:
        "#",
    },
    {
      title: "Virtual Mouse: ",
      href: "#",
      dates: "July 2024",
      active: true,
      description:
        "Virtual Mouse: Python + OpenCV and MediaPipe process facial landmarks to map eye movements to cursor position and use blinks/gestures (via PyAutoGUI) to trigger clicks and screenshots, enabling accessibility-focused hands-free control",
      technologies: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://img.freepik.com/free-vector/graphic-design-computer-mouse_24877-81947.jpg?t=st=1761633475~exp=1761637075~hmac=8e37fde3465a8e5adf0483c74709c44ffcd43e251ded3feda617b6d76fae00c7&w=740",
      video:
        "#",
    },
    
  ],
} as const;
