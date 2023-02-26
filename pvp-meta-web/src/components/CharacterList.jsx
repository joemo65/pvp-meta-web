import React from 'react';
import BlizzardApi from '../api/BlizzardApi';
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const warriorColumns = [
    {
        field: "character.id",
        headerName: "Id",
        width: 160
    },
    { field: "rank", headerName: "Rank", width: 150 },
    { field: "rating", headerName: "Rating", width: 150 },
]

export default class CharacterList extends React.Component {
  state = {
    characters: []
  }

  componentDidMount() {
    BlizzardApi.get()
      .then(res => {
        const characters = res.data.entries;
        this.setState({ characters });
      })
  }

  render() {
    return (
        <Box>
            {/* <DataGrid rows={this.state.characters} columns={warriorColumns} />*/}
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.characters.map(character => (
                        <tr key={character.character.id}>
                            <td>{character.rank}</td>
                            <td>{character.character.name}</td>
                            <td>{character.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Box>
    )
  }
}