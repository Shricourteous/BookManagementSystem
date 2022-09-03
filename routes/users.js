const express = require("express");
const router = express.Router();
const {users} = require("../data/users.json");
const { route } = require("./books");

router.get("/",(req, res)=>{
    res.status(200).json({
        success : true,
        users : users
    })
});

/**
 * Route: /users
 * Method: GET
 * Description: Get All user
 * Access: Public
 * Parameters: none
 */
router.get("/:id",(req,res)=>{
    const {id} = req.params;
    const user = users.find((each)=>each.id===id);
    if(!user){
        return res.status(404).json({
            success : false,
            message : "User Not found"
        });}
    return res.status(200).json({
        success : true,
        data : user
    });
});
/**
 * Route: /users
 * Method: POST
 * Description: Create new user
 * Access: Public
 * Parameters: none
 */

router.post("/",(req,res)=>{
    const {id , name, surname, email, subscriptionType, subscriptionDate} = req.body;
    const user = users.find((each)=> each.id === id );
    if(user){
        return res.status(404).json({
            success:false,
            message : "User already exists"
        })
    }
    users.push({
        id,
        name,
        surname,
        email,
        subscriptionType,
        subscriptionDate,
      });
      return res.status(201).json({
        success: true,
        data: users,
      });
    });


/**
 * Route: /users/:id
 * Method: PUT
 * Description: Updating user data
 * Access: Public
 * Parameters: id
 */

router.put("/:id",(req,res)=>{
    const {id} = req.params;
    const {data} = req.body;
    const user = users.find((each)=> each.id===id);
    if(!user){
        return res.status(404).json({
            message : "User not found",
        });
    }
    const updatedUser = users.map((each)=>{
        if(each.id === id){
            console.log("\nUpdating.......\n", data);
            return{
                ...each,
                ...data,
            };
        }
        return each; //send unupdated value
    });
    return res.status(200).json({
        message : "Successfully updates",
        data : updatedUser,
    });
})    
/**
 * Route: /users/:id
 * Method: PUT
 * Description: Updating user data
 * Access: Public
 * Parameters: id
 */
router.delete("/:id",(req,res)=>{
    const {id} = req.params;
    const user = users.find((each)=> each.id===id);
    if(!user){
        return res.status(404).json({
            success : false,
            message : "User not found"
        });
    }
    const index = users.indexOf(user);
    users.splice(index,1);
    return res.status(202).json({
        success : true,
        message : "Deleted the user",
        data : user
    });
});

/**
 * Route: /users/subscription-details/:id
 * Method: GET
 * Description: Get all user subscription details
 * Access: Public
 * Parameters: id
 */

router.get("/subscription-details/:id",(req,res)=>{
    const {id} = req.params;

    const user = users.find((each)=> each.id === id);
    if(!user)
        return res.status(404).json({
            success : false,
            messsage : "user not found",
        });
        const getDateInDays = (data = "") => {
            let date;
            if (data === "") {
              // current date
              date = new Date();
            } else {
              // getting date on bacis of data variable
              date = new Date(data);
            }
            let days = Math.floor(date / (1000 * 60 * 60 * 24));
            return days;
          };
        
          const subscriptionType = (date) => {
            if (user.subscriptionType === "Basic") {
              date = date + 90;
            } else if (user.subscriptionType === "Standard") {
              date = date + 180;
            } else if (user.subscriptionType === "Premium") {
              date = date + 365;
            }
            return date;
          };
  // Subscription expiration calculation
  // January 1, 1970, UTC. // milliseconds
  let returnDate = getDateInDays(user.returnDate);
  let currentDate = getDateInDays();
  let subscriptionDate = getDateInDays(user.subscriptionDate);
  let subscriptionExpiration = subscriptionType(subscriptionDate);

  console.log("Return Date ", returnDate);
  console.log("Current Date ", currentDate);
  console.log("Subscription Date ", subscriptionDate);
  console.log("Subscription expiry date", subscriptionExpiration);

  const data = {
    ...user,
    subscriptionExpired: subscriptionExpiration < currentDate,
    daysLeftForExpiration:
      subscriptionExpiration <= currentDate
        ? 0
        : subscriptionExpiration - currentDate,
    fine:
      returnDate < currentDate
        ? subscriptionExpiration <= currentDate
          ? 200
          : 100
        : 0,
  };

  res.status(200).json({
    success: true,
    data,
  });
});

module.exports = router;



















