import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "John Doe",
    comment: "Amazing collection of books. Highly recommended!",
  },
  {
    name: "Sarah",
    comment: "The UI is beautiful and easy to use.",
  },
  {
    name: "David",
    comment: "I found every book I was looking for.",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-[90%] mx-auto py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        What Readers Say
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.name}>
            <CardContent className="space-y-4 p-6">
              <div className="text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p>{review.comment}</p>

              <h3 className="font-bold">
                {review.name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}