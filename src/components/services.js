import React from "react";

import osnovnoPochistvane from "../images/osnovno-pochivstvane.jpg";
import ceniVhodove from "../images/prices-vhodove.jpg";

export default function Services() {
  return (
    <div className="py-4 bg-gray-50 overflow-hidden lg:py-8">
      <div className="relative max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 ">
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
          <h3 className="max-w-screen-lg mx-auto text-center text-3xl leading-8 font-extrabold tracking-tight text-purple-900-900 sm:text-4xl sm:leading-10">
            По-чисто с основно почистване <br />
            на вашия вход или апартамент!
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-700">
            Спестете ценно време, нерви и усилия и се доверете на нашите
            професионалисти да почистят вместо вас.
          </p>
        </div>

        <div className="mt-12 lg:mt-24 relative z-10">
          <h4 className="text-center text-2xl leading-8 font-extrabold text-blue-600 tracking-tight sm:text-3xl sm:leading-9">
            Основно почистване на входове
          </h4>
          <p className="text-center mt-3 text-lg leading-7 text-gray-700">
            Целта на услугите от &quot;Основно почистване&quot; е извличане на
            дълбоко проникналите замърсявания с подходящи почистващи средства,
            специализирани машини и пособия. То се извършва от 1-2 годишно, като
            включва всички услуги от абонаментното почистване плюс:
          </p>
        </div>

        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-start justify-center h-12 w-12 rounded-md text-blue-500">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="h-8 w-8"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-semibold text-gray-900">
                      Твърди настилнки
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-700">
                      Почистване и обработка на твърди настилки (мрамор,
                      мозайка, теракот, фаянс, облицовки и др.) Премахване на
                      упорити замърсявания и следи от строителна дейност.
                      Настилката придобива идеално чиста повърхност, след което
                      върху нея се нанася полиращ препарат.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-start justify-center h-12 w-12 rounded-md text-blue-500">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="h-8 w-8"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-semibold text-gray-900">
                      Прозорци
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-700">
                      Двустранно измиване и почистване на прозорци и дограма
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-start justify-center h-12 w-12 rounded-md text-blue-500">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="h-8 w-8"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-semibold text-gray-900">
                      Дезинфекция
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-700">
                      Цялостна дезинфекция
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width="784"
              height="404"
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
                width="784"
                height="404"
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <img
              className="relative mx-auto w-auto"
              src={osnovnoPochistvane}
              alt=""
            />
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h4 className="text-2xl leading-8 font-extrabold text-blue-700 tracking-tight sm:text-3xl sm:leading-9">
                Условия
              </h4>
              <p className="mt-3 text-lg leading-7 text-gray-700">
                Извършваме напълно безплатно първоначален оглед. Целта е да Ви
                предоставим точната оферта с крайна цена, формирана на база
                Вашите индивидуални изисквания.
              </p>

              <ul className="mt-10">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-start justify-center h-12 w-12 rounded-md text-blue-500">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="h-8 w-8"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base leading-6 text-gray-700">
                        Заплащането за всяко едно основно почистване се извършва
                        в деня на предаване на обекта.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-start justify-center h-12 w-12 rounded-md text-blue-500">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="h-8 w-8"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base leading-6 text-gray-700">
                        Дейността по почистването се извършва изцяло с
                        консумативи и инструменти, осигурени от нас.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-start justify-center h-12 w-12 rounded-md text-blue-500">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="h-8 w-8"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base leading-6 text-gray-700">
                        Наличието на течаща вода във входа е задължително.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
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
                  width="784"
                  height="404"
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <img className="relative mx-auto" src={ceniVhodove} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
