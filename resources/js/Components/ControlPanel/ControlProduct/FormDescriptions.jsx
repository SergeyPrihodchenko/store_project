import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export default function FormDescriptions({data, changeDesc}) {

    const [forms, setForms] = useState([]);

    const renderForm = (data) => {
        const arr = [];
         for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                arr.push((<Form style={{margin:'10px 0'}}>
                    <Form.Group>
                        <Form.Label>{key}</Form.Label>
                        <Form.Control as={'textarea'} onChange={changeDesc} id={key} value={data[key]}/>
                    </Form.Group>
                    </Form>));
            }
         }
        setForms(arr);
    }

    useEffect(() => {renderForm(data)}, [data]);

    return (
        <>
            {forms.map(el => {return el})}
        </>
    );

}