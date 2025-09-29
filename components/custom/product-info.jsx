import { Badge } from "@/components/ui/badge";
import { Star, Shield, Download, Users, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProductInfo({ product }) {
  const feature = product.features || [];
  return (
    <div className="space-y-6">
      {/* product title and ratings */}
      <div className="z-11">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">Best Seller</Badge>
          <Badge variant="outline">Digital Download</Badge>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">
          {product.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-1">{product.reviews} reviews</span>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>450+ customers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {/* pricing */}
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold " style={{ color: "var(--price-text)" }}>
              {product.price}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            One-time purchase • Lifetime access
          </p>
        </div>
        {/* key features */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">What's included:</h3>
          <ul className="space-y-2 text-sm">
            {feature.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Purchase Actions */}
        <div className="space-y-3">
          
        <Link href={product.buyUrl || "#"} passHref > 
        <Button size="lg" className="w-full cursor-pointer mb-4"> 
          
          <Download className="h-4 w-4 mr-2" />
          
          Buy Now - Instant Download
         
        </Button>
         </Link>
        
          <Link href={product.previewUrl}>
        <Button variant="outline" size="lg" className="w-full bg-transparent cursor-pointer">
         Preview
        </Button>
        </Link>
      </div>
      {/* Trust Indicators */}
        <div className="flex items-center justify-between text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
        <div className="flex items-center gap-1">
          <Shield className="h-3 w-3" />
          <span>Secure payment</span>
        </div>
        <div className="flex items-center gap-1">
          <Download className="h-3 w-3" />
          <span>Instant download</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>30-day guarantee</span>
        </div>
      </div>
            {/* Product Details */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">File format:</span>
          <span>React, TypeScript, Figma</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">File size:</span>
          <span>45.2 MB</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Last updated:</span>
          <span>December 2024</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">License:</span>
          <span>Commercial use allowed</span>
        </div>
      </div>
      </div>
    </div>
  );
}
