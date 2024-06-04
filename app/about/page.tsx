import React from "react";
import Image from "next/image";
import Test from "@/public/test.jpg";
import Pic from "@/public/images/pic.png";
import Pic1 from "@/public/images/htmcss.png";
import Pic2 from "@/public/images/next.png";
import Pic3 from "@/public/images/node.png";
import Pic4 from "@/public/images/cpp.png";
import Pic5 from "@/public/images/py.png";

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
          I am a 18yo freshman studying in one of the best institutions of the
          country.
        </div>
      </div>
      <div
        className={
          "mb-5 w-full flex flex-col lg:flex-row items-center gap-5 lg:max-w-screen-lg"
        }
      >
        <Image
          alt={"Hello"}
          src={Test}
          className={
            "aspect-square object-cover w-[250px] rounded-md shadow-xl shadow-slate-950/[0.2]"
          }
        ></Image>
        <div className={"text-base"}>
          I have a ~7 year experience in programming — my dad introduced me to
          Khan Academy when I was 10. I started out in the processing.js
          environment there, and gradually shifted to web development because I
          found that more appealing and useful. Life has been really hectic
          since then, but we all have to power through it anyway, don&apos;t we.
          I haven&apos;t been getting much free time because of the intensive
          course in the college, but I&apos;m trying to learn new things every
          time. On top of that, I&apos;m also a basketball and badminton player
          and I also play the electronic keyboard.
        </div>
      </div>
      <div className={"mt-20 flex-wrap flex gap-5"}>
        <Image
          alt={"Lol"}
          src={Pic1}
          className={
            "w-16 aspect-square object-cover rounded-sm shadow-xl" +
            " shadow-slate-950/[0.2]"
          }
        ></Image>
        <Image
          alt={"Lol"}
          src={Pic2}
          className={
            "w-16 aspect-square object-cover rounded-sm shadow-xl" +
            " shadow-slate-950/[0.2]"
          }
        ></Image>
        <Image
          alt={"Lol"}
          src={Pic3}
          className={
            "w-16 aspect-square object-cover rounded-sm shadow-xl" +
            " shadow-slate-950/[0.2]"
          }
        ></Image>
        <Image
          alt={"Lol"}
          src={Pic4}
          className={
            "w-16 aspect-square object-cover rounded-sm shadow-xl" +
            " shadow-slate-950/[0.2]"
          }
        ></Image>
        <Image
          alt={"Lol"}
          src={Pic5}
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
          I have been trying to get better at all these, but the life of a
          stressed-out adult can only afford this much free time. I&apos;m
          confident that I&apos;ll continue to learn more skills and expand on
          my range. While you think about considering me for your project, let
          me treat you with some cool facts.
        </div>
      </div>
      <div className={"my-20 w-full max-w-screen-sm"}>
        <div className={"w-full my-10"}>
          <div className={"font-bold text-2xl"}>Fact #1</div>
          <div className={"font-semibold text-base leading-5 text-slate-600"}>
            I have been making casual webpages on Khan Academy since I was 12,
            but learnt of the popular frameworks and libraries like React only
            when I&apos;d turned 15.
          </div>
        </div>
        <div className={"w-full my-10"}>
          <div className={"font-bold text-2xl"}>Fact #2</div>
          <div className={"font-semibold text-base leading-5 text-slate-600"}>
            My Khan Academy webpages receive very positive feedback, winning a
            couple of official contests too, and that in turn motivated me to
            delve deeper into the web dev world. I&apos;d say it paid off.
          </div>
        </div>
        <div className={"w-full my-10"}>
          <div className={"font-bold text-2xl"}>Fact #3</div>
          <div className={"font-semibold text-base leading-5 text-slate-600"}>
            Australia is wider than the Moon.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
