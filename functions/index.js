const functions = require("firebase-functions");
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

//initialize admin SDK using serviceAccountKey
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

const express = require('express');
const app = express();
const db = admin.firestore();
const storage = admin.storage();


const cors = require('cors');
app.use(cors({origin:true}));

//Create
app.post('/api/signup', (req, res) => {
    (async () => {
        try
        {
            await db.collection('users').doc(req.body.id)
            .set({
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                imgURL: req.body.imgURL
            })
            return res.status(200).send();
        }
        catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.post('/api/user/:id/routine/:routineid', (req, res) => {
    (async () => {
        try
        {
            await db.collection('users').doc(req.params.id).collection('Routines').doc(req.params.routineid)
            .set(req.body)
            return res.status(200).send();
        }
        catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

//Read
// app.get('/api/users', (req, res) => {
//     (async () => {
//         try
//         {
//             let query = db.collection('users');
//             let response = []

//             // const data = await query.get();
//             // data.forEach(doc => {
//             //     response.push(doc.data())
//             //     return response;
//             // });


//             await query.get().then(querySnapshot => {
//                 let docs = querySnapshot.docs;

//                 for (let doc of docs)
//                 {
//                     const selectedItem = {
//                         id: doc.data().id,
//                         name: doc.data().name,
//                         username: doc.data().username,
//                         email: doc.data().email,
//                         imgURL: doc.data().imgURL
//                     };
//                     response.push(selectedItem);
//                 }
//                 return response;
//             })
//             return res.status(200).send(response);
//         }
//         catch (error) {
//             console.log(error);
//             return res.status(500).send(error);
//         }
//     })();
// });


app.get('/api/user/:id', (req, res) => {
    (async () => {
        try
        {
            const document = db.collection('users').doc(req.params.id)
            let product = await document.get();
            let response = product.data();

            return res.status(200).send(response);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.get('/api/user/:id/routines', (req, res) => {
    (async () => {
        try
        {
            let query = db.collection('users').doc(req.params.id).collection('Routines');
            let response = []

            const data = await query.get();
            data.forEach(doc => {
                response.push({id: doc.id, ...doc.data()})
                return response;
            });
            return res.status(200).send(response);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.get('/api/user/:id/routine/:routineid', (req, res) => {
    (async () => {
        try
        {
            const document = db.collection('users').doc(req.params.id).collection('Routines').doc(req.params.routineid)
            let response = [];
            await document.get().then((doc) => {
                if (doc.empty) {
                    console.log("not exist")
                }
                else {
                    response.push(
                        {
                            id: doc.id
                        },
                        {
                            activity: doc.data().routine1.activity,
                            minutes:  doc.data().routine1.minutes
                        },
                        {
                            activity:  doc.data().routine2.activity,
                            minutes:  doc.data().routine2.minutes
                        },
                        {
                            activity:  doc.data().routine3.activity,
                            minutes:  doc.data().routine3.minutes
                        },
                        {
                            activity:  doc.data().routine4.activity,
                            minutes:  doc.data().routine4.minutes
                        },
                        {
                            activity: doc.data().routine5.activity,
                            minutes: doc.data().routine5.minutes
                        },
                        {
                            link: doc.data().video.link,
                            minutes: doc.data().video.minutes,
                            title: doc.data().video.title
                        },
                        {
                            totalDuration: doc.data().totalDuration
                        }
                    );
                }
            })
            return res.status(200).send(response);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.get('/api/template-routines', (req, res) => {
    (async () => {
        try
        {
            let query = db.collection('templates');
            let response = [];

            const data = await query.get();
            data.forEach(doc => {
                response.push({id: doc.id, ...doc.data()})
                return response;
            });
            return res.status(200).send(response);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.get('/api/template-routine/:id', (req, res) => {
    (async () => {
        try
        {
            const document = db.collection('templates').doc(req.params.id);
            let response = [];
            await document.get().then((doc) => {
                if (doc.empty) {
                    console.log("not exist")
                }
                else {
                    response.push(
                        {
                            id: doc.id
                        },
                        {
                            activity: doc.data().routine1.activity,
                            minutes:  doc.data().routine1.minutes
                        },
                        {
                            activity:  doc.data().routine2.activity,
                            minutes:  doc.data().routine2.minutes
                        },
                        {
                            activity:  doc.data().routine3.activity,
                            minutes:  doc.data().routine3.minutes
                        },
                        {
                            activity:  doc.data().routine4.activity,
                            minutes:  doc.data().routine4.minutes
                        },
                        {
                            activity: doc.data().routine5.activity,
                            minutes: doc.data().routine5.minutes
                        },
                        {
                            link: doc.data().video.link,
                            minutes: doc.data().video.minutes,
                            title: doc.data().video.title
                        },
                        {
                            totalDuration: doc.data().totalDuration
                        }
                    );
                }
            })
            return res.status(200).send(response);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


//Update
app.put('/api/user/:id', (req, res) => {
    (async () => {
        try
        {
            const document = db.collection('users').doc(req.params.id)
            await document.update({
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                imgURL: req.body.imgURL
            })
            return res.status(200).send();
        }
        catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

app.put('/api/user/:id/routine/:routineid', (req, res) => {
    (async () => {
        try
        {
            const document = db.collection('users').doc(req.params.id).collection('Routines').doc(req.params.routineid);
            await document.update(req.body)
            return res.status(200).send();
        }
        catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

//Delete
app.delete('/api/user/:id/routine/:routineid', (req, res) => {
    (async () => {
        try
        {
            const document = db.collection('users').doc(req.params.id).collection('Routines').doc(req.params.routineid)
            await document.delete();
            return res.status(200).send();
        }
        catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});



//Export the api to firebase Cloud Functions
exports.app = functions.https.onRequest(app);