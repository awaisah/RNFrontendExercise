import React, {  } from 'react';
import { 
    View,
    Text, 
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

const Button = ({direction, onPress, enabled}) => {
    return (
        <View style={enabled ? styles.container : styles.containerDisabled}>
            <TouchableOpacity disabled={!enabled} onPress={onPress}>
                <Text style={styles.arrowLabel}>{direction === "back"? "<" : ">"}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        aspectRatio: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        borderRadius: 15
    },
    containerDisabled: {
        aspectRatio: 1,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        borderRadius: 15
    },
    arrowLabel: {
        fontSize: 30,
        textAlign: 'center',
    },
})

export default Button