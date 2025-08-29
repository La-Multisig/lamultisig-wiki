import { cn } from "@/lib/utils";
import Link from "next/link";

type Sponsor = {
  name: string;
  logoSrc?: string;
  url?: string;
};

type SponsorsSectionProps = {
  className?: string;
  sponsors?: Sponsor[];
  totalSlots?: number;
  becomeSponsorUrl?: string;
};

export default function SponsorsSection({
  className,
  sponsors = [],
  totalSlots = 12,
  becomeSponsorUrl = "https://forms.gle/hpLEWRWAbJCcFDMk6",
}: SponsorsSectionProps) {
  const slots = Array.from({ length: totalSlots });

  return (
    <section className={cn("w-full py-16 md:py-24", className)}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Nuestros Sponsors
          </h2>
          <p className="my-3 text-sm text-muted-foreground md:text-base">
            Apoya el futuro del conocimiento abierto.
          </p>

          <Link
            href={becomeSponsorUrl}
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conviértete en sponsor
          </Link>
        </div>

        <div
          className={
            "mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6"
          }
        >
          {slots.map((_, index) => {
            const sponsor = sponsors[index];
            const href = sponsor?.url ?? becomeSponsorUrl;
            return (
              <Link
                href={href}
                key={index}
                className={cn(
                  "group relative flex aspect-[3/1] items-center justify-center rounded-xl border border-border bg-background/40 p-4 transition-colors hover:border-primary/60",
                  !sponsor && "hover:bg-primary/5"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                {sponsor?.logoSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={sponsor.logoSrc}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    Tu logo aquí
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
