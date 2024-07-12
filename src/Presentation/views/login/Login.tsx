import React, {useState} from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp} from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles'


export const LoginScreen = () => {

    const { email, password, onChange} = useViewModel(); 

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();


    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/chef.jpg')}
                style={styles.imageBackground} />

            <View style={styles.logoContainer}>
                <Image style={styles.logoImage} source={require('../../../../assets/logo.png')} />
                <Text style={styles.logoText}>FOOD</Text>
            </View>

            <View style={styles.form} >
                <Text style={styles.formTitle}>LOGIN</Text>

                <CustomTextInput 
                image={require('../../../../assets/email.png')}
                placeholder='Email'
                keyboardtype='email-address'
                value={email}
                property='email'
                onChangeText={onChange}

                />

<CustomTextInput 
                image={require('../../../../assets/password.png')}
                placeholder='Password'
                keyboardtype='default'
                secureTextEntry={true}
                value={password}
                property='password'
                onChangeText={onChange}

                />


                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='LOGIN' onPress={() => {
                        console.log('Email: ' + email);
                        console.log('password: ' + password);

                    }} />
                </View>

                <View style={styles.formRegister}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.formRegisterText}>Register</Text>
                    </TouchableOpacity>
                   

                </View>



            </View>

        </View>
    );
}

