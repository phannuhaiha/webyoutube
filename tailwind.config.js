module.exports = {
  darkMode: 'class', // Enable dark mode using a class
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkCustom: '#393E46', // Ví dụ: màu nền tùy chỉnh cho dark mode
        customLight: '#2D3137',
        
      },
    },
  },
  plugins: [],
};
