import FormDescriptions from "@/Components/ControlPanel/ControlProduct/FormDescriptions";
import ModalDescAdd from "@/Components/ControlPanel/ControlProduct/ModalDescAdd";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function ControlPanel() {

    const [data, setData] = useState({name: '', price: '', count: ''});
    const [desc, SetDesc] = useState({'Общее описание продукта': ''});
    const [modalShow, setModalShow] = useState(false);

    const changeForm = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setData({...data, [key]:value})
    }

    const changeDesc = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        SetDesc({...desc, [key]:value});
    }

    const addDesc = (key) => {
        SetDesc({...desc, [key]:''});
    }
    
    return (
        <>
            <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                        <Form.Label>Название</Form.Label>
                        <Form.Control placeholder="Название" value={data.name} id="name" type="text" onChange={changeForm}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                        <Form.Label>Цена</Form.Label>
                        <Form.Control placeholder="99.99" value={data.price} id="price" type="number" onChange={changeForm}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                        <Form.Label>Количество</Form.Label>
                        <Form.Control placeholder="99" value={data.count} id="count" type="number" onChange={changeForm}/>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
                <hr style={{margin: '20px 0'}}/>
                {/* DESCRIPTION */}
                <Button variant="primary" onClick={() => setModalShow(true)}>Добавить характеристику описания</Button>
                <FormDescriptions data={desc} changeDesc={changeDesc}/>
            </Container>
            <ModalDescAdd addDesc={addDesc} show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    );
}