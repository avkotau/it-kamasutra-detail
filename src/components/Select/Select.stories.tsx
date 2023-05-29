import React, { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default {
    title: 'Select'
}

export const SelectFoo = () => {

    const [value, setValue] = useState('0');

    const onchangeSelect = (e: SelectChangeEvent) => {
        setValue(e.target.value as string)
    }

    return (
        <Box sx={{width: '40%'}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    value={value}

                    onChange={onchangeSelect}
                >
                    <MenuItem value={'0'}>default</MenuItem>
                    <MenuItem value={'1'}>Minsk</MenuItem>
                    <MenuItem value={'2'}>Legnica</MenuItem>
                    <MenuItem value={'3'}>Wroclaw</MenuItem>
                </Select>
            </FormControl>
        </Box>

    )
}
