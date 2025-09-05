// Sithija Kalhara

particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": "#00d4ff" },
    "shape": { "type": "polygon" },
    "opacity": { "value": 0.6 },
    "size": { "value": 3 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00d4ff",
      "opacity": 0.5,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",   // ✅ make sure it's detecting on canvas
    "events": {
      "onhover": { "enable": true, "mode": "grab" },   // ✅ mouse hover active
      "onclick": { "enable": true, "mode": "push" },   // ✅ click effect
      "resize": true
    },
    "modes": {
      "grab": { 
        "distance": 200, 
        "line_linked": { "opacity": 0.9 }   // glow stronger when near mouse
      },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});
