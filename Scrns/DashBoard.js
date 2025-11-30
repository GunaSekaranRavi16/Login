import {Button,View,Text,StyleSheet,TouchableOpacity} from "react-native";
import {signOut} from 'firebase/auth';
import auth from '../service/firebaseAuth';

export default function DashBoard({navigation}) {
    
    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            console.log('User logged out');
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        })
        .catch((error) => {
            console.log('Logout error:', error.message);
            alert('Error: ' + error.message);
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>MyApp</Text>
            </View>
            
            <View style={styles.content}>
                <Text style={styles.welcomeText}>Welcome!</Text>
                <Text style={styles.subText}>You are successfully logged in</Text>
            </View>
            
            <View style={styles.footer}>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#007AFF',
        paddingVertical: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    welcomeText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    subText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    footer: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    logoutButton: {
        backgroundColor: '#FF3B30',
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 8,
        alignItems: 'center',
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});