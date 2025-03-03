import Link from "next/link"
export default function Footer(){
    return(
        <footer className="border-t bg-background">
            <div className="mx-10 flex lg:flex-row max-md:flex-col items-start justify-around gap-10  py-8">
               <div className="flex flex-col">
                <div className="logo-container flex flex-row">
                    <span>MY</span>
                    <img src="/shopify_glyph_emerald.svg" alt="Shopify Logo" className="w-8 h-8"/>
                    <h1>ECTIONS</h1>
                </div>
                <p className="text-muted-foreground"> Level up your Shopify store with <br />
                our custom sections.</p>
               </div>

               <div className="grid grid-cols-2 gap-20 sm:grid-cols-3">
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-medim">Sections</h4>
                    <nav className="flex flex-col gap-2">
                        <Link href="#" className=" text-sm text-muted-foreground hover:text-foreground">
                        Features
                        </Link>
                        <Link href="#" className=" text-sm text-muted-foreground hover:text-foreground">
                        Pricing
                        </Link>
                        <Link href="#" className=" text-sm text-muted-foreground hover:text-foreground">
                        Showcase
                        </Link>
                        <Link href="#" className=" text-sm text-muted-foreground hover:text-foreground">
                        Roadmap
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-medim">Resources</h4>
                    <nav className="flex flex-col gap-2">
                    <Link href="#" className=" text-sm text-muted-foreground hover:text-foreground">
                        Docs
                        </Link>
                        <Link href="#" className=" text-sm text-muted-foreground hover:text-foreground">
                        Tutorials
                        </Link>
                        <Link href="#" className=" text-sm text-muted-foreground hover:text-foreground">
                        Blog
                        </Link>
                        <Link href="#" className=" text-sm text-muted-foreground hover:text-foreground">
                        Support
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-medim">Company</h4>
                    <nav className="flex flex-col gap-2">
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                        About
                        </Link>
                        <Link href="#" className=" text-sm text-muted-foreground hover:text-foreground">
                        Careers
                        </Link>
                        <Link href="#" className=" text-sm text-muted-foreground hover:text-foreground">
                        Contact
                        </Link>
                        <Link href="#" className=" text-sm text-muted-foreground hover:text-foreground">
                        Terms
                        </Link>
                    </nav>
                </div>
               </div>
            </div>

        </footer>
    )
}