import React from 'react';
import AddressSearch, * as loqate from "react-loqate";

export const Address = (props) => {

    const setAddressInformation = (address) => {
        props.setStreetName(address.Line1);
        props.setStreetName2(address.Line2);
        props.setPostalCode(address.PostalCode);
        props.setCity(address.City);
        props.setCountry(address.CountryName);
        props.setCounty(address.District);
    }

    const AddressSearchInput = (props) => {
        return (
            <input 
                id="sa1" 
                type="text" 
                value={props.streetName} 
                name="sa1" 
                className="nameID" 
                size="48"
                autoComplete="off" 
                required
                {...props}
            />
        )
    };

    return (
        <AddressSearch
        locale="en_GB"
        apiKey="BJ23-BX33-AH88-FB69"
        onSelect={address => setAddressInformation(address)}
        countries={['EGY', 'CAN']}
        components={{ Input: AddressSearchInput }}
        className="address-search-box"
        listItemClassname="list-item"
        />
    );

}