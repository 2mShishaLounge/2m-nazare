import { Dialog, Transition } from "@headlessui/react";
import { Menu } from "@headlessui/react";
import { PT } from "country-flag-icons/react/3x2";
import { US } from "country-flag-icons/react/3x2";
import { FR } from "country-flag-icons/react/3x2";
import { ES } from "country-flag-icons/react/3x2";
import { Fragment, useState } from "react";
import { Bars3Icon, HomeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  return (
    <div className="fixed bottom-0 left-0 flex w-full justify-between rounded-t-[30px] bg-white px-6 pb-7 pt-6 dark:bg-black">
      <div className="mx-24 flex w-full items-center justify-between space-x-3">
        <Link href="/">
          <HomeIcon className="h-6 w-6 text-black dark:text-white" />
        </Link>
        <FlagDropdown />
        <MenuDropdown />
      </div>
    </div>
  );
};

const MenuDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Bars3Icon className="h-6 w-6 text-black dark:text-white" onClick={() => setOpen(true)} />
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
                      <div className="absolute left-0 top-0 -ml-8 hidden pr-2 pt-4 sm:-ml-10 sm:flex sm:pr-4">
                        <button type="button" className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" onClick={() => setOpen(false)}>
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl dark:bg-black">
                      <div className="flex w-full justify-between px-4 sm:px-6">
                        <div className="flex items-center space-x-3">
                          <Dialog.Title className="text-2xl font-semibold leading-6 text-gray-900 dark:text-slate-200">2M Shisha Lounge</Dialog.Title>
                        </div>
                        <button type="button" className="block rounded-md text-black sm:hidden" onClick={() => setOpen(false)}>
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6 text-black dark:text-white" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Socials */}
                        <div className="flex space-x-4">
                          <SocialIcon url="https://www.instagram.com/2m_shishalounge/" />
                        </div>

                        {/* Information */}
                        <div className="my-8 grid grid-cols-1 font-normal text-black/80 dark:text-slate-200">
                          <p className="">Rua do Conde Redondo N 137, 1150-294 Lisboa</p>
                          <p className="mt-4 ">Segunda a Domingo</p>
                          <p className="">15:00 pm - 02:00 am</p>
                          <p className="mt-4">Book a Table | +351 920 378 644</p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

// Can be done with middleware
const FlagDropdown = () => {
  const { locale: currentLocale, pathname } = useRouter();

  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          {/* Get Current Cookie and based on it set current image to that */}
          <Menu.Button className="border-slate-2000 rounded-md border p-1 dark:border-slate-800">
            {currentLocale === "pt" && <PT title="Portugal" className="h-6 w-6 " />}
            {currentLocale === "en" && <US title="United States" className="h-6 w-6 " />}
            {currentLocale === "fr" && <FR title="France" className="h-6 w-6 " />}
            {currentLocale === "es" && <ES title="Spain" className="h-6 w-6 " />}
          </Menu.Button>
        </div>
        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute bottom-0 mb-8 w-56 origin-bottom-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link href={pathname} locale="en" className={`${active ? "disabled bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    EN
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href={pathname} locale="es" className={`${active ? "disabled bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    ES
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href={pathname} locale="fr" className={`${active ? "disabled bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    FR
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href={pathname} locale="pt" className={`${active ? "disabled bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    PT
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};