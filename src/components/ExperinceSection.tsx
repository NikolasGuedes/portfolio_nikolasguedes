import { useRef } from "react";
import { Timeline } from "@/components/ui/timeline";
import img_2025_01 from "../img/experience/2025/01.jpeg";
import img_2025_02 from "../img/experience/2025/02.jpeg";
import img_2024_01 from "../img/experience/2024/01.jpeg";
import img_2024_02 from "../img/experience/2024/02.jpeg";
import img_2024_03 from "../img/experience/2024/03.jpeg";
import img_2023_01 from "../img/experience/2023/01.jpeg";
import img_2023_02 from "../img/experience/2023/02.jpeg";
import img_2023_03 from "../img/experience/2023/03.jpeg";
import img_2022_01 from "../img/experience/2022/01.jpeg";
import img_2022_02 from "../img/experience/2022/02.jpeg";

function AboutSection() {
  const ref1 = useRef(null);

  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I am currently working as a Frontend Developer intern at EXATA TECH,
            where I am gaining practical experience and enhancing my skills (new
            office).
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <img
                src={img_2025_01}
                alt="EXATA TECH"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
            </div>
            <div className="relative">
              <img
                src={img_2025_02}
                alt="EXATA TECH"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I began my journey at Exata Tech as a Frontend intern, where I had
            the opportunity to learn and grow professionally.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <img
                src={img_2024_01}
                alt="EXATA TECH"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
            </div>
            <div className="relative">
              <img
                src={img_2024_02}
                alt="EXATA TECH"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
            </div>
            <div className="relative">
              <img
                src={img_2024_03}
                alt="EXATA TECH"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            In the year I started my first internship through USCS, I had the
            opportunity to join HYPNOBOX, where I worked as an IT support
            technician.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <img
                src={img_2023_01}
                alt="EXATA TECH"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
            </div>
            <div className="relative">
              <img
                src={img_2023_02}
                alt="EXATA TECH"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
            </div>
            <div className="relative">
              <img
                src={img_2023_03}
                alt="EXATA TECH"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            The year I returned to studying programming independently, and also
            the year I launched my game OLI on Steam, which has over 6000
            downloads.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <img
                src={img_2022_01}
                alt="EXATA TECH"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
            </div>
            <div className="relative">
              <img
                src={img_2022_02}
                alt="EXATA TECH"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={ref1}
      className="my-28 w-full h-fit 3xl:h-screen container mx-auto px-10 md:px-20  flex justify-between items-center flex-col md:flex-row gap-16 md:gap-8"
    >
      <div className="h-fit w-full">
        <div className="w-full">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
