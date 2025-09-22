import ProductCard from "@/components/custom/product-card";

export default function Features() {
  const products = [
    {
      id: 1,
      title: "Easy to install",
      description: "Product 1 Description",
      imgSrc: "/tool.svg",
    },
    {
      id: 2,
      title: "Fully responsive",
      description: "Product 2 Description",
      imgSrc: "/phone.svg",
    },
    {
      id: 3,
      title: "No code required",
      description: "Product 3 Description",
      imgSrc: "/magic.svg",
    },
  ];

  return (
    <div className="bg-background">
      <div className=" py-10 mx-10  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-2 ">
        {products.map((product) => (
          
          <ProductCard
          productStyles = "bg-secondary"
          key={product.id}
          product={product}
          showPrice={false}
          showButton={false}
          centerText={true}
          imgSize="h-20"
          
        />
          
        ))}
      </div>
    </div>
    </div> 
    
  );
}
