import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

function Contact({ navigation,name,phone,image }) {
  return (
    <View style={styles.signupmain}>
      <View style={styles.single}>
        <Image style={styles.image} source={image}/>
        <View style={styles.nameandtel}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.phone}>{phone}</Text>
        </View>
        <View style={styles.icon}>
          <FontAwesome name="phone" size={24} color="blue" />
          <MaterialCommunityIcons
            name="message-processing"
            size={24}
            color="blue"
          />
          <Entypo name="dots-three-vertical" size={24} color="blue" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signupmain: {
    paddingTop: 30,
    marginHorizontal: "8%",
    flex: 1,
  },
  headertext: {
    fontSize: 30,
    marginLeft: 30,
    color: "black",
    paddingLeft: 20,
  },
  image: {
    height: 50,
    width: 50,
      borderRadius: 50,
      flex:0.15
  },
    nameandtel: {
       flex:0.5,
       marginHorizontal:10,
        marginRight:10
  },
  single: {
      flexDirection: "row",
      alignItems:"center",
     
      justifyContent:"space-evenly"
      
    },
    icon: {
        flexDirection: 'row',
        justifyContent: "space-between",
       
        flex: 0.30,
      
  },
    name: {fontSize:20},
});

export default Contact;
