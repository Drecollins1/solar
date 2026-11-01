import { ArrowRight } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui";
import { WhatsAppIcon } from "@/components/whatsapp";
import { whatsappLink } from "@/lib/site";
import { images } from "@/lib/data";

export function CtaBanner({
  title = "Ready To Say Goodbye To Blackouts?",
  description = "Book a free consultation and get a system designed around how you actually use power.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div
          className="relative overflow-hidden rounded-3xl bg-brand bg-cover bg-center px-6 py-14 text-center sm:px-12 sm:py-20"
          style={{ backgroundImage: `linear-gradient(rgba(31,60,136,0.88), rgba(23,46,105,0.94)), url(${images.panelsSky})` }}
        >
          <h2 className="heading mx-auto max-w-2xl text-3xl text-white sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">{description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact?subject=quote" variant="white">
              Get a Free Quote <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href={whatsappLink()} target="_blank" rel="noopener noreferrer" variant="ghostLight">
              <WhatsAppIcon className="size-4" /> Chat on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
