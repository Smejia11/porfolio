import { Card, Button, Typography, Spinner } from "@material-tailwind/react";
import { useSimpleForm } from "../hooks/useSimpleForm";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { infoData } from "../data/info";

export function SimpleForm() {
  const { handleSubmit, isLoading } = useSimpleForm();
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Realice su consulta!
      </Typography>
      <div className="flex items-center text-blue-gray-500 gap-2 p-1">
        <EnvelopeIcon className="h-6 w-6" />
        <Typography className="font-medium">{infoData.email}</Typography>
      </div>
      <div className="flex items-center text-blue-gray-500 gap-3 p-1">
        <DevicePhoneMobileIcon className="h-6 w-6" />
        <Typography className="font-medium">{infoData.phone}</Typography>
      </div>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Tu nombre
          </Typography>
          <input
            className="shadow appearance-none border rounded focus:outline w-full py-2 px-3 text-brown-800 leading-tight  focus:shadow-outline"
            name="name"
            type="text"
            placeholder="Nombre"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email
          </Typography>
          <input
            className="shadow appearance-none border rounded focus:outline w-full py-2 px-3 text-brown-800 leading-tight  focus:shadow-outline"
            name="email"
            type="email"
            placeholder="email"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Motivo del contacto
          </Typography>
          <div className="lg:w-96 lg:h-60">
            <textarea
              name="description"
              placeholder="Motivo del contacto"
              className="w-full h-full max-h-60 resize-y  rounded-md focus:outline"
            />
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center">
            <Spinner color="blue-gray" className="h-8 w-8" />
          </div>
        ) : (
          <Button type="submit" className="mt-6" fullWidth>
            Enviar
          </Button>
        )}
      </form>
    </Card>
  );
}
