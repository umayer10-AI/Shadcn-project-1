import { ShieldCheck, Search, BookOpen, HeartHandshake } from "lucide-react";

const features = [
  {
    title: "Fast Search",
    icon: Search,
  },
  {
    title: "Huge Collection",
    icon: BookOpen,
  },
  {
    title: "Secure Borrow",
    icon: ShieldCheck,
  },
  {
    title: "Wishlist",
    icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-muted py-20">
      <div className="max-w-[90%] mx-auto">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Why Choose BookSelf?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="rounded-xl bg-background p-8 text-center shadow"
            >
              <Icon className="mx-auto mb-4 h-12 w-12 text-primary" />

              <h3 className="font-semibold text-xl">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}