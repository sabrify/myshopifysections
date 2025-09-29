"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "@/lib/utils";

export default function DesktopNav({ navigation, pathname }) {
  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      aria-label="Global"
    >
      <div className="flex flex-1">
        <Link href="/" className="flex items-center space-x-2 mb-6">
          
          
          {/* <span>MY</span> */}
            
            <img
              src="/mysections-dark.png"
              className="h-16 hidden dark:block"
            />

            {/* <h1 className="">ECTIONS</h1> */}
          
        </Link>
      </div>
      <div className="flex gap-x-8">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-sm font-medium transition-colors  ${
              pathname === item.href
                ? "text-primary"
                : "text-muted-foreground hover:text-secondary"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-1 justify-end">
        <div className="flex justify-end ">
          {/* <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="mx-20 my-4"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 block dark:hidden" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hidden dark:block " />
          </Button> */}
        </div>
      </div>
    </nav>
  );
}
