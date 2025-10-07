import { Badge } from "@/components/ui/badge";
import { Star, Shield, Download, Users, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProducDetails({ product }) {
return (
    <div className="space-y-2 text-sm">
      {/* Product Details */}
      {product?.details?.map((detail, index) => (
        <div key={index} className="flex justify-between">
          <span className="text-muted-foreground">{detail.label}:</span>
          <span>{detail.value}</span>
        </div>
      ))}
    </div>
  );
}
