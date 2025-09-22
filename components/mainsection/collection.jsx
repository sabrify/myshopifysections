import ProductCard from "@/components/custom/product-card";
import products from "@/data/products";
export default function MainCollection({ title}) {
  const popularProducts = products.filter((product) => product.popular);
  return (
    <div className="mx-10 mb-10">
      <h1 className="text-center text-lg font-semibold mb-10">
        {title || "Popular Sections"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-2">
        {popularProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showPrice={true}
            showButton={true}
            centerText={false}
            imgSize="h-full"
          />
        ))}
      </div>
    </div>
  );
}
