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
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />
    </View>
  )
}