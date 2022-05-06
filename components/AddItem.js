import { View, Button, TextInput, StyleSheet } from 'react-native'


export default function AddItem(props) {

    const { textItem, onHandlerChangeItem, addItem } = props;

    return (
        <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Item de lista'
                    style={styles.input}
                    onChangeText={onHandlerChangeItem}
                    value={textItem}
                />
                <Button title='ADD' onPress={addItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: 250,
        height: 40,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
})