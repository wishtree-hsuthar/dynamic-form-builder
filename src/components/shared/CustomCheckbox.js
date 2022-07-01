import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
} from "@mui/material";
import React from "react";

const CustomCheckbox = (props) => {
    return (
        <FormControl>
            <FormLabel id="demo-check">{props.label}</FormLabel>
            <FormGroup row aria-labelledby="demo-check" name={props.name}>
                {props.options.map((option) => (
                    <FormControlLabel
                        control={<Checkbox />}
                        key={option.value}
                        name={option.value}
                        label={option.label}
                        onChange={(e) => {
                            console.log(
                                "Checkbox",
                                e.target.checked,
                                e.target.name
                            );
                        }}
                    />
                ))}
            </FormGroup>
        </FormControl>
    );
};

export default CustomCheckbox;
