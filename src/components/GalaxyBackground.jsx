import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function GalaxyBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="galaxy"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#0d0d0d" },
        particles: {
          number: {
            value: 400,
            density: {
              enable: true,
              area: 1000,
            },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          size: {
            value: 2,
            random: true,
          },
          opacity: {
            value: 1,
            random: true,
            animation: {
              enable: true,
              speed: 1.5,
              minimumValue: 0.3,
              sync: false,
            },
          },
          move: {
            enable: false,
          },
        },
        emitters: [
          {
            direction: "bottom-right",
            rate: {
              delay: 5,
              quantity: 1,
            },
            size: {
              width: 0,
              height: 0,
            },
            position: {
              x: 0,
              y: 0,
            },
          },
        ],
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
