module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(67, 56, 201, 1)",
        secondary: "rgba(79, 70, 229, 1)",
        tertiary: "rgba(17, 34, 29, 1)",
        quaternary: "rgba(229, 231, 235, 1)",
      },
      backgroundImage: {
        "grad-red": "#ff0000",
        grad: "radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0, transparent 50%),  radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0, transparent 50%),  radial-gradient(at 0% 50%, hsla(355,85%,93%,1) 0, transparent 50%),  radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0, transparent 50%),  radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0, transparent 50%),  radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0, transparent 50%),  radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0, transparent 50%)",
      },
    },
  },
  plugins: [],
};
