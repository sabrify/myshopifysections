import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
   
  } from "@/components/ui/card";
  
  export default function TestimonialCard({
    stars,
    description,
    name,
    industry,
    sectionStyles,
    starColor = "text-yellow-500",
  }) {
    return (
      <Card className={`w-full ${sectionStyles}`}>
        <CardContent className="p-4 text-start">
          <CardHeader className="p-0">
            <div className="flex justify-start mb-2">
              {Array(stars)
                .fill(0)
                .map((_, index) => (
                  <span key={index} className={starColor} >★</span>
                ))}
            </div>
            <CardDescription className="text-sm mb-2">
              {description}
            </CardDescription>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{industry}</p>
          </CardHeader>
        </CardContent>
      </Card>
    );
  }