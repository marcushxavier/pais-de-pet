import SectoinTittle from "./utils/SectionTittle";
import { iServiceCard } from "./utils/services/ServiceCard";
import vetImage from "@/public/png/services/vet-image.png";
import petshopImage from "@/public/png/services/petshop-image.png";
import groomingImage from "@/public/png/services/grooming-image.png";
import CardsContainer from "./utils/services/CardsContainer";

export default function Services({}: {}) {
  const servicesList: iServiceCard[] = [
    {
      id: 0,
      title: "veterinário",
      description: "Profissionais qualificados para o cuidado da saúde dos seus pets",
      detailedDescription:
        "O serviço veterinário é centrado no cuidado completo e contínuo, com foco na prevenção de doenças e no acompanhamento de todas as fases da vida do seu pet. Queremos construir uma vida mais saudável e feliz para quem você ama. E pra isso nós oferecemos:",
      subservices: [
        "✔ Check-ups regulares",
        "✔ Vacinação em dia",
        "✔ Exames laboratoriais",
        "✔ Acompanhamento personalizado",
        "✔ Orientação contínua",
      ],
      image: vetImage,
      color: "cerulean",
    },
    {
      id: 1,
      title: "banho e tosa",
      description:
        "deixe o seu pet cheiroso e arrumado com a nossa equipe de banho e tosa",
      detailedDescription:
        "O banho e tosa vão muito além da estética, são essenciais para a saúde e o bem-estar do seu pet. Nosso serviço é realizado por profissionais experientes especializados em:",
      subservices: [
        "✔ Banho Terapêutico",
        "✔ Tosa Higiênica e Estilizada",
        "✔ Higiene Completa",
      ],

      image: groomingImage,
      color: "tanjerina",
    },
    {
      id: 2,
      title: "petshop",
      description: "produtos diversos para o seu pet",
      detailedDescription: "tedtesifsnf",
      subservices: [""],
      image: petshopImage,
      color: "carot",
    },
  ];
  return (
    <section className="py-4 flex flex-col gap-x-10" id="services">
      <SectoinTittle title="serviços" />
      <div className="w-full md:gap-5 flex sm:justify-around md:justify-center pt-5 px-2 overflow-x-scroll snap-mandatory snap-x snap scroll-smooth scroll-hidden">
        <CardsContainer servicesList={servicesList} />
      </div>
    </section>
  );
}
