import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ROUTES } from '../../../../router/routes';

export function Jugador({
    navigation,
    data
}) {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.DETALLE_JUGADOR, {...data})}
        >
            <View
                style={styles.container}
            >
                <View style={styles.mainContent}>
                    <Image
                        style={styles.img}
                        source={{
                            uri: data.img
                        }}
                    />
                    <View>
                        <Text
                            style={styles.title}
                        >
                            {data.nombre}
                        </Text>
                        <Text>{data.posicion}</Text>
                    </View>
                </View>
                <Text>{data.score}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#eee',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    mainContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontVariant: ['small-caps'],
        fontWeight: 'bold',
    },
    img: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: '15px',
    }
});
