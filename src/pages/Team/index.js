import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import FormationCard from "../../components/FormationCard";
import PlayerCard from "../../components/PlayerCard";
import TagsInput from "../../components/TagsInput";
import { Container, Title, Column, Row, Select } from "./styles";
import api from "../../services/api";
import { formations } from "../../constants/constants";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const Team = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [renderSearchResults, setRenderSearchResults] = useState(false);
  const [players, setPlayers] = useState([]);
  const [formation, setFormation] = useState("3 - 4 - 3");

  useEffect(() => {
    async function loadPlayers() {
      let response = await api.get(``);
      setPlayers(response.data.result[0].players);
    }
    loadPlayers();
  }, []);

  const handleSearch = (searchValue) => {
    let value;
    if (searchValue !== undefined)
      value = searchValue.toLowerCase().replace(/\s+/g, " ").trim();
    const searchResult = players.filter((player) => {
      if (player.player_name.toLowerCase().includes(value)) return player;
      if (player.player_age.toLowerCase().includes(value)) return player;
      if (player.player_country.toLowerCase().includes(value)) return player;
    });
    setSearchResults(searchResult);
    if (value !== undefined || value === "") setRenderSearchResults(true);
    else setRenderSearchResults(false);
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  function renderResults() {
    if (searchResults.length !== 0) {
      const playersComponent = searchResults.map((player) => (
        <PlayerCard className="player-card" player={player} key={player.id} />
      ));
      return playersComponent;
    }
    return (
      <div>
        <Title>No player was found matching this criteria.</Title>
      </div>
    );
  }

  function renderPlayers() {
    if (players) {
      const playersComponent = players.map((player) => (
        <PlayerCard className="player-card" player={player} key={player.id} />
      ));
      return playersComponent;
    }
    return (
      <div>
        <Title>Searching...</Title>
      </div>
    );
  }
  return (
    <Container>
      <Card title={"Create your team"}>
        <Title>Team information</Title>
        <section>
          <Column>
            <Row>
              <div>
                <label className="input-label" for="name">
                  Team name
                </label>
                <input id="name" type="text" placeholder="Insert team name" />
              </div>
              <div>
                <label className="input-label" for="website">
                  Team website
                </label>
                <input
                  id="website"
                  type="text"
                  placeholder="http://myteam.com"
                />
              </div>
            </Row>
            <Row>
              <div>
                <label className="input-label" for="description">
                  Description
                </label>
                <textarea id="description" name="w3review" />
              </div>
              <div>
                <div className="tags-div">
                  <label className="input-label">Team type</label>
                  <div className="radio-div">
                    <input
                      type="radio"
                      id="real"
                      name="type"
                      value="real"
                    ></input>
                    <label for="real">Real</label>
                    <input
                      type="radio"
                      id="fantasy"
                      name="type"
                      value="fantasy"
                    ></input>
                    <label for="fantasy">Fantasy</label>
                  </div>
                </div>
                <div>
                  <label className="input-label">Tags</label>
                  <TagsInput></TagsInput>
                </div>
              </div>
            </Row>
          </Column>
        </section>
        <Title>Configure squad</Title>
        <DndProvider backend={HTML5Backend}>
          <section>
            <Column>
              <Row className="fomation-div">
                <div>
                  <label className="input-label">
                    Formation
                    <Select
                      name="formations"
                      id="formations"
                      onChange={({ target }) => setFormation(target.value)}
                    >
                      {formations.map((formation) => {
                        return <option value={formation} key={formation}>{formation}</option>;
                      })}
                    </Select>
                  </label>
                  <FormationCard formation={formation} />
                  <button onClick={() => handleSubmit()}>Save</button>
                </div>
                <div className="player-list">
                  <label className="input-label" for="players">
                    Search Players
                  </label>
                  <input
                    id="players"
                    type="text"
                    placeholder="Insert player name"
                    onChange={({ target }) => handleSearch(target.value)}
                  />
                  {!renderSearchResults && renderPlayers()}
                  {renderSearchResults && renderResults()}
                </div>
              </Row>
            </Column>
          </section>
        </DndProvider>
      </Card>
    </Container>
  );
};

export default Team;
