import React, {  } from 'react';
import { 
    View,
    Text, 
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import Button from './Button'

const Pagination = ({current, total, setPage}) => {

    const nextPage = () => {
        setPage(current+1)
    }

    const previousPage = () => {
        setPage(current-1)
    }

    return (
        <View style={styles.container}>
            <Button 
                direction="back" 
                onPress={previousPage} 
                enabled={current !== 1}
            />
            <Text
                style={styles.text}
            >
                Page {current} of {total}
            </Text>
            <Button 
                direction="forward" 
                onPress={nextPage} 
                enabled={current !== total}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        padding: 10
    },
    text: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
    }
})

export default Pagination