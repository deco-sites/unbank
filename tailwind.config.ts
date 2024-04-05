import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    fontFamily: {
      "abel": ["Abel", "sans-serif"],
      "inter": ["Inter", "sans-serif"],
      "inter-tight": ["Inter Tight", "sans-serif"],
    },
    extend: {
      colors: {
        "gray-400": "#FAFAFA66",
      },
      animation: {
        sliding: "sliding 30s linear infinite",
        "spin-slow": "spin 10s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
