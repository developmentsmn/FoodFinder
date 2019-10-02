import * as Google from 'expo-google-app-auth';
import firebaseAPI from '../../api/firebaseAPI';

const signInGoogle = async (firebase) => {
	try {
		const response = await Google.logInAsync({

      iosClientId: firebaseAPI.iosClientId,
			androidClientId: firebaseAPI.androidClientId,

			// iosClientId: '1084542544722-tpf7logcga6kfsiiaj8ahgb11flg35va.apps.googleusercontent.com',
			// androidClientId: '1084542544722-bjvd08v8mn88l2rldhup8d29cntctg41.apps.googleusercontent.com',
			// iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
      // androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
      
			scopes: ['profile', 'email'],
		});
		
		if (response.type === 'success') {
			/* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
			onGoogleSignIn(response, firebase);
		}
	}
	catch(e){
		return { status: 'fail', error: e};
	}
}

const onGoogleSignIn = (googleUser, firebase) => {
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!isGoogleUserEqual(googleUser, firebaseUser, firebase)) {
      // Build Firebase credential with the Google ID token.
      var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken);
      // Sign in with credential from the Google user.
      firebase.auth().signInWithCredential(credential).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    } else {
      console.log('User already signed-in Firebase.');
    }
  });
}

const isGoogleUserEqual = (googleUser, firebaseUser, firebase) => {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.user.id) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
}

export { signInGoogle };
