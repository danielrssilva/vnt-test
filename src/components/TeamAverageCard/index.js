import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, TeamsCard, TeamRow } from "./styles";

const TeamAverageCard = ({ title, teams }) => {
  const [lowestAvg, setLowestAvg] = useState(10000);
  const [highestAvg, setHighestAvg] = useState(0);
  useEffect(() => {
    if (title === "Highest avg age") {
      teams.forEach(({ avg }) => {
        if (parseFloat(avg) > highestAvg) setHighestAvg(avg);
      });
    } else {
      teams.forEach(({ avg }) => {
        if (parseFloat(avg) < lowestAvg) setLowestAvg(avg);
      });
    }
  });
  return (
    <Container>
      <p>{title}</p>
      <TeamsCard>
        {teams?.map((team, index) => {
          if (index > 4) return;
          return (
            <Link
              to={{
                pathname: "/team",
                teamProps: {
                  ...team,
                },
              }}
            >
              <TeamRow
                key={team.id}
                highlight={team.avg == lowestAvg || team.avg == highestAvg}
              >
                <div>{team.name}</div>
                <div className="team-avg">{team.avg}</div>
              </TeamRow>
            </Link>
          );
        })}
        {teams?.length === 0 && (
          <TeamRow>
            <div>No teams were found</div>
          </TeamRow>
        )}
      </TeamsCard>
    </Container>
  );
};

export default TeamAverageCard;
