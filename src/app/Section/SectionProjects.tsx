import HorizontalCard from "../components/HorizontalCard";
import { projects } from "../data/info";
import { useSectionContext } from "../hooks/useSectionContext";

function SectionProjects() {
  const { projectsRef } = useSectionContext();

  return (
    <section
      ref={projectsRef}
      className="min-h-screen p-4"
      data-aos="fade-down"
      data-aos-duration="3000"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
}

export default SectionProjects;
