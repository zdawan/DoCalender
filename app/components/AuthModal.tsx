import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import Image from "next/image";
import Logo from "@/public/logo.png";

export function AuthModal() {
  //asChild is Button
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Try for Free</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500p]">
        <DialogHeader className="flex items-center justify-center flex-row gap-3">
          <Image src={Logo} alt="Logo" className="size-10" />
          <h4 className="text-3xl font-semibold">
            Do<span className="text-blue-600">Calender</span>
          </h4>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
