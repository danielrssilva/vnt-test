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
  "3 - 4 - 3",
  "4 - 1 - 3 - 2",
  "4 - 2 - 3 - 1",
  "4 - 2 - 4",
  "4 - 3 - 2 - 1",
  "5 - 3 - 2",
];

export const teams = [
  { id: 0, name: "Barcelona", description: "Barcelona Squad" },
  { id: 1, name: "Real Madrid", description: "Real Madrid Squad" },
  { id: 2, name: "Milan", description: "Squad Milan" },
  { id: 3, name: "Liverpool", description: "Liverpool Squad" },
  {
    id: 4,
    name: "Bayern Munich",
    description: "Bayern Munich Squad",
  },
  { id: 5, name: "Lazio", description: "Lazio Squad" },
];
export const highestTeams = [
  { id: 0, name: "Inter Milan", avg: "31.9" },
  { id: 1, name: "APOEL Nicosia", avg: "31.7" },
  { id: 2, name: "AC Milan", avg: "31.6" },
  { id: 3, name: "Besiktas JK", avg: "31.4" },
  { id: 4, name: "Olumpiacos Piraeus", avg: "31.3" },
];
export const lowestTeams = [
  { id: 0, name: "Zalgiris Vilnius", avg: "21.1" },
  { id: 1, name: "Arsenal FC", avg: "21.6" },
  { id: 2, name: "Ajax Amsterdam", avg: "22.0" },
  { id: 3, name: "FC Nantes", avg: "22.1" },
  { id: 4, name: "CSKA Moskow", avg: "22.5" },
];

export const teamInitializer = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
