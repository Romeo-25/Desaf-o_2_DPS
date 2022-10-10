import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet, Poster} from 'react-native';
import {Card} from 'react-native-elements';

const Carrousell = ({titulo, arreglo}) => {
  return (
    <Card containerStyle={{padding: 0}}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>{titulo}</Text>
        <ScrollView horizontal>
          {arreglo.map((l, i) => {
            return (
              <View key={i}>
                <Image
                  style={styles.ciudad}
                  source={{
                    uri: l.poster,
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 275,
    height: 360,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listadoItem: {
    flexBasis: '49%',
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  },
});

export default Carrousell;
