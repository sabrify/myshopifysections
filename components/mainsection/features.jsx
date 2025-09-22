import ProductCard from "@/components/custom/product-card";

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Easy to install",
      description: "Feature 1 Description",
      imgSrc: "/tool.svg",
    },
    {
      id: 2,
      title: "Fully responsive",
      description: "Feature 2 Description",
      imgSrc: "/phone.svg",
    },
    {
      id: 3,
      title: "No code required",
      description: "Feature 3 Description",
      imgSrc: "/magic.svg",
    },
  ];

  return (
    <div className="bg-background">
      <div className=" py-10 mx-10  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-2 ">
        {features.map((feature) => (
          
          <ProductCard
          productStyles = "bg-secondary"
          key={feature.id}
          product={feature}
          showPrice={false}
          showButton={false}
          centerText={true}
          showfooter={false}
          imgSize="h-8"
          
        />
          
        ))}
      </div>
    </div>
    </div> 
    
  );
}
