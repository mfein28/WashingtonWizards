import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


//Player Select component
//Serves as both player name and how to toggle players
export default function FilterSelect(props) {
    const {setSelection, selection} = props;
    const handleChange = (event) => {
        setSelection(event.target.value);
    };
    return (
            <Select
                onChange={handleChange}
                value={props.selection}
            >
                <MenuItem value={5696}>Bradley Beal</MenuItem>
                <MenuItem value={5698}>Ish Smith</MenuItem>
                <MenuItem value={6497}>Davis Bertans</MenuItem>
                <MenuItem value={8684}>Jerome Robinson</MenuItem>
                <MenuItem value={8685}>Isaac Bonga</MenuItem>
                <MenuItem value={8687}>Troy Brown Jr.</MenuItem>
                <MenuItem value={8689}>Garrison Mathews</MenuItem>
                <MenuItem value={9756}>Moritz Wagner</MenuItem>
                <MenuItem value={9757}>Rui Hachimura</MenuItem>
            </Select>
    );
}