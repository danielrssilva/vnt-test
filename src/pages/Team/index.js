import React, { useState } from "react";
import Card from "../../components/Card";
import FormationCard from "../../components/FormationCard";
import PlayerCard from "../../components/PlayerCard";
import TagsInput from "../../components/TagsInput";
import { Container, Title, Column, Row, Select } from "./styles";

const Team = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [renderSearchResults, setRenderSearchResults] = useState(false);
  const players = [
    { id: 0, name: "Cristiano Ronaldo", age: "32", nacionality: "Portugal" },
    { id: 1, name: "Ronaldo Luiz de Alves", age: "28", nacionality: "Brazil" },
  ];
  const [formation, setFormation] = useState("3 - 4 - 3");
  const handleSearch = (searchValue) => {
    let value;
    if (searchValue !== undefined)
      value = searchValue.toLowerCase().replace(/\s+/g, " ").trim();
    const searchResult = players.filter((player) => {
      if (player.name.toLowerCase().includes(value)) return player;
      if (player.age.toLowerCase().includes(value)) return player;
      if (player.nacionality.toLowerCase().includes(value)) return player;
    });
    setSearchResults(searchResult);
    if (value !== undefined || value === "") setRenderSearchResults(true);
    else setRenderSearchResults(false);
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

  function renderCommunities() {
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
        <section>
          <Column>
            <Row>
              <div>
                <label className="input-label">
                  Formation
                  <Select
                    name="formations"
                    id="formations"
                    onChange={({ target }) => setFormation(target.value)}
                  >
                    <option value="3 - 4 - 3">3 - 4 - 3</option>
                    <option value="4 - 1 - 3 - 2">4 - 1 - 3 - 2</option>
                    <option value="4 - 2 - 3 - 1">4 - 2 - 3 - 1</option>
                    <option value="4 - 2 - 4">4 - 2 - 4</option>
                    <option value="4 - 3 - 2 - 1">4 - 3 - 2 - 1</option>
                    <option value="5 - 3 - 2">5 - 3 - 2</option>
                  </Select>
                </label>
                <FormationCard formation={formation} />
                <button>Save</button>
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
                {!renderSearchResults && renderCommunities()}
                {renderSearchResults && renderResults()}
              </div>
            </Row>
          </Column>
        </section>
      </Card>
    </Container>
  );
};

export default Team;
