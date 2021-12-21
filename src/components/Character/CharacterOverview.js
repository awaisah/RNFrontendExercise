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

const ROW_HEIGHT = 50

const styles = StyleSheet.create({
    container: {
        height: ROW_HEIGHT,
        marginVertical: 10,
        paddingHorizontal: '5%',
        flex:1,
        flexDirection: 'row',
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        borderRadius: ROW_HEIGHT,
        overflow: 'hidden',
    },
    nameLabel: {
        alignSelf: 'center',
        marginLeft: 10,
        fontWeight: '700',
        fontSize: 16
    }
})

export default CharacterOverview;