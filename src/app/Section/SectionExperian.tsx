import { DocumentIcon } from "@heroicons/react/24/outline";
import { ButtonGradient } from "../components/Button";
import { DefaultTimeline } from "../components/TimeLine";
import { experience, infoData } from "../data/info";
import { useSectionContext } from "../hooks/useSectionContext";

function SectionExperian() {
  const { experianRef } = useSectionContext();
  return (
    <section
      className="min-h-screen max-w-full flex flex-col justify-center items-center"
      data-aos="fade-down"
      data-aos-duration="3000"
      ref={experianRef}
    >
      {experience.map((exp) => (
        <DefaultTimeline
          key={exp?.date}
          title={exp?.position}
          description={exp?.description}
          date={exp?.date}
        />
      ))}
      <a
        href={infoData.cv}
        download
        target="_blank"
        rel="noreferrer"
        className="mt-20"
      >
        <ButtonGradient>
          <DocumentIcon className="h-5 w-5 mr-2" />
          <span className="w-full h-full">Descargar CV</span>
        </ButtonGradient>
      </a>
    </section>
  );
}

export default SectionExperian;
