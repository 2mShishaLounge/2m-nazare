const Disclaimers = [
  {
    id: 1,
    text: "All prices displayed are already inclusive of VAT and taxes.",
    locale: "en",
  },
  {
    id: 2,
    text: "Todos os preços apresentados incluem IVA à taxa legal em vigor",
    locale: "pt",
  },
  {
    id: 3,
    text: "Tous les prix affichés incluent déjà la TVA et les taxes.",
    locale: "fr",
  },
  {
    id: 4,
    text: "Todos los precios mostrados ya incluyen IVA e impuestos.",
    locale: "es",
  },
];

export const getDisclaimerByLocale = (locale = "en") => {
  return Disclaimers.find((disclaimer) => disclaimer.locale === locale)?.text;
};
