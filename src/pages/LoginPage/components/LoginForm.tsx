import { useForm } from 'react-hook-form'
import { loginWithEmailAndPassword } from '../../../services'
import { User } from '../../../types'
import { useUser } from '../../../hooks/userHook'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../../firebase-config'
import { FcGoogle } from 'react-icons/fc'
function LoginForm() {

  const { register, handleSubmit } = useForm()

  const onSubmit = async (data : User) => {
    try{
      await loginWithEmailAndPassword(data)
      // setIsLogged(true)
    }
    catch(error){
      console.log(error)
    }
  }

  
  const loginWithGoogle = async () => {
  signInWithPopup( auth, provider).then(async (result) => {
    const user = await result.user;
    if(user.emailVerified){
      setIsLogged(true)
      console.log(user)
    }
  }).catch((error) => {
    console.log(error);
    return null
  });
  return null
  
}


  const { isLogged, setIsLogged } =  useUser()
  console.log(isLogged)
  return (
    !isLogged ?
    <form >
      <h2>Login</h2>
      <input type="text" {...register('email')} placeholder='email' />
      <br />
      <input type="password" {...register('password')} placeholder='senha' />
      <br />
      <br />
      <button onClick={handleSubmit(onSubmit as never)} type='submit' >
        Logar
      </button>
      <br />
      <br />
      <button onClick={loginWithGoogle} type='button' className='googleButton' >
        <FcGoogle /> Logar com o google
      </button>
    </form> : <h1>
    Logado
    <button onClick={() =>{
       localStorage.removeItem('user')
        setIsLogged(false)
        console.log('oi')
      }}>Sair</button>
    </h1>
  )
}

export default LoginForm
