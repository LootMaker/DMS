import {
    View,
    Text,
    StyleSheet,    
} from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'


const Detection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PRESENCE DETECTION</Text>
            <View style={styles.content}>
                <View style={[styles.contentItem, { borderBottomWidth: 1, borderColor: '#F3F3F3' }]}>
                    <Text style={styles.label} >Phone</Text>
                    <ToggleSwitch
                        isOn={true}
                        onColor="#34C759"
                        offColor="red"
                        size="medium"
                        onToggle={isOn => console.log("changed to : ", isOn)}
                    />
                </View>
                <View style={[styles.contentItem, { borderBottomWidth: 1, borderColor: '#F3F3F3' }]}>
                    <Text style={styles.label} >Call</Text>
                    <ToggleSwitch
                        isOn={false}
                        onColor="#34C759"
                        offColor="#E9E9EA"
                        size="medium"
                        onToggle={isOn => console.log("changed to : ", isOn)}
                    />
                </View>
                <View style={[styles.contentItem, { borderBottomWidth: 1, borderColor: '#F3F3F3' }]}>
                    <Text style={styles.label} >Email</Text>
                    <ToggleSwitch
                        isOn={true}
                        onColor="#34C759"
                        offColor="gray"
                        size="medium"
                        onToggle={isOn => console.log("changed to : ", isOn)}
                    />
                </View>
                <View style={[styles.contentItem]}>
                    <Text style={styles.label} >SMS</Text>
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

export default Detection