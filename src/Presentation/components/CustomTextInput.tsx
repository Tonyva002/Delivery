import React from 'react'
import { Image, KeyboardType, StyleSheet, TextInput, View } from 'react-native'

interface Props {
    image: any,
    placeholder: string,
    value: string,
    keyboardtype: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onChangeText: (property: string, value: any) => void

}

export const CustomTextInput = ({
    image,
    placeholder,
    value,
    keyboardtype,
    secureTextEntry = false,
    property,
    onChangeText
}: Props) => {
  return (
    <View style={styles.formInput}>
    <Image style={styles.formIcon} source={image} />
    <TextInput style={styles.formTextInput}
        placeholder={placeholder}
        keyboardType={keyboardtype} 
        value={value}
        onChangeText={text => onChangeText(property, text)}
        secureTextEntry={secureTextEntry}/>
</View>
  )
}

const styles = StyleSheet.create({
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 5

    },

    formInput: {
        flexDirection: 'row',
        marginTop: 25

    },


    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 16
    },
});
