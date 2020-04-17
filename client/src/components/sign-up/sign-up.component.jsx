import React, { useState } from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase-utils";

const SignUp = () => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            setUserCredentials({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value,
        });
    };

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    name="displayName"
                    type="text"
                    label="Display Name"
                    value={displayName}
                    handleChange={handleChange}
                    required
                />
                <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    value={email}
                    handleChange={handleChange}
                    required
                />

                <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    handleChange={handleChange}
                    required
                />

                <FormInput
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    value={confirmPassword}
                    handleChange={handleChange}
                    required
                />

                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    );
};

export default SignUp;
