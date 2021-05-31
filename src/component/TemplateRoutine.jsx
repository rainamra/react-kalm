import React, { useState, useEffect } from "react";
import { Modal, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './TemplateRoutine.css';
import './RoutineCard';
import RoutineCard from "./RoutineCard";
// import { db } from "../firebase";
// import { useAuth } from "../contexts/AuthContext"

function List(props) {
    return props.routines.split(", ").map(str => <li>{str}</li>)
}

function CustomRoutineModal(props) {
    return (
    <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Let's start your Night Routine!
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <h4>Chill Night</h4>
        <p>Duration:</p>
        <p>Description:</p>
        <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam.
        </p>
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={props.onHide}>
            <Link to="/ongoing-routine" className="link">Start</Link>
        </Button>
    </Modal.Footer>
    </Modal>
);
}

function TemplateRoutineModal(props) {
    return (
    <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header closeButton>
        <Row>
        <Modal.Title id="contained-modal-title-vcenter">
            Chill Nights
        </Modal.Title>
        <Row>
        </Row>
        <p>
        Cras mattis consectetur purus sit amet fermentum.
        </p>
        </Row>
    </Modal.Header>
    <Modal.Body>
        <p>Duration:</p>
        <p>Description:</p>
        <ul>
            <li>Routine one</li>
            <li>Routine two</li>
            <li>Routine three</li>
            <li>Routine four</li>
        </ul>
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={props.onHide}>
            <Link to="/ongoing-routine" className="link">Start</Link>
        </Button>
    </Modal.Footer>
    </Modal>
);
}

function CreateRoutineModal(props) {
    return (
    <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Create New Night Routine
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Are you ready?</p>
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={props.onHide}>
            <Link to="/create-new" className="link">Create</Link>
        </Button>
    </Modal.Footer>
    </Modal>
);
}

function TemplateRoutine() {

    const [templateModalShow, setTemplateModalShow] = useState(false);
    const [customModalShow, setCustomModalShow] = useState(false);
    const [createNewModalShow, setCreateNewModalShow] = useState(false);
    // const [routineCards, setRoutineCards] = useState([]);
    // const { currentUser, getTitle } = useAuth();

    // useEffect(() => {
    //     setRoutineCards(getTitle);
    // }, [])


    return (
        <div className="template-routine">
            <h2>Night Routine Template</h2>
            <div className="routineCards templates">
                <div className="template" onClick={() => setTemplateModalShow(true)}>
                <RoutineCard image="https://i.postimg.cc/P5Gxsphw/kilarov-zaneit-1-Mqa-Cfb-FGCs-unsplash.jpg" title="Chill Nights"/>
                </div>
                <div className="template" onClick={() => setTemplateModalShow(true)}>
                <RoutineCard image="https://i.postimg.cc/P5Gxsphw/kilarov-zaneit-1-Mqa-Cfb-FGCs-unsplash.jpg" title="Chill Nights"/>
                </div>
                <div className="template" onClick={() => setTemplateModalShow(true)}>
                <RoutineCard image="https://i.postimg.cc/P5Gxsphw/kilarov-zaneit-1-Mqa-Cfb-FGCs-unsplash.jpg" title="Chill Nights"/>
                </div>
                <div className="template" onClick={() => setTemplateModalShow(true)}>
                <RoutineCard image="https://i.postimg.cc/P5Gxsphw/kilarov-zaneit-1-Mqa-Cfb-FGCs-unsplash.jpg" title="Chill Nights"/>
                </div>
                <TemplateRoutineModal
                    show={templateModalShow}
                    onHide={() => setTemplateModalShow(false)}
                />
            </div>
            <h2>Your Night Routine</h2>
            <div className="routineCards customs">
                {/* {routineCards.map(({id}) =>
                    <div className="custom" onClick={() => setCustomModalShow(true)}>
                        <RoutineCard image="https://i.postimg.cc/P5Gxsphw/kilarov-zaneit-1-Mqa-Cfb-FGCs-unsplash.jpg" title={id}/>
                        <List routines={'Line one, Line two, Line three'}/>
                    </div>
                )} */}
                {/* <div className="custom" onClick={() => setCustomModalShow(true)}>
                    <RoutineCard image="https://i.postimg.cc/P5Gxsphw/kilarov-zaneit-1-Mqa-Cfb-FGCs-unsplash.jpg" title="Chill Nights"/>
                    <List routines={'Line one, Line two, Line three'}/>
                </div>
                <div className="custom" onClick={() => setCustomModalShow(true)}>
                    <RoutineCard image="https://i.postimg.cc/P5Gxsphw/kilarov-zaneit-1-Mqa-Cfb-FGCs-unsplash.jpg" title="Chill Nights"/>
                    <List routines={'Line one, Line two, Line three'}/>
                </div>
                <div className="custom" onClick={() => setCustomModalShow(true)}>
                    <RoutineCard image="https://i.postimg.cc/P5Gxsphw/kilarov-zaneit-1-Mqa-Cfb-FGCs-unsplash.jpg" title="Chill Nights"/>
                    <List routines={'Line one, Line two, Line three'}/>
                </div> */}
                <CustomRoutineModal
                    show={customModalShow}
                    onHide={() => setCustomModalShow(false)}
                />
            </div>
            <div className="routineCards customs">
                <div className="custom create" onClick={() => setCreateNewModalShow(true)} >
                    <div className="image">
                        <RoutineCard image="https://i.postimg.cc/MH2SQmmk/jan-kahanek-f-VUl6kz-Iv-Lg-unsplash.jpg"/>
                    </div>
                    <div className="middle">
                        <p>Create new</p>
                    </div>
                </div>
                <CreateRoutineModal
                    show={createNewModalShow}
                    onHide={() => setCreateNewModalShow(false)}
                />
            </div>
        </div>
    );
}

export default TemplateRoutine;