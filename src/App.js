import { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import DisplayImages from './components/DisplayImages';

const API_KEY = 'yAjPRLciMKWGxO4pcz5fvCJmfzQw_oUtwbo77ZE1Wyo';

function App() {
   const [searchTerm, setSearchTerm] = useState('');
   const [searchQuery, setSearchQuery] = useState('');
   const [data, setData] = useState([]);

   useEffect(() => {
      axios
         .get(
            'https://api.unsplash.com/search/photos?query=' +
               searchQuery +
               '&client_id=' +
               API_KEY
         )
         .then(data => {
            setData(data.data.results);
         });
   }, [searchQuery]);

   const handleSearch = () => {
      if (searchTerm.trim()) {
         setSearchQuery(searchTerm);
      } else {
         setSearchQuery(searchTerm);
         alert('Empty Search! Please type something in the search field');
      }
      setSearchTerm('');
   };
   return (
      <>
         <div className="container text-center py-5">
            <h1>Image Searching App</h1>
            <h5 className="pb-3 text-black-50">Using React.js</h5>
         </div>
         <div className="conainer">
            <div className="col-md-6 mx-auto">
               <div className="search-box my-2">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Search for images..."
                     value={searchTerm}
                     onChange={e => setSearchTerm(e.target.value)}
                     onKeyPress={event => {
                        if (event.key === 'Enter') {
                           handleSearch();
                        }
                     }}
                  />
                  <button
                     className="btn search-button btn-danger"
                     onClick={handleSearch}
                  >
                     <FontAwesomeIcon icon={faSearch} />
                  </button>
               </div>
            </div>
            <div className="container mt-5">
               <div className="row">
                  <DisplayImages data={data} searchQuery={searchQuery} />
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
