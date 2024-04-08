

import pptxgen from "pptxgenjs";
import { urlToBase64 } from "./urltobase64";
export const createPptx = async (imagesSrcs) => {
    let pres = new pptxgen();
    let promises = [];
    imagesSrcs.forEach(src => {
        let promise = new Promise(async (resolve, reject) => {
            try {
                const base64Data = await urlToBase64(src);
                let slide = pres.addSlide();
                slide.addImage({
                    data: base64Data,
                    x: 0,
                    y: 0,
                    w: "100%",
                    h: "100%",
                });
                resolve();
            } catch (error) {
                reject(error);
            }
        });
        promises.push(promise);
    });
    // wait for promises
    await Promise.all(promises);
    pres.writeFile();
}