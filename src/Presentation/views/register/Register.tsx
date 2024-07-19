import React, { useEffect } from 'react'
import { Image, ScrollView, Text, ToastAndroid, View } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton';
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles'


export const RegisterScreen = () => {

    const { name, lastname, email, phone, password, confirmPassword, errorMessage, onChange, register } = useViewModel();


    useEffect(() => {
       if(errorMessage != ''){
        ToastAndroid.show(errorMessage, ToastAndroid.LONG);
       }

    }, [errorMessage])


    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/chef.jpg')}
                style={styles.imageBackground} />

            <View style={styles.logoContainer}>
                <Image style={styles.logoImage} source={require('../../../../assets/user_image.png')} />
                <Text style={styles.logoText}>SELECT AN IMAGE</Text>
            </View>

            <View style={styles.form} >

                <ScrollView>

                    <Text style={styles.formTitle}>Register</Text>

                    <CustomTextInput
                        placeholder='Name'
                        keyboardtype='default'
                        image={require('../../../../assets/user.png')}
                        property='name'
                        onChangeText={onChange}
                        value={name} />

                    <CustomTextInput
                        placeholder='Last Name'
                        keyboardtype='default'
                        image={require('../../../../assets/my_user.png')}
                        property='lastname'
                        onChangeText={onChange}
                        value={lastname} />


                    <CustomTextInput
                        placeholder='Email'
                        keyboardtype='email-address'
                        image={require('../../../../assets/email.png')}
                        property='email'
                        onChangeText={onChange}
                        value={email} />


                    <CustomTextInput
                        placeholder='Phone'
                        keyboardtype='numeric'
                        image={require('../../../../assets/phone.png')}
                        property='phone'
                        onChangeText={onChange}
                        value={phone} />


                    <CustomTextInput
                        placeholder='Password'
                        keyboardtype='default'
                        image={require('../../../../assets/password.png')}
                        property='password'
                        onChangeText={onChange}
                        value={password}
                        secureTextEntry={true} />


                    <CustomTextInput
                        placeholder='Confirm Password'
                        keyboardtype='default'
                        image={require('../../../../assets/confirm_password.png')}
                        property='confirmPassword'
                        onChangeText={onChange}
                        value={confirmPassword}
                        secureTextEntry={true} />


                    <View style={{ marginTop: 30 }}>
                        <RoundedButton text='SAVE' onPress={() => register()} />
                    </View>


                </ScrollView>

            </View>

        </View>
    );
}


