import { CategoryCard } from "~/components/cards";
import { Header } from "~/components/header";

// data
import { SnackCategories as EN } from "menu-en";
import { SnackCategories as PT } from "menu-pt";
import { SnackCategories as ES } from "menu-es";
import { SnackCategories as FR } from "menu-fr";
import { Selection } from "~/components/selection";
import { useRouter } from "next/router";
import { type MenuItem } from "../drinks/aguas";
import { getDisclaimerByLocale } from "~/utils/getLocale";

const SnacksCategoryMenu = () => {
  const { locale: currentLocale } = useRouter();
  const localeToTranslationMap: {
    [key: string]: Partial<MenuItem>[];
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
          {menu?.map((item: Partial<MenuItem>) => (
            <CategoryCard key={item.id} url={item.url || ""} title={item.name || ""} />
          ))}
        </div>
        <div className="mb-24 mt-2 mt-auto w-full">
          <p className="w-full text-right text-xs tracking-wide text-black dark:text-white">{getDisclaimerByLocale(currentLocale)}</p>
        </div>
      </div>
    </div>
  );
};

export default SnacksCategoryMenu;
