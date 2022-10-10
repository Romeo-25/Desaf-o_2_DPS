import React from 'react';
import {ScrollView} from 'react-native';
import Carrousell from '../Components/carrousell';
import {Tile} from 'react-native-elements';

const peliculas = [
  {
    name: 'The Hateful Eight',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_.jpg',
    genre: 'Accion',
  },
  {
    name: 'Django Unchained',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_FMjpg_UX1000_.jpg',
    genre: 'Accion',
  },
  {
    name: 'Terminator 2: Judgment Day',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
    genre: 'Accion',
  },
  {
    name: 'Avatar',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_FMjpg_UX1000_.jpg',
    genre: 'Accion',
  },
  {
    name: "Pirates of the Caribbean: At World's End",
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_FMjpg_UX1000_.jpg',
    genre: 'Accion',
  },
  {
    name: 'Avengers: Infinity War',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg',
    genre: 'Accion',
  },
  {
    name: 'Fantastic Mr Fox',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOGUwYTU4NGEtNDM4MS00NDRjLTkwNmQtOTkwMWMyMjhmMjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
    genre: 'Comedia',
  },
  {
    name: 'Anchorman 2: The Legend Continues',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjE5ODk0NjQzNV5BMl5BanBnXkFtZTgwODk4MDA1MDE@._V1_FMjpg_UX1000_.jpg',
    genre: 'Comedia',
  },
  {
    name: 'Shrek',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    genre: 'Comedia',
  },
  {
    name: 'Scott Pilgrim vs. the World',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYWQ2OGIyZTgtZmY5MC00NzY3LTg5NDYtMjdkZjgxZmFhZTMzXkEyXkFqcGdeQXVyOTA3ODI3NDA@._V1_.jpg',
    genre: 'Comedia',
  },
  {
    name: 'Rango',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTc4NjEyODE1OV5BMl5BanBnXkFtZTcwMjYzNTkxNA@@._V1_FMjpg_UX1000_.jpg',
    genre: 'Comedia',
  },
  {
    name: 'Grown Ups 2',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNTZkZDhjZTEtZjA5MC00MDU2LTk3NDItNzA2YzQ4Y2Q5NjZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg',
    genre: 'Comedia',
  },
  {
    name: 'The Notebook',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_FMjpg_UX1000_.jpg',
    genre: 'Romance',
  },
  {
    name: 'About Time',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_FMjpg_UX1000_.jpg',
    genre: 'Romance',
  },
  {
    name: 'Silver Linings Playbook',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTM2MTI5NzA3MF5BMl5BanBnXkFtZTcwODExNTc0OA@@._V1_.jpg',
    genre: 'Romance',
  },
  {
    name: 'Titanic',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
    genre: 'Romance',
  },
  {
    name: 'The Fault in Our Stars',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNTVkMTFiZWItOTFkOC00YTc3LWFhYzQtZTg3NzAxZjJlNTAyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
    genre: 'Romance',
  },
  {
    name: 'Her',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_FMjpg_UX1000_.jpg',
    genre: 'Romance',
  },
];

const genres = Array.from(new Set(peliculas.map(s => s.genre)));

export default function Peliculas() {
  return (
    <>
      <ScrollView>
        <Tile
          imageSrc={{
            uri: 'https://www.whats-on-netflix.com/wp-content/uploads/2021/05/biggest-shows-and-movies-of-2021-on-netflix-according-to-the-top-10s-640x360.jpg',
          }}
          title="Peliculas Completas y de Calidad"
          featured
          caption="Calidad y Cantidad"
        />
        {genres.map((l, i) => (
          <Carrousell
            key={i}
            titulo={l}
            arreglo={peliculas.filter(a => a.genre === l)}
          />
        ))}
      </ScrollView>
    </>
  );
}
