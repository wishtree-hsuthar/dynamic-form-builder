import React from "react";
import { Box, FormHelperText, TextField } from "@mui/material";

const Input = (props) => {
    return (
        <Box m={2} component="div">
            <TextField
                type={props.type || "text"}
                variant={props.variant || "outlined"}
                placeholder={props.placeholder}
                required={props.required}
                value={props.value || ""}
                error={(props.errors && props.errors.length != 0) || false}
                fullWidth={props.fullWidth || false}
                size={props.size || "small"}
                onChange={(e) => {
                    props.onChange(e);
                }}
                label={props.name}
            />
            {props.displayHelper && (
                <FormHelperText component="div" style={{ color: "red" }}>
                    {props.errors &&
                        props.errors.map((error) => <p key={error}>{error}</p>)}
                </FormHelperText>
            )}
        </Box>
    );
};

export default Input;
