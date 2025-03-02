import SectionCard from "@/components/custom/sectioncard";

export default function MainCollection() {
  const sections = [
    {
      id: 1,
      title: "Section 1",
      description: "Section 1 Description",
      price: "25.00$",
      imgSrc: "/placeholder1.png",
    },
    {
      id: 2,
      title: "Section 2",
      description: "Section 2 Description",
      price: "30.00$",
      imgSrc: "/placeholder1.png",
    },
    {
      id: 3,
      title: "Section 3",
      description: "Section 3 Description",
      price: "35.00$",
      imgSrc: "/placeholder1.png",
    },
    {
      id: 4,
      title: "Section 4",
      description: "Section 4 Description",
      price: "40.00$",
      imgSrc: "/placeholder1.png",
    },
    {
      id: 5,
      title: "Section 5",
      description: "Section 5 Description",
      price: "45.00$",
      imgSrc: "/placeholder1.png",
    },
    {
      id: 6,
      title: "Section 6",
      description: "Section 6 Description",
      price: "50.00$",
      imgSrc: "/placeholder1.png",
    },
  ];

  return (
    <div className="mx-10 mb-10">
      <h1 className="text-center text-lg font-semibold mb-10">
        Popular Sections
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-2">
        {sections.map((section) => (
          <SectionCard key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
