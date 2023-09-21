import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const router = express.Router();
let users = []

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
}
)
router.post('/', (req, res) => {

    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`user with the name ${user.Firstname} added to the data base`);


})
router.get('/:id', (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    const foundusers = users.find((user) => user.id == id);
    res.send(foundusers);
})
router.delete('/:id', (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    users = users.filter((user) => user.id == !id);
    res.send(`user with id ${id} deleted from the database.`);
})
router.patch('/:id', (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;
    const user = users.find((user) => user.id == id);
    if (firstname) user.firstname = firstname;
    if (lastname) user.lastname = lastname;
    if (age) user.age = age;
    // const user =users.find((user)=>user.id==!id);
    res.send(`user with id ${id} updated from the database.`);
})
export default router;