import { auth } from '../../firebase-config';
import { User } from '../../types/';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const Register = async ({email, password} : User) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
  }
  catch (error) {
    console.log(error);
  }
}