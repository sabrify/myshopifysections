import SectionCard from "@/components/custom/sectioncard";

export default function Features() {
  const sections = [
    {
      id: 1,
      title: "Easy to install",
      description: "Section 1 Description",
      imgSrc: "/placeholder1.png",
    },
    {
      id: 2,
      title: "Fully responsive",
      description: "Section 2 Description",
      imgSrc: "/placeholder1.png",
    },
    {
      id: 3,
      title: "No code required",
      description: "Section 3 Description",
      imgSrc: "/placeholder1.png",
    },
  ];

  return (
    <div className=" py-10 mb-10 bg-foreground">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-2">
        {sections.map((section) => (
          <SectionCard
            key={section.id}
            section={section}
            showPrice={false}
            showButton={false}
            centerText={true}
          />
        ))}
      </div>
    </div>
  );
}
