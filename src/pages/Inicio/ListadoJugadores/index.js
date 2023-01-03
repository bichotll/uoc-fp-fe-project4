import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Jugador } from './Jugador';
import { db } from '../../../config';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';

async function getPlayers(db) {
    const playerDocs = await getDocs(collection(db, 'Jugadores'));
    return playerDocs.docs.map(doc => doc.data());
}

export function ListadoJugadores({
    navigation,
    
}) {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        getPlayers(db).then((playerList) =>{
            setPlayers(playerList);
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={ players }
                renderItem={({ item }) => (
                    <Jugador
                        navigation={navigation}
                        data={item}
                    />
                )}
                keyExtractor={item => item.nombre}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
