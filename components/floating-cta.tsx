import Link from "next/link";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
      <Button
        asChild
        className="animate-float rounded-full border border-[#d4af37]/45 bg-gradient-to-r from-[#1a2340] to-[#2b3861] text-white shadow-[0_12px_32px_rgba(17,22,37,0.28)] hover:shadow-[0_16px_38px_rgba(17,22,37,0.34)]"
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
