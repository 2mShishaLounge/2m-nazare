import { useRouter } from "next/router";
import Link from "next/link";

export const Selection = () => {
  const { locale: currentLocale } = useRouter();

  return (
    <div className="mt-5 flex w-full justify-between space-x-3 px-5 text-black text-white">
      <Link href="/shisha" className="rounded bg-[#1D1D1D] bg-slate-200 px-5 py-2">
        Shisha
      </Link>
      <Link href="/drinks" className="rounded bg-[#1D1D1D] bg-slate-200 px-5 py-2">
        {currentLocale === "en" && <p className="text-center ">Drinks</p>}
        {currentLocale === "pt" && <p className="text-center ">Bebidas</p>}
        {currentLocale === "fr" && <p className="text-center ">Boissons</p>}
        {currentLocale === "es" && <p className="text-center ">Bebidas</p>}
      </Link>
      <Link href="/snacks" className="rounded bg-[#1D1D1D] bg-slate-200 px-5 py-2">
        {currentLocale === "en" && <p className="text-center ">Food</p>}
        {currentLocale === "fr" && <p className="text-center ">Cuisine</p>}
        {currentLocale === "pt" && <p className="text-center ">Comida</p>}
        {currentLocale === "es" && <p className="text-center ">Comida</p>}
      </Link>
    </div>
  );
};

export const TailwindSlider = () => {
  const { locale: currentLocale } = useRouter();

  return (
    // <div className="p-auto m-auto flex flex-row pt-24">
    //   <div className="hide-scroll-bar flex overflow-x-scroll pb-10">
    //     <div className="ml-10 flex flex-col flex-nowrap md:ml-20 lg:ml-40 ">
    //       <Link href="/shisha">
    //         <div className="inline-block px-3">
    //           {/* Shisha */}
    //           <div className="h-[490px] w-[380px] max-w-lg overflow-hidden rounded-[30px] bg-shisha bg-cover shadow-md transition-shadow duration-300 ease-in-out first:-ml-8 hover:shadow-xl">
    //             <div className="m-auto grid w-full grid-cols-1 gap-5">
    //               <div className="h-[300px]"></div>
    //               <h1 className="-mt-5 text-center text-[32px] font-medium text-white">Shisha</h1>
    //               <div className="overflow-visible text-center">
    //                 {currentLocale === "en" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Discover the flavours</p>}
    //                 {currentLocale === "pt" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Descobre os Sabores</p>}
    //                 {currentLocale === "es" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">descubre los sabores</p>}
    //                 {currentLocale === "fr" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Découvrez les saveurs</p>}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //       {/* Bebidas */}
    //       <Link href="/drinks">
    //         <div className="inline-block px-3">
    //           <div className="h-[490px] w-[380px] max-w-lg overflow-hidden rounded-[30px] bg-drinks bg-cover shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
    //             <div className="h-[300px]"></div>
    //             <div className="m-auto grid w-full grid-cols-1 gap-5">
    //               <h1 className="text-center text-[32px] font-medium text-white">Drinks</h1>
    //               <div className="overflow-visible text-center">
    //                 {currentLocale === "en" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Drinks</p>}
    //                 {currentLocale === "pt" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Bebidas</p>}
    //                 {currentLocale === "es" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Menú de bebidas</p>}
    //                 {currentLocale === "fr" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Carte des collations</p>}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //       {/* Snacks */}
    //       <Link href="/snacks">
    //         <div className="inline-block px-3">
    //           <div className="h-[490px] w-[380px] max-w-lg overflow-hidden rounded-[30px] bg-snacks bg-cover shadow-md transition-shadow duration-300 ease-in-out last:mr-4 hover:shadow-xl">
    //             <div className="h-[300px]"></div>
    //             <div className="m-auto grid w-full grid-cols-1 gap-5">
    //               <h1 className="text-center text-[32px] font-medium text-white">Food</h1>
    //               <div className="overflow-visible text-center">
    //                 {currentLocale === "en" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Food menu</p>}
    //                 {currentLocale === "pt" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Menu de Snacks</p>}
    //                 {currentLocale === "es" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Menú de aperitivos</p>}
    //                 {currentLocale === "fr" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Carte des collations</p>}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    // </div>

    <div className="mb-40 w-full text-center">
      <Link
        href="/shisha"
        className="mt-10 inline-block md:mr-10"
        style={{
          minWidth: "300px",
        }}
      >
        <div className="inline-block w-full md:mr-10 md:mt-10">
          {/* Shisha */}
          <div className="max-w-lg overflow-hidden rounded-[30px] bg-shisha bg-cover shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
            <div className="m-auto grid w-full grid-cols-1 gap-5 py-5">
              <div className="h-md-[300px] h-[200px] pb-2 pt-2"></div>
              <h1 className="text-center text-[32px] font-medium text-white">Shisha</h1>
              <div className="overflow-visible text-center">
                {currentLocale === "en" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Discover the flavours</p>}
                {currentLocale === "pt" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Descobre os Sabores</p>}
                {currentLocale === "es" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">descubre los sabores</p>}
                {currentLocale === "fr" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Découvrez les saveurs</p>}
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Bebidas */}
      <Link
        href="/drinks"
        className="mt-10 inline-block md:mr-10"
        style={{
          minWidth: "300px",
        }}
      >
        <div className="inline-block w-full">
          <div className="max-w-lg overflow-hidden rounded-[30px] bg-drinks bg-cover shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
            <div className="m-auto grid w-full grid-cols-1 gap-5 py-5">
              <div className="h-md-[300px] h-[200px] pb-2 pt-2"></div>
              <h1 className="text-center text-[32px] font-medium text-white">Drinks</h1>

              <div className="overflow-visible text-center">
                {currentLocale === "en" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Drinks</p>}
                {currentLocale === "pt" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Bebidas</p>}
                {currentLocale === "es" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Menú de bebidas</p>}
                {currentLocale === "fr" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Carte des collations</p>}
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* Snacks */}
      <Link
        href="/snacks"
        className="mt-10 inline-block"
        style={{
          minWidth: "300px",
        }}
      >
        <div className="max-w-lg overflow-hidden rounded-[30px] bg-snacks bg-cover shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
          <div className="m-auto grid w-full grid-cols-1 gap-5 py-5">
            <div className="h-md-[300px] h-[200px] pb-2 pt-2"></div>
            <h1 className="text-center text-[32px] font-medium text-white">Food</h1>
            <div className="overflow-visible text-center">
              {currentLocale === "en" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Food menu</p>}
              {currentLocale === "pt" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Menu de Snacks</p>}
              {currentLocale === "es" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Menú de aperitivos</p>}
              {currentLocale === "fr" && <p className="mx-12 rounded-[10px] bg-white p-3 text-black">Carte des collations</p>}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
