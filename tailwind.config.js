/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/images/group-women.jpg')",
        hero2: "url('../src/images/donation.jpg')",
        donate: "url('../src/images/donate.jpg')",
        about: "url('../src/images/about.jpg')",
        project: "url('../src/images/projects.jpg')",
        contact: "url('../src/images/contact.jpg')",
        news: "url('../src/images/news.jpg')",
        faq: "url('../src/images/QnA.jpg')",
      },
    },
  },
  plugins: [],
};
