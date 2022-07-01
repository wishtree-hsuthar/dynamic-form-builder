import React, { useEffect, useState } from "react";
import Input from "../shared/Input";
import { validateField } from "../../utils/validations";
import CustomButton from "../shared/CustomButton";
import CustomRadioGroup from "../shared/CustomRadioGroup";
import CustomCheckbox from "../shared/CustomCheckbox";

const DynamicForm = (props) => {
    const [formValues, setFormValues] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (field, fieldValue) => {
        setFormErrors({
            ...formErrors,
            [field.name]: validateField(field, fieldValue),
        });

        setFormValues({
            ...formValues,
            [field.name]: fieldValue,
        });
    };

    const handleRadioChange = (field, fieldValue) => {
        setFormValues({
            ...formValues,
            [field]: fieldValue,
        });
    };

    const renderForm = () => {
        const formStructure = props.formStructure || [];

        return formStructure.map((field) => {
            switch (field.type) {
                case "text":
                case "password":
                    return (
                        <Input
                            {...field}
                            key={field.key}
                            value={formValues[field.name]}
                            onChange={(e) =>
                                handleInputChange(field, e.target.value)
                            }
                            errors={formErrors[field.name]}
                            displayHelper={true}
                        />
                    );

                case "button":
                case "submit":
                    return <CustomButton {...field} key={field.key} />;

                case "radio":
                    return (
                        <CustomRadioGroup
                            key={field.key}
                            {...field}
                            onChange={handleRadioChange}
                            value={formValues[field.name]}
                        />
                    );

                case "checkbox":
                    return <CustomCheckbox key={field.key} {...field} />;

                default: {
                    return false;
                }
            }
        });
    };

    return (
        <div>
            <form onSubmit={props.handleFormSubmit}>
                {renderForm()}
                <br />
                <CustomButton name="Submit" />
            </form>
        </div>
    );
};

export default DynamicForm;
