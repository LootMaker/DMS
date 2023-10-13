import {
    View,
    Text,
    StyleSheet,    
} from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'

const Trigger = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TRIGGER</Text>
            <View style={styles.content}>
                <View style={styles.contentItem}>
                    <Text style={styles.label} >Certificate</Text>
                    <ToggleSwitch
                        isOn={true}
                        onColor="#34C759"
                        offColor="red"
                        size="medium"
                        onToggle={isOn => console.log("changed to : ", isOn)}
                    />
                </View>                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 26
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
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    label: {
        color: '#1D1D1F',
        fontSize: 17,
        fontWeight: '400',
    }
})

export default Trigger