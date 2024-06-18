import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Image } from "react-native";

export default function App() {

  const chatListData = [
    { id: '1', name: 'Aiah Arceta', lastMessage: 'Hello there misteryoso!', timestamp: '11:00 AM', image: require('./profile1.jpg') },
    { id: '2', name: 'Jhoanna Robles', lastMessage: 'Di pa rin mabasa ang iyong tunay na motibo?', timestamp: '10:30 AM', image: require('./profile2.jpg') },
    { id: '3', name: 'Mikha Lim', lastMessage: 'Ibang pinapakita, taliwas sa iyong salita', timestamp: '10:00 AM', image: require('./profile3.jpg') },
    { id: '4', name: 'Maloi Ricalde', lastMessage: 'Pero ayokong magduda baka lang sa simula', timestamp: '9:45 AM', image: require( './profile4.jpg')},
    { id: '5', name: 'Sheena Catacutan', lastMessage: 'Maghihintay na lang na ikay dumaan', timestamp: '9:40 AM', image: require('./profile5.jpg')},
    { id: '6', name: 'Gwen Apuli', lastMessage: 'Sana ay maibsan ang aking pangungulila', timestamp: '9:20 AM', image:require('./profile6.jpg')},
    { id: '7', name: 'Colet Vergara', lastMessage: 'Trapped in this fairytale', timestamp: '9:00 AM', image:require('./profile7.jpg')},
    { id: '8', name: 'Stacey Sevilleja', lastMessage: 'But I dont wanna wake up in this dream, baby', timestamp: '8:30 AM', image:require('./profile8.jpg')}

  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Calls</Text>
        </TouchableOpacity>
      </View>

      {/* Chat List */}
      <FlatList
        style={styles.chatList}
        data={chatListData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatItem}>
            <Image source={item.image} style={styles.profileImage} />
            <View style={styles.chatDetails}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.lastMessage}>{item.lastMessage}</Text>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Chat Screen Placeholder */}

      {/* Circular Button */}
      <TouchableOpacity style={styles.circularButton}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    height: 50,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#2980b9',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
  },
  chatList: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatDetails: {
    flex: 1,
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 16,
    color: '#666',
  },
  timestamp: {
    fontSize: 14,
    color: '#999',
  },
  chatScreen: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  circularButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,  
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    lineHeight: 30,
  },
});
