# SLIDESHARE DOWNLOADER
- It's a web application that you can **download power point presentation** as pptx from **slideshare website** by using **link of presentation**. Made by **Next.js** and cheerio , node-fetch , pptxgen.js libraries.
## Features
- **Next.js**: Built on top of Next.js, a React framework for building server-side/client-side rendered and statically generated web applications.
- **Get Images' Url**: By using **Cheerio** , application can reach urls of images.
- **Convert url to base64**: Application covert images' urls to base64 format, because url may cause cors error when create pptx file. 
- **Create PPTX File**: By using **Pptxgen.js** lib , create a pptx file containing images' base64 data and download it to your local.
- **Responsive Design**: It has a simple and responsive styling.
![image](https://github.com/fevziatanoglu/slideshare-downloader/assets/95905332/95980713-c02d-4b86-a29a-e886c85d65b2)

## Installation
1. Clone the project: `git clone https://github.com/fevziatanoglu/slideshare-downloader.git`
2. Navigate to the project directory: `cd slideshare-downloader`
3. Install the required packages: `npm install`
4. Start the development server: `npm run dev`
5. Visit `http://localhost:3000` in your browser to view the application.




