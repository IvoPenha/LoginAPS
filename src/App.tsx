import './App.css'
import { UserProvider } from './context/userContext'
import { LoginPage } from './pages'
function App() {


  return (
    <UserProvider>
      <LoginPage></LoginPage>
    </UserProvider>
  )
}

export default App
