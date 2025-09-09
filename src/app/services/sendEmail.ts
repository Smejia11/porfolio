import { getValidationError } from "@/app/utils/getValidationError";
import { SnackbarUtilities } from "@/app/utils/snackbarManager";

type EmailData = {
  [k: string]: FormDataEntryValue;
};

export const sendEmail = async (dataEmail: EmailData) => {
  try {
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataEmail),
    };
    const response = await fetch(endpoint, options);
    if (!response.ok) {
      // Handle non-successful HTTP responses (e.g., 4xx or 5xx errors)
      if (response.status === 400) {
        const errorResponse = await response.json();
        if (errorResponse.isInvalidEmail) {
          SnackbarUtilities.error(errorResponse.message);
          return;
        }
      }
      const errorCode = `ERR_${response.status}`;
      const errorMessage = response.statusText;
      SnackbarUtilities.error(getValidationError(errorCode ?? errorMessage));
      return;
    }
    await response.json();
    SnackbarUtilities.success("Se ha enviado el correo exitosamente!");
  } catch {
    SnackbarUtilities.error("Error inesperado, intente de nuevo más tarde.");
  }
};
