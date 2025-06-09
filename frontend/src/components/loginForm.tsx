import React from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Form from "react-bootstrap/Form"
import { Button } from "react-bootstrap";
import useLogin from "../hooks/login";

const schema = yup.object({
    email: yup.string().email('Invalid Email').required("Email is requied"),
    password: yup.string().min(8, "Min 8 characters of password").required("Password is required")
}).required();

type FormData = yup.InferType<typeof schema>
 
export default function LoginForm() {

    const {register, handleSubmit, formState: {errors}, } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const {error, info, loading, loginForm} = useLogin();

    const onSubmit = (data: FormData) => {
        const paresdData = {
            email: data.email,
            password: data.password
        }
        
        if(typeof loginForm == 'function'){
            loginForm(paresdData);
        } else {
            console.log("Type error")
        }
    }   

    // console.log(error)

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column align-items-center justify-content-around mb-5 border rounded p-5" style={{width: "20vw", height: "50vh"}}>
                <h1>Login</h1>
                
                {error ? 
                <Form.Text className="text-danger">{error}</Form.Text> 
                : 
                <Form.Text className="text-success">{info}</Form.Text>}

                <Form.Group className="w-100">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="Email" {...register('email')} />
                    <Form.Text className="text-danger mt-2">
                        {errors.email && <p>{errors.email.message}</p>}
                    </Form.Text>
                </Form.Group>
                
                <Form.Group className="w-100">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register('password')} />
                    <Form.Text className="text-danger mt-2">
                        {errors.password && <p>{errors.password.message}</p>}
                    </Form.Text>
                </Form.Group>
                
                <Button variant="success" type="submit" className="w-100 mt-3">
                    {loading ? <span>Loading...</span> : <span>Login</span>}
                </Button>
                
                <Form.Text className="mt-2">
                    Dont't have accout ? <a href="/register">Register</a> now!
                </Form.Text> 
            </Form>
        </>
    )
}