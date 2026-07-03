const stats = [
  {
    number: "50K+",
    label: "Books",
  },
  {
    number: "10K+",
    label: "Readers",
  },
  {
    number: "500+",
    label: "Authors",
  },
  {
    number: "2K+",
    label: "Daily Visitors",
  },
];

export default function Stats() {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="max-w-[90%] mx-auto grid gap-8 text-center md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <h2 className="text-5xl font-bold">
              {item.number}
            </h2>

            <p className="mt-2 text-lg">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}