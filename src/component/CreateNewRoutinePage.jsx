import React, { useState, useRef } from 'react'
import CreatableSelect from 'react-select/creatable';
import { InputGroup, FormControl, Form,  Button, Alert, Row, Col, Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import VideoSelection from "./VideoSelection";
import { useAuth } from "../contexts/AuthContext"
import { db } from '../firebase'

function SaveModal(props) {
    return (
    <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
            Routine Created
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        Woohoo, you're all set! You can start your routine now or click home and start when you ready.
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={props.onHide}>
            <Link to="/ongoing-routine" className="link">Start Routine</Link>
        </Button>
        <Button onClick={props.onHide}>
            <Link to="/" className="link">Home</Link>
        </Button>
    </Modal.Footer>
    </Modal>
);
}

function CreateNewRoutinePage() {

    var routinelist = [
        {
            value:1,
            label:"Read a Book"
        },
        {
            value:2,
            label:"Take a Bath"
        },
        {
            value:3,
            label:"Drink a Cup of Tea"
        },
        {
            value:4,
            label:"Do Skincare"
        },
        {
            value:5,
            label:"Make a To-do List"
        },
        {
            value:6,
            label:"Watch an episode of Series on Netflix"
        },
        {
            value:7,
            label:"Snacking"
        }
    ];

    var videolist = [
        {
            id:1,
            title:"Drive Around Jakarta",
            link:"https://youtu.be/LF3LxMKuSM0",
            desc:"A video of driving through Jakarta Inner Ring Road. Designed to simulate the sights and sounds of a long road trip and help stubborn sleepers fall asleep as though they were on a long car ride."
        },
        {
            id:2,
            title:"Windy Desert",
            link:"https://youtu.be/uKkJ0etAO5s",
            desc:"The wind blows over dunes tries to dance with the sand and creates an intensive Desert Sound.The composition fits your needs to meditate, erase annoying noise, and sleep."
        },
        {
            id:3,
            title:"Sit by The River",
            link:"https://youtu.be/zofBinqC2F4",
            desc:"Relax with the sights and sounds of a pure mountain river and the springtime songs of robin, blackbird, thrush, chaffinch and other birds singing in the forest."
        },
        {
            id:4,
            title:"Rainy Days",
            link:"https://youtu.be/HmH4W8JOifg",
            desc:"People hear nature sounds in many different ways to relax, fall asleep or just to calm the soul. Sound of heavy rain can help insomnia, ease anxiety, and reduce stress."
        },
        {
            id:5,
            title:"Ocean Breeze",
            link:"https://youtu.be/UyZfCrrdbm8",
            desc:"Relax with the total tranquility of this pristine tropical beach and the sound of the crystal clear ocean waters gently lapping over the sandy shore of this wild exotic island."
        },
        {
            id:6,
            title:"Crickets Chirping",
            link:"https://youtu.be/I4o87O4Pd_k",
            desc:"Relax and sleep with the gentle calming sounds of crickets chirping in the grass on a warm summer night. This nature video can be used to create a peaceful and calming ambiance before you sleep."
        },
        {
            id:7,
            title:"Warm Fireplace",
            link:"https://youtu.be/gB3XH5t9QCA",
            desc:"Create a cozy and relaxing atmosphere with the crackling sounds and warming views of a fire burning in an open fireplace. This video and sounds can be used to create a feeling of peace and tranquility, warmth and coziness before you sleep."
        },
        {
            id:8,
            title:"Snowy Days",
            link:"https://youtu.be/ne7g_Os_8hM",
            desc:"Relax and enjoy the dreamy scenery of snow softly falling over the trees and houses, illuminated by the warm glowing light of street lanterns at dusk. Create a calm and cozy atmosphere or a festive Christmas mood before you sleep."
        },
        {
            id:9,
            title:"Birds Chirping",
            link:"https://youtu.be/IsPBplWLImI",
            desc:"Relax and enjoy the beauty of Bluebell flowers in bloom, covering the ground of an old forest in England and accompanied by the cheerful songs of blackbird, chaffinch, robin and other birds chirping up in the trees."
        }
    ];

    const titleRef = useRef();
    const [routine, setRoutine] = useState('');
    const [duration, setDuration] = useState('');
    const [routines, setRoutines ] = useState([]);
    const [inputs, setInputs ] = useState([]);
    const [error, setError] = useState('');
    const [tagInputValue, setTagInputValue] = useState('');
    const [tagValue, setTagValue] = useState('');
    const [videos, setVideos] = useState(false);
    const [video, setVideo] = useState([]);
    const [isSelected, setSelected] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const { currentUser } = useAuth();

    const routineHandler = e =>
    {
        setRoutine(e.label);
    }

    async function saveHandler(e) {
        e.preventDefault();

        try {

            const totalDuration = Number(routines[0].minutes) + Number(routines[1].minutes) + Number(routines[2].minutes) + Number(routines[3].minutes) + Number(routines[4].minutes);
            console.log(totalDuration);
            setError('');
                await db.collection('users').doc(currentUser.uid).collection('Routines').doc(titleRef.current.value).set({
                        routine1: {
                            activity: routines[0].activity,
                            minutes: routines[0].minutes
                        },
                        routine2: {
                            activity: routines[1].activity,
                            minutes: routines[1].minutes
                        },
                        routine3: {
                            activity: routines[2].activity,
                            minutes: routines[2].minutes
                        },
                        routine4: {
                            activity: routines[3].activity,
                            minutes: routines[3].minutes
                        },
                        routine5: {
                            activity: routines[4].activity,
                            minutes: routines[4].minutes
                        }
                }).then(() => {
                db.collection('users').doc(currentUser.uid).collection('Routines').doc(titleRef.current.value).set({
                    video: {
                        title: video[0].title,
                        link: video[0].link,
                        minutes: 20
                    },
                    totalDuration: totalDuration + 20
                }, { merge: true })
            })
            setModalShow(true);
        } catch {
            setError("Failed to create a new routine");
        }

    }

    const newInputs = e => {

        setError("");

        if (titleRef.current.value === "") {
            return setError("Please name your series of routine");
          }

        if (inputs.length < 5 && inputs.length === 0 ) {
            setInputs([...inputs, {
                id: inputs.length,
                number: inputs.length+1,
            }])
            console.log(routines);

        }
        else if (inputs.length > 0 && inputs.length < 5) {
            setRoutines([...routines, {
                    id: routines.length,
                    activity: routine,
                    minutes: duration
                }])
            console.log(routines);

            setInputs([...inputs, {
                id: inputs.length,
                number: inputs.length+1,
            }])
        }
        else if (inputs.length < 6) {
            setRoutines([...routines, {
                    id: routines.length,
                    activity: routine,
                    minutes: duration
                }])
            console.log(routines[0].activity);
        }

        setRoutine('');
        setDuration('');
    }

    const handleKeyDown = event => {
        if (!tagInputValue) return
        switch (event.key) {
          case 'Enter':
          case 'Tab':
            setTagValue([...tagValue, createOption(tagInputValue)])
            setTagInputValue('')
            event.preventDefault()
            break

          default:
            break
        }
    }

    const createOption = label => ({
        label,
        value: label
    })

    const handleInputChange = (value) => {
        setTagInputValue(value)
    }

    const startButton = () =>
    {
        if (inputs.length === 0 ) {
        return <IconButton color="primary" onClick={newInputs}><AddCircleIcon fontSize="large"/></IconButton>
        }
    }

    const nextButton = () =>
    {
        if (routines.length === 5 ) {
           return <Button className="rounded-pill" type="submit" onClick={() => {setVideos(true)}}>Done</Button>
        }
    }

    const saveButton = () =>
    {
        if (video.length > 0 ) {
           return <Button className="rounded-pill" type="submit" onClick={saveHandler}>Save</Button>
        }
    }

    function deleteInputs(id) {
        const newInputs = inputs.filter((input) => input.id !== id);
        setInputs(newInputs);

        deleteRoutine(id);
    }

    function deleteRoutine(id) {
        console.log(routines);
        const newRoutines = routines.filter((r) => r.id !== id);
        setRoutines(newRoutines);
        console.log(routines);
    }

    function videoHandler(videoLink, videoTitle) {
        setVideo([
            {
                title: videoTitle,
                link: videoLink
            }]);
        console.log(video);
        console.log(videoLink);
        setSelected(true);
    }

    const VideoSelections = () => {
        return (
        <>
        <h2 className="mb-5">Choose Final Routine</h2>
        <div className="w-100 row justify-content-center">
            {
                videolist.map(v => {
                    return (
                        <div className="video-container w-25 m-3" onClick={e => {e.preventDefault(); videoHandler(v.link, v.title);}}>
                        <VideoSelection youtubeURL={v.link} theme={v.title} description={v.desc} status={v.link === video ? isSelected : null}/>
                        </div>
                    )
                })
            }
        </div>
        </>
    )}

    return (
        <>
            <h2 className="text-center mt-5 mb-5">Create Your Night Routine</h2>
            <div className="row justify-content-center">
                <Row className="option w-50 mt-3 align-items-center">
                    <Col className="text-muted" md="1">
                    <h3>
                    Title
                    </h3>
                    </Col>
                    <Col md="10">
                    <Form.Control type="text" placeholder="Name your series of routine here..." ref={titleRef}/>
                    </Col>
                </Row>
            </div>
            <div className="options row justify-content-center">
                {error && <Alert variant="danger" className="mt-5">{error}</Alert>}
            </div>
            <div className="row justify-content-center">
            {startButton()}
            </div>
            {
                inputs.map(input => {
                    return (
                        <div className="options row justify-content-center">
                            <Row className="option w-50 mt-3 text-center align-items-center">
                                <Col  className="text-muted" md="1">
                                    <h1>{input.number}</h1>
                                </Col>
                                <Col md="10">
                                    <CreatableSelect
                                    options={routinelist}
                                    onChange={routineHandler}
                                    placeholder= "Select a routine"
                                    isDisabled={input.id+1 !== inputs.length || routines.length === 5}
                                    onKeyDown={handleKeyDown}
                                    onInputChange={handleInputChange}
                                    />
                                    <br/>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                        placeholder="Duration"
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        onChange={e => setDuration(e.target.value)}
                                        disabled={input.id+1 !== inputs.length || routines.length === 5}
                                        />
                                        <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">Minutes</InputGroup.Text>
                                        </InputGroup.Prepend>
                                    </InputGroup>
                                </Col>
                                <Col md="1">
                                <IconButton color="primary" onClick={newInputs} disabled={input.id+1 !== inputs.length || routines.length === 5}>
                                    <DoneIcon fontSize="large"/>
                                </IconButton>
                                <IconButton color="primary" disabled={input.id+1 !== inputs.length} onClick={() => deleteInputs(input.id)}>
                                    <DeleteIcon fontSize="large"/>
                                </IconButton>
                                </Col>
                            </Row>
                        </div>
                    )
                })
            }
            <div className="row justify-content-center">
                {nextButton()}
            </div>
            <div className="w-100 row justify-content-center mt-5">
                {videos ? <VideoSelections /> : null}
            </div>
            <div className="row justify-content-center mb-5 mt-3">
                {saveButton()}
                <SaveModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </>
    )
}

export default CreateNewRoutinePage

