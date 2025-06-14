import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Form from "react-bootstrap/Form"
import { Button, Modal, CloseButton } from "react-bootstrap";
import useGroup from "../../hooks/addGroup";
import { useAppDispatch } from "../../hooks/hooks";
import { useAppSelector } from "../../hooks/hooks";
import { closeTab } from "../../slices/tabSlice";

const schema = yup.object({
    name: yup.string().required("Name is requied"),
    description: yup.string().required("Description is required"),
    access: yup.string().oneOf(['Public', 'Private']).required("Choosing access is required")

}).required();

type FormData = yup.InferType<typeof schema>
 
export default function AddGroup() {
    const {register, handleSubmit, formState: {errors}, } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const dispatch = useAppDispatch();
    const tab = useAppSelector((state) => state.tab.tabStates["addGroup"])
    
    const setWindow = () => {
        dispatch(closeTab({tab: "addGroup", isOpen: false}));
    }   

    const {loading, error, info, addGroup} = useGroup();
    
    const onSubmit = (data: FormData) => {
        const paresdData = {
            name: data.name,
            description: data.description,
            access: data.access
        }

        addGroup(paresdData)
    }   

    return (
    <>
        <Modal show={tab} onHide={setWindow}  className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                <Form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column align-items-center position-relative justify-content-around mb-5 rounded p-5" style={{width: "20vw", height: "50vh"}}>
                    
                    <CloseButton variant="danger" onClick={setWindow} className="position-absolute top-0 end-0 m-2" />

                    <h1>Create Group</h1>

                    {error ? 
                    <Form.Text className="text-danger">{error}</Form.Text> 
                    : 
                    <Form.Text className="text-success">{info}</Form.Text>}

                    <Form.Group className="w-100">
                        <Form.Label>Name: </Form.Label>
                        <Form.Control type="name" placeholder="Name" {...register('name')} />
                        <Form.Text className="text-danger mt-2">
                            {errors.name && <p>{errors.name.message}</p>}
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="w-100">
                        <Form.Label>Description: </Form.Label>
                        <Form.Control type="text" placeholder="Description" {...register('description')} />
                        <Form.Text className="text-danger mt-2">
                            {errors.description && <p>{errors.description.message}</p>}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="w-100">
                        <Form.Label>Choose access rules: </Form.Label>
                        <Form.Select aria-label="Default select example" {...register('access')}>
                            <option>Open this select menu</option>
                            <option value="Private">Private</option>
                            <option value="Public">Public</option>
                        </Form.Select>
                    </Form.Group>
                    
                    <Button variant="success" type="submit" className="w-100 mt-3">
                        {loading ? <span>Loading...</span> : <span>Create</span>}
                    </Button>
                </Form>
        </Modal>
    </>
    )
}