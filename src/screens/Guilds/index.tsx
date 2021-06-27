import React from "react";
import { View, FlatList } from "react-native";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

type Props = {
  handleGuildSelet: (guildSelected: GuildProps) => void
}

export function Guilds({ handleGuildSelet }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'lendarios',
      icon: "null",
      owner: true
    },
    {
      id: '2',
      name: 'lendarios',
      icon: "null",
      owner: true
    },
    {
      id: '3',
      name: 'lendarios',
      icon: "null",
      owner: true
    },
    {
      id: '4',
      name: 'lendarios',
      icon: "null",
      owner: true
    },
    {
      id: '5',
      name: 'lendarios',
      icon: "null",
      owner: true
    },
    {
      id: '6',
      name: 'lendarios',
      icon: "null",
      owner: true
    },
    {
      id: '7',
      name: 'lendarios',
      icon: "null",
      owner: true
    },
    {
      id: '8',
      name: 'lendarios',
      icon: "null",
      owner: true
    }
  ]

  return(
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild  
            data={item}
            onPress={() => handleGuildSelet(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ListHeaderComponent={() => <ListDivider isCentered/>}
        ItemSeparatorComponent={() => <ListDivider isCentered/>}
        style={styles.guilds}
      />
    </View>
  )
}