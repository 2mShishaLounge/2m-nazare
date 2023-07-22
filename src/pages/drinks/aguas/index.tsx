import { ItemCard } from "~/components/cards";
import { Header } from "~/components/header";
import { Selection } from "~/components/selection";

// data
import { Aguas as EN } from "menu-en";
import { Aguas as PT } from "menu-pt";
import { Aguas as ES } from "menu-es";
import { Aguas as FR } from "menu-fr";
import { useRouter } from "next/router";
import { getDisclaimerByLocale } from "~/utils/getLocale";

export interface MenuItem {
  id: number;
  name: string;
  price: string;
  description?: string;
  options?: string;
  url?: string;
}

export interface MenuList {
  id: number;
  categoryName: string;
  items: {
    id: number;
    name: string;
    price: string;
    description?: string;
  }[];
}

const WaterOptions = () => {
  const { locale: currentLocale } = useRouter();
  const localeToTranslationMap: {
    [key: string]: { id: number; name: string; price: string }[];
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
          {menu?.map((item: MenuItem) => (
            <ItemCard key={item.id} name={item.name} price={item.price} description={item.description} />
          ))}
        </div>
        <div className="mb-24 mt-2 mt-auto w-full">
          <p className="w-full text-right text-xs tracking-wide text-black dark:text-white">{getDisclaimerByLocale(currentLocale)}</p>
        </div>
      </div>
    </div>
  );
};

export default WaterOptions;
