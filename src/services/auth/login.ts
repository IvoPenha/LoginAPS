import { auth, provider } from '../../firebase-config';
import { User } from '../../types/';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export const loginWithEmailAndPassword = async ({email, password} : User) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    localStorage.setItem('user', JSON.stringify(user));

  }
  catch (error) {
    console.log(error);
  }
}
