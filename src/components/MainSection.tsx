import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

function MainSection() {
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
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=170&cDistance=3.9&cPolarAngle=70&cameraZoom=1&color1=%236A00FF&color2=%231B00FF&color3=%23FF5ECC&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0.9&positionZ=-0.3&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=45&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.2&uStrength=3.4&uTime=0&wireframe=false"
          />
        </ShaderGradientCanvas>
        <div className="z-10 absolute w-full h-full" style={{ background: 'linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0.65) 39%, rgba(13,13,13,1) 70%)' }}></div>
      </div>
    </section>
  );
}

export default MainSection;
