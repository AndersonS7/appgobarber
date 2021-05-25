import React from 'react';
import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
    Container,
    Title,
    BackToDignIn,
    BackToDignInText,
} from './styles';

const SignUp: React.FC = () => {
    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{flex: 1}}
                >
                    <Container>
                        <Image source={logoImg} />
                        <View>
                            <Title>Crie sua Conta</Title>
                        </View>

                        <Input name="name" icon="user" placeholder="Nome" />

                        <Input name="email" icon="mail" placeholder="E-mail" />

                        <Input name="password" icon="lock" placeholder="Senha" />

                        <Button>Entrar</Button>
                    </Container>
                </ScrollView>
                <BackToDignIn>
                    <Icon name="arrow-left" size={20} color="#fff" />
                    <BackToDignInText>Voltar para logon</BackToDignInText>
                </BackToDignIn>
            </KeyboardAvoidingView>
        </>
    );
};

export default SignUp;