import { Button } from "@material-tailwind/react";
export function ButtonGradient({
  children,
  ...props
}: {
  children?: React.ReactNode;
}) {
  return (
    <Button variant="gradient" className="flex items-center gap-3" {...props}>
      {children}
    </Button>
  );
}
