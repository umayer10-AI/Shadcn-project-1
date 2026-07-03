import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="max-w-[80%] mx-auto px-6 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            📚 Welcome to BookSelf
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-6xl">
            Discover Your
            <span className="text-primary"> Next Favorite </span>
            Book
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Explore thousands of books, discover new authors, and build your
            personal reading collection—all in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/browse">
                Browse Books
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link href="/library">Explore Library</Link>
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e"
            alt="Books"
            width={550}
            height={550}
            priority
            className="rounded-xl h-100"
          />
        </div>
      </div>
    </section>
  );
}