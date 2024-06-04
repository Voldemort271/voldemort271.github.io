import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Gamepad, Instagram, Mail, Phone } from "lucide-react";

const Contacts = () => {
  return (
    <div className={"layout-animate"}>
      <div className={"w-full md:max-w-screen-sm m-10 ml-0"}>
        <div
          className={
            "font-bold text-5xl text-slate-950 bg-gradient-to-tl from-pink-500" +
            " to-violet-500" +
            " inline-block text-transparent bg-clip-text"
          }
        >
          Contact me
        </div>
        <div
          className={
            "my-2.5 hidden sm:block font-semibold text-base leading-5 text-slate-600"
          }
        >
          I&apos;m a relatively busy person but you can still contact me via the
          following:
        </div>
      </div>
      <div
        className={
          "mb-5 w-full flex flex-col items-center gap-5 lg:max-w-screen-sm"
        }
      >
        <Alert className={"bg-slate-100"}>
          <Phone className="h-4 w-4" />
          <AlertTitle>Phone</AlertTitle>
          <AlertDescription>(fake)</AlertDescription>
        </Alert>
        <Alert className={"bg-slate-100"}>
          <Mail className="h-4 w-4" />
          <AlertTitle>Email</AlertTitle>
          <AlertDescription>(fake)</AlertDescription>
        </Alert>
        <Alert className={"bg-slate-100"}>
          <Gamepad className="h-4 w-4" />
          <AlertTitle>Discord</AlertTitle>
          <AlertDescription>@shubum2712</AlertDescription>
        </Alert>
        <Alert className={"bg-slate-100"}>
          <Instagram className="h-4 w-4" />
          <AlertTitle>Instagram</AlertTitle>
          <AlertDescription>@shubum_27</AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default Contacts;
