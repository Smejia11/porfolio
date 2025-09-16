import { Card, Button, Typography, Spinner } from "@material-tailwind/react";
import { useSimpleForm } from "../hooks/useSimpleForm";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/24/outline";
import { infoData } from "../data/info";

export function SimpleForm() {
  const { handleSubmit, isLoading } = useSimpleForm();
  return (
    <Card
      color="transparent"
      shadow={false}
      className="w-full max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg space-y-4"
    >
      <Typography
        variant="h4"
        color="blue-gray"
        className="flex items-center gap-2 leading-none"
      >
        <InboxArrowDownIcon className="h-8 w-8 shrink-0" />
        Contacto
      </Typography>
      <div className="flex flex-wrap items-center gap-2 text-blue-gray-500">
        <EnvelopeIcon className="h-5 w-5 shrink-0" />
        <Typography className="font-medium break-all">
          {infoData.email}
        </Typography>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-blue-gray-500">
        <DevicePhoneMobileIcon className="h-5 w-5 shrink-0" />
        <Typography className="font-medium break-all">
          {infoData.phone}
        </Typography>
      </div>
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray">
            Tu nombre
          </Typography>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            name="name"
            type="text"
            placeholder="Nombre"
          />
          <Typography variant="h6" color="blue-gray">
            Email
          </Typography>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            name="email"
            type="email"
            placeholder="email"
          />
          <Typography variant="h6" color="blue-gray">
            Motivo del contacto
          </Typography>
          <textarea
            name="description"
            placeholder="Motivo del contacto"
            className="w-full h-32 max-h-60 resize-y rounded-md p-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
