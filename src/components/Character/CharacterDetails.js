import React, { Component } from 'react';
import { 
    Text, 
    TouchableOpacity,

} from 'react-native';

const CharacterDetails = ({character}) => {

    return (
        <TouchableOpacity 
            // onPress={goTo}
        >
            <Text>{character.name}</Text>
        </TouchableOpacity>
    )
}

export default CharacterDetails;