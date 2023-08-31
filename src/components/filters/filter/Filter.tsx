import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
};

type Props = {
    data: Array<string>,
    title: string,
    label: string,
    filtersFunc: (value: string) => void
}


function Filter({data, title, label, filtersFunc}: Props) {
    const [state, setState] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        filtersFunc(event.target.value)
        setState(event.target.value as string);
    }

    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 130 }}>
                <InputLabel id={label} sx={{ color: 'white' }}>{title}</InputLabel>
                <Select
                    labelId={label}
                    id={label}
                    value={state}
                    label={label}
                    onChange={handleChange}
                    sx={{
                        color: 'white',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white'
                        },
                        maxHeight: '500px'
                    }}
                    MenuProps={MenuProps}

                >
                    <MenuItem value="" sx={{ color: 'white' }}>
                        <em>None</em>
                    </MenuItem>
                    {data.map((val, index) => (
                        <MenuItem value={val} key={index}>{val}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    )
}

export default Filter