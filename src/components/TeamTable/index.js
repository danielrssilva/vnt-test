import React, { useState, useMemo } from "react";
import { Table, DescriptionRow, ButtonTooltip } from "./styles";
import { Link } from "react-router-dom";

import { IoMdTrash, IoMdShare } from "react-icons/io";
import { MdEdit } from "react-icons/md";

const TeamTable = ({ teams, handleDeleteTeam }) => {
  const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
      let direction = "ascending";
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === "ascending"
      ) {
        direction = "descending";
      }
      setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
  };
  const { items, requestSort, sortConfig } = useSortableData(teams);
  const getClassNamesFor = (name) => {
    return sortConfig?.key === name ? sortConfig.direction : undefined;
  };
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th
              onClick={() => requestSort("name")}
              className={getClassNamesFor("name")}
            >
              Name
              <div />
            </th>
            <th
              onClick={() => requestSort("description")}
              className={getClassNamesFor("description")}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => {
            return (
              <tr className="team-row" key={item.id}>
                <td>{item.name}</td>
                <td>
                  <DescriptionRow>
                    <div>{item.description}</div>
                    <div className="buttons-row">
                      <div>
                        <button onClick={() => handleDeleteTeam(item.id)}>
                          <IoMdTrash />
                          <ButtonTooltip className="tooltip">
                            Delete
                          </ButtonTooltip>
                        </button>
                      </div>
                      <div>
                        <button className="disabled" disabled>
                          <IoMdShare />
                          <ButtonTooltip className="tooltip">
                            Share
                          </ButtonTooltip>
                        </button>
                      </div>
                      <div>
                        <Link
                          to={{
                            pathname: "/team",
                            teamProps: {
                              ...item,
                            },
                          }}
                        >
                          <button>
                            <MdEdit />
                            <ButtonTooltip className="tooltip">
                              Edit
                            </ButtonTooltip>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </DescriptionRow>
                </td>
              </tr>
            );
          })}
          {teams?.length === 0 && (
            <tr>
              <td>No teams were found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TeamTable;
