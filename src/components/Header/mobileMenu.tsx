"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Phone } from "lucide-react";
import React, { useState } from "react";
import ButtonHamburger from "../ui/buttonHamburger";
import { navLinks } from "./navLinks";
import { ShieldIcon } from "../ui/icons";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <ButtonHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 border-none bg-white sm:max-w-sm"
      >
        <SheetHeader>
          <SheetTitle className="text-left text-xl">
            {/* logo */}
            <Link href="/" className="flex gap-1">
              <ShieldIcon className="text-brand-blue h-8 w-8" />
              <div>
                <span className="text-brand-blue-dark uppercase text-2xl font-bold">
                  pagalos
                </span>
                <p className="text-xs text-nowrap">
                  Os Melhores Seguros para Voce e Sua Empresa
                </p>
              </div>
            </Link>
            {/* logo */}
          </SheetTitle>
        </SheetHeader>

        {/* Links  */}
        <div className="border-t border-gray-200 bg-white">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-brand-blue text-lg font-medium text-gray-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="text-brand-blue flex items-center space-x-2 pt-4">
              <Phone
                className="text-brand-blue h-5 w-5"
                fill="brand-blue"
                strokeWidth={0}
              />
              <Link href="tel:11995303261" className="font-semibold">
                (11) 99530-3261
              </Link>
            </div>
          </nav>
        </div>
        {/*  Links  */}
      </SheetContent>
    </Sheet>
  );
}
