import React, { useState, useEffect } from "react";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    TextField,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    Button,
} from "@mui/material";

const rowFormInitialValues = {
    field: "",
    fieldType: "prefilled",
};

const columnFormInitialValues = {
    columnName: "",
};

const FormLayout = () => {
    // Approach 2
    // Change state name once old ones are removed
    const [values, setValues] = useState([]); // [[{<row values>}, {}, ...], [...], ...]
    const [columnValues, setColumnValues] = useState([]); // [{<column values>}]

    // Values are column-wise
    const [formValues, setFormValues] = useState([
        { ...columnFormInitialValues },
    ]);

    // Values are row-wise
    const [rowValues, setRowValues] = useState([{ ...rowFormInitialValues }]);

    const handleAddColumn = () => {
        // let c = [...formValues];
        // c.push({ ...columnFormInitialValues });
        // setFormValues([...c]);
        setFormValues([...formValues, { ...columnFormInitialValues }]);
        // Handle rows update
        // setRowValues([...rowValues, formValues.length * { ...rowFormInitialValues }]);
    };

    const handleAddRow = () => {
        // let a = [...rowValues];
        // a.push({ ...rowFormInitialValues });
        // setRowValues([...a]);
        setRowValues([...rowValues, { ...rowFormInitialValues }]);
        // Handle column update
    };

    const handleInputChange = (column, row, name, value) => {
        console.log("Got change values", column, row, name, value);
        console.log("ROW VALUES", rowValues);
        const newRowValues = [...rowValues];
        newRowValues[column + row][name] = value;
        setRowValues([...newRowValues]);
    };

    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12} my={2}>
                <Typography variant="h5">Questionnaire</Typography>
            </Grid>

            {formValues.map((form, idx) => (
                <Grid item xs={11} sm={6} md={3.6} p={2} key={idx}>
                    <Grid container>
                        <Grid item xs={10} md={10} sm={10}>
                            Column {idx + 1}
                        </Grid>
                        <Grid item xs={2} md={2} sm={2} textAlign="end">
                            {idx === formValues.length - 1 ? (
                                <Button
                                    variant="contained"
                                    size="small"
                                    onClick={handleAddColumn}
                                >
                                    +
                                </Button>
                            ) : (
                                <Button variant="contained" size="small">
                                    -
                                </Button>
                            )}
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} my={1}>
                            <TextField
                                type="text"
                                placeholder="Add column name"
                                label="Add column name"
                                fullWidth
                                size="small"
                                // value={form.columnName}
                            />
                        </Grid>

                        {/* Rows */}
                        {rowValues.map((rowValue, rowIdx) => (
                            <Grid container key={rowIdx}>
                                <Grid item xs={2} sm={2} md={2} my={2}>
                                    <Button size="small" onClick={handleAddRow}>
                                        +
                                    </Button>
                                </Grid>

                                <Grid item xs={10} sm={10} md={10} my={2}>
                                    <TextField
                                        type="text"
                                        placeholder="Please enter value"
                                        label="Please enter value"
                                        fullWidth
                                        size="small"
                                        name="field"
                                        value={rowValue.field}
                                        multiline={true}
                                        rows={3}
                                        onChange={(e) =>
                                            handleInputChange(
                                                idx,
                                                rowIdx,
                                                e.target.name,
                                                e.target.value
                                            )
                                        }
                                    />
                                    <FormControl
                                        sx={{ my: 2 }}
                                        size="small"
                                        fullWidth
                                    >
                                        <InputLabel id="demo-select-small">
                                            Field Type
                                        </InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={rowValue.fieldType}
                                            label="fieldType"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    idx,
                                                    rowIdx,
                                                    e.target.name,
                                                    e.target.value
                                                )
                                            }
                                            name="fieldType"
                                        >
                                            <MenuItem value={"prefilled"}>
                                                Prefilled
                                            </MenuItem>
                                            <MenuItem value={"userInput"}>
                                                User Input
                                            </MenuItem>
                                            <MenuItem value={"dropdown"}>
                                                Drop down
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
};

export default FormLayout;
