import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { login, selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
onAuthStateChanged(auth, (authUser) => {
  if (user) {
      dispatch(
        login({
        uid: authUser.uid,
        photo: authUser.phhotoUrl,
        email: authUser.email,
        displayName: authUser.displayName,
      }))
  } else {
    // User is signed out
    // ...
  }
});
   
  }, []);
  return (
    <div className="row">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
       <Login />
      )}
    </div>
  );
}

export default App;
