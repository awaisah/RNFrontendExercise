import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    SafeAreaView
} from 'react-native'

const CharacterDetailsScreen = ({route}) => {

    const {character} = route.params
    
    return (
        <SafeAreaView style={{height: '100%'}}>
            <ScrollView style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ 
                        uri: character.image
                    }}
                />
                <TextInfo title="Status" value={character.status} />
                <TextInfo title="Species" value={character.species} />
                <TextInfo title="Gender" value={character.gender} />
                <TextInfo title="Origin" value={character.origin.name} />
                <TextInfo title="Last Known Location" value={character.location.name} />
                <TextInfo title="# of Episodes" value={character.episode.length} />
            </ScrollView>
        </SafeAreaView>
    )
}

const TextInfo = ({title, value}) => {
    return (
        <View style={styles.textInfoContainer}>
            <Text style={styles.textInfoTitle}>{title}:</Text>
            <Text style={styles.textInfoValue}>{value}</Text>
        </View>
    )
}

export default CharacterDetailsScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        alignContent: 'center'
    },
    image: {
        width: 200,
        aspectRatio: 1,
        borderRadius: 100,
        alignSelf: 'center'
    },
    textInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 5
    },
    textInfoTitle: {
        flex: 1,
        marginRight: 10,
        fontSize: 20
    },
    textInfoValue: {
        flex: 2,
        marginRight: 10,
        fontSize: 20,
        color: 'gray',
        alignSelf: 'flex-end'
    }
})