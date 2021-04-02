import React from "react";
import Card from "../../components/Card";
import TeamTable from "../../components/TeamTable";
import TeamAverageCard from "../../components/TeamAverageCard";
import PlayerPickRateCard from "../../components/PlayerPickRateCard";
import { Container } from "./styles";
const Dashboard = () => {
  const items = [
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
  const highestTeams = [
    { id: 0, name: "Inter Milan", avg: "31.9" },
    { id: 1, name: "APOEL Nicosia", avg: "31.7" },
    { id: 2, name: "AC Milan", avg: "31.6" },
    { id: 3, name: "Besiktas JK", avg: "31.4" },
    { id: 4, name: "Olumpiacos Piraeus", avg: "31.3" },
  ];
  const lowestTeams = [
    { id: 0, name: "Zalgiris Vilnius", avg: "21.1" },
    { id: 1, name: "Arsenal FC", avg: "21.6" },
    { id: 2, name: "Ajax Amsterdam", avg: "22.0" },
    { id: 3, name: "FC Nantes", avg: "22.1" },
    { id: 4, name: "CSKA Moskow", avg: "22.5" },
  ];
  return (
    <Container>
      <Card title={"My teams"} button>
        <TeamTable teams={items} />
      </Card>
      <div className="multiple-cards">
        <Card title={"Top 5"}>
          <div className="inner-card">
            <TeamAverageCard title={"Highest avg age"} teams={highestTeams} />
            <TeamAverageCard title={"Lowest avg age"} teams={lowestTeams} />
          </div>
        </Card>
        <PlayerPickRateCard />
      </div>
    </Container>
  );
};

export default Dashboard;
