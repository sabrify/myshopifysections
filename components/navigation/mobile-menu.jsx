import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "@/lib/utils";

export default function MobileNav({ navigation, pathname }) {
  return (
    <>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4"
        aria-label="Global"
      >
        <div className="flex justify-start">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="mx-4 my-4"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 block dark:hidden" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hidden dark:block " />
          </Button>
        </div>

        <div className="flex flex-1 justify-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="sr-only">My shopify sections</span>
            <div className="flex items-center h-8 w-auto font-bold text-xl">
              <img
                src="/shopify_glyph_black.svg"
                className="w-10 h-10 block dark:hidden"
              />
              <img
                src="/shopify_glyph_white.svg"
                className="w-10 h-10 hidden dark:block"
              />
              <h1 className="">MY SECTIONS</h1>
            </div>
          </Link>
        </div>

        <div className="flex justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flow-root">
                <div className="-my-6">
                  <div className="space-y-1 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block px-3 py-2 text-base font-medium transition-colors rounded-md ${
                          pathname === item.href
                            ? "bg-secondary text-primary"
                            : "text-muted-foreground hover:bg-secondary"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <Separator />
                  <div className="py-6">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href="/login">
                        Log in{" "}
                        <span className="ml-2" aria-hidden="true">
                          &rarr;
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
}
