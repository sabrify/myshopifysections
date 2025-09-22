import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col text-center my-10 justify-center items-center">
      <img
        src="/shopify_glyph_black.svg"
        alt="Light Mode Hero"
        className="w-20 h-20 mb-2 block dark:hidden"
      />
      <img
        src="/shopify_glyph_emerald.svg"
        alt="Dark Mode Hero"
        className=" w-20 h-20 mb-2 hidden dark:block"
      />

      <h1 className="text-2xl font-bold">
        Level Up Your Shopify Store With <br />
        Custom Sections!
      </h1>
      <p className="text-muted-foreground" > 
        Create custom sections for your Shopify store with ease. No coding
        required!
      </p>
      <Button className={"my-4"}>
        <Link href={"/collection/shopify"} >
        Explore Sections!
        </Link></Button>
    </div>
  );
}