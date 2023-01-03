import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DetalleJugador } from './pages/DetalleJugador';
import { Inicio } from './pages/Inicio';
import { JugadorCarousel } from './pages/CarouselJugador';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './router/routes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>

        <Stack.Navigator
          initialRouteName={ROUTES.INICIO}
        >
          <Stack.Screen
            name={ROUTES.INICIO}
            component={Inicio}
          />
          <Stack.Screen
            name={ROUTES.DETALLE_JUGADOR}
            component={DetalleJugador}
          />
          <Stack.Screen
            name={ROUTES.CAROUSEL_JUGADOR}
            component={JugadorCarousel}
          />
        </Stack.Navigator>

      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
