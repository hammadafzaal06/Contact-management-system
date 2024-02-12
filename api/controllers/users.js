const User = require("../models/user");


const getAllUsers = async(req, res, next) => {
try{
    const docs = await User.find();
    console.log(docs);
    res.status(201).json({
        message: "Here is the List of All Users",
         user: docs
    });

} catch(err) {
   console.log(err)
   res.status(500).json({
    error : err,
   })


};

}

const getUserById = async(req, res, next) => {
    try{
        const doc = await User.findById(req.params.id);
        console.log(doc);
        res.status(201).json({
            message: "This is the user",
            user: doc
        });
    }
        catch(error) {
            console.log(err);
            res.status(500).json({
                error: err,
            })

        }
}

const createUser = async(req, res, next) => {
try {
    const user = new User(req.body);
    const doc = await user.save();
    console.log(doc);
    res.status(201).json({
        message : "User Created SuccessFully",
        user: doc
    });
}
    catch(err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }

};

const updateUserById = async(req, res, next) => {
    try{
        const result = await User.findOneAndUpdate(
        {_id : req.params.id},
        {$set : req.body},
        {new : true}
        );
        console.log(result);
        res.status(201).json({
            message : "User updated successFully",
            user: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
};

const deleteUsersById = async(req, res, next) => {
try{
    const result = await User.findByIdAndDelete(req.params.id);
    console.log(result);
    res.status(201).json({
        message: " user deletd Successfully",
        user : result
    });
} catch(err) {
    console.log(err)
    res.status(500).json({
        error: err
    })
}
};


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUsersById
};




