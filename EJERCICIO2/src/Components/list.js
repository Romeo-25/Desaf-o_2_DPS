import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Avatar, ListItem, poster} from 'react-native-elements';

const List = ({titulo, arreglo}) => {
  return (
    <Card>
      <Card.Title>{titulo}</Card.Title>
      <Card.Divider />
      {arreglo.map((u, i) => {
        return (
          <ListItem key={i} bottomDivider>
            <Avatar
              containerStyle={{flex: 0.35, height: 90}}
              size="large"
              source={{uri: u.poster}}
            />
            <ListItem.Content>
              <ListItem.Title>{u.name}</ListItem.Title>
              <ListItem.Subtitle>Temporadas: {u.temporadas}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </Card>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  img: {
    width: 50,
    height: 80,
  },
});

export default List;
