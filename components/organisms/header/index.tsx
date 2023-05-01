import React, { useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import Anchor from "../../atoms/anchor";

import Img from "../../atoms/img";
import { HeaderProps } from "./_header.interface";
import LoginWithGoogle from "../../molecules/loginWithGoogle";
import { useSession } from "next-auth/react";
import Button from "../../atoms/button";
import NavBarLinks from "../../molecules/navBarLinks";

const Header = (props: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordionClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="main-header sticky-header">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-8"
        aria-label="Global"
      >
        <div className="flex md:flex-1">
          <Anchor href="/">
            <Img
              src={"/images/studentstudycenter_logo.png"}
              alt={"Logo"}
              classes="h-8 w-auto"
            />
          </Anchor>
        </div>

        <div className="flex md:hidden  ">
          <Button onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

        <Popover.Group className="hidden md:flex md:gap-x-12 ">
       <NavBarLinks/>
        </Popover.Group>

        <div className="hidden md:flex md:flex-1 md:justify-end">
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="rounded-full bg-lime-100 p-1 text-lime-900 hover:text-lime-500 outline-1  ring-white ring-offset-2 ring-offset-gray-800  mr-3"
            >
              <BellIcon className="w-5 h-5" />
            </button>

            <div>
              {session && session?.user?.image ? (
                <div className="relative">
                  <Button onClick={handleAccordionClick}>
                    <>
                      <Img
                        src={session && session?.user?.image}
                        alt={"Profile image"}
                        classes="h-8 w-8 rounded-full"
                      />
                      <span className="font-medium text-gray-800">
                        {session && session?.user?.name
                          ? session?.user?.name.split(" ")[0]
                          : null}
                      </span>
                    </>
                  </Button>
                  <Transition
                    show={isOpen}
                    enter="transition duration-10 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <ul className="absolute right-0 mt-2 w-48 py-2  rounded shadow-lg">
                      <li className="main-bg m-2 p-4">
                        <p>
                          
                          Welcome!
                          <br /> {session && session?.user?.name}
                        </p>
                      </li>

                      <li className="hover:bg-lime-100 m-2 p-4">
                        <Anchor href="#" classes="w-100">
                          <LoginWithGoogle
                            loginLabel={"Login"}
                            registertLabel={"Logout"}
                          />
                        </Anchor>
                      </li>
                    </ul>
                  </Transition>
                </div>
              ) : (
                <LoginWithGoogle
                  loginLabel={"Login"}
                  registertLabel={"Logout"}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="md:hidden "
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="main-header fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  px-6 py-6 ">
          <div className="flex items-center justify-between">
            <Anchor href="/">
              <Img
                src={"/images/studentstudycenter_logo.png"}
                alt={"Logo"}
                classes="h-8 w-auto"
              />
            </Anchor>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <NavBarLinks/>
                {session && session?.user?.name ? (
                  <Anchor
                    href="#"
                    classes=" text-lime-600 block rounded-md px-3 py-2 text-base font-medium"
                  >
                    <LoginWithGoogle
                      loginLabel={"Login"}
                      registertLabel={"Logout"}
                    />
                  </Anchor>
                ) : null}
              </div>
              <div className="py-6">
                <div className="">
                  <div className="absolute flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <>
                      {session && session?.user?.image ? (
                        <div className="relative">
                          <Button classes="rounded-full  text-lime-900 hover:text-lime-500 ">
                            <BellIcon className="w-5 h-5" />
                          </Button>
                          <span>
                            <Img
                              src={session && session?.user?.image}
                              alt={"Profile image"}
                              classes="h-8 w-8 rounded-full"
                            />
                          </span>
                          <span className="font-medium ">
                            {session && session?.user?.name}
                          </span>
                        </div>
                      ) : (
                        <LoginWithGoogle
                          loginLabel={"Login"}
                          registertLabel={"Logout"}
                        />
                      )}
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
