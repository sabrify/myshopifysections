import SectionCard from "@/components/custom/sectioncard";

export default function MainCollection() {
  const sections = [
    {
      id: 1,
      title: "Hero Banner Pro",
      description: "Full-width hero with animations",
      price: "25.00$",
      imgSrc: "/svg1.svg",
    },
    {
      id: 2,
      title: "Product Gallery",
      description: "Masonry layout product display",
      price: "30.00$",
      imgSrc: "/svg2.svg",
    },
    {
      id: 3,
      title: "Testomonial Slider",
      description: "Slider of  customer reviews",
      price: "35.00$",
      imgSrc: "/svg3.svg",
    },
    {
      id: 4,
      title: "Featured Sections",
      description: "Highlight your best offerings",
      price: "40.00$",
      imgSrc: "/svg4.svg",
    },
    {
      id: 5,
      title: "Newsletter Plus",
      description: "Convert visitors to buyers",
      price: "45.00$",
      imgSrc: "/svg5.svg",
    },
    {
      id: 6,
      title: "FAQ Accordion",
      description: "Organized Q&A for your store",
      price: "50.00$",
      imgSrc: "/svg6.svg",
    },
  ];

  return (
    <div className="mx-10 mb-10">
      <h1 className="text-center text-lg font-semibold mb-10">
        Popular Sections
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-2">
        {sections.map((section) => (
          <SectionCard 
          key={section.id} 
          section={section}
          showPrice={true}
          showButton={true}
          centerText={false}
          imgSize="h-full" />
        ))}
      </div>
    </div>
  );
}
