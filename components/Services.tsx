import SectoinTittle from "./utils/SectionTittle";
import ServiceCard, { iServiceCard } from "./utils/services/ServiceCard";
import vetImage from "@/public/png/services/vet-image.png";
import petshopImage from "@/public/png/services/petshop-image.png";
import groomingImage from "@/public/png/services/grooming-image.png";

export default function Services({}: {}) {
  const servicesList: iServiceCard[] = [
    {
      tittle: "petshop",
      description: "produtos diversos para o seu pet",
      image: petshopImage,
      color: "carot",
    },
    {
      tittle: "veterinário",
      description: "Profissionais qualificados para o cuidado da saúde dos seus pets",
      image: vetImage,
      color: "cerulean",
    },
    {
      tittle: "banho e tosa",
      description:
        "deixe o seu pet cheiroso e arrumado com a nossa equipe de banho e tosa",
      image: groomingImage,
      color: "tanjerina",
    },
  ];
  return (
    <section className="">
      <SectoinTittle tittle="serviços" />
      <div className="flex pt-5 px-2 gap-3 overflow-auto scroll-hidden">
        {servicesList.map((service, idx) => (
          <ServiceCard
            key={`service${idx}`}
            image={service.image}
            tittle={service.tittle}
            description={service.description}
            color={service.color}
          />
        ))}
      </div>
    </section>
  );
}
