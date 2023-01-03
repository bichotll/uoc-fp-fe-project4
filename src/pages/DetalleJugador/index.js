import { useState, useEffect } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { ROUTES } from '../../router/routes';
import { AppBar } from '../../ui/AppBar';

export function DetalleJugador({
    navigation,
    route
}) {
   
    const data = route.params;
    console.log(route.params);  

    return (
        <View style={styles.container}>
            <AppBar
                title="Detalle jugador"
                isBackButtonShown
                isHomeButtonShown
                navigation={navigation}
            />

            <Button
                title="Ver multimedia >"
                onPress={() => navigation.navigate(ROUTES.CAROUSEL_JUGADOR)}
            />

            <View>
                <Image
                    style={styles.img}
                    source={{
                        uri: data.img
                    }}
                />
            </View>

            <View>
                <Text
                    style={styles.textFieldTitle}
                >
                    {'Nombre: '}
                </Text>
                <Text
                    style={styles.textFieldBody}
                >{data.nombre}</Text>
            </View>

            <View>
                <Text
                    style={styles.textFieldTitle}
                >
                    {'Estatura: '}
                </Text>
                <Text
                    style={styles.textFieldBody}
                >{data.altura} cm</Text>
            </View>

            <View>
                <Text
                    style={styles.textFieldTitle}
                >
                    {'Posición: '}
                </Text>
                <Text
                    style={styles.textFieldBody}
                >{data.posicion}</Text>
            </View>
            <View>
                <Text
                    style={styles.textFieldTitle}
                >
                    {'Edad: '}
                </Text>
                <Text
                    style={styles.textFieldBody}
                >{data.edad}</Text>
            </View>
            <View>
                <Text
                    style={styles.textFieldTitle}
                >
                    {'Puntos: '}
                </Text>
                <Text
                    style={styles.textFieldBody}
                >{data.puntos}</Text>
            </View>
            <View>
                <Text
                    style={styles.textFieldTitle}
                >
                    {'Descripción: '}
                </Text>
                <Text
                    style={styles.textFieldBody}
                >{data.descripcion}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // height: '200px',
        backgroundColor: '#fff',
    },
    img: {
        margin: 10,
        width: '100%',
        height: '200px',
    },
    textFieldTitle: {
        fontWeight: 'bold',
        paddingLeft: '5%',
        marginBottom: '1%'
    },
    textFieldBody: {
        paddingLeft: '10%'
    },
});
