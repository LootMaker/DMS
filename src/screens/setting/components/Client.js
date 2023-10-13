import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
const Client = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CLIENT</Text>
            <View style={styles.content}>
                <View style={[styles.contentItem, {borderBottomWidth: 1, borderColor: '#F3F3F3'}]}>
                    <Text style={styles.label} >Identity</Text>
                    <Icon name='arrow-forward-ios' size={17} color='#CCCCCE' style={{marginRight: 10}} />
                </View>
                <View style={[styles.contentItem]}>
                    <Text style={styles.label} >Security</Text>
                    <Icon name='arrow-forward-ios' size={17} color='#CCCCCE' style={{marginRight: 10}} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10
    },
    title: {
        color: '#1D1D1F',
        marginLeft: 14,
        fontSize: 13,
        fontWeight: '400'
    },
    content: {        
        width: '100%',
        borderRadius: 10,
        paddingLeft: 16,
        backgroundColor: 'white',
        marginTop: 8
    },
    contentItem: {
        width: '100%',
        height: 44,        
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',        
    },
    label: {
        color: '#1D1D1F',
        fontSize: 17,
        fontWeight: '400',        
    }
})

export default Client