import Grow from "@/app/utils/Grow";
import { SnackbarUtilitiesConfigurator } from "@/app/utils/snackbarManager";
import { SnackbarProvider } from "notistack";
import React from "react";
import { SimpleForm } from "../components/ContactUs";
import { useSectionContext } from "@/app/hooks/useSectionContext";

function SectionContactUs() {
  const { contactUsRef } = useSectionContext();
  return (
    <SnackbarProvider
      TransitionComponent={Grow}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <SnackbarUtilitiesConfigurator />
      <section
        data-aos="zoom-in"
        className="min-h-screen max-w-full flex flex-col justify-center items-center"
        data-aos-duration="1000"
        ref={contactUsRef}
      >
        <SimpleForm />
      </section>
    </SnackbarProvider>
  );
}

export default SectionContactUs;
