import * as firebase from 'firebase';
import config from '../../credentials/firebaseConfig';
import { signInGoogle } from './auth';

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.firebase = firebase
        this.auth = firebase.auth;
        this.signIn = {
            'Google': this.signInWithGoogle
        }
    }

    signInWithGoogle = async () => {
        return signInGoogle(this.firebase);
    }
}

export default Firebase;