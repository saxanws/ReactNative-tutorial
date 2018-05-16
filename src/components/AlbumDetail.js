import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './cardSection';

const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image, image} = album;
    const {thumbnailStyle, headerContentStyle, imageContainerStyle, headerTextStyle, coverAlbumStyle} = styles;
    return (

        <Card>
            <CardSection>
                <View style={imageContainerStyle}>
                    <Image style={ thumbnailStyle }
                           source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={ headerContentStyle }>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={coverAlbumStyle}
                       source={{uri: image}}
                />
            </CardSection>
        </Card>
    )
};

const styles = {
    headerContentStyle: {
        flexDirection:"column",
        justifyContent: "space-around"
    },

    headerTextStyle: {
        fontSize: 18
    },

    thumbnailStyle: {
        width: 50,
        height: 50
    },

    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    coverAlbumStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail;