import project1 from "../assets/projects/project-1.jpg"
import project2 from "../assets/projects/project-2.jpg"
import project4 from "../assets/projects/project-4.jpg"
import project5 from "../assets/projects/project-5.jpg"
import project6 from "../assets/projects/project-6.jpg"
import project7 from "../assets/projects/confusion_matrix.png"
import project9 from "../assets/projects/project-9.jpg"

export const HERO_CONTENT = `Hi! I’m Zaker, a full-stack software engineer in İstanbul. At Mayrix I work on Givergy.com, a fundraising platform for charities, building backend services in Java and front ends in Next.js. I’m also doing a Master’s in Computer Engineering at Yıldız Technical University, researching domain adaptation for deep learning models.`

export const ABOUT_TEXT = `I graduated from Ankara University in Computer Engineering with a 3.83 GPA. I work across backend and front end: Java (Dropwizard), PostgreSQL and Redis on the server, Next.js, React and TypeScript in the browser, and Docker and Kubernetes for deployment. My research is in deep learning for computer vision.`

export const EXPERIENCES = [
  {
    year: "Sep 2025 – Present",
    role: "Software Engineer",
    company: "Mayrix, İstanbul",
    description: [
      "Full-stack work on Givergy.com, a fundraising platform for charity events, auctions and donations.",
      "Built an identity provider that gives each user one profile across regions and campaigns, with OAuth 2.0 sign-in through Google, Facebook and Apple, SSO, and multi-factor authentication by authenticator-app TOTP or SMS and email codes through Twilio.",
      "Contributed to integrating Ryft as a second payment provider alongside Stripe, with Apple Pay and Google Pay, and to recurring donations on Ryft.",
      "Contributed to migrating the organiser CMS from Backbone.js to Next.js.",
      "Set up Docker, Kubernetes and GitHub Actions deployment for new services.",
    ],
    technologies: [
      "Java",
      "Dropwizard",
      "PostgreSQL",
      "Redis",
      "Next.js",
      "TypeScript",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    year: "Dec 2024 – Mar 2025",
    role: "Online Machine Learning Course Instructor (Volunteer)",
    company: "UNDP ICPSD, İstanbul (Remote)",
    description: `Ran live Python sessions on data structures, web scraping and databases, and helped students through the practical exercises.`,
    technologies: ["Python", "pandas", "BeautifulSoup"],
  },
  {
    year: "Feb 2024 – Aug 2024",
    role: "Data Scientist & API Developer",
    company: "EmlakRaporum, Ankara",
    description: `Built the data collection and processing pipeline for a real estate evaluation startup, with FastAPI APIs serving interactive Plotly charts to the website. Deployed it in Docker on AWS EC2. It cut the time to collect data and create charts by 40%.`,
    technologies: [
      "Python",
      "pandas",
      "Plotly",
      "FastAPI",
      "Docker",
      "AWS EC2",
      "BeautifulSoup",
    ],
  },
  {
    year: "Jul 2023 – Sep 2023",
    role: "Data Analyst Intern",
    company: "ORSAM, Ankara",
    description: `Wrote Python modules for text processing, data visualisation and analytics that cut project completion time by 20%. Preprocessed Latin-script texts and built unigram and bigram word clouds for Arabic and English texts. Analysed tweets for frequency, attitude, geography and hashtag use.`,
    technologies: ["Python", "pandas", "matplotlib", "seaborn", "NLP"],
  },
  {
    year: "2024 – Present",
    role: "English Instructor (Part-time)",
    company: "Everest SAT",
    description: `Tutor students for the SAT, now through online classes.`,
    technologies: ["English"],
  },
  {
    year: "Jul 2022 – Aug 2023",
    role: "Medical Interpreter, English–Dari",
    company: "Smart Lingo 360",
    description: [
      "Simultaneous interpreting between English and Dari (Persian) for the Department of Human Services, hospitals, schools and day cares.",
    ],
    technologies: ["English", "Dari (Persian)"],
  },
]

export const PROJECTS = [
  {
    title: "Deep Learning for Sperm Morphology Classification",
    image: project7,
    description:
      "An ensemble of EfficientNet-B4, EfficientNet-B6 and Xception that classifies 18 sperm morphology types (1 normal, 17 abnormal) from low-resolution microscope images in the Hi-LabSpermMorpho dataset (Aktas et al., IEEE Access, 2024). Preprocessing and augmentation on 5,000+ images made the models more robust. The ensemble reached ~69.2% accuracy and ~68.4% F1-score, 5% better than the individual models.",
    technologies: [
      "Python",
      "PyTorch",
      "scikit-learn",
      "NumPy",
      "matplotlib",
      "Jupyter",
    ],
    // The project repo is private, so the card links to the dataset paper.
    url: "https://doi.org/10.1109/ACCESS.2024.3521643",
  },
  {
    title: "Opinion Mining on Web Reviews",
    image: project2,
    description:
      "A sentiment analysis system for Yelp reviews, with three pipelines: positive/negative, positive/neutral/negative, and 1–5 star prediction. It reaches a 97% F1-score on the binary task and 80% on the three-class task. Try it in the Streamlit demo.",
    technologies: ["Python", "scikit-learn", "pandas", "TF-IDF", "Streamlit"],
    url: "https://yelp-rev-sentiment-analysis.streamlit.app/",
  },
  {
    title: "BookHive",
    image: project1,
    description:
      "A full-stack MERN web app that connects readers with free books through the Gutendex API. Users can browse, search and download books in different formats, mark favourites, and leave reviews with ratings.",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "MUI",
    ],
    url: "https://bookhive-edu.vercel.app/",
  },
  {
    title: "PicToSpeech",
    image: project4,
    description:
      "An Android app that helps visually impaired users understand English and Turkish text in images. It uses Google’s ML Kit for text recognition, the Gemini API to extract context, and text-to-speech to read it aloud, with 95% recognition accuracy and a 3-second average response time.",
    technologies: ["Java", "Android Studio", "Google ML Kit", "Gemini API"],
    url: "https://github.com/zaker-amin/PicToSpeech",
  },
  {
    title: "PromptLand",
    image: project6,
    description:
      "A Next.js web app for sharing and discovering creative prompts. Users sign in with Google through NextAuth, then create, search and share prompts stored in MongoDB Atlas. Hosted on Vercel.",
    technologies: ["Next.js", "React", "NextAuth", "MongoDB", "Tailwind CSS"],
    url: "https://prompt-land-xi.vercel.app/",
  },
  {
    title: "MyFitWizz: Fitness App",
    image: project5,
    description:
      "A cross-platform fitness app built with Flutter and Firebase. Features include secure registration and authentication, customisable user profiles, an exercise dashboard, RPE and BMI calculators, and workout timers.",
    technologies: ["Dart", "Flutter", "Firebase"],
    url: "https://github.com/zaker-amin/myfitwizz",
  },
  {
    title: "Real Estate Dashboard Plot API",
    image: project9,
    description:
      "A FastAPI app that serves interactive Plotly charts for real estate sales, population statistics and weather data. Charts are served as self-contained HTML, so they open directly in the browser with no frontend setup, and the app can be switched to serve JSON for a custom dashboard.",
    technologies: ["Python", "FastAPI", "Plotly", "NumPy"],
    url: "https://github.com/zaker-amin/analythings-viz-2-fastAPI-integration/tree/before_refactoring",
  },
]

export const CONTACT = {
  address: "İstanbul, Türkiye",
  email: "mzakeramin@gmail.com",
}
