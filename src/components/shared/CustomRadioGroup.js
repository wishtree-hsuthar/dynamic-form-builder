import React from "react";
import {
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@mui/material";

const CustomRadioGroup = (props) => {
    return (
        <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
                {props.label} - {props.name}
            </FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name={props.name}
                defaultChecked={0}
                value={props.value ?? ""}
                onChange={(e) => {
                    props.onChange(e.target.name, e.target.value);
                }}
            >
                {props.options.map((option) => (
                    <FormControlLabel
                        value={option.value}
                        control={<Radio required={true} />}
                        key={option.value}
                        label={option.label}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default CustomRadioGroup;
