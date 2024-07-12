import React, {useState} from 'react'
import { Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { RoundedButton } from '../../Presentation/components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp} from '@react-navigation/stack'
import { RootStackParamList } from '../../../App';


export const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

                <View style={styles.formInput}>
                    <Image style={styles.formIcon} source={require('../../../../assets/email.png')} />
                    <TextInput style={styles.formTextInput}
                        placeholder='Email'
                        keyboardType='email-address' 
                        value={email}
                        onChangeText={text => setEmail(text)}/>
                </View>

                <View style={styles.formInput}>
                    <Image style={styles.formIcon} source={require('../../../../assets/password.png')} />
                    <TextInput style={styles.formTextInput}
                        placeholder='Password'
                        keyboardType='default'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={text => setPassword(text)}/>
                </View>

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },

    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%'
    },

    form: {
        width: '100%',
        height: '41%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30

    },

    formTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },


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

    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20

    },
    formRegisterText: {
        fontStyle: 'italic',
        color: 'orange',
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        fontWeight: 'bold',
        marginLeft: 10

    },

    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%'
    },
    logoImage: {
        width: 100,
        height: 100
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    },


});
