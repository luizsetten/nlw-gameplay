import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { Load } from "../../components/Load";
import { api } from "../../services/api";

import { styles } from "./styles";

type Props = {
  handleGuildSelet: (guildSelected: GuildProps) => void
}

export function Guilds({ handleGuildSelet }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    try{
      const response = await api.get('/users/@me/guilds');

      setGuilds(response.data);
    } catch (error) {
      console.log("Deu ruim");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGuilds();
  },[]);

  return(
    <View style={styles.container}>
      {
        loading ? <Load /> : 
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
      }
    </View>
  )
}