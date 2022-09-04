<!-- MVC concept to break code for performance -->
M => model (schema/structure of mongoDB Collections)
V = views (React)
c = contrllers (Logic/subset of routes)

Schema(bluePrint/class)    model(Placeholder/obj)
<!-- similar to class and obj -->

Operators in MongoDB


<!-- .populate points to  Book table -->
const user = UserModel.find({
        issuedbook :{$exists:true},
    }).populate("issuedBook");

<!-- DTO= data Transform OBJECT-->
Adding and removing of data in an Object..

