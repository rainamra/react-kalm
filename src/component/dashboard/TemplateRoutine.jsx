//by Rainamira Azzahra
import React, { useState, useEffect } from "react";
import { Modal, Button, Col, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import './TemplateRoutine.css';
import RoutineCard from "./RoutineCard";
import { useAuth } from "../../contexts/AuthContext"
import { useRoutine } from "../../contexts/RoutineContext"
import LoadSpinner from '../loading/LoadSpinner';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

function CreateRoutineModal(props) {
    return (
    <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    animation={false}
    >
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Create New Night Routine
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <p className="font-italic">Hi, let's create a night routine. You could personally give name,
            description, and cover photo for your routine.
            We hope you can get a good night sleep after!</p>
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
    const [routineCards, setRoutineCards] = useState([]);
    const [templateCards, setTemplateCards] = useState([]);
    const [templateRoutines, setTemplateRoutines] = useState([]);
    const [modalTitle, setModalTitle] = useState('');
    const [modalDuration, setModalDuration] = useState('');
    const [modalDesc, setModalDesc] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [username, setUsername] = useState("");

    const { currentUser } = useAuth();
    const { selectedRoutine } = useRoutine();

    useEffect(() => {
        setTimeout(() => {
            fetchUser();
            fetchCustomRoutine();
            fetchTemplateRoutine();
            setIsLoaded(true)
        }, 2000)
    }, [])

    const fetchCustomRoutine = async () => {
        axios.get(`api/user/${currentUser.uid}/routines`)
        .then(res => {
            setRoutineCards(res.data);
            console.log(routineCards);
        })
    };

    const fetchUser = async () => {
          axios.get(`api/user/${currentUser.uid}`)
          .then(res => {
            setUsername(res.data.name);
        })
      }

    const fetchTemplateRoutine = async () => {
        axios.get(`api/template-routines`)
        .then(res => {
            setTemplateCards(res.data);
            console.log(templateRoutines);
        })
    };

    const deleteRoutine = async () => {
        axios.delete(`api/user/${currentUser.uid}/routine/${modalTitle}`)
        .then(res => {
            alert("Routine successfully deleted");
        })
    };

    function CustomRoutineModal(props) {
        return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Let's start your Night Routine!
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>{modalTitle}</h4>
            <p className="mt-3">Duration: {modalDuration} minutes</p>
            <p>Description: {modalDesc}</p>
        </Modal.Body>
        <Modal.Footer>
            <Col>
            <Button
                variant="danger"
                color="dark"
                onClick={() => {
                    props.onHide();
                    deleteRoutine();
                }}
            >
            <DeleteIcon className="mr-1 pb-1"/>
            Delete
            </Button>
            </Col>
            <Col className="text-right">
            <Button onClick={props.onHide} className="mr-3">
                <Link to="/update-routine" className="link">Edit</Link>
            </Button>
            <Button onClick={props.onHide}>
                <Link to="/ongoing-routine" className="link">Start</Link>
            </Button>
            </Col>
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
    animation={false}
    >
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            {modalTitle}
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <p>Duration: {modalDuration}</p>
        <p>Description: {modalDesc}</p>
        <ul>
            {templateRoutines.map((routine, i) => (
                 <li key={i}>{routine.activity}</li>
            ))}
        </ul>
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={props.onHide}>
            <Link to="/template-routine" className="link">Start</Link>
        </Button>
    </Modal.Footer>
    </Modal>
);
}

    return (
        <>
        {isLoaded === true ?
        <div className="template-routine mt-5 pt-5">
            <div className="mb-5">
            <h4 className="float-left mr-2">Welcome,  </h4>
            <h6 className="font-italic pt-2">{ username}...</h6>
            </div>
                <h2>Night Routine Template</h2>
                <p>We provide different kinds of night routine for you to try out!</p>
                <div className="routineCards templates">
                {templateCards.map((card, i) => (
                        <div key={i} className="template" onClick={() => {setTemplateModalShow(true);
                            setModalTitle(card.id);
                            setModalDuration(card.totalDuration);
                            setModalDesc(card.description);
                            setTemplateRoutines([
                                {
                                    activity: card.routine1.activity
                                },
                                {
                                    activity: card.routine2.activity
                                },
                                {
                                    activity: card.routine3.activity
                                },
                                {
                                    activity: card.routine4.activity
                                },
                                {
                                    activity: card.routine5.activity
                                }

                            ]);
                            selectedRoutine(card.id);
                            }
                            }>
                            <RoutineCard image={card.imgURL} title={card.id}/>
                        </div>
                    ))}
                    <TemplateRoutineModal
                        show={templateModalShow}
                        onHide={() => setTemplateModalShow(false)}
                    />
                </div>
                <h2>Your Night Routine</h2>
                <p>List of your personalized routines are here!</p>
                <div className="routineCards customs mb-5 pb-2">
                    {routineCards.map((card, i) => (
                        <div key={i} className="custom" onClick={() => {setCustomModalShow(true);
                            setModalTitle(card.id);
                            setModalDuration(card.totalDuration);
                            setModalDesc(card.description);
                            selectedRoutine(card.id);
                            }
                            }>
                            <RoutineCard image={card.imgURL} title={card.id} list={<><li>{card.routine1.activity}</li>
                            <li >{card.routine2.activity}</li>
                            <li>{card.routine3.activity}</li>
                            <li>{card.routine4.activity}</li>
                            <li>{card.routine5.activity}</li></>}/>
                        </div>
                    ))}
                    <CustomRoutineModal
                        show={customModalShow}
                        onHide={() => setCustomModalShow(false)}
                    />
                </div>
                <h2>Create New Night Routine</h2>
                <p>Start creating your night routine by clicking the picture below! </p>
                <div className="routineCards customs">
                    <div className="custom create mb-5" onClick={() => setCreateNewModalShow(true)} >
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
            </div>: <LoadSpinner />}
        </>
    );
}

export default TemplateRoutine;