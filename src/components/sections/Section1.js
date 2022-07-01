import React from "react";
import {
    Typography,
    Card,
    Grid,
    TextField,
    Button,
    CardContent,
} from "@mui/material";

const Section1 = () => {
    return (
        <Grid container>
            <Grid item xs={10} sm={10} md={10}>
                <Typography variant="h5">Add Questionnaire</Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={2}>
                <Button variant="contained">Add a section</Button>
            </Grid>
            <Grid container my={2}>
                <Grid item xs={11} sm={11} md={11}>
                    <Card>
                        <CardContent>
                            <Typography variant="body1">Question *</Typography>
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="Add question here"
                                label="Add question here"
                            />
                            <Grid container>
                                <Grid item xs={12} sm={6} md={6}></Grid>
                                <Grid item xs={12} sm={6} md={6}></Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={1} sm={1} md={1}></Grid>
            </Grid>
        </Grid>
    );
};

export default Section1;
