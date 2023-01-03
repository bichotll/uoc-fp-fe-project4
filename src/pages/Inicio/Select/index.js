import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { mainBackgroundColor } from '../../../theme';

export function Select() {
    const [selectedTeam, setSelectedTeam] = useState();

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedTeam}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedTeam(itemValue)
                }
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'white',
        width: '100%',
        height: '100px',
        backgroundColor: mainBackgroundColor,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
});
