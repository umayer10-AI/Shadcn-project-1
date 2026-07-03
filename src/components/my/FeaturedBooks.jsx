import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://picsum.photos/300/400?1",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    image: "https://picsum.photos/300/400?2",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    image: "https://picsum.photos/300/400?3",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andy Hunt",
    image: "https://picsum.photos/300/400?4",
  },
];

export default function FeaturedBooks() {
  return (
    <section className="max-w-[80%] mx-auto py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Featured Books
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {books.map((book) => (
          <Card key={book.title}>
            <CardContent className="p-4">
              <img
                src={book.image}
                alt={book.title}
                className="h-60 w-full rounded-lg object-cover"
              />

              <h3 className="mt-4 font-bold">{book.title}</h3>

              <p className="text-muted-foreground">
                {book.author}
              </p>

              <Button className="mt-4 w-full">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}