import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function ModalDescAdd(props) {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const addEl = () => {
        props.addDesc(value);
        setValue('');
        props.onHide();
    }

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Введите название категории
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control onChange={handleChange} value={value}/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {addEl()}}>Добавить</Button>
                    <Button onClick={props.onHide}>Отменить</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}