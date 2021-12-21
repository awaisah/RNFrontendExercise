import React from 'react'
import {
    Text
} from 'react-native'
import CharacterDetails from '../../components/Character/CharacterDetails'

const CharacterDetailsScreen = ({navigation, route}) => {

    const {character} = route.params
    
    return (
        <CharacterDetails character={character} />
    )
}

export default CharacterDetailsScreen