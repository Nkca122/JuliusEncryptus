import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particlesConfig = {
  particles: {
    number: {
      value: 75,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#ffffff", "#00aada", "#4af626"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.4,
      random: false,
      anim: {
        enable: false,
        speed: 5,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 8,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
    links: {
      enable: true,
      distance: 250,
      color: "#ffffff",
      opacity: 0.2,
      width: 1,
    },
  },
  interactivity: {
    detects_on: "window_interact",
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      onClick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 200,
        size: 10,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            ...particlesConfig,
            fullScreen: {
              enable: false,
            },
          }}
        />
      )}
    </>
  );
}

// 