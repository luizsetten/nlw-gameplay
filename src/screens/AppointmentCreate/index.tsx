import React, { useState } from 'react';

import { Platform, Text, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { CategorySelect } from '../../components/CategorySelect';
import { GuildProps } from '../../components/Guild';
import { SmallInput } from '../../components/SmallInput';
import { Background } from '../../components/Background';
import { ModalView } from '../../components/ModalView';
import { GuildIcon } from '../../components/GuildIcon';
import { TextArea } from '../../components/TextArea';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Guilds } from '../Guilds';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelected: GuildProps) {
    setGuild(guildSelected);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  return(
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Background>
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
              setCategory={handleCategorySelect}
              hasCheckBox 
              />

            <View style={styles.form}>
              <RectButton onPress={handleOpenGuilds}>
                <View style={styles.select}>
                  {
                    guild.icon 
                    ? <GuildIcon /> 
                    : <View style={styles.image}/>
                  }

                  <View style={styles.selectBody}>
                    <Text style={styles.label}>
                      {
                      guild.name
                      ? guild.name 
                      : 'Selecione um servidor'
                      }
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
                    <Text style={[styles.label, { marginBottom: 12}]}>
                      Dia e mês
                    </Text>
                    <View style={styles.column}>
                      <SmallInput maxLength={2}/>
                      <Text style={styles.divider}>/</Text>
                      <SmallInput maxLength={2}/>
                    </View>
                  </View>
                
                  <View>
                    <Text style={[styles.label, { marginBottom: 12}]}>
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
      </Background>

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelet={handleGuildSelect}/>
      </ModalView>
    </KeyboardAvoidingView>
  )
}