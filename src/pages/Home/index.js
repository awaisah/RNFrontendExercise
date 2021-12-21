import React from 'react'
import { useEffect, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import {getAPIPage} from '../../utils'
import CharacterOverview from '../../components/Character/CharacterOverview'

const HomeScreen = ({navigation}) => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getAPIPage(1)
        .then((response) => {
            setCharacters(response.results)
        })
    }, [])

    const goToDetails = (character) => {
        navigation.navigate("Details", {
            character
        })
    }

    const renderItem = ({item}) => {
        return <CharacterOverview character={item} goTo={() => goToDetails(item)} />
    }

    return (
        <SafeAreaView>
            <FlatList
                data={characters}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default HomeScreen