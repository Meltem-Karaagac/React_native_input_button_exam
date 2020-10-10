import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const MyButton = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => alert('Hello')}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
};
export default MyButton;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0277BD',
        borderRadius: 5,
        margin: 10,
        padding: 10,
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
});