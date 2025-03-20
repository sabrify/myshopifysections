import SectionCard from "@/components/custom/sectioncard";

export default function Features() {
  const sections = [
    {
      id: 1,
      title: "Easy to install",
      description: "Section 1 Description",
      imgSrc: "/tool.svg",
    },
    {
      id: 2,
      title: "Fully responsive",
      description: "Section 2 Description",
      imgSrc: "/phone.svg",
    },
    {
      id: 3,
      title: "No code required",
      description: "Section 3 Description",
      imgSrc: "/magic.svg",
    },
  ];

  return (
    <div className="bg-background">
      <div className=" py-10 mx-10  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-2 ">
        {sections.map((section) => (
          
          <SectionCard
          sectionStyles = "bg-secondary"
          key={section.id}
          section={section}
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
