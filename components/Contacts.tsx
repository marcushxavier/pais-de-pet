import Image from "next/image";
import WhatsappIcon from "@/public/svg/whatsapp.svg";
import InstagramIcon from "@/public/svg/Instagram.svg";

export default function Contacts() {
  return (
    <section id="contacts" className="flex flex-col items-center gap-3">
      <h2 className="font-medium text-lg">
        Entre em contato e venha nos visitar
      </h2>
      <div className="w-full flex justify-center gap-5">
        <a
          href="https://wa.me/5581992478819"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={WhatsappIcon} alt="" className="w-12 h-12" />
        </a>
        <a
          href="https://www.instagram.com/paisdepetcandeias/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={InstagramIcon} alt="" className="w-12 h-12" />
        </a>
      </div>
    </section>
  );
}
