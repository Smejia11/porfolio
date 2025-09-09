import HorizontalCard from "../components/HorizontalCard";
import { projects } from "../data/info";
import { useSectionContext } from "../hooks/useSectionContext";

function SectionProjects() {
  const { projectsRef } = useSectionContext();
  return (
    <section
      ref={projectsRef}
      className="min-h-screen flex flex-col md:flex-row gap-6 justify-center items-center p-10"
      data-aos="fade-down"
      data-aos-duration="3000"
    >
      {projects.map((project, index) => (
        <HorizontalCard
          key={project?.title + index}
          img={project?.image}
          title={project?.title}
          business={project?.business}
          description={project?.description}
          technologies={project?.technologies}
          readMore={project?.readMore}
          typeProject={project?.typeProject}
          isPrivate={project?.isPrivate}
        />
      ))}
    </section>
  );
}

export default SectionProjects;
