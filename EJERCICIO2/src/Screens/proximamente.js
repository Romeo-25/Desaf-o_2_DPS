import React from 'react';
import {ScrollView} from 'react-native';
import VideoGallery from '../Components/videogallery';

const proximamente = [
  {
    name: 'Breaking Bad',
    type: 'Serie',
    date: '7-10-22',
    video: 'https://www.youtube.com/embed/VaOt6tXyf2Y',
  },
  {
    name: 'El Camino',
    type: 'Pelicula',
    date: '7-10-22',
    video: 'https://www.youtube.com/embed/Bi3mMWw_cJ4',
  },
  {
    name: 'Queens Gambit',
    type: 'Serie',
    date: '7-10-21',
    video: 'https://www.youtube.com/embed/kwrQzTz16w4',
  },
  {
    name: 'The Lighthouse',
    type: 'Pelicula',
    date: '7-10-21',
    video: 'https://www.youtube.com/embed/Hyag7lR8CPA',
  },
  {
    name: 'Bojack Horseman',
    type: 'Serie',
    date: '7-10-21',
    video: 'https://www.youtube.com/embed/ZOGxOQxXjdo',
  },
  {
    name: 'The Matrix Resurrections',
    type: 'Pelicula',
    date: '7-10-21',
    video: 'https://www.youtube.com/embed/9ix7TUGVYIo',
  },
];

export default function Proximamente() {
  return (
    <ScrollView>
      {proximamente.map((u, i) => (
        <VideoGallery
          key={i}
          nombre={u.name}
          url={u.video}
          tipo={u.type}
          fecha={u.date}
        />
      ))}
    </ScrollView>
  );
}
