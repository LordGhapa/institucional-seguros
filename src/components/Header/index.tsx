import Link from "next/link";
import React from "react";
import { Phone } from "lucide-react";
import { navLinks } from "./navLinks";
import { ShieldIcon } from "../ui/icons";
import MobileMenu from "./mobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 shadow-sm backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ShieldIcon className="text-brand-blue h-8 w-8" />
            <span className="text-brand-blue-dark text-2xl font-bold">
              PALAGOS
            </span>
          </Link>

          <nav className="hidden items-center space-x-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-brand-blue font-medium text-gray-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="text-brand-blue hidden items-center space-x-2 lg:flex">
            <Phone
              className="text-brand-blue h-5 w-5"
              fill="brand-blue"
              strokeWidth={0}
            />

            <Link href="tel:11995303261" className="font-semibold">
              (11) 99530-3261
            </Link>
          </div>

          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
