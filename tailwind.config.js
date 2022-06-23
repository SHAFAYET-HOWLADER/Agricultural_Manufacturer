module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#3b3038",
            secondary: "#504054",
            accent: "#846f7f",
            neutral: "#cda5b9",
            optional: "#e0c4da",
          },
        },

        "dark",
        "cupcake",
      ],
    },
    fontFamily: {
      paragraph: ['Akshar', 'sans-serif'],
      heading: ['Lato', 'sans-serif'],
      title: ['Oswald', 'sans-serif'],
    }
  },
  plugins: [require("daisyui")],
}
