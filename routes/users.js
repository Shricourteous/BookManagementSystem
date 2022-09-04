const express = require("express");
const { getAllUsers, getSingleUserById, deleteUserById, updateUserById, newUser, getSubscribtionDetailsById } = require("../controllers/user-controller");
const {users} = require("../data/users.json");


const router = express.Router();

router.get("/",getAllUsers);

/**
 * Route: /users
 * Method: GET
 * Description: Get All user
 * Access: Public
 * Parameters: none
 */
router.get("/:id",getSingleUserById);
/**
 * Route: /users
 * Method: POST
 * Description: Create new user
 * Access: Public
 * Parameters: none
 */

router.post("/",newUser);

/**
 * Route: /users/:id
 * Method: PUT
 * Description: Updating user data
 * Access: Public
 * Parameters: id
 */

router.put("/:id",updateUserById)    
/**
 * Route: /users/:id
 * Method: PUT
 * Description: Updating user data
 * Access: Public
 * Parameters: id
 */
router.delete("/:id",deleteUserById);

/**
 * Route: /users/subscription-details/:id
 * Method: GET
 * Description: Get all user subscription details
 * Access: Public
 * Parameters: id
 */

router.get("/subscription-details/:id",getSubscribtionDetailsById);

module.exports = router;



















