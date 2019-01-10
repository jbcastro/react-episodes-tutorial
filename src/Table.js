import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Season</th>
        <th>EpNum</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.episodeData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.season}</td>
        <td>{row.epnum}</td>
        <td>
          <button onClick={() => props.removeEpisode(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { episodeData, removeEpisode } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody episodeData={episodeData} removeEpisode={removeEpisode} />
      </table>
    );
  }
}

export default Table;
