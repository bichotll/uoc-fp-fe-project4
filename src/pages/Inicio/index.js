import { StyleSheet, Text, View, FlatList } from 'react-native';
import { AppBar } from '../../ui/AppBar';
import { ListadoJugadores } from './ListadoJugadores';
import { Jugador } from './ListadoJugadores/Jugador';
import { Select } from './Select';

export function Inicio({ navigation }) {
    return (
        <View style={styles.container}>
            <AppBar
                title="Listado equipo"
                isBackButtonShown={false}
                isHomeButtonShown={false}
                navigation={navigation}
            />
            <Select />
            <View>
                <ListadoJugadores
                    navigation={navigation}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
    },
});
