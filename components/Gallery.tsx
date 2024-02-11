
'use client'
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from 'next/image'

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const galleryTab = [];
  for (let index = 1; index <= 20; index++) galleryTab.push({ imageUrl: `/galleryImages/image_${index}.jpeg` });

  const slides = galleryTab.map((img) => ({ src: img.imageUrl }));

  return (
    <div className="bg-black py-1 md:py-[6px]">
      <div className="w-full flex flex-col md:grid md:grid-cols-3 md:gap-1.5 xl:grid-cols-4 h-full flex-wrap">
        {galleryTab.map((img, index) => {
          return (
            <div key={index} className="relative">
              <div className="group overflow-hidden">
                <div className="py-0.5">
                  <Image
                    src={img.imageUrl}
                    alt="Renzo Gracie Houston"
                    placeholder = 'blur'
                    blurDataURL="data:image/png;base64,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"
                    quality={100}
                    priority={true}
                    width="1920"
                    height="1280"
                    className="transform transition-transform duration-300 group-hover:scale-105 saturate-125"
                  />
                </div>
                <div
                  className="bg-black opacity-0 group-hover:opacity-50 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer"
                  onClick={() => {
                    setOpen(true);
                    setSelectedIndex(index)
                  }}
                >
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        // showPrevNext={false}
        index={selectedIndex}
        slides={slides}
      />
    </div>
  )
}