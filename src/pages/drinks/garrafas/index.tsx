import { ItemCard } from "~/components/cards";
import { Header } from "~/components/header";
import { Selection } from "~/components/selection";

// data
import { Garrafas as EN } from "menu-en";
import { Garrafas as PT } from "menu-pt";
import { Garrafas as ES } from "menu-es";
import { Garrafas as FR } from "menu-fr";
import { useRouter } from "next/router";
import { type MenuList } from "../aguas";
import { getDisclaimerByLocale } from "~/utils/getLocale";

const BottleOptions = () => {
  const { locale: currentLocale } = useRouter();
  const localeToTranslationMap: {
    [key: string]: MenuList[];
  } = {
    en: EN,
    pt: PT,
    es: ES,
    fr: FR,
  };
  const menu = localeToTranslationMap[currentLocale || "en"];

  return (
    <div className="min-h-screen bg-white bg-smoke bg-cover bg-center dark:bg-black">
      <Header />
      <div className="p-4">
        <Selection />
        <div className="mb-10 mt-5 grid grid-cols-1 gap-x-3 gap-y-3 md:grid-cols-3">
          {menu?.map((item: MenuList) => (
            <div key={item.id}>
              <p className="px-2 py-4 text-black dark:text-white">{item.categoryName}</p>
              <div className="grid grid-cols-1 gap-x-3 gap-y-3 md:grid-cols-3">
                {item.items.map((item) => (
                  <ItemCard key={item.id} name={item.name} price={item.price} description={item.description} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mb-24 mt-2 mt-auto w-full">
          <p className="w-full text-right text-xs tracking-wide text-black dark:text-white">{getDisclaimerByLocale(currentLocale)}</p>
        </div>
      </div>
    </div>
  );
};

export default BottleOptions;
