// importar screens que no se usan en el menu lateral
import NewScreen from './screens/NewScreen';
import RegisterNewScreen from './screens/RegisterNewScreen';
import ViewNewScreen from './screens/ViewNewScreen';

// importar react navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// crear Stack
const Stack = createStackNavigator();

// exportar App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name="New" component={NewScreen} options={{ title: "Noticias" }}  />
        <Stack.Screen name="RegisterNew" component={RegisterNewScreen} options={{ title:"Registrar noticia" }} />
        <Stack.Screen name="ViewNew" component={ViewNewScreen} options={{ title: "Ver Noticia" }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}