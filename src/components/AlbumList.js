import React, {Component} from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import {fetch} from 'fetch';
import AlbumDetail from './AlbumDetail';



class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response.json())
            .then((responsData) => {
                this.setState({albums: responsData});
            });
    }

    renderAlbums() {
        return this.state.albums.map(album => 
        <AlbumDetail key = {album.title} album = {album}/>
    )
    }

    render() {
        return(
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>

        )
    }

};



export default AlbumList;