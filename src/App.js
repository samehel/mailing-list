import './App.css';
import { Address } from './Address.js';
import { useState } from 'react';
import Name from './Name';

function App() {

  const [streetName, setStreetName] = useState('');
  const [streetName2, setStreetName2] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [county, setCounty] = useState('');

  return (
    <div className='cntr'>
      <form>
        <h1>Mailing List</h1>
        <Name />
        <div>
          <label for="sa1" className="nameID">Street Address 1 *</label>
          <Address 
            streetName={streetName}
            setStreetName={setStreetName}
            setStreetName2={setStreetName2}
            setPostalCode={setPostalCode}
            setCity={setCity}
            setCountry={setCountry}
            setCounty={setCounty}
          />
          <br/>
          <label for="sa2" className="nameID">Street Address 2</label>
          <input id="sa2" type="text" value={streetName2} name="sa2" className="nameID" size="48" required/>
        </div>
        <br/>
        <div>
          <div className='tb1'>
            <label for="pzcode" className="nameID">Postal Code/Zip Code *</label>
            <input id="pzcode" type="text" value={postalCode} name="pzcode" className="nameID" required/>
          </div>
          <div className='tb2'>
            <label for="city" className="nameID">City *</label>
            <input id="city" type="text" value={city} name="city" className="nameID" required/>
          </div> 
        </div>
        <br/>
        <br/>
        <br/>
        <div>
          <div className='tb1'>
            <label for="country" className="nameID">Country *</label>
            <input id="country" type="text" value={country} name="country" className="nameID" required/>
          </div>
          <div className='tb2'>
            <label for="statecounty" className="nameID">State/County *</label>
            <input id="statecounty" type="text" value={county} name="statecounty" className="nameID" required/>
          </div> 
        </div>
        <br/>
        <br/>
        <br/>
        <span>* required</span>
        <br/>
        <br/>
        <button className='btn default'>Submit</button>
  		</form>
    </div>
  );
}

export default App;
