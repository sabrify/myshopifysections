import products from "@/data/products";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/desktop-footer";
import ProductGallery from "@/components/custom/product-gallery";
import ProductInfo from "@/components/custom/product-info";
import RelatedProducts from "@/components/custom/realated-products";

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((product) => product.slug === slug);
  if (!product) {
    return <div>Section not found</div>;
  }
  return (
    <div className="container mx-auto">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ProductGallery images={product.images} />
          <ProductInfo product={product} />
        </div>
        {/* <ProductTabs />
        <TrustSignals />
         */}
         <RelatedProducts product={product} products ={products}/>
      </main>
      <Footer />
    </div>
  );
}
// Pre-render product pages at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
