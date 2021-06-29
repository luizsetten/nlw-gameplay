import React from 'react';
import { Image, View } from 'react-native';

import DiscordSvg from '../../assets/discord.svg';

import { styles } from './styles';

const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
}

export function GuildIcon({ guildId, iconId}: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
  
  //'data:image/png;base64,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';
  
  return(
    <View style={styles.container}>
      {
        iconId ?
        <Image 
        source={{ uri }}
        style={styles.image}
        resizeMode="cover"
        /> : 
        <DiscordSvg
          width={40}
          height={40}
        />
      }
    </View>
  );
}