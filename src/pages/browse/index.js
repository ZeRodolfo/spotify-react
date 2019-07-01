import React from "react";

import { Container, Title, List, Playlist } from "./styles.js";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://i.ytimg.com/vi/Zj5Jg8xMa30/maxresdefault.jpg"
          alt="Playlist"
        />
        <strong>Melhores do Rock</strong>
        <p>Relaxe enquanto você programa ouvindo o melhor do Rock Mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://i.ytimg.com/vi/Zj5Jg8xMa30/maxresdefault.jpg"
          alt="Playlist"
        />
        <strong>Melhores do Rock</strong>
        <p>Relaxe enquanto você programa ouvindo o melhor do Rock Mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://i.ytimg.com/vi/Zj5Jg8xMa30/maxresdefault.jpg"
          alt="Playlist"
        />
        <strong>Melhores do Rock</strong>
        <p>Relaxe enquanto você programa ouvindo o melhor do Rock Mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://i.ytimg.com/vi/Zj5Jg8xMa30/maxresdefault.jpg"
          alt="Playlist"
        />
        <strong>Melhores do Rock</strong>
        <p>Relaxe enquanto você programa ouvindo o melhor do Rock Mundial!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
