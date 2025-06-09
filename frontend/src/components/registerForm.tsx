import React, { useState } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Form from "react-bootstrap/Form"
import { Button } from "react-bootstrap";
import useRegister from "../hooks/register";

const schema = yup.object({
    name: yup.string().required("Name is required"),
    surname: yup.string().required("Surname is required"),
    login: yup.string().required("Login is required"),
    email: yup.string().email('Invalid Email').required("Email is requied"),
    password: yup.string().min(8, "Min 8 characters of password").required("Password is required"),
    passwordConfrimation: yup.string().oneOf([yup.ref('password')], "Passowrds must match").required("Password confirmation is required")
}).required();

type FormData = yup.InferType<typeof schema>

export default function RegisterForm() {

    const {register, handleSubmit, formState: {errors}, reset } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const [isShowed, setShowPassword] = useState(false);
    const {error, info, loading, registerForm} = useRegister();

    const onSubmit = (data: FormData) => {
        const paresdData = {
            name: data.name,
            surname: data.surname,
            login: data.login,
            email: data.email,
            password: data.password,
            passwordConfirmation: data.passwordConfrimation
        }
        
        if(typeof registerForm == 'function'){
            registerForm(paresdData);
            reset();
        } else {
            console.log("Type error")
        }
    }   

    const handleChange = () => {
        setShowPassword(!isShowed)
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column align-items-center justify-content-around mb-5 border rounded p-5" style={{width: "20vw", minHeight: "50vh"}}>
                <h1>Register</h1>

                
                {error ? 
                <Form.Text className="text-danger">{error}</Form.Text> 
                : 
                <Form.Text className="text-success">{info}</Form.Text>}


                <Form.Group className="w-100">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="text" placeholder="Name" {...register('name')} />
                    <Form.Text className="text-danger mt-2">
                        {errors.name && <p>{errors.name.message}</p>}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="w-100">
                    <Form.Label>Surname: </Form.Label>
                    <Form.Control type="text" placeholder="Surname" {...register('surname')} />
                    <Form.Text className="text-danger mt-2">
                        {errors.surname && <p>{errors.surname.message}</p>}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="w-100">
                    <Form.Label>Login: </Form.Label>
                    <Form.Control type="text" placeholder="Login" {...register('login')} />
                    <Form.Text className="text-danger mt-2">
                        {errors.login && <p>{errors.login.message}</p>}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="w-100">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="Email" {...register('email')} />
                    <Form.Text className="text-danger mt-2">
                        {errors.email && <p>{errors.email.message}</p>}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="w-100">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type={isShowed ? "text" : "password"} placeholder="Password" {...register('password')} />
                    <Form.Text className="text-danger mt-2">
                        {errors.password && <p>{errors.password.message}</p>}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="w-100">
                    <Form.Label>Confirm Password: </Form.Label>
                    <Form.Control type={isShowed ? "text" : "password"} placeholder="Confirm Password" {...register('passwordConfrimation')} />
                    <Form.Text className="text-danger mt-2">
                        {errors.passwordConfrimation && <p>{errors.passwordConfrimation.message}</p>}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="w-100 d-flex align-items-center gap-2 mt-2">
                    <p className="mb-0">Show passwords</p>
                    <input type="checkbox" className="mb-0" onChange={handleChange}/>
                </Form.Group>

                <Button variant="success" type="submit" className="w-100 mt-3">
                    {loading ? <span>Loading...</span> : <span>Register</span>}
                </Button>

                <Form.Text className="mt-2">
                    You already have account ? <a href="/login">Login</a> now!
                </Form.Text> 
            </Form>
        </>
    )
}