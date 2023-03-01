import Dashboard from './component/Dashboard'
import { db, storage } from './utils/firebase'

import { ref, getDownloadURL } from 'firebase/storage'
import { useEffect, useState } from 'react'

function App() {

  const [url, setUrl] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const resp = await getDownloadURL(ref(storage, 'images/waldo.jpeg'));
        setUrl(resp)
      } catch (err) {
        // handle error
        console.log('error downloading image...')
      }
    })()
  }, []);

  return (
    <div>
      <Dashboard imageUrl = { url }/>
    </div>
  );
}

export default App;
