import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import Foto_Perfil from "../img/foto_perfil.png";
import Github_Icon from "../img/github_icon.png";
import Linkdin_Icon from "../img/linkdin_icon.png";
import Instagran_Icon from "../img/instagram_icon.png";
import { Marquee } from "@/components/ui/marquee";
import Text_Marquee_Outline from "../img/text_marque_outline.png";
import Text_Marquee from "../img/text_marque.png";
import Tunel_Grid from "../img/tunel_grid.png";
import Green_Dot from "../img/green_dot.png";

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
      <div className="fixed z-50 right-0 top-1/2 transform bg-black border border-white -translate-y-1/2 flex flex-col items-center justify-center w-[4%] h-full gap-y-20">
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

      <div className="flex flex-col items-center justify-center w-full h-[80%]">
        <div className="flex flex-row items-center justify-start w-full h-full">
          <div className="flex flex-col items-center justify-start h-full w-[40%]  border border-white ">
            <div className="bg-white w-[100%] h-[15%] mt-16 flex items-center px-10 justify-between">
              <div className="flex items-center gap-x-2">
                <img
                  src={Green_Dot}
                  alt="green dot"
                  className=" size-5 object-contain"
                />
                <p className="text-black font-bold text-3xl">MY CHAT</p>
              </div>
              <img
                src={Foto_Perfil}
                alt="Foto de Perfil"
                className=" size-16 object-contain"
              />
            </div>
            <div className="w-[100%] h-full flex flex-col items-start px-10 justify-between">
              <div className="w-[100%] h-full flex flex-col gap-y-5 mt-5">
                <div className="flex flex-row items-center justify-start">
                  <p className="font-light text-lg border p-2 border-white rounded-xl">
                    Hi everyone!
                  </p>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <p className="font-light text-lg border p-2 border-white rounded-xl">
                    my name is{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--CorPrimaria)] to-[var(--CorSecundaria)] font-black text-xl">
                      Nikolas Guedes
                    </span>{" "}
                    and this is my portifolio.
                  </p>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <p className="font-light text-lg border p-2 border-white rounded-xl">
                    Hope you liked =)
                  </p>
                </div>
                {/* <div className="flex flex-row items-center justify-end">
                  <p className="ffont-light text-lg border p-2 border-white rounded-xl">
                    Lets talk!
                  </p>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <p className="font-light text-lg border p-2 border-white rounded-xl">
                   Awsome!
                  </p>
                </div>  */}
              </div>
              <div className="flex flex-row items-center justify-center my-5 w-full">
                <p className="font-black text-lg border px-8 py-3 mb-2 text-black bg-white rounded-xl cursor-pointer">
                  CONTACT ME
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center h-full w-[60%]">
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
                <div className="bg-transparent border-white border w-full h-full">
                  <div className="flex flex-col justify-end w-full h-full gap-y-10">
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
      <div className="flex flex-row h-[20%] items-start justify-start w-full border border-white">
        <div className="w-[20%] h-full">
          <div className="relative w-full h-full border-r-2 border-white">
            <ShaderGradientCanvas
              style={{
                position: "absolute",
                top: 0,
              }}
            >
              <ShaderGradient
                control="query"
                urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=14.6&color1=%236A00FF&color2=%231D00FF&color3=%23FF5ECC&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=80&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false&zoomOut=true"
              />
            </ShaderGradientCanvas>

            <div className="z-10 absolute w-full h-full"></div>
            <div className="-z-40 absolute flex justify-center w-full h-full">
              <img
                src={Tunel_Grid}
                alt="tunel grid"
                className="size-full cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="flex flex-col items-end justify-center h-full pr-22 text-[var(--CinzaEscuro)] text-xs p-3">
            <div className="flex w-72 flex-col items-start justify-end gap-y-3">
              <p>TERMINAL</p>
              <div className="flex w-72 flex-col items-start justify-end gap-y-3">
                <p>Loading stuff_</p>
                <p>Probably broke something</p>
                <p>checking for bugs_</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
