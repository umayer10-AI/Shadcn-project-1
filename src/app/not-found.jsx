import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6">
      <div className="max-w-lg text-center">
        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
          <SearchX className="h-12 w-12 text-primary" />
        </div>

        {/* Error Code */}
        <h1 className="mt-8 text-7xl font-extrabold text-primary">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-muted-foreground">
          The page you're looking for doesn't exist or may have been
          moved. Let's get you back to exploring great books.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back Home
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/browse">
              <BookOpen className="mr-2 h-4 w-4" />
              Browse Books
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}