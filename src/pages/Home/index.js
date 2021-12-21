import React from 'react'
import { useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
    SafeAreaView
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import {getAPIPage} from '../../utils'
import CharacterOverview from '../../components/Character/CharacterOverview'
import Pagination from '../../components/Pagination'

const HomeScreen = ({navigation}) => {
    const [characters, setCharacters] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        getAPIPage(currentPage)
        .then((response) => {
            setTotalPages(response.info.pages)
            setCharacters(response.results)
        })
    }, [currentPage])

    const goToDetails = (character) => {
        navigation.navigate("Details", {
            character
        })
    }

    const renderItem = ({item}) => {
        return <CharacterOverview character={item} goTo={() => goToDetails(item)} />
    }

    const separator = () => {
        return <View style={{height: 1, flex: 1, marginLeft: '5%', backgroundColor: 'gray'}} />
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList
                style={styles.list}
                data={characters}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={ separator }
            />
            <Pagination current={currentPage} total={totalPages} setPage={setCurrentPage} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    list: {
        
    }
})

export default HomeScreen