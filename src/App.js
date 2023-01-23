import { db } from './firebase-config';
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Details from './components/Details';
import Events from './components/Events';

function App() {

  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState([])
  const [active, setActive] = useState(false);



  const handleData = async (id) => {
    setActive(true)
    const singleRef = doc(db, "users", `${id}`);
    const singleSnap = await getDoc(singleRef);
    // if(singleSnap.exists()) console.log("Document: ",Array(singleSnap.data()));
    setSingleUser(Array(singleSnap.data()));
  }

  useEffect(() => {
    const getUsers = async () => {
      const usersCollectionRef = collection(db, "users");
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getUsers()
  }, [])


  return (
    <>
      <NavBar />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Details singleUser={singleUser} active={active} />
        <Events users={users} setUsers={setUsers} handleData={handleData} />
      </div>
    </>
  );
}

export default App;
