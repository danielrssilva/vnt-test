import React, { useState } from "react";
import Card from "../../components/Card";
import TeamTable from "../../components/TeamTable";
import TeamAverageCard from "../../components/TeamAverageCard";
import PlayerPickRateCard from "../../components/PlayerPickRateCard";
import { getTeams, removeTeam } from "../../services/session";
import { Container } from "./styles";
const Dashboard = () => {
  const [teams, setTeams] = useState(JSON.parse(getTeams()) || []);
  const handleDeleteTeam = (id) => {
    removeTeam(id);
    setTeams(JSON.parse(getTeams()));
  };
  return (
    <Container>
      <Card title={"My teams"} button>
        <TeamTable teams={teams} handleDeleteTeam={handleDeleteTeam} />
      </Card>
      <div className="multiple-cards">
        <Card title={"Top 5"}>
          <div className="inner-card">
            <TeamAverageCard title={"Highest avg age"} teams={teams} />
            <TeamAverageCard title={"Lowest avg age"} teams={teams} />
          </div>
        </Card>
        <PlayerPickRateCard />
      </div>
    </Container>
  );
};

export default Dashboard;
