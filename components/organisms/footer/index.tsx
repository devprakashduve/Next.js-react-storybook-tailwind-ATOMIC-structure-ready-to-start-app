import React, { useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Img from "../../atoms/img";

const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(" ");
};

const Footer = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <footer className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div className="border-t border-slate-900/5 py-10">
        <Img
          src={"/images/studentstudycenter_logo.png"}
          alt={"Logo"}
          classes="h-8 w-auto mx-auto h-5 w-auto"
        />
        <p className="mt-5 text-center text-sm leading-6 text-slate-500">
          © 2020 w2study . All rights reserved.
        </p>
        <div className="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <a href="/privacy-policy">Privacy policy</a>
          <div className="h-4 w-px bg-slate-500/20"></div>
          <a href="/changelog">Changelog</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
