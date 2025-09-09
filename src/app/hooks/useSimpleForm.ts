import { useState } from "react";
import { SnackbarUtilities } from "../utils/snackbarManager";
import { sendEmail } from "../services/sendEmail";

export const useSimpleForm = () => {
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    try {
      setLoading(true);
      e.preventDefault();
      // @ts-ignore
      const dataEmail: DataEmailSend = Object.fromEntries(
        // @ts-ignore
        new window.FormData(event.target)
      );
      if (
        dataEmail.email.trim() === "" ||
        dataEmail.name.trim() === "" ||
        dataEmail.description.trim() === ""
      ) {
        SnackbarUtilities.warning("Los campos no pueden estar vacíos.");
        return;
      }
      const regex = /^[a-zA-Z0-9\s\.,'"!?]+$/i;

      if (!regex.test(dataEmail.name) || !regex.test(dataEmail.description)) {
        SnackbarUtilities.error(
          "El texto contiene caracteres no permitidos. Por favor, corrígelos."
        );
        return;
      }
      await sendEmail(dataEmail);
    } catch {
      SnackbarUtilities.error(
        "Lo sentimos, se ha producido un error inesperado."
      );
    } finally {
      setLoading(false);
    }
  };
  return { handleSubmit, isLoading };
};
