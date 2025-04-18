import express from 'express';
import { UsersController } from '../controller/UsersController';

const router = express.Router();
const usersController = new UsersController();

router.post('/register', (req, res) => usersController.registerUser(req, res));
// router.get('/:email', (req, res) => usersController.getUser(req, res));
router.post('/createusers', (req, res) => usersController.createUser(req, res));
router.post('/updateusers', (req, res) => usersController.updateUser(req, res));
router.post('/deleteusers', (req, res) => usersController.deleteUser(req, res));

router.post('/getusersbyid', (req, res) => usersController.getUser(req, res));
router.post('/getallusers', (req, res) => usersController.getAllUsrs(req, res));
router.post('/getallusersbyroles', (req, res) => usersController.getUser(req, res));
router.post('/getallusersbyrolesoffset', (req, res) => usersController.getUser(req, res));
router.post('/getallusersbyrolesandname', (req, res) => usersController.getUser(req, res));
router.post('/deleteusersstatus', (req, res) => usersController.getUser(req, res));
router.post('/recoverdeleteduser', (req, res) => usersController.getUser(req, res));
router.post('/deleteaccount', (req, res) => usersController.getUser(req, res));
router.post('/deactivateaccount', (req, res) => usersController.getUser(req, res));
router.post('/getcustomsbyemailobile', (req, res) => usersController.getUser(req, res));
router.post('/sendemail', (req, res) => usersController.getUser(req, res));
router.post('/sendtestemail', (req, res) => usersController.getUser(req, res));
router.post('/getallsentemail', (req, res) => usersController.getUser(req, res));
router.post('/userlogout', (req, res) => usersController.getUser(req, res));

export default router;
