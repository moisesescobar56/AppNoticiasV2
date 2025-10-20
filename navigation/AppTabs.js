import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// importar screens de los tabs
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from  '../screens/RegisterScreen';

// crear tabs
const Tab = createBottomTabNavigator();

// exportar tabs
export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#0051CA', // color tabs
          tabBarInactiveTintColor: 'gray',

          // configurar icono segun name
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === 'Login') {
              iconName = focused ? 'key' : 'key-outline'; // LoginScreen Icon
            } else if (route.name === 'Register') {
              iconName = focused ? 'person' : 'person-outline'; // RegisterScreen Icon
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}  
    >
      <Tab.Screen name="Login" component={LoginScreen} options={{ title: "Iniciar sesión" }} />
      <Tab.Screen name="Register" component={RegisterScreen} options={{ title: "Registrarse" }} />
    </Tab.Navigator>
  );
}