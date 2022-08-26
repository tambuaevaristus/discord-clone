import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      
      // if(user){

        dispatch(
          login({
            // uid: authUser.uid,
            // photo: authUser.photoURL,
            // email: authUser.email,
            // displayName: authUser.displayName,
            uid:"id-1",
            // photo: authUser.photoURL,
            email:"evaristustambua@gmail.com",
            displayName: "Tambua Evaristus",
          })
        );
      //  }
      // else{
      //   dispatch(
      //     logout()
      //   )
      // }
     
    });
  }, [dispatch]);
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
