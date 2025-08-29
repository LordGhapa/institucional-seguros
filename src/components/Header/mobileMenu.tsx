"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { BookOpen, Home, Info, Link, Mail, Menu as MenuIcon } from "lucide-react";
import React, { useState } from "react";
import ButtonHamburger from "../ui/buttonHamburger";

interface MobileMenuProps {
  headerLinks: {
    name: string;
    href: string;
  }[];
}

export default function MobileMenu({ headerLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" aria-label="Menu Trigger" size="icon">
          {/* <MenuIcon className="h-5 w-5" /> */}
          <ButtonHamburger />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-full flex-col border-none bg-white sm:max-w-sm dark:bg-gray-900"
      >
        <SheetHeader className="mb-4">
          <SheetTitle className="text-left text-xl">
            {/* logo */}
            <Link
              href={"/"}
              className="group flex cursor-pointer items-center space-x-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 transition-shadow">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900 transition-colors group-hover:text-orange-500 dark:text-white dark:group-hover:text-orange-400">
                  IA Historietas
                </p>
              </div>
            </Link>
            {/* logo */}
          </SheetTitle>
        </SheetHeader>

        {/* Links  */}
        <div className="flex flex-1 flex-col space-y-2">
          {headerLinks.map((item) => {
            const Icon = iconMap[item.link] || Home;
            return (
              <SheetClose asChild key={item.link}>
                <Link
                  href={item.link}
                  className="flex items-center space-x-3 rounded-md p-3 text-lg font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-orange-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-orange-400"
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </SheetClose>
            );
          })}
        </div>
        {/*  Links  */}
      </SheetContent>
    </Sheet>
  );
}
