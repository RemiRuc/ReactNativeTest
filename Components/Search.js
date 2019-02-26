// Components/Search.js
import React from 'react'

import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native'
import FilmItem from '../Components/FilmItem'

import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

    constructor(props) {
        super(props)
        // Ici on va créer les propriétés de notre component custom Search
        this.state = { films: [] }
      }

    _loadFilms() {
        getFilmsFromApiWithSearchedText("star").then(data => {
            this._films = data.results
            this.forceUpdate()
        });
    }
    render() {
        return (
            // Ici on rend à l'écran les éléments graphiques de notre component custom Search
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Titre du film'/>
                <Button title='Rechercher' onPress={() => {() => this._loadFilms()}}/>
                <FlatList
                    data={this._films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
      },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
  })

export default Search