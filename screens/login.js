import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {connect} from "react-redux"

function Login({ navigation }) {
  return (
    <View style={styles.signupmain}>
      <View>
        <Text style={styles.bubble6}></Text>
        <Text style={styles.bubble7}></Text>
        <Text style={styles.bubble8}></Text>
        <Text style={styles.bubble1}></Text>
        <Text style={styles.bubble2}></Text>
        <Text style={styles.bubble3}></Text>

        <View style={styles.bubblelast}>
          <Text style={styles.bubble4}></Text>
          <Text style={styles.bubble5}></Text>
        </View>
      </View>
      <View style={{ alignContent:"flex-end" }}>
        <Text style={styles.headertext}>Welcome</Text>
        <Text style={styles.headertext}>Back</Text>
        <View style={styles.input}>
          <TextInput style={styles.user} placeholder="John" />

          <TextInput style={styles.center} placeholder="John" />
        </View>
        <Text style={styles.forgot}>Forgot password?</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={()=>navigation.navigate('home')}>
            <Text style={styles.buttontxt}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.already}>New user ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text style={styles.login}> Signup</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footericon}></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signupmain: {
    paddingTop: 50,
    backgroundColor: "#283693",
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-between'
    
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
    marginTop: 30,
    marginBottom: 40,
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
  forgot: {
    alignSelf: "flex-end",
    marginHorizontal: 30,
    marginTop: -30,
    color: "white",
  },
  bubble1: {
    height: 100,
    width: 100,
    backgroundColor: "#f9603b",
    borderRadius: 60,
    alignSelf: "center",
  },
  bubble2: {
    height: 80,
    width: 80,
    backgroundColor: "#00A19D",
    borderRadius: 60,
    alignSelf: "center",
    marginTop: -20,
  },
  bubble3: {
    height: 150,
    width: 150,
    backgroundColor: "#00A19D",
    borderRadius: 100,
    alignSelf: "flex-end",
    marginTop: -30,
  },
  bubble4: {
    height: 120,
    width: 120,
    backgroundColor: "#F9603B",
    borderRadius: 60,
  },
  bubble5: {
    height: 60,
    width: 60,
    backgroundColor: "black",
    borderRadius: 60,
  },
  bubblelast: {
    marginTop: -125,
    flexDirection: "row",
  },
  bubble6: {
    marginTop: -30,
    marginBottom: -170,
    height: 200,
    width: 200,
    backgroundColor: "#F2C94C",
    borderRadius: 100,
  },
  bubble7: {
    marginTop: -0,
    marginBottom: -90,
    height: 100,
    width: 100,
    backgroundColor: "white",
    borderRadius: 100,
    alignSelf: "flex-end",
  },
  bubble8: {
    marginTop: -60,
    alignSelf: "flex-end",
    height: 50,
    width: 50,
    backgroundColor: "green",
    borderRadius: 100,
  },
});

export default connect()(Login);
