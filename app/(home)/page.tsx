import HeroSection from "@/components/blocks/modern-hero";
import SponsorsSection from "@/components/blocks/sponsors-section";

const data = {
  heading: "Tu puerta de entrada a Web3",
  description:
    "La Multisig es un hub de conocimiento Web3 donde puedes encontrar información sobre wallets, blockchains y mucho más.",
  button: {
    text: "Ir a la wiki",
    url: "/docs",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection {...data} />
      <SponsorsSection />
    </>
  );
}
