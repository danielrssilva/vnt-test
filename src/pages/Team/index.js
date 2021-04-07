import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import FormationCard from "../../components/FormationCard";
import PlayerCard from "../../components/PlayerCard";
import TagsInput from "../../components/TagsInput";
import { Container, Title, Column, Row, Select } from "./styles";
import api from "../../services/api";
import { addTeam, opdateTeam } from "../../services/session";
import { formations, teamInitializer } from "../../constants/constants";
import { validateFormFields } from "../../validation/fieldValidation";
import SuccessBanner from "../../components/SuccessBanner";
import { useHistory } from "react-router-dom";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const Team = ({ location }) => {
  const teamProps = location?.teamProps;
  const history = useHistory();
  const [team, setTeam] = useState({
    tags: [],
    players: teamInitializer,
    formation: "3 - 4 - 3",
  });
  const [searchResults, setSearchResults] = useState([]);
  const [renderSuccessBanner, setRenderSuccessBanner] = useState(false);
  const [renderSearchResults, setRenderSearchResults] = useState(false);
  const [players, setPlayers] = useState([]);
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [formation, setFormation] = useState(
    `${teamProps?.formation || "3 - 4 - 3"}`
  );

  useEffect(() => {
    async function loadPlayers() {
      let response = await api.get(
        `?met=Teams&APIkey=e61f2853d572d1915d8f02bffae0e6e5f07a1530ab5213c890604f752051f6e5&teamId=2616`
      );
      setPlayers(response.data.result[0].players);
    }
    loadPlayers();
    async function loadTeam() {
      if (teamProps?.players) {
        setTeam({
          tags: [],
          players: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
          ...teamProps,
        });
        setTeamPlayers(teamProps.players);
      } else {
        setTeam({
          tags: [],
          players: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
          formation: "3 - 4 - 3",
        });
      }
    }
    if (teamProps?.players) {
      teamProps.players.forEach((player) => {
        if (player?.id)
          try {
            setTimeout(() => {
              document.getElementById(`player-${player.id}`).style.display =
                "none";
            }, 100);
          } catch (err) {}
      });
    }

    loadTeam();
  }, [teamProps]);

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

  const handleChange = (value, { name }) => {
    let newTeam = {};
    if (name !== "tags")
      newTeam = { ...team, [name]: value.replace(/\s+/g, " ") };
    else newTeam = { ...team, [name]: value };
    document.getElementById(`${name}-div`)?.classList.remove("error");
    setTeam(newTeam);
  };

  const handleFormationChange = (value, { name }) => {
    const newTeam = {
      ...team,
      players: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    };
    let cards = document.getElementsByClassName("player-card");
    for (let i = 0; i < players.length; i++) {
      cards[i].style.display = "inline-block";
    }
    setTeam(newTeam);
    setTeamPlayers([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
    handleChange(value, { name });
    setFormation(value);
  };

  const inputKeyDown = ({ key }) => {
    if (key === "Enter") handleSubmit();
  };
  var ID = function () {
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  const handleSubmit = () => {
    let newTeam = {};
    if (teamProps?.players) newTeam = { ...teamProps, ...team };
    else newTeam = { ...team, id: ID() };
    let sum = 0;
    let playerCount = 0;
    newTeam.players?.forEach(({ age }) => {
      if (age) {
        playerCount++;
        sum = sum + parseInt(age);
      }
    });

    if (sum === 0 && playerCount === 0) newTeam.avg = "-";
    else newTeam.avg = (sum / playerCount).toFixed(1);
    newTeam.name = newTeam.name?.trim();
    let errors = validateFormFields(team);
    if (errors.length > 0) {
      errors.forEach((error) => {
        document.getElementById(error)?.classList.add("error");
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (teamProps?.players) opdateTeam(newTeam);
    else addTeam(newTeam);

    setRenderSuccessBanner(true);
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      document.body.style.overflow = "auto";
      setRenderSuccessBanner(false);
      history.push("/");
    }, 1000);
  };

  const renderResults = () => {
    if (searchResults.length !== 0) {
      const playersComponent = searchResults.map((player) => (
        <PlayerCard className="player-card" player={player} key={player.id} />
      ));
      return playersComponent;
    }
    return (
      <div>
        <Title>No player was found matching this criteria</Title>
      </div>
    );
  };

  const renderPlayers = () => {
    if (players) {
      const playersComponent = players.map((player) => (
        <PlayerCard
          player={player}
          key={player.player_key}
          id={player.player_key}
        />
      ));
      return playersComponent;
    }
    return (
      <div>
        <Title>Searching...</Title>
      </div>
    );
  };

  const addPlayer = (player) => {
    let newPlayers = team.players;
    if (newPlayers[player.position]?.name) {
      setTimeout(
        () =>
          (document.getElementById(
            `player-${newPlayers[player.position].id}`
          ).style.display = "inline-block"),
        1
      );
      try {
        document.getElementById(
          `player-${newPlayers[player.position].id}`
        ).style.display = "inline-block";
      } catch (err) {}
    }
    newPlayers.splice(player.position, 1, player);
    setTeam({ ...team, players: newPlayers });
    setTimeout(
      () =>
        (document.getElementById(`player-${player.id}`).style.display = "none"),
      1
    );
  };

  const removePlayer = (player) => {
    let newPlayers = team.players;
    newPlayers.splice(player.position, 1, {});
    setTeam({ ...team, players: newPlayers });
    if (player?.id)
      setTimeout(
        () =>
          (document.getElementById(`player-${player.id}`).style.display =
            "inline-block"),
        1
      );
  };
  return (
    <>
      {renderSuccessBanner && <SuccessBanner />}
      <Container>
        <Card title={"Create your team"}>
          <Title>Team information</Title>
          <section>
            <Column>
              <Row>
                <div id="name-div" data-testid="name-div">
                  <label className="input-label" htmlFor="name">
                    Team name
                  </label>
                  <input
                    id="name"
                    data-testid="input-name"
                    type="text"
                    placeholder="Insert team name"
                    value={team.name}
                    name="name"
                    onChange={({ target }) =>
                      handleChange(target.value, target)
                    }
                    onKeyDown={(e) => inputKeyDown(e)}
                  />
                </div>
                <div id="website-div" data-testid="website-div">
                  <label className="input-label" htmlFor="website">
                    Team website
                  </label>
                  <input
                    id="website"
                    data-testid="input-website"
                    type="text"
                    placeholder="http://myteam.com"
                    value={team.website?.trim()}
                    name="website"
                    onChange={({ target }) =>
                      handleChange(target.value, target)
                    }
                    onKeyDown={(e) => inputKeyDown(e)}
                  />
                </div>
              </Row>
              <Row>
                <div id="description-div">
                  <label className="input-label" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    id="description"
                    data-testid="area-description"
                    value={team.description}
                    name="description"
                    onChange={({ target }) =>
                      handleChange(target.value, target)
                    }
                  />
                </div>
                <div>
                  <div
                    className="tags-div"
                    id="type-div"
                    data-testid="type-div"
                  >
                    <label className="input-label">Team type</label>
                    <div className="radio-div">
                      <input
                        type="radio"
                        data-testid="radio-real"
                        id="real"
                        name="type"
                        value="real"
                        onChange={(e) => handleChange(e.target.value, e.target)}
                        checked={team.type === "real"}
                      ></input>
                      <label htmlFor="real">Real</label>
                      <input
                        type="radio"
                        id="fantasy"
                        data-testid="radio-fantasy"
                        name="type"
                        value="fantasy"
                        onChange={(e) => handleChange(e.target.value, e.target)}
                        checked={team.type === "fantasy"}
                      ></input>
                      <label htmlFor="fantasy">Fantasy</label>
                    </div>
                  </div>
                  <div>
                    <label className="input-label">Tags</label>
                    <TagsInput
                      teamTags={team.tags}
                      updateTeamTags={handleChange}
                    />
                  </div>
                </div>
              </Row>
            </Column>
          </section>
          <Title>Configure squad</Title>
          <DndProvider backend={HTML5Backend}>
            <section>
              <Column>
                <Row className="formation-div">
                  <div>
                    <label className="input-label">
                      Formation
                      <Select
                        name="formation"
                        id="formation"
                        onChange={({ target }) =>
                          handleFormationChange(target.value, target)
                        }
                      >
                        <option hidden value={formation}>
                          {formation}
                        </option>
                        {formations.map((formation) => {
                          return (
                            <option value={formation} key={formation}>
                              {formation}
                            </option>
                          );
                        })}
                      </Select>
                    </label>
                    <FormationCard
                      formation={formation}
                      players={teamProps?.players ? teamPlayers : []}
                      addPlayer={addPlayer}
                      removePlayer={removePlayer}
                    />
                    <button
                      onClick={() => handleSubmit()}
                      data-testid="button-submit"
                    >
                      Save
                    </button>
                  </div>
                  <div>
                    <label className="input-label" htmlFor="players">
                      Search Players
                    </label>
                    <input
                      id="players"
                      type="text"
                      placeholder="Insert player name"
                      onChange={({ target }) => handleSearch(target.value)}
                    />
                    <div className="player-list">
                      {!renderSearchResults && renderPlayers()}
                      {renderSearchResults && renderResults()}
                    </div>
                  </div>
                </Row>
              </Column>
            </section>
          </DndProvider>
        </Card>
      </Container>
    </>
  );
};

export default Team;
