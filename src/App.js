import DynamicForm from "./components/form/DynamicForm";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import FormLayout from "./components/sections/FormLayout";
import TableLayout from "./components/sections/TableLayout";

function App() {
    const formStructure = [
        {
            type: "text",
            name: "Username",
            placeholder: "Please enter username",
            required: true,
            validations: {
                minLength: 3,
                maxLength: 25,
            },
            fullWidth: true,
            errors: {},
            key: "username",
        },
        {
            type: "text",
            name: "Email address",
            key: "email",
            placeholder: "Please enter email address",
            required: true,
            errors: {},
            validations: {
                email: true,
            },
            fullWidth: true,
        },
        {
            type: "password",
            name: "Password",
            key: "password",
            placeholder: "Please enter password",
            fullWidth: true,
            errors: {},
            validations: {
                minLength: 7,
                alpha: true,
                numbers: true,
                specialChar: true,
            },
            required: true,
        },
        {
            type: "radio",
            label: "Gender",
            key: "gender",
            name: "gender",
            options: [
                {
                    label: "Female",
                    value: "female",
                },
                {
                    label: "Male",
                    value: "male",
                },
            ],
            default: 0,
        },
        {
            type: "checkbox",
            label: "Demo Check",
            key: "demoCheck",
            name: "demoCheck",
            options: [
                {
                    label: "Check 1",
                    value: "check1",
                },
                {
                    label: "Check 2",
                    value: "check2",
                },
            ],
        },
    ];

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            {/* <Section1 /> */}
            {/* <Section2 /> */}
            {/* <FormLayout /> */}
            <TableLayout />
            <DynamicForm
                formStructure={formStructure}
                handleFormSubmit={handleFormSubmit}
            />
        </div>
    );
}

export default App;
