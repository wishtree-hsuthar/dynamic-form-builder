import React from "react";
import { Button } from "@mui/material";

const CustomButton = (props) => {
    return (
        <Button
            type={props.type ?? "submit"}
            variant={props.variant ?? "contained"}
            color={props.color ?? "primary"}
        >
            {props.name}
        </Button>
    );
};

export default CustomButton;
