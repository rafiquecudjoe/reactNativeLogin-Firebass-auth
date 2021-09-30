import firebase from "../../firebase/firebase";

export function createEmailAccount() {
  return async (dispatch) => {
    try {
      const user = await firebase.auth.createUserWIthEmailAndPassword(
        email,
        password
      );
      dispatch(loggedIn(user));
    } catch (error) {
      console.log(error);
    }
  };
}

export async function loginEmailAccount() {

    try {
        const user = await firebase.auth.signInUserWIthEmailAndPassword(
            email,
            password
        );
        console.log(user)
          dispatch(loggedIn(user));
        
    } catch (error) {
        
    }
}

export async function logout() {
    try {

        await firebase.auth().signOut()
        dispatch(loggedOut())
        
    } catch (error) {
        console.log(error)
        
    }
}

function loggedIn(user) {
  return {
    type: "LOGGED_IN",
    payload: user,
  };
}

function loggedOut() {
    return {
      type: "LOGGED_OUT",
     
    };
}
  

export function signUpError(error) {
    return {
        type: "SIGNUP_ERROR",
        payload:error
        
    }
}
  
