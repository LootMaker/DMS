import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({ navigation }) => {

    return (
        <View style={styles.container}>            
            <View style={styles.content}>
                <Text style={styles.logo}>Deadmanswitch</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.primaryBtn} onPress={()=>navigation.navigate('Setting')} >
                    <Text style={styles.btnTitle}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sBtn} onPress={()=>navigation.navigate('Setting')} >
                    <Text style={styles.sBtnTitle}>Sign Up</Text>
                </TouchableOpacity>
            </View>
           

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20
    },
    logo: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        
    },
    primaryBtn: {
        height: 50,
        width: '100%',
        backgroundColor: '#3B82F7',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sBtn: {
        marginTop: 15,
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 1.5,
        borderColor: '#3B82F7',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sBtnTitle: {
        fontSize: 17,
        color: '#3B82F7',
        fontWeight: '600'
    },
    btnTitle: {
        fontSize: 17,
        color: 'white',
        fontWeight: '600'
    },
    btnContainer: {
        width: '100%',
        height: 116,
        marginBottom: 60
    }
})

export default Login