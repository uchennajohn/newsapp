import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Linking, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
//import Lazyload from "react-native-lazyload"

const NewsScreen = () => {
    const [stories, setStories] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const limit = 10;
   // const time = moment.unix(data.time).format("MMM Do YYYY, h:mm:ss a");

  
    useEffect(() => {
      const fetchStories = async () => {
        setIsLoading(true);
        const { data } = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
        const storiesPromises = data.slice(0, limit).map(async id => {
          const { data } = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
          return data;
        });
        const stories = await Promise.all(storiesPromises);
        setStories(stories);
        setPage(1);
        setIsLoading(false);
      };
  
      fetchStories();
    }, []);
  
    const handleRefresh = async () => {
      setRefreshing(true);
      setPage(0);
      await fetchStories();
      setRefreshing(false);
    };
  
    const fetchStories = async () => {
      setIsLoading(true);
      const { data } = await axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?_limit=${limit}&_page=${page + 1}`);
      const storiesPromises = data.map(async id => {
        const { data } = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        return data;
      });
      const newStories = await Promise.all(storiesPromises);
      setStories(page === 0 ? newStories : [...stories, ...newStories]);
      setPage(page + 1);
      setIsLoading(false);
    };
  
    const handleLoadMore = () => {
      if (!isLoading) {
        fetchStories();
      }
    };
  return (
    <ImageBackground
    style={styles.background}
    source={require("../assets/news-bg.png")}
    >
    
    <View style={styles.newsContainer}>
            {isLoading ? (
        <View >
          <ActivityIndicator size="large" />
          <Text>Loading...</Text>
        </View>
      ) : (
            <FlatList
            data={stories}
            keyExtractor={(item, index) => index.toString()}
            onRefresh={handleRefresh}
            refreshing={refreshing}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={() => isLoading && <Text>Loading...</Text>}
      
    
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
                <View style={styles.card}>
                <Text style={styles.heading}>{item.title}</Text>
                </View>

                <View style={styles.card} >
                <Text style={styles.time}> Time Posted:{moment.unix(item.time).format("MMM Do YYYY, h:mm:ss a")}</Text>
                </View>
                <View style={styles.card}>
                <Text style={styles.by}>Written By: {item.by}</Text>
                </View>

                <TouchableOpacity style={styles.card} onPress={()=> Linking.openURL(`${item.url}`)}>
                <Text style={styles.url}>READ ARTICLE</Text>
                </TouchableOpacity>
                <View style={styles.card}>
                <Text style={styles.score}>Reader's score: {item.score}</Text>
                </View>
              </View>
            )}
          />
      )}
        

    </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 20,
    borderWidth: 0.5
 },
 background:{
  flex:1,
},
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    elevation: 5,
    margin: 5
  },
  heading: {
    fontSize: 18
  },
  newsContainer:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }

});

export default NewsScreen;
