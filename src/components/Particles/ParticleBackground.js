// src/components/Particles/ParticleBackground.js
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // load slim version for smaller bundle
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles container loaded:", container);
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          className="particles"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: true },
            particles: {
              number: { value: 70 },
              density :{
                enable : true,
                value_area : 800
              },
              size: { value: 1 },
              move: { enable: true },
              links: { enable: true, distance: 175, color: "#ffffff" },
              shape: { type: "circle" },
              opacity: { value: 0.2 },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "attract", // makes particles move toward cursor
                },
              },
              modes: {
                attract: {
                  distance: 200,   // how close the cursor needs to be to attract
                  duration: 1.0,   // how long the effect lasts
                  factor: 3,       // how strongly they are pulled
                },
              },
            }
           
          }}
        />
      )}
    </>
  );
};

export default ParticleBackground;
