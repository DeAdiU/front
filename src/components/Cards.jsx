import React,{useState} from 'react';
import Single from '../assets/Ceasar.png'
import Double from '../assets/Vignere.png'
import Triple from '../assets/CamelCase.png'
import axios from 'axios';

const Cards = () => {
const [responseDataC, setResponseDataC] = useState(null);
  const [stringC, setStringC] = useState('');
  const [keyC, setKeyC] = useState('');
  const [typeC, setTypeC] = useState('');

  const [responseDataV, setResponseDataV] = useState(null);
  const [stringV, setStringV] = useState('');
  const [keyV, setKeyV] = useState('');
  const [typeV, setTypeV] = useState('');

  const [responseDataCS, setResponseDataCS] = useState(null);
  const [stringCS, setStringCS] = useState('');
  const [typeCS, setTypeCS] = useState('');

  const handleCeasar = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/ceaser/',{ "string": stringC, "key": keyC, "type": typeC} );
      setResponseDataC(response.data);
    } catch (error) {
      console.error('Error:', error);
      setResponseDataC(null);
    }
  };
  const handleBase64 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/vigenere/',{ "string": stringV, "key":keyV, "type": typeV} );
      setResponseDataV(response.data);
    } catch (error) {
      console.error('Error:', error);
      setResponseDataV(null);
    }
  };
  const handlecamelcase = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/case_switch/',{ "string": stringCS, "type": typeCS} );
      setResponseDataCS(response.data);
    } catch (error) {
      console.error('Error:', error);
      setResponseDataCS(null);
    }
  };
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Vigenere Cipher</h2>
              {responseDataV && (<pre className='text-center text-4xl ' dangerouslySetInnerHTML={{ __html: JSON.stringify(responseDataV['vigenere'], null, 2) }} />)}
            <form onSubmit={handleBase64}>
                <div className="w-72 pt-6 mt-6 mb-1 mx-auto px-6 py-3">
                    <div className="relative h-10 w-full min-w-[200px]">
                    <input
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" " type="text" value={stringV}
                    onChange={(e) => setStringV(e.target.value)}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    String
                    </label>
                    </div>
                </div>
                <div className="w-72 pt-0 mt-6 mb-1 mx-auto px-6 py-3">
                    <div className="relative h-10 w-full min-w-[200px]">
                    <input
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" " type="text" value={keyV}
                    onChange={(e) => setKeyV(e.target.value)}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Key
                    </label>
                    </div>
                </div>
            <div className='mt-0 mb-2 mx-12 px-6 py-3'>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium mt-6 mb-2 mx-auto px-6 py-3'
                        onClick={() => setTypeV('encode')}>Encode</button>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-2 mx-auto px-6 py-3'
                        onClick={() => setTypeV('decode')}>Decode</button>
            </div>
        </form>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Ceaser</h2>
              {responseDataC && (<pre className='text-center text-4xl ' dangerouslySetInnerHTML={{ __html: JSON.stringify(responseDataC['ceaser'], null, 2) }} />)}
            <form onSubmit={handleCeasar}>
                <div className="w-72 pt-6 mt-6 mb-1 mx-auto px-6 py-3">
                    <div className="relative h-10 w-full min-w-[200px]">
                    <input
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" " type="text" value={stringC}
                    onChange={(e) => setStringC(e.target.value)}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    String
                    </label>
                    </div>
                </div>
                <div className="w-72  mt-2 mb-2 mx-auto px-6 py-3">
                    <div className="relative h-10 w-full min-w-[200px]">
                    <input
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" " type="text" value={keyC}
                    onChange={e => setKeyC(e.target.value)}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Key
                    </label>
                    </div>
                </div>
            <div className='mt-0 mb-2 mx-12 px-6 py-3'>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium mt-6 mb-2 mx-auto px-6 py-3'
                        onClick={() => setTypeC('encode')}>Encrpyt</button>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-2 mx-auto px-6 py-3'
                        onClick={() => setTypeC('decode')}>Decrypt</button>
            </div>
        </form>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent pt-20px' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>camelCase and snake_case</h2>
              {responseDataCS && (<pre className='text-center text-4xl ' dangerouslySetInnerHTML={{ __html: JSON.stringify(responseDataCS['answer'], null, 2) }} />)}
            <form onSubmit={handlecamelcase}>
                <div className="w-72 pt-6 mt-6 mb-1 mx-auto px-6 py-3">
                    <div className="relative h-10 w-full min-w-[200px]">
                    <input
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" " type="text" value={stringCS}
                    onChange={(e) => setStringCS(e.target.value)}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    String
                    </label>
                    </div>
                </div>
                
            <div className='mt-0 mb-2 mx-12 px-6 py-3'>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium mt-6 mb-2 mx-auto px-6 py-3'
                        onClick={() => setTypeCS('camel case')}>camelCase</button>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-2 mx-auto px-6 py-3'
                        onClick={() => setTypeCS('snake case')}>snake_case</button>
            </div>
        </form>
          </div>
      </div>
    </div>
  );
};

export default Cards;