import MenuLogo from "./extensions/menu_logo.png";

export default {
  config: {
    locales: ["zh", "en"],
    tutorials: false,
    notifications: false,
    theme: {
      colors: {
        primary100: "#1A659E",
        primary200: "#004E89",
        primary500: "#F3F7F0",
        primary600: "#F18F01", // link color
        primary700: "#F3F7F0", // secondary panel text color
        danger700: "#A93F55",
      },
    },
    menu: {
      logo: MenuLogo,
    },
    auth: {
      logo: MenuLogo,
    },
  },
  bootstrap() {},
};
