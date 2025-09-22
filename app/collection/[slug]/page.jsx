

import Footer from "@/components/navigation/desktop-footer";
import Navbar from "@/components/navigation/navbar";
import Maincollection from "@/components/mainsection/collection";
import products from "@/data/products"; // ✅ make sure this is imported

export default async function Collection({ params }) {
  const { slug } = await params;

  const collectionProducts =
    slug === "all"
      ? products
      : products.filter((p) => p.collection === slug);

  if (!collectionProducts.length) {
    return <div className="p-8">No products found in this collection</div>;
  }
  const title =
    slug === "all" 
      ? "All Products"
      : `${collectionProducts[0].collection} Collection`;

  return (
    <div>
      <Navbar />
      <main className="bg-gradient-to-b from-[var(--gradient-start)] to-[var(--gradient-end)] my-10">
        {/* ✅ Pass products down */}
        <Maincollection products={collectionProducts} title={title} />
      </main>
      <Footer />
    </div>
  );
}
