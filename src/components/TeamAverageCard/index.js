import React from "react";
import { Container, TeamsCard, TeamRow } from "./styles";

const TeamAverageCard = ({ title, teams }) => {
  return (
    <Container>
      <p>{title}</p>
      <TeamsCard>
        {teams?.map((team) => {
          return (
            <TeamRow highlight={team.avg === "31.9" || team.avg === "21.6"}>
              <div>{team.name}</div>
              <div className="team-avg">{team.avg}</div>
            </TeamRow>
          );
        })}
      </TeamsCard>
    </Container>
  );
};

export default TeamAverageCard;
