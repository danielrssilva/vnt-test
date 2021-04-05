import React from "react";
import { Table, DescriptionRow } from "./styles";
import { Link } from "react-router-dom";

import { IoMdTrash, IoMdShare } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { removeTeam } from "../../services/session";

const TeamTable = ({ teams, handleDeleteTeam }) => {
  const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
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

    return { items: sortedItems, requestSort };
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
                    {item.description}
                    <div>
                      <button onClick={() => handleDeleteTeam(item.id)}>
                        <IoMdTrash />
                      </button>
                      <button>
                        <IoMdShare />
                      </button>
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
                        </button>
                      </Link>
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
