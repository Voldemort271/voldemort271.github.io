import React from "react";
import Image from "next/image";
import Pic from "@/public/pic.jpg";

const AboutPage = () => {
  return (
    <div className={"layout-animate "}>
      <div className={"w-full md:max-w-screen-sm m-10 ml-0"}>
        <div
          className={
            "font-bold text-5xl text-slate-950 bg-gradient-to-tl from-pink-500" +
            " to-violet-500" +
            " inline-block text-transparent bg-clip-text"
          }
        >
          About me
        </div>
        <div
          className={
            "my-2.5 hidden sm:block font-semibold text-base leading-5 text-slate-600"
          }
        >
          A big paragraph about me that you all can read or ignore, I do not
          care that much tbh. But yeah, I am an aspiring web developer and
          occasionally make cool stuff. Check out my projects! :)
        </div>
      </div>
      <div
        className={
          "mb-5 w-full flex flex-col lg:flex-row items-center gap-5 lg:max-w-screen-lg"
        }
      >
        <Image
          alt={"Hello"}
          src={Pic}
          className={
            "aspect-square object-cover w-[250px] rounded-md shadow-xl shadow-slate-950/[0.2]"
          }
        ></Image>
        <div className={"text-base"}>
          A big paragraph about me that you all can read or ignore, I do not
          care that much tbh. But yeah, I am an aspiring web developer and
          occasionally make cool stuff. Check out my projects! :) A big
          paragraph about me that you all can read or ignore, I do not care that
          much tbh. But yeah, I am an aspiring web developer and occasionally
          make cool stuff. Check out my projects! :)
        </div>
      </div>
      <div className={"mt-20 flex-wrap flex gap-5"}>
        <Image
          alt={"Lol"}
          src={Pic}
          className={
            "w-16 aspect-square object-cover rounded-sm shadow-xl" +
            " shadow-slate-950/[0.2]"
          }
        ></Image>
        <Image
          alt={"Lol"}
          src={Pic}
          className={
            "w-16 aspect-square object-cover rounded-sm shadow-xl" +
            " shadow-slate-950/[0.2]"
          }
        ></Image>
        <Image
          alt={"Lol"}
          src={Pic}
          className={
            "w-16 aspect-square object-cover rounded-sm shadow-xl" +
            " shadow-slate-950/[0.2]"
          }
        ></Image>
        <Image
          alt={"Lol"}
          src={Pic}
          className={
            "w-16 aspect-square object-cover rounded-sm shadow-xl" +
            " shadow-slate-950/[0.2]"
          }
        ></Image>
        <Image
          alt={"Lol"}
          src={Pic}
          className={
            "w-16 aspect-square object-cover rounded-sm shadow-xl" +
            " shadow-slate-950/[0.2]"
          }
        ></Image>
      </div>
      <div className={"w-full md:max-w-screen-md mr-10 mt-5"}>
        <div className={"font-bold text-5xl text-slate-950"}>My skills</div>
        <div
          className={"my-2.5 font-semibold text-base leading-5 text-slate-600"}
        >
          This is a small paragraph about my skills, however few I have. As
          usual, you can choose to read or ignore, I will not force you. But do
          you see the beautiful links on the bottom right? They are so cute,
          aren’t they? Wanna click one and find out what will happen? While you
          think about it, let me present you with some facts about me.
        </div>
      </div>
      <div className={"my-20 w-full max-w-screen-sm"}>
        <div className={"w-full my-10"}>
          <div className={"font-bold text-2xl"}>Fact #1</div>
          <div className={"font-semibold text-base leading-5 text-slate-600"}>
            I was once a dinosaur. A big piece of whale poop hit the earth and
            it kinda got blank - moments later I’m a kid crying in the lap of a
            lady dressed in white.
          </div>
        </div>
        <div className={"w-full my-10"}>
          <div className={"font-bold text-2xl"}>Fact #2</div>
          <div className={"font-semibold text-base leading-5 text-slate-600"}>
            I was once a dinosaur. A big piece of whale poop hit the earth and
            it kinda got blank - moments later I’m a kid crying in the lap of a
            lady dressed in white.
          </div>
        </div>
        <div className={"w-full my-10"}>
          <div className={"font-bold text-2xl"}>Fact #3</div>
          <div className={"font-semibold text-base leading-5 text-slate-600"}>
            I was once a dinosaur. A big piece of whale poop hit the earth and
            it kinda got blank - moments later I’m a kid crying in the lap of a
            lady dressed in white.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
