import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IllustrationImg from '../../assets/illustration.png';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';

import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

export function SignIn() {
  const navigation = useNavigation();

  const { user } = useAuth();
  console.log(user)

  function handleSignIn() {
    navigation.navigate('Home');
  }


  return (
    <Background>
      <View style={styles.container}>
        <Image 
          source={IllustrationImg} 
          style={styles.image} 
          resizeMode="stretch" />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"} 
            e orgazine suas {"\n"} 
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {"\n"}
            favoritos com seus amigos
          </Text>

          <ButtonIcon 
            title="Entrar com Discord"
            onPress={handleSignIn}
            />
        </View>
      </View>
    </Background>
  );
  
}
