import { ItemCard } from "~/components/cards";
import { Header } from "~/components/header";
import { Selection } from "~/components/selection";

// data
import { Extras as EN } from "menu-en";
import { Extras as PT } from "menu-pt";
import { Extras as ES } from "menu-es";
import { Extras as FR } from "menu-fr";
import { useRouter } from "next/router";
import { type MenuItem } from "~/pages/drinks/aguas";
import { getDisclaimerByLocale } from "~/utils/getLocale";

const SnacksOptions = () => {
  const { locale: currentLocale } = useRouter();
  const localeToTranslationMap: {
    [key: string]: MenuItem[];
  } = {
    en: EN,
    pt: PT,
    es: ES,
    fr: FR,
  };
  const menu = localeToTranslationMap[currentLocale || "en"];

  return (
    <div className="min-h-screen bg-black bg-smoke bg-cover bg-center">
      <Header />
      <div className="p-4">
        <Selection />
        <div className="mb-10 mt-5 grid grid-cols-1 gap-x-3 gap-y-3 md:grid-cols-3">
          {menu?.map((item: MenuItem) => (
            <ItemCard key={item.id} name={item.name} description={item.description} price={item.price} />
          ))}
        </div>
        <div className="mb-24 mt-2 mt-auto w-full">
          <p className="w-full text-right text-xs tracking-wide text-black text-white">{getDisclaimerByLocale(currentLocale)}</p>
        </div>
      </div>
    </div>
  );
};

export default SnacksOptions;
