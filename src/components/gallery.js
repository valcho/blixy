import React from "react";
import { Gallery } from "gatsby-theme-gallery";

export default function GalleryServices() {
  return (
    <div className="mt-10 py-4 bg-gray-50 overflow-hidden lg:py-8">
      <div className="relative max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 lg:maxW-screen-xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative">
          <h3 className="maxW-screen-lg mx-auto text-center text-3xl leading-8 font-extrabold tracking-tight text-blue-700 sm:text-4xl sm:leading-10">
            Галерия
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-700">
            Вижте сами какви резултати можем да постигнем за Вас.
          </p>
        </div>

        <div className="mt-10">
          <Gallery />
        </div>
      </div>
    </div>
  );
}
