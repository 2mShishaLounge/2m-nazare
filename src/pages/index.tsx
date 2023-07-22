import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
// import { ChevronRightIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";
import { Header } from "~/components/header";
import Image from "next/image";
import logo from "../../public/logo.png";
import { Selection, TailwindSlider } from "~/components/selection";

const LoadingDisplay = () => {
  return (
    <div className="relative h-screen w-screen bg-black/60 bg-loading bg-cover bg-center bg-blend-darken lg:flex">
      <div className="absolute bottom-0 left-0 flex h-full  px-6 pb-10 lg:relative lg:m-auto lg:text-center">
        <div className="m-auto ">
          <Image src={logo} alt="2m-shisha-bar" width={300} height={300} className="relative m-auto" />
          <div className="-mt-6 space-y-6 text-center text-white">
            <h1 className="font-jaques mx-12 text-[40px]">Try the best Shisha now!</h1>
            <p className="pb-8 font-mono text-[18px] tracking-normal">Shisha | Drink | Food</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 980);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Head>
        <title>2M Shisha Lounge - Nazaré</title>
        <meta name="description" content="2M Shisha Lounge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-white bg-smoke bg-cover bg-center dark:bg-black">
        {isLoading ? (
          <LoadingDisplay />
        ) : (
          <div className="pb-4 pt-4">
            <Header />
            <Selection />
            {/* Grid */}
            <TailwindSlider />
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
