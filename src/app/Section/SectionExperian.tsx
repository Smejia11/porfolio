import { DefaultTimeline } from "../components/TimeLine";
import { experience } from "../data/info";
import { useSectionContext } from "../hooks/useSectionContext";

function SectionExperian() {
  const { experianRef } = useSectionContext();
  return (
    <section
      className="min-h-screen max-w-full flex flex-col justify-center items-center"
      data-aos="fade-up"
      data-aos-duration="2000"
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
    </section>
  );
}

export default SectionExperian;
