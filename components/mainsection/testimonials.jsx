import TestimonialCard from "@/components/custom/testimonialcard";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      stars: 3,
      description: "This is an amazing product!",
      name: "John Doe",
      industry: "E-commerce",
    },
    {
      id: 2,
      stars: 4,
      description: "Really helped my business grow.",
      name: "Jane Smith",
      industry: "Retail",
    },
    {
      id: 3,
      stars: 5,
      description: "Highly recommend to everyone.",
      name: "Alice Johnson",
      industry: "Fashion",
    },
    {
        id: 4,
        stars: 5,
        description: "Highly recommend to everyone.",
        name: "Alice Johnson",
        industry: "Fashion",
      },
  ];

  return (
    <div className="bg-secondary ">
<div className="mx-10  py-10">
        <h1 className="text-center text-lg font-semibold mb-10">
        What Merchants Say</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto p-2">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            stars={testimonial.stars}
            description={testimonial.description}
            name={testimonial.name}
            industry={testimonial.industry}
            sectionStyles="bg-background z-10"
            starColor= "text-emerald-400"
          />
        ))}
      </div>
    </div>
    </div> 
    
  );
}