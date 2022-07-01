import React, { useState, useEffect } from "react";
import {
    Grid,
    Card,
    Typography,
    TextField,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
    CardContent,
    Button,
} from "@mui/material";

const formInitialValues = {
    question: "",
    fieldType: "singleTextbox",
};

const Section2 = () => {
    const [formValues, setFormValues] = useState([{ ...formInitialValues }]);

    const handleInputChange = (idx, name, value) => {
        const newFormValues = [...formValues];
        newFormValues[idx][name] = value;
        setFormValues([...newFormValues]);
    };

    const handleAddForm = () => {
        setFormValues([...formValues, { ...formInitialValues }]);
    };

    return (
        <Grid container>
            <Typography align="center" variant="h5">
                Questionnaire
            </Typography>
            {/* <form> */}
            {formValues.map((fields, idx) => (
                <Grid item xs={12} md={12} sm={12} key={idx} my={1}>
                    <Card elevation={5}>
                        <CardContent>
                            <TextField
                                type="text"
                                placeholder="Enter question"
                                label="Enter question"
                                variant="outlined"
                                size="small"
                                name="question"
                                fullWidth
                                value={fields.question}
                                required={true}
                                onChange={(e) =>
                                    handleInputChange(
                                        idx,
                                        e.target.name,
                                        e.target.value
                                    )
                                }
                            />
                            <FormControl sx={{ my: 2 }} size="small" fullWidth>
                                <InputLabel id="demo-select-small">
                                    Field Type
                                </InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={fields.fieldType}
                                    label="fieldType"
                                    onChange={(e) =>
                                        handleInputChange(
                                            idx,
                                            e.target.name,
                                            e.target.value
                                        )
                                    }
                                    name="fieldType"
                                >
                                    <MenuItem value={"singleTextbox"}>
                                        Single Textbox
                                    </MenuItem>
                                    <MenuItem value={"multiTextbox"}>
                                        Multi Textbox
                                    </MenuItem>
                                    <MenuItem value={"dropdown"}>
                                        Drop down
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </CardContent>
                    </Card>
                </Grid>
            ))}

            <Grid item xs={12} md={12} sm={12} my={1}>
                <center>
                    <Button variant="contained" onClick={handleAddForm}>
                        +
                    </Button>
                </center>
            </Grid>

            <Grid item xs={12} md={12} sm={12} my={1}>
                <center>
                    <Button variant="contained">Submit</Button>
                </center>
            </Grid>
            {/* </form> */}
        </Grid>
    );
};

export default Section2;
