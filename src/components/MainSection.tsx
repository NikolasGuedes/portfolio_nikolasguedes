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
    <section className="bg-[var(--Cinzabase)] w-full h-[100vh] pt-16 px-20">
      <div className="flex flex-row items-center justify-center w-full h-full gap-6 py-10">
        <div className="flex flex-col items-center justify-start h-full w-[40%] gap-6">
          <div className="flex flex-row w-full h-[70%] gap-6">
            <div className="flex flex-col w-[80%] h-full border-2 border-white rounded-xl">
              <div className="w-full h-[5em] bg-white relative rounded-t-lg flex flex-col items-end justify-center px-5 gap-y-2">
              <img
                src={Foto_Perfil}
                alt="Foto Perfil"
                className="flex items-center absolute top-10 left-10 size-40 cursor-pointer"
              />
                <p className="text-black">Nikolas Guedes</p>
                <p className="text-black">Front end Developer</p>
              </div>
              
            </div>
            <div className="flex flex-col w-[20%] h-full border-2 items-center justify-center gap-y-20 border-white rounded-xl">
              <img
                src={Github_Icon}
                alt="Github Icon"
                className="flex items-center size-10 cursor-pointer"
              />
              <img
                src={Linkdin_Icon}
                alt="LinkedIn Icon"
                className="flex items-center size-10 cursor-pointer"
              />
              <img
                src={Instagran_Icon}
                alt="Instagram Icon"
                className="flex items-center size-10 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col w-full h-[30%] border-2 items-start justify-start p-5 border-white rounded-xl">
            <h2 className=" bg-white rounded-lg px-10 py-3 text-black mb-4">
              About me
            </h2>
            <p className="text-justify leading-loose">
              I've worked as a game developer and UI Designer, currently focused
              on improving my skills related to programming and creating
              captivating and intuitive interfaces.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center h-full w-[60%]">
          <div className="flex w-full h-full">
            <div className="relative w-full h-full">
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

              <div className="z-10 absolute w-full h-full">
                <div className="bg-transparent border-white border-2 rounded-xl w-full h-full">
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
    </section>
  );
}

export default MainSection;
