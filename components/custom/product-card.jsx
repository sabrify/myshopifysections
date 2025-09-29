import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProductCard({
  product,
  showPrice = true,
  showButton = true,
  showfooter = true,
  centerText = false,
  productStyles,
  imgSize,
}) {
  return (
    <Card className={`w-full ${productStyles} z-10 pixel-border`}>
      <Link href={`/products/${product.slug}`} passHref>
      <CardContent className={`p-4 ${centerText ? "text-center" : ""}`}>
        <CardHeader className="p-0">
          <img
            src={product.imgSrc}
            alt={product.title}
            className= {`w-full ${imgSize} object-contain mb-2`}
          />
          <CardTitle className="text-base">{product.title}</CardTitle>
          <CardDescription className="text-sm">
            {product.description}
          </CardDescription>
        </CardHeader>
      </CardContent>
       </Link>
       {showfooter && ( 
        <CardFooter className="flex justify-between p-4">
        {showPrice && (
          <p
            className="text-sm font-semibold"
            style={{ color: "var(--price-text)" }}
          >
            {product.price}
          </p>
        )}
        {showButton && (
         
           <Link href={product.previewUrl || "#"} passHref>
            <Button asChild variant="secondary" className="text-sm">
              <span>Preview</span>
            </Button>
          </Link>
         
        )}
      </CardFooter>
        )}
      
    </Card>
   
  );
}
