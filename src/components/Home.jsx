import { useEffect, useState } from 'react';

//Firebase import
import db from '../backend/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

function Home() {

  const [songs, setSong] = useState([]);

  console.log(songs);

  useEffect(() => {
    //gets data from the collection
    //looks for real time changes in firestore
    // format is (collection(database, collectionName), (callback))
    const unsubscribe = onSnapshot(collection(db, "songs"), (snapshot) => {
      setSong(snapshot.docs.map((doc) => doc.data()));
    });
  
    // Cleanup listener when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <h2>Song List</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={song.id || index}>{song.title || "Untitled Song"}</li>
        ))}
      </ul>
    </div>
  );
}
export default Home;