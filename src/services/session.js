export const TEAMS = "@vnt-test/teams";

export const addTeam = (team) => {
  if (!getTeams()) localStorage.setItem(TEAMS, "[]");
  let teams = JSON.parse(getTeams());
  teams.push(team);
  localStorage.setItem(TEAMS, JSON.stringify(teams));
};

export const opdateTeam = (team) => {
  let teams = JSON.parse(getTeams());
  teams.forEach(({ id }, index) => {
    if (id === team.id) teams.splice(index, 1, team);
    return;
  });
  localStorage.setItem(TEAMS, JSON.stringify(teams));
};

export const removeTeam = (id) => {
  let teams = JSON.parse(getTeams());
  teams.splice(id, 1);
  localStorage.setItem(TEAMS, JSON.stringify(teams));
};

export const getTeams = () => {
  return localStorage.getItem(TEAMS);
};
