import React from "react";
import {
    Grid,
    TextField,
    Button,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
} from "@mui/material";

const RowSection = (props) => {
    const {
        rowIdx,
        columnIdx,
        formValuesLength,
        handleAddRow,
        handleRemoveRow,
        field,
        handleInputChange,
        fieldType,
    } = props;

    return (
        <React.Fragment>
            <Grid item xs={2} sm={2} md={2} my={2}>
                {rowIdx === formValuesLength - 1 ? (
                    <Button onClick={handleAddRow}>+</Button>
                ) : (
                    <Button onClick={() => handleRemoveRow(columnIdx, rowIdx)}>
                        -
                    </Button>
                )}
            </Grid>
            <Grid item xs={10} sm={10} md={10} my={2}>
                <TextField
                    type="text"
                    placeholder="Please enter value"
                    label="Please enter value"
                    fullWidth
                    size="small"
                    name="field"
                    value={field}
                    multiline={true}
                    rows={3}
                    onChange={(e) =>
                        handleInputChange(
                            columnIdx,
                            rowIdx,
                            e.target.name,
                            e.target.value
                        )
                    }
                />
                <FormControl sx={{ my: 2 }} size="small" fullWidth>
                    <InputLabel id="demo-select-small">Field Type</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={fieldType}
                        label="fieldType"
                        onChange={(e) =>
                            handleInputChange(
                                columnIdx,
                                rowIdx,
                                e.target.name,
                                e.target.value
                            )
                        }
                        name="fieldType"
                    >
                        <MenuItem value={"prefilled"}>Prefilled</MenuItem>
                        <MenuItem value={"userInput"}>User Input</MenuItem>
                        <MenuItem value={"dropdown"}>Drop down</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </React.Fragment>
    );
};

export default RowSection;
