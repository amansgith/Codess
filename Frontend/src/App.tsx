import './App.css'
import { Landing } from './components/Landing'
import { initializeApp } from "firebase/app";
import { SignUp } from './components/signup';

const firebaseConfig = {
  apiKey: "AIzaSyA5Dvht0RUZmkNZLaK6S5tXDNieGC76e2k",
  authDomain: "codess-b97db.firebaseapp.com",
  projectId: "codess-b97db",
  storageBucket: "codess-b97db.appspot.com",
  messagingSenderId: "602843142413",
  appId: "1:602843142413:web:a91b48f91c1152fa303844"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {

  return (
    <>
      <div>
        <SignUp/>
      </div>
    </>
  )
}

export default App
