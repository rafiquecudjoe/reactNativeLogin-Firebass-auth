import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { createEmailAccount,signUpError } from "../redux/actions/authActions";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      cpassword: "",
      phone: "",
      country: "",
    };
  }

  handleUpdateState = (name, value) => {
    console.log("Heloooo")
    this.setState({ [name]: value });
  };

  handleONSubmit = () => {
    if (this.state.password !== this.state.cpassword) {

      this.props.signUpError("Password Do Not match")
      return;
      
    }
    
    this.props.createEmailAccount(this.state.email,this.state.password)
   };
   

  render() {
    const { navigation,auth } = this.props;

    return (
      <View style={styles.signupmain}>
        <Text style={styles.headertext}>Heloo..!</Text>
        <View style={styles.input}>
          { auth.error.signup &&
            <Text style={{ color: 'red' }}>{auth.error.signup }</Text>
          }
          <TextInput
            style={styles.user}
            placeholder="EMail"
            value={this.state}
            onChange={(text) => this.handleUpdateState("email", text)}
          />
          <TextInput
            style={styles.pass}
            placeholder="Password"
            secureTextEntry={true}
            onChange={(text) => this.handleUpdateState("password", text)}
          />
          <TextInput
            style={styles.email}
            placeholder="Confirm password"
            onChange={(text) => this.handleUpdateState("cpassword", text)}
            secureTextEntry={true}
          />
          <View style={styles.pnumber}>
            <TextInput style={styles.phone} placeholder="+233" />
            <TextInput
              style={styles.phone2}
              placeholder="Phone"
              value={this.state}
              onChange={(text) => this.handleUpdateState("phone", text)}
            />
          </View>

          <TextInput
            style={styles.center}
            placeholder="Country"
            value={this.state}
            onChange={(text) => this.handleUpdateState("country", text)}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity  onPress={()=>console.log('Heloooo')}>
            <Text style={styles.buttontxt}>Signup</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.already}>Already have Account ?</Text>
          <TouchableOpacity>
            <Text style={styles.login}> Login</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footericon}></Text>
      </View>
    );
  }
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
    zIndex: 10,
  },
  phone2: {
    marginVertical: 10,
    backgroundColor: "#4d5aa5",
    borderRadius: 20,
    height: 50,
    color: "white",
    paddingLeft: 25,
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


const mapStateToProps = (state) => {
  return{auth:state}
}

export default connect(mapStateToProps, { createEmailAccount,signUpError })(Signup);
