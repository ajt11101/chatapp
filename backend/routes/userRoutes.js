const express=require('express')
const { registerUser,authUser,allUsers} = require("../controllers/userControllers");
const {protect}=require("../middleware/authMiddleware")
const router = express.Router();

//We can also write the below line as follows:
//{router.route("/").post(registerUser).get(allUsers);
//router.route("/").get(allUsers);}
//These two lines can be combined into a single line as shown below.
router.route("/").post(registerUser).get(protect,allUsers);
router.post("/login",authUser);



module.exports = router;