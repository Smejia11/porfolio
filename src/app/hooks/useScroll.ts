import { useCallback } from "react";
import { useSectionContext } from "./useSectionContext";
import { match } from "ts-pattern";

const useScroll = () => {
  const { homeRef, contactUsRef, experianRef, projectsRef } = useSectionContext();
  const scrollToSection = useCallback(
    (elementRef: { current: { offsetTop: any } }) => {
      try {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
        });
      } catch (ex) {
        console.log(ex);
      }
    },
    []
  );

  const scrollToRef = useCallback(
    (ref: string) =>
      match(ref)
        .with("home", () => scrollToSection(homeRef))
        .with("contactUs", () => scrollToSection(contactUsRef))
        .with("experian", () => scrollToSection(experianRef))
        .with("projects", () => scrollToSection(projectsRef))
        .otherwise(() => scrollToSection(homeRef)),

    [contactUsRef, homeRef, scrollToSection, experianRef, projectsRef]
  );
  const redirectionHome = useCallback(
    () => scrollToSection(homeRef),
    [homeRef, scrollToSection]
  );
  const redirectionContactUs = useCallback(
    () => scrollToSection(contactUsRef),
    [contactUsRef, scrollToSection]
  );

  return { scrollToRef, redirectionHome, redirectionContactUs };
};

export default useScroll;
