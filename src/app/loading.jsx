import { BookOpen } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />

          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-primary">
            <BookOpen className="h-10 w-10 text-primary-foreground" />
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-bold">
          BookSelf
        </h2>

        <p className="mt-2 text-muted-foreground">
          Loading amazing books...
        </p>

        <div className="mt-8 flex gap-2">
          <span className="h-3 w-3 animate-bounce rounded-full bg-primary" />
          <span
            className="h-3 w-3 animate-bounce rounded-full bg-primary"
            style={{ animationDelay: "0.2s" }}
          />
          <span
            className="h-3 w-3 animate-bounce rounded-full bg-primary"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
}