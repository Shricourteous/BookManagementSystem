# BookManagementSystem

Creating a New Project on <b>Book Management System</b>,<br/>
In the presence of <b>Mr.ExpressJs</b> Son of <b>Mr.NodeJs,</b>,<br/>
Powered by <b>JavaScript</b> 


# book-record-management

This is a book record management API Backend for the management of records and books

# API Documentation link

https://documenter.getpostman.com/view/11423344/VUqyoZdU

# Routes and Endpoints

## /users

POST: Create a new user <br/>
GET: Get all list of users <br/>

## /users/{id}

GET: Get a user by id <br/>
PUT: Update a user by id <br/>
DELETE: Delete a user by id (check if he/she still has an issued book)<br/> (is there any fine to be paid) 

## /users/subscription-details/{id}

GET: Get user subscription details <br/>

1. Date of subscription<br/>
2. Valid till<br/>
3. Fine if any<br/>

## /books

GET: Get all books <br/>
POST: Create/Add a new book <br/>

## /books/{id}

GET: Get a book by id<br/>
PUT: Update a book by id <br/>

## /books/issued/by-user

GET: Get all issued books✅ <br/>

## /books/issued/withFine


# Subscription Types

Basic (3 months)<br/>
Standard (6 months)<br/>
Premium (12 months)<br/>

NOTE: dates will be in format mm/dd/yyyy<br/>

If the subscription date is 01/08/22<br/>
and Subscription type is Standard<br/>
the valid till date will be 01/02/23<br/>

If he has an issued book and the issued book is to be returned at 01/01/23<br/>
If he missed the date of return, then he gts a fine of Rs. 100./<br/>

If he has an issued book and the issued book is to be returned at 01/01/23<br/>
If he missed the date of return, and his subscription also expires, then<br/> he will get a fine of Rs 200.

<p style = "border:1px solid gray; background-color: #e0e0e0; border-radius:2%">
##Run in Terminal<br/>
##TO Install all Required packages<br/>
npm -i<br/>

##DB should add in .env file (MONGO_URI= uri)<br/>

</p>