import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import Foto_Perfil from "../img/foto_perfil.png";
import Github_Icon from "../img/github_icon.png";
import Linkdin_Icon from "../img/linkdin_icon.png";
import Instagran_Icon from "../img/instagram_icon.png";
import { Marquee } from "@/components/ui/marquee";
import Text_Marquee_Outline from "../img/text_marque_outline.png";
import Text_Marquee from "../img/text_marque.png";

import { ReactNode } from "react";

const ReviewCard = ({ body }: { body: ReactNode }) => {
  return (
    <figure className="text-[4em] font-black text-transparent text-white">
      <blockquote>{body}</blockquote>
    </figure>
  );
};

function MainSection() {
  const countries = [
    {
      Image: <img src={Text_Marquee_Outline} alt="Marquee Outline" />,
    },
  ];

  const firstRow = countries.slice(0, countries.length / 1);

  return (
    <section className="bg-[var(--Cinzabase)] w-full h-[100vh]">
      <div className="fixed z-50 right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center w-[4%] h-full gap-y-20">
        <img
          src={Github_Icon}
          alt="Github Icon"
          className="flex items-center size-min cursor-pointer"
        />
        <img
          src={Linkdin_Icon}
          alt="LinkedIn Icon"
          className="flex items-center size-min cursor-pointer"
        />
        <img
          src={Instagran_Icon}
          alt="Instagram Icon"
          className="flex items-center size-min cursor-pointer"
        />
      </div>

      <div className="relative w-full h-screen">
        <ShaderGradientCanvas
          style={{
            position: "absolute",
            top: 0,
          }}
        >
          <ShaderGradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.9&color1=%236A00FF&color2=%231D00FF&color3=%23FF5ECC&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.5&uStrength=0.3&uTime=0&wireframe=false"
          />
        </ShaderGradientCanvas>
        <div
          className="z-10 absolute w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0) 0%, rgba(13,13,13,0) 56%, rgba(13,13,13,0.9472163865546218) 86%, rgba(13,13,13,1) 100%)",
          }}
        >
          <div className="flex flex-col items-center justify-end w-full h-[100%] px-20">
            <div className="flex flex-row items-center justify-end w-full h-full">
              <div className="flex flex-col items-start justify-start h-full w-[40%] py-32 gap-y-6">
                <h1 className="font-black text-5xl text-justify uppercase">
                my name is:
                </h1>
               
                <p className="font-bold bg-white text-[var(--CorPrimaria)] p-2 text-3xl rounded-lg">
                  Nikolas Guedes da Silva
                </p>
                <p className="text-justify w-[66%] border-white rounded-2xl border-2 p-3">
                  and this is my portifolio. Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.
                </p>

                <div className="flex flex-col items-start justify-end h-full w-full">
                  <img
                    src={Foto_Perfil}
                    alt="logo exata"
                    className=" size-[18em] object-scale-down"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center h-full w-[60%]">
                <div className="w-[95%]">
                  <div className="bg-transparent  py-3 border-white rounded-2xl w-full h-full">
                    <div className="flex flex-col justify-center w-full h-full gap-y-10">
                      <Marquee className="[--duration:60s]">
                        {firstRow.map(() => (
                          <ReviewCard
                            body={
                              <img
                                src={Text_Marquee_Outline}
                                alt="Marquee Outline"
                                onMouseOver={(e) => {
                                  e.currentTarget.src = Text_Marquee;
                                }}
                                onMouseOut={(e) => {
                                  e.currentTarget.src = Text_Marquee_Outline;
                                }}
                              />
                            }
                          />
                        ))}
                      </Marquee>
                      <Marquee reverse className="[--duration:60s]">
                        {firstRow.map(() => (
                          <ReviewCard
                            body={
                              <img
                                src={Text_Marquee_Outline}
                                alt="Marquee Outline"
                                onMouseOver={(e) => {
                                  e.currentTarget.src = Text_Marquee;
                                }}
                                onMouseOut={(e) => {
                                  e.currentTarget.src = Text_Marquee_Outline;
                                }}
                              />
                            }
                          />
                        ))}
                      </Marquee>
                      <Marquee className="[--duration:60s]">
                        {firstRow.map(() => (
                          <ReviewCard
                            body={
                              <img
                                src={Text_Marquee_Outline}
                                alt="Marquee Outline"
                                onMouseOver={(e) => {
                                  e.currentTarget.src = Text_Marquee;
                                }}
                                onMouseOut={(e) => {
                                  e.currentTarget.src = Text_Marquee_Outline;
                                }}
                              />
                            }
                          />
                        ))}
                      </Marquee>
                      <Marquee reverse className="[--duration:60s]">
                        {firstRow.map(() => (
                          <ReviewCard
                            body={
                              <img
                                src={Text_Marquee_Outline}
                                alt="Marquee Outline"
                                onMouseOver={(e) => {
                                  e.currentTarget.src = Text_Marquee;
                                }}
                                onMouseOut={(e) => {
                                  e.currentTarget.src = Text_Marquee_Outline;
                                }}
                              />
                            }
                          />
                        ))}
                      </Marquee>
                      <Marquee className="[--duration:60s]">
                        {firstRow.map(() => (
                          <ReviewCard
                            body={
                              <img
                                src={Text_Marquee_Outline}
                                alt="Marquee Outline"
                                onMouseOver={(e) => {
                                  e.currentTarget.src = Text_Marquee;
                                }}
                                onMouseOut={(e) => {
                                  e.currentTarget.src = Text_Marquee_Outline;
                                }}
                              />
                            }
                          />
                        ))}
                      </Marquee>
                      <Marquee reverse className="[--duration:60s]">
                        {firstRow.map(() => (
                          <ReviewCard
                            body={
                              <img
                                src={Text_Marquee_Outline}
                                alt="Marquee Outline"
                                onMouseOver={(e) => {
                                  e.currentTarget.src = Text_Marquee;
                                }}
                                onMouseOut={(e) => {
                                  e.currentTarget.src = Text_Marquee_Outline;
                                }}
                              />
                            }
                          />
                        ))}
                      </Marquee>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
