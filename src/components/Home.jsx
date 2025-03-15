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

  const [story, setStory] = useState('');  // State to hold the transcription result
  const [loading, setLoading] = useState(false);

  // Handle the button click to send the request for transcription
  const fetchTranscription = async () => {
    setLoading(true);  // Show loading state while waiting for the transcription

    try {
      const response = await fetch('http://localhost:5000/api/whisper-test', {
        method: 'POST',  // Send a POST request to fetch the transcription
      });

      if (!response.ok) {
        throw new Error('Failed to transcribe audio');
      }

      const data = await response.json();
      setStory(data.transcription);  // Set the transcription result in state
    } catch (error) {
      console.error('Error fetching transcription:', error);
      setStory('An error occurred while transcribing the audio.');  // Show error message
    } finally {
      setLoading(false);  // Hide loading state after the transcription
    }
  };


  return (
    <div>
      <h1>Home</h1>
      {/* <h2>Song List</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={song.id || index}>{song.title || "Untitled Song"}</li>
        ))}
      </ul> */}
      <button onClick={fetchTranscription} disabled={loading}>
        {loading ? 'Transcribing...' : 'Transcribe Audio'}
      </button>
      <p>{story}</p>  {/* Display the transcription result */}
    </div>
  );
}
export default Home;