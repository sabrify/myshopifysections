"use client"
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button";

export default function ProductGallery({images = []}) {
    const [currentImage, setCurrentImage] = useState(0);


    const nextImage = () => {
        setCurrentImage((prev)=> (prev + 1) % images.length);
    }
    const prevImage = () => {
        setCurrentImage((prev)=> (prev - 1 + images.length) % images.length);
    }
    return <div className="space-y-4">
        {/* Main Image */}
        <div className="relative aspect-square rounded-lg overflow-hidden group">
        <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="w-full h-full object-cover"/>
        {/* Navigation Arrows */}
        <Button variant="ghost" className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity" onClick={prevImage}>
            <ChevronLeft className="h-4 w-4"/>
            </Button>
        <Button variant="ghost" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity" onClick={nextImage}>
            <ChevronRight className="h-4 w-4"/>
            </Button>
        </div>
        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-2">

        {images.map((img, index) => (
             <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
              currentImage === index ? "border-primary" : "border-border hover:border-muted-foreground"
            }`}
            >
                <img
                src={img}
        alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"

                />
            </button>

        ))}
        
        </div>
    </div>;
}