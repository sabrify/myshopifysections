import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SectionCard({
  section,
  showPrice = true,
  showButton = true,
  centerText = false,
  sectionStyles,
  imgSize,
}) {
  return (
    <Card className={`w-full ${sectionStyles}`}>
      <CardContent className={`p-4 ${centerText ? "text-center" : ""}`}>
        <CardHeader className="p-0">
          <img
            src={section.imgSrc}
            alt={section.title}
            className= {`w-full ${imgSize} object-contain mb-2`}
          />
          <CardTitle className="text-base">{section.title}</CardTitle>
          <CardDescription className="text-sm">
            {section.description}
          </CardDescription>
        </CardHeader>
      </CardContent>
      <CardFooter className="flex justify-between p-4">
        {showPrice && (
          <p
            className="text-sm font-semibold"
            style={{ color: "var(--price-text)" }}
          >
            {section.price}
          </p>
        )}
        {showButton && (
          <Button className="text-sm" variant="secondary">
            Preview
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
