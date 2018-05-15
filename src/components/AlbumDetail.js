import React from 'react';
import {View, Text} from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => {
    return (
        <View>
            <Text>{props.album.title}</Text>
        </View>
    )
};

export default AlbumDetail;