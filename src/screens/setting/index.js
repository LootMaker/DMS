import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Client from './components/Client';
import Detection from './components/Detection';
import Trigger from './components/Trigger';
import { SafeAreaView } from 'react-native-safe-area-context';

const Setting = ({navigation}) => {   

    return (
        <SafeAreaView>
            <Header title='Settings' navigation={navigation} /> 
            <View style = {styles.container} >
                <View style={styles.avatar}>
                    <Icon name='user-circle' size={92} color='#A1A6B3'/> 
                </View>       
                <Client />   
                <Detection />
                <Trigger />
            </View>           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 16,  
        marginTop: 20,               
    },  
    avatar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Setting