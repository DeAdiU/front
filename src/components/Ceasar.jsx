
import React, { useState } from 'react';
import axios from 'axios';

const Ceaser = () => {
  const [responseData, setResponseData] = useState(null);
  const [string, setString] = useState('');
  const [key, setKey] = useState('');
  const [type, setType] = useState('');

  const handleEncrpyt = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/ceaser/',{ "string": string, "key": key, "type": type} );
      setResponseData(response.data);
    } catch (error) {
      console.error('Error:', error);
      setResponseData(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleEncrpyt}>
      <div>
                    <label htmlFor="string">Username</label>
                    <input
                        type="text"
                        id="string"
                        name="string"
                        value={string}
                        onChange={(e) => setString(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="Key">Key</label>
                    <input
                        type="key"
                        id="key"
                        name="key"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                    />
                </div>
                <div>   
                    <button
                        type="type"
                        id="type"
                        name="type"
                        value={'encode'}
                        onClick={(e) => setType(e.target.value)}
                    >Encode</button>
                </div>
                <div>   
                    <button
                        type="type"
                        id="type"
                        name="type"
                        value={'decode'}
                        onClick={(e) => setType(e.target.value)}
                    >Decode</button>
                </div>
      </form>

      {responseData && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(responseData['ceaser'], null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Ceaser;
