import React, { useState, useEffect, useMemo } from "react";
import {
    Grid,
    Card,
    Typography,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    CardContent,
} from "@mui/material";
import RowSection from "./RowSection";

const initialFormValues = {
    field: "",
    fieldType: "prefilled",
};

const initialColumnValues = {
    columnName: "",
};

const TableLayout = () => {
    const [formValues, setFormValues] = useState([[{ ...initialFormValues }]]); // [[{<row values>}, {}, ...], [...], ...]
    const [columnValues, setColumnValues] = useState([
        { ...initialColumnValues },
    ]); // [{<column values>}]

    const handleAddRow = () => {
        setFormValues(
            formValues.map((column) => {
                return [...column, { ...initialFormValues }];
            })
        );
    };

    const handleRemoveRow = (column, row) => {
        let tempFormValues = [...formValues];
        setFormValues(
            tempFormValues.filter((data) => {
                return data.splice(row, 1);
            })
        );
    };

    const handleRemoveColumn = (column) => {
        let tempColumnValues = [...columnValues];
        tempColumnValues.splice(column, 1);
        setColumnValues([...tempColumnValues]);
    };

    const handleAddColumn = () => {
        // Update column data
        setColumnValues([...columnValues, { ...initialColumnValues }]);

        // Add required rows to the column
        let updatedFormValues = [...formValues];
        updatedFormValues.push(
            [...Array(formValues[0].length).keys()].map((value) => ({
                ...initialFormValues,
            }))
        );
        setFormValues(updatedFormValues);
    };

    const handleInputChange = (column, row, name, value) => {
        let tempFormValues = [...formValues];
        tempFormValues[column][row][name] = value;
        setFormValues(tempFormValues);
    };

    const handleColumnChange = (column, name, value) => {
        let tempColumnValues = [...columnValues];
        tempColumnValues[column][name] = value;
        setColumnValues(tempColumnValues);
    };

    return (
        <Grid container>
            {/* {useMemo(TempUseMemo)}
            {useMemo(() => (
                <TempUseMemo />
            ))} */}
            <Grid item xs={12} sm={12} md={12} my={2}>
                <Typography variant="h5">Questionnaire</Typography>
            </Grid>

            <Grid item xs={1} sm={1} md={1}></Grid>

            {columnValues.map((column, columnIdx) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3.6}
                    key={columnIdx}
                    px={2}
                    py={1}
                >
                    <Grid container key={columnIdx}>
                        <Grid item xs={10} sm={10} md={10}>
                            Column {columnIdx + 1}
                        </Grid>

                        <Grid item xs={2} md={2} sm={2} textAlign="end">
                            {columnIdx === formValues.length - 1 ? (
                                <Button
                                    variant="contained"
                                    size="small"
                                    onClick={handleAddColumn}
                                >
                                    +
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    size="small"
                                    onClick={() =>
                                        handleRemoveColumn(columnIdx)
                                    }
                                >
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
                                name="columnName"
                                value={column.columnName}
                                onChange={(e) =>
                                    handleColumnChange(
                                        columnIdx,
                                        e.target.name,
                                        e.target.value
                                    )
                                }
                            />
                        </Grid>

                        {/* Rows */}
                        {formValues[columnIdx].map(
                            (row, rowIdx) => (
                                // useMemo(() => (
                                <RowSection
                                    rowIdx={rowIdx}
                                    columnIdx={columnIdx}
                                    formValuesLength={
                                        formValues[columnIdx].length
                                    }
                                    handleAddRow={handleAddRow}
                                    handleRemoveRow={handleRemoveRow}
                                    field={formValues[columnIdx][rowIdx].field}
                                    fieldType={
                                        formValues[columnIdx][rowIdx].fieldType
                                    }
                                    handleInputChange={handleInputChange}
                                    key={rowIdx}
                                />
                            )
                            // ))

                            // <React.Fragment key={rowIdx}>
                            //     <Grid item xs={2} sm={2} md={2} my={2}>
                            //         {rowIdx ===
                            //         formValues[columnIdx].length - 1 ? (
                            //             <Button onClick={handleAddRow}>
                            //                 +
                            //             </Button>
                            //         ) : (
                            //             <Button
                            //                 onClick={() =>
                            //                     handleRemoveRow(

                            //                         columnIdx,
                            //                         rowIdx
                            //                     )
                            //                 }
                            //             >
                            //                 -
                            //             </Button>
                            //         )}
                            //     </Grid>
                            //     <Grid item xs={10} sm={10} md={10} my={2}>
                            //         <TextField
                            //             type="text"
                            //             placeholder="Please enter value"
                            //             label="Please enter value"
                            //             fullWidth
                            //             size="small"
                            //             name="field"
                            //             value={
                            //                 formValues[columnIdx][rowIdx].field
                            //             }
                            //             multiline={true}
                            //             rows={3}
                            //             onChange={(e) =>
                            //                 handleInputChange(
                            //                     columnIdx,
                            //                     rowIdx,
                            //                     e.target.name,
                            //                     e.target.value
                            //                 )
                            //             }
                            //         />
                            //         <FormControl
                            //             sx={{ my: 2 }}
                            //             size="small"
                            //             fullWidth
                            //         >
                            //             <InputLabel id="demo-select-small">
                            //                 Field Type
                            //             </InputLabel>
                            //             <Select
                            //                 labelId="demo-select-small"
                            //                 id="demo-select-small"
                            //                 value={
                            //                     formValues[columnIdx][rowIdx]
                            //                         .fieldType
                            //                 }
                            //                 label="fieldType"
                            //                 onChange={(e) =>
                            //                     handleInputChange(
                            //                         columnIdx,
                            //                         rowIdx,
                            //                         e.target.name,
                            //                         e.target.value
                            //                     )
                            //                 }
                            //                 name="fieldType"
                            //             >
                            //                 <MenuItem value={"prefilled"}>
                            //                     Prefilled
                            //                 </MenuItem>
                            //                 <MenuItem value={"userInput"}>
                            //                     User Input
                            //                 </MenuItem>
                            //                 <MenuItem value={"dropdown"}>
                            //                     Drop down
                            //                 </MenuItem>
                            //             </Select>
                            //         </FormControl>
                            //     </Grid>
                            // </React.Fragment>
                        )}
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
};

// const TempUseMemo = React.useMemo(function TempUseMemo() {
//     return <div>HELLO</div>;
// });

const TempUseMemo = () => {
    return <div>Something</div>;
};

export default TableLayout;
