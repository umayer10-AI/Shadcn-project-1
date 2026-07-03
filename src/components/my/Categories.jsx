import { Code, BookOpen, Brain, Globe, Heart, Briefcase } from "lucide-react";

const categories = [
  { name: "Programming", icon: Code },
  { name: "Novel", icon: BookOpen },
  { name: "Science", icon: Brain },
  { name: "History", icon: Globe },
  { name: "Self Help", icon: Heart },
  { name: "Business", icon: Briefcase },
];

export default function Categories() {
  return (
    <section className="max-w-[90%] mx-auto py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Categories
      </h2>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
        {categories.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="rounded-xl border p-8 text-center transition hover:bg-muted"
          >
            <Icon className="mx-auto mb-4 h-10 w-10 text-primary" />

            <h3 className="font-semibold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}