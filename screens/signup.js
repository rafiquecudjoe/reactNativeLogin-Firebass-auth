import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Signup() {
  return (
    <View style={styles.signupmain}>
      <Text style={styles.headertext}>Heloo..!</Text>
      <View style={styles.input}>
        <TextInput style={styles.user} placeholder="John" />
        <TextInput style={styles.pass} placeholder="John" />
        <TextInput style={styles.email} placeholder="John" />
        <View style={styles.pnumber}>
          <TextInput style={styles.phone} placeholder="John" />
          <TextInput style={styles.phone2} placeholder="John" />
        </View>

        <TextInput style={styles.center} placeholder="John" />
      </View>
      <View style={styles.button}>
        <TouchableOpacity>
          <Text style={styles.buttontxt}>Signup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.already}>Already have Account ?</Text>
        <Text style={styles.login}> Login</Text>
      </View>

      <Text style={styles.footericon}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  signupmain: {
    paddingTop: 100,
    backgroundColor: "#283693",
  },
  headertext: {
    fontSize: 30,
    marginLeft: 30,
    color: "white",
    color: "white",
    paddingLeft: 20,
  },
  input: {
    marginVertical: 40,
    marginHorizontal: 20,
  },
  user: {
    marginVertical: 10,
    backgroundColor: "#4d5aa5",
    borderRadius: 20,
    height: 50,
    color: "white",
    paddingLeft: 20,
  },
  pass: {
    marginVertical: 10,
    backgroundColor: "#4d5aa5",
    borderRadius: 20,
    height: 50,
    color: "white",
    paddingLeft: 20,
  },
  email: {
    marginVertical: 10,
    backgroundColor: "#4d5aa5",
    borderRadius: 20,
    height: 50,
    color: "white",
    paddingLeft: 20,
  },
  phone: {
    marginVertical: 10,
    backgroundColor: "#6d75a3",
    borderRadius: 20,
    height: 50,
    color: "white",
    paddingLeft: 20,
    width: 80,
    marginRight: -20,
  },
  phone2: {
    marginVertical: 10,
    backgroundColor: "#4d5aa5",
    borderRadius: 20,
    height: 50,
    color: "white",
    paddingLeft: 20,
    width: 273,
  },
  pnumber: {
    flexDirection: "row",
  },
  center: {
    marginVertical: 10,
    backgroundColor: "#4d5aa5",
    borderRadius: 20,
    height: 50,
    color: "white",
    paddingLeft: 20,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#F9603B",
    borderRadius: 25,
    height: 55,
    width: 140,
    justifyContent: "center",
    marginBottom: 110,
  },
  buttontxt: {
    fontSize: 26,
    color: "white",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 10,
  },
  footericon: {
    marginBottom: 5,

    height: 4,
    width: 130,
    alignSelf: "center",
    marginBottom: 17,
    borderRadius: 10,
    backgroundColor: "white",
  },
  already: {
    color: "white",
  },
  login: {
    color: "#f9603b",
  },
});

export default Signup;
