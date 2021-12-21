import React, { Component } from 'react';
import { 
    View,
    Text, 
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

const CharacterOverview = ({character, goTo}) => {

    return (
        <TouchableOpacity 
            onPress={goTo}
        >
            <View 
                style={styles.container}
            >
                <Image
                    source={{ 
                        uri: character.image
                    }} 
                    style={styles.image}
                />
                <Text   
                    style={styles.nameLabel}
                >
                    {character.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        marginVertical: 10,
        paddingHorizontal: 10,
        flex:1,
        flexDirection: 'row',
    },
    image: {
        height: '100%',
        aspectRatio: 1
    },
    nameLabel: {
        alignSelf: 'center',
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default CharacterOverview;