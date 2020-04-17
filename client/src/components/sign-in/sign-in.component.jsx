import React, { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase-utils";

const SignIn = () => {
    const [userCredentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);

            setCredentials({
                email: "",
                password: "",
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setCredentials({
            ...userCredentials,
            [name]: value,
        });
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
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

                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
