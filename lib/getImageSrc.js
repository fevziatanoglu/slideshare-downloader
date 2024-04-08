"use server"
import fetch from "node-fetch";
import { load } from "cheerio";




export async function getImageSrc(url) {
    try {
        // GET HTML
        const response = await fetch(url, { mode: 'no-cors' });
        const html = await response.text();
        const $ = await load(html);
        // GET IMAGES' SRCS
        const imgSrcs = $('img[sizes="100vw"]');
        const counter = imgSrcs.length;
        const firstImage = $('img[sizes="100vw"]').first().attr("srcset");
        // RETURN SRCS


        const data = { counter , firstImage };
        // return JSON.stringify(data);
        return data
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}




// ======================= PUPPETEER =======================
// import puppeteer from "puppeteer";


// export async function getHtmlElements(url) {
//     console.log("function start")
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url);
//     console.log("connect url")
//     // scroll
//     await page.evaluate(() => {
//         window.scrollBy(0, document.body.scrollHeight);
//     });
//     console.log("scroll page")

//     const imageSrcs = await page.evaluate(() => {
//         const images = document.querySelectorAll('img[sizes="100vw"]');
//         return Array.from(images).map(image => image.src);
//     })
//     console.log("get srcs")



//     await browser.close();
//     console.log("browser closed");
//     return imageSrcs;

// }
