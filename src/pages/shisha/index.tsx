import React from "react";
import { ItemCard } from "~/components/cards";
import { Header } from "~/components/header";

// data
import { Shisha as EN } from "menu-en";
import { Shisha as PT } from "menu-pt";
import { Shisha as ES } from "menu-es";
import { Shisha as FR } from "menu-fr";

import { ShishaExtras as ENPlus } from "menu-en";
import { ShishaExtras as PTPlus } from "menu-pt";
import { ShishaExtras as ESPlus } from "menu-es";
import { ShishaExtras as FRPlus } from "menu-fr";
import { Selection } from "~/components/selection";
import { useRouter } from "next/router";
import { type MenuItem } from "../drinks/aguas";
import { getDisclaimerByLocale } from "~/utils/getLocale";

const ShishaOptions = () => {
  const { locale: currentLocale } = useRouter();
  const localeToTranslationMap: {
    [key: string]: MenuItem[];
  } = {
    en: EN,
    pt: PT,
    es: ES,
    fr: FR,
  };
  const localeToTranslationMapPlus: {
    [key: string]: MenuItem[];
  } = {
    en: ENPlus,
    pt: PTPlus,
    es: ESPlus,
    fr: FRPlus,
  };
  const menu = localeToTranslationMap[currentLocale || "en"];
  const menuPlus = localeToTranslationMapPlus[currentLocale || "en"];

  return (
    <div className="min-h-screen bg-black bg-white bg-smoke bg-cover bg-center">
      <Header />
      <div className="p-4">
        <Selection />
        <div className="mb-12 mt-5 grid grid-cols-1 gap-x-3 gap-y-3 md:grid-cols-3">
          {menu?.map((item: MenuItem) => (
            <ItemCard key={item.id} name={item.name} price={item.price} description={item.description} />
          ))}
        </div>
        <div className="mb-24 grid grid-cols-1 gap-x-3 gap-y-3 md:grid-cols-3">
          <p className="py-3 text-black text-white">Extras</p>
          {menuPlus?.map((item: MenuItem) => (
            <ItemCard key={item.id} name={item.name} price={item.price} description={item.description} />
          ))}
        </div>
        <div className="mb-24 mt-2 mt-auto w-full">
          <p className="w-full text-right text-xs tracking-wide text-black text-white">{getDisclaimerByLocale(currentLocale)}</p>
        </div>
      </div>
    </div>
  );
};

export default ShishaOptions;
