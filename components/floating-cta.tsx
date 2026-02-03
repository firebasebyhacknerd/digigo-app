import Link from "next/link";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
      <Button
        asChild
        className="shadow-soft-glow animate-float"
        aria-label="Talk to a technical expert"
      >
        <Link href="/contact">
          <MessageCircle className="mr-2 h-4 w-4" />
          Talk to a Technical Expert
        </Link>
      </Button>
    </div>
  );
}
