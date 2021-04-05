import React, { useState, useEffect } from "react";
import { Container, TeamsCard, TeamRow } from "./styles";

const TeamAverageCard = ({ title, teams }) => {
  const [lowestAvg, setLowestAvg] = useState(10000);
  const [highestAvg, setHighestAvg] = useState(0);
  useEffect(() => {
    if (!teams[0]?.avg) return;
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
        {teams?.map(({ id, avg, name }, index) => {
          if (index > 4) return;
          return (
            <TeamRow
              key={id}
              highlight={avg == lowestAvg || avg == highestAvg}
            >
              <div>{name}</div>
              <div className="team-avg">{avg}</div>
            </TeamRow>
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
