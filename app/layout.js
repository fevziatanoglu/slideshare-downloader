import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SlideShare Downloader",
  description: "A website to download SlideShare presentations as PDF or PowerPoint files.",
  version: "1.0.0",
  author: "Fevzi Atanoglu",
  dateCreated: "2024-05-19",
  lastUpdated: "2024-05-19",
  keywords: [
    "SlideShare",
    "Downloader",
    "Presentation",
    "PDF",
    "PowerPoint",
    "Offline Access",
    "SlideShare Download",
    "Save Presentations"
  ],
  technologiesUsed: {
    frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    backend: ["Node.js", "Express.js"],
    database: "MongoDB",
    apis: ["SlideShare API"],
    additionalLibraries: ["Axios", "Cheerio"]
  },
  license: "MIT License",
  features: [
    "Download SlideShare presentations as PDF or PowerPoint files",
    "User-friendly interface with simple navigation",
    "Supports batch downloads",
    "Provides download history and management",
    "Mobile-responsive design"
  ],
  installation: [
    "Clone the repository: `git clone https://github.com/username/slideshare-downloader.git`",
    "Navigate to the project directory: `cd slideshare-downloader`",
    "Install dependencies: `npm install`",
    "Start the server: `npm start`"
  ],
  usage: [
    "Visit the website",
    "Enter the URL of the SlideShare presentation",
    "Choose the desired format (PDF or PowerPoint)",
    "Click \"Download\""
  ],
  contributors: [
    { name: "Fevzi Atanoglu", role: "Project Lead, Developer" },
  ],
  contactInformation: {
    email: "fevziatanoglu@gmail.com.com",
    github: "https://github.com/fevziatanoglu",
  },
  acknowledgments: [
    "Thanks to the open-source community for the libraries and tools used in this project.",
    "Special thanks to the SlideShare API team for providing the necessary API endpoints."
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
