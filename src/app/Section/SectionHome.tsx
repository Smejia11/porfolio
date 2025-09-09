import { useSectionContext } from "@/app/hooks/useSectionContext";
import { ProfileCard } from "../components/ProfileCard";

export default function SectionHome() {
  const { homeRef } = useSectionContext();
  return (
    <section
      ref={homeRef}
      data-aos="fade-in"
      data-aos-duration="2000"
      className="min-h-screen flex flex-col justify-center items-center p-2"
    >
      <ProfileCard />
    </section>
  );
}
