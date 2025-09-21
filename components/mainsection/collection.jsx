import SectionCard from "@/components/custom/sectioncard";
import sections from "@/data/sections";
export default function MainCollection() {
  const popularSections = sections.filter((section) => section.popular);
  return (
    <div className="mx-10 mb-10">
      <h1 className="text-center text-lg font-semibold mb-10">
        Popular Sections
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-2">
        {popularSections.map((section) => (
          <SectionCard
            key={section.id}
            section={section}
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
