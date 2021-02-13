import React from "react";
import SPELLS from "./spells.json";

interface Spell {
  number: number;
  name: string;
  aspect: string;
  description: string;
}

export const App = (): React.ReactElement => {
  return (
    <div id="main">
      <h3>FFIXV Blue Mage Spells</h3>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Aspect</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {SPELLS.map((spell: Spell) => (
            <tr key={spell.number}>
              <td>{spell.number}</td>
              <td>{spell.name}</td>
              <td>{spell.aspect}</td>
              <td>{spell.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
