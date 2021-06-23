import React from 'react';


import { Platform, Text, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');

  return(
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <Background>
          <Header title="Agendar partida" />

          <Text style={[
            styles.label, 
            {
              marginLeft: 24,
              marginTop: 36,
              marginBottom: 18
            }
          ]}>Categorias</Text>
          <CategorySelect 
            categorySelected={category} 
            setCategory={setCategory}
            hasCheckBox 
            />

          <View style={styles.form}>
            <RectButton>
              <View style={styles.select}>
                {
                  // <View style={styles.image}/>
                  <GuildIcon />
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    Selecione um servidor
                  </Text>
                </View>

                <Feather 
                  name="chevron-right"
                  size={18}
                  color={theme.colors.highlight}
                  />
              </View>

            </RectButton>

            <View style={styles.field}>
                <View>
                  <Text style={styles.label}>
                    Dia e mês
                  </Text>
                  <View style={styles.column}>
                    <SmallInput maxLength={2}/>
                    <Text style={styles.divider}>/</Text>
                    <SmallInput maxLength={2}/>
                  </View>
                </View>
              
                <View>
                  <Text style={styles.label}>
                    Horário
                  </Text>
                  <View style={styles.column}>
                    <SmallInput maxLength={2}/>
                    <Text style={styles.divider}>:</Text>
                    <SmallInput maxLength={2}/>
                  </View>
                </View>
            </View>

            <View style={[styles.field, { marginBottom: 12}]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.secondLabel}>Max 100 caracteres</Text>
            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              /> 
            <View style={styles.footer}>
              <Button title="Agendar"/>
            </View>
          </View>

        </Background>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}