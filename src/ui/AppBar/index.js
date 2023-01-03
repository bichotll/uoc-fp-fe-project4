import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import { ROUTES } from '../../router/routes';
import { mainBackgroundColor } from '../../theme';

export function AppBar({
    title = '',
    isBackButtonShown = false,
    isHomeButtonShown = false,
    navigation,
}) {
    return (
        <View style={styles.container}>
            {isBackButtonShown && (
                <Button
                    title="⬅️"
                    onPress={() => navigation.goBack()}
                />
            )}
            <Text style={styles.text}>
                {title}
            </Text>
            {isHomeButtonShown && (
                <Button
                    title="🏠"
                    onPress={() => navigation.navigate(ROUTES.INICIO)}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'white',
        width: '100%',
        height: '100px',
        backgroundColor: mainBackgroundColor,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
});
