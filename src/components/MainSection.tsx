import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import Foto_Perfil from "../img/foto_perfil.png";
import Github_Icon from "../img/github_icon.png";
import Linkdin_Icon from "../img/linkdin_icon.png";
import Instagran_Icon from "../img/instagram_icon.png";
import { Marquee } from "@/components/ui/marquee";

const ReviewCard = ({ body }: { body: string }) => {
  return (
    <figure className="text-[4em] font-black text-transparent text-white">
      <blockquote>{body}</blockquote>
    </figure>
  );
};

function MainSection() {
  const countries = [
    {
      body: "FRONT END DEVELOPER - UI/UX DESIGNER - GAME DEVELOPER -",
    },
  ];

  const firstRow = countries.slice(0, countries.length / 1);
  const secondRow = countries.slice(0, countries.length / 1);

  return (
    <section className="bg-[var(--Cinzabase)] w-full h-[100vh]">
      <div className="relative w-full h-screen">
        <ShaderGradientCanvas
          style={{
            position: "absolute",
            top: 0,
          }}
        >
          <ShaderGradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=170&cDistance=3.6&cPolarAngle=70&cameraZoom=1&color1=%236A00FF&color2=%231B00FF&color3=%23FF5ECC&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=35&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=-0.4&positionY=0.6&positionZ=-0.3&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.2&uStrength=3.4&uTime=0&wireframe=false"
          />
        </ShaderGradientCanvas>
        <div
          className="z-10 absolute w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0.65) 39%, rgba(13,13,13,1) 70%)",
          }}
        >
          <div className="flex flex-col items-center justify-end w-full h-[100%] px-20">
            <div className="flex flex-row items-center justify-end w-full h-[90%]">
              <div className="flex flex-col items-start justify-start h-full w-[30%] py-32 gap-y-8">
                <h1 className="font-black text-5xl text-justify">
                  HELLO WORLD <span className="font-black">|</span>
                </h1>
                <p className="text-justify">
                  Hi my name is{" "}
                  <span className="font-bold bg-[var(--CorSecundaria)] p-1 text-xl rounded-lg">
                    Nikolas Guedes da Silva
                  </span>{" "}
                  and this is my portifolio.
                </p>
                <p className="text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <img
                    src={Foto_Perfil}
                    alt="logo exata"
                    className="flex items-center size-[18em]"
                  />
                </div>
              </div>

              <div className="flex flex-row items-center justify-end h-full w-[70%]">
                <div className="w-[95%] h-[76%]">
                  <div className="bg-transparent rounded-2xl w-full h-full">
                    <div className="flex flex-col justify-center w-full h-full">
                      <Marquee className="[--duration:60s]">
                        {firstRow.map((review) => (
                          <ReviewCard {...review} />
                        ))}
                      </Marquee>
                      <Marquee reverse className="[--duration:60s]">
                        {secondRow.map((review) => (
                          <ReviewCard {...review} />
                        ))}
                      </Marquee>
                      <Marquee className="[--duration:60s]">
                        {firstRow.map((review) => (
                          <ReviewCard {...review} />
                        ))}
                      </Marquee>
                      <Marquee reverse className="[--duration:60s]">
                        {secondRow.map((review) => (
                          <ReviewCard {...review} />
                        ))}
                      </Marquee>
                      <Marquee className="[--duration:60s]">
                        {firstRow.map((review) => (
                          <ReviewCard {...review} />
                        ))}
                      </Marquee>
                      <Marquee reverse className="[--duration:60s]">
                        {secondRow.map((review) => (
                          <ReviewCard {...review} />
                        ))}
                      </Marquee>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full h-[10%]">
              <div className="flex flex-row items-start justify-start h-full w-ful gap-x-8">
                <img
                  src={Github_Icon}
                  alt="logo exata"
                  className="flex items-center size-min ml-20 cursor-pointer"
                />
                <img
                  src={Linkdin_Icon}
                  alt="logo exata"
                  className="flex items-center size-min ml-20 cursor-pointer"
                />
                <img
                  src={Instagran_Icon}
                  alt="logo exata"
                  className="flex items-center size-min ml-20 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
