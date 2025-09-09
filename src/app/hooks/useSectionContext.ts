// Custom hook to use the SectionContext
import { SectionContext } from "@/app/context/sectionContext";
import { useContext } from "react";

export const useSectionContext = () => {
    const context = useContext(SectionContext);

    if (!context) {
        throw new Error("useSectionContext must be used within a SectionProvider");
    }

    return context;
};
