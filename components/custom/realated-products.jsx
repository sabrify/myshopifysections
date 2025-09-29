import ProductCard from "./product-card";
export default function RelatedProducts({ product, products }) {
    const related = products.filter(
    (p) => p.subcollection === product.subcollection && p.slug !== product.slug
  ).slice(0, 3);;

  if (!related.length) return null;


  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((item) => (
          <ProductCard key={item.id} product={item} />
          
        ))}
      </div>
    </section>
  );
}