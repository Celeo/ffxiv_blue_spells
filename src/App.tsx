import React, { useState } from "react";
import SPELLS from "./spells.json";

interface Spell {
  number: number;
  name: string;
  aspect: string;
  description: string;
  affinity: Array<string>;
}

export const App = (): React.ReactElement => {
  const [filters, setFilters] = useState(["Damage", "Tank", "Heal"]);

  const toggleFilter = (name: string): void => {
    if (filters.includes(name)) {
      setFilters(filters.filter((n) => n !== name));
    } else {
      setFilters([...filters, name]);
    }
  };

  const filtered = (): Array<Spell> => {
    return SPELLS.filter((spell: Spell) => {
      for (const affinity of spell.affinity) {
        if (filters.includes(affinity)) {
          return true;
        }
      }
      return false;
    });
  };

  return (
    <div id="main">
      <h3>FFIXV Blue Mage Spells</h3>
      <div className="filter_bar">
        <div className="filter">
          <label>
            <input
              name="damage"
              type="checkbox"
              checked={filters.includes("Damage")}
              onChange={(): void => {
                toggleFilter("Damage");
              }}
            />
            <span>Damage</span>
          </label>
        </div>
        <div className="filter">
          <label>
            <input
              name="tank"
              type="checkbox"
              checked={filters.includes("Tank")}
              onChange={(): void => {
                toggleFilter("Tank");
              }}
            />
            <span>Tank</span>
          </label>
        </div>
        <div className="filter">
          <label>
            <input
              name="heal"
              type="checkbox"
              checked={filters.includes("Heal")}
              onChange={(): void => {
                toggleFilter("Heal");
              }}
            />
            <span>Heal</span>
          </label>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Aspect</th>
            <th>Description</th>
            <th>Affinity</th>
          </tr>
        </thead>
        <tbody>
          {filtered().map((spell: Spell) => (
            <tr key={spell.number}>
              <td>{spell.number}</td>
              <td>{spell.name}</td>
              <td>{spell.aspect}</td>
              <td>{spell.description}</td>
              <td>{spell.affinity.join("/")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
