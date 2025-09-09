import { createContext, useRef, RefObject, FC, ReactNode } from "react";

interface SectionContextProps {
  homeRef: RefObject<any>;
  contactUsRef: RefObject<any>;
  experianRef: RefObject<any>;
  projectsRef: RefObject<any>;
}

export const SectionContext = createContext<SectionContextProps | undefined>(
  undefined
);

export const SectionProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const homeRef = useRef<any>(null);
  const contactUsRef = useRef<any>(null);
  const experianRef = useRef<any>(null);
  const projectsRef = useRef<any>(null);

  const contextValue: SectionContextProps = {
    homeRef,
    contactUsRef,
    experianRef,
    projectsRef,
  };

  return (
    <SectionContext.Provider value={contextValue}>
      {children}
    </SectionContext.Provider>
  );
};
