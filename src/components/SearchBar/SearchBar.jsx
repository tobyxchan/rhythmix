import { useState } from 'react';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';

export default function SearchBar({ accessToken, setAlbums }) {
  const [searchInput, setSearchInput] = useState('');

    // Search Function
  async function search() {
    console.log(`Search for ${searchInput}`);

    // Get request using search to get the Artist ID
    let searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    }
    let artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
      .then(response => response.json())
      // Return the Artist ID
      .then(data => { return data.artists.items[0].id });
    // With Artist ID, grab all albums from artist
    let returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=AU&limit=50', searchParameters)
      .then(response => response.json())
      .then(data => {
        console.log(data.items);
        setAlbums(data.items);
      });
    // Display albums to the user
  };

  return (
    <Container>
      <InputGroup className="mb-3" size="lg">
        <FormControl 
          placeholder="Search for an Artist..."
          type="input"
          onKeyDown={event => {
            if (event.key === "Enter") {
              search();
            }
          }}
          onChange={event => setSearchInput(event.target.value)}
        />
        <Button onClick={ search }>Search</Button>
      </InputGroup>
    </Container>
  )
}
