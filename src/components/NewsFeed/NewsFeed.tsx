import React, {useRef, useState} from 'react';
import {Image, FlatList, Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import News from '../../models/News';
import styles from './styles';

export default function NewsFeed({news}: {news: News[]}) {
  const feedRef = useRef<any>();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const selectPrevious = () => {
    const newIndex = selectedIndex === 0 ? news.length - 1 : selectedIndex - 1;
    feedRef.current?.scrollToIndex({animated: true, index: newIndex});
    setSelectedIndex(newIndex);
  };
  const selectNext = () => {
    const newIndex = selectedIndex === news.length - 1 ? 0 : selectedIndex + 1;
    feedRef.current?.scrollToIndex({animated: true, index: newIndex});
    setSelectedIndex(newIndex);
  };
  const renderNews = ({item}: {item: News}) => (
    <View style={styles.card}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.titlePanel}>
        {item.title.split(' ').map((s, i) => (
          <Text key={`item-${item.newsId}-${i}`} style={styles.title}>
            {s}
          </Text>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={feedRef}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled={true}
        data={news}
        renderItem={renderNews}
        keyExtractor={item => `${item.newsId}`}
      />
      <View style={styles.pagerPanel}>
        <Pressable onPress={selectPrevious} style={styles.pagerButton}>
          <Icon name="arrowleft" size={30} color="white" />
        </Pressable>
        <Pressable onPress={selectNext} style={styles.pagerButton}>
          <Icon name="arrowright" size={30} color="white" />
        </Pressable>
      </View>
    </View>
  );
}
