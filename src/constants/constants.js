export const theme = {
  colors: {
    primary: "#E71B7B",
    secondary: "#611F96",
    tertiary: "#34313F",
    border: "#eeeeee",
  },
  gradients: {
    primaryToSecondaryRight: "linear-gradient(to right, #E71B7B, #611F96)",
    buttonGradient: "linear-gradient(45deg, #803382, #aa397a)",
    primaryToSecondaryBottom: "linear-gradient(to bottom, #BC3E7C, #611F96)",
    primaryToSecondaryBottomRight: "linear-gradient(145deg, #AF3A7B, #722B80)",
  },
  fonts: ["Roboto", "sans-serif"],
};

export const formations = [
  "3 - 2 - 2 - 3",
  "3 - 2 - 3 - 1",
  "3 - 4 - 3",
  "3 - 5 - 2",
  "4 - 3 - 1 - 1",
  "4 - 3 - 2",
  "4 - 4 - 2",
  "4 - 5 - 1",
  "5 - 4 - 1",
];

export const teamInitializer = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

export const getPlayerInitials = (name) => {
  if (name) {
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
    let initials = [...name?.matchAll(rgx)] || [];
    initials = (
      (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
    ).toUpperCase();
    return initials;
  }
  return;
};
