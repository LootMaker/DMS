import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Header = ({title, navigation}) => {
    return (
        <View style={styles.container}>
            <Icon name='arrow-back-ios-new' size={24} color='#3B82F7' style={{marginLeft: 10}} 
                onPress={()=>navigation.goBack()}
            />
            <Text style={styles.title}>{title}</Text>
            <View style={{width: 34}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 42,        
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        color: '#1D1D1F', 
        fontSize: 17, 
        fontWeight: '600'
    }
})

export default Header