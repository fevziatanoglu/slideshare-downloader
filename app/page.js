"use client"
import { createPdf } from "@/lib/createPdf";
import { createPptx } from "@/lib/createPptx";
import { multiplyString, splitString } from "@/lib/editString";
import { getImageSrc } from "@/lib/getImageSrc";
import { useState } from "react";

export default function Home() {
  const [isLoading , setLoading] = useState(false);
  const [slideShareUrl , setSlideShareUrl] = useState('');

  const handleClick = async () => {
    try {
      setLoading(true);
      const { counter, firstImage } = await getImageSrc(slideShareUrl);
      const imageSrc = splitString(firstImage);
      const imageSrcs = multiplyString(counter, imageSrc);
      // createPptx fonksiyonunu çağıralım
      await createPptx(imageSrcs);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className=" flex flex-row justify-center items-center p-5 gap-5">
      <input className="w-full text-black" onChange={(e)=>{setSlideShareUrl(e.target.value); console.log(slideShareUrl)}}></input>
      <button onClick={(e) => handleClick()}>{(isLoading ? 'Loading...' : 'Click')}</button>
    </div>
  );
}


