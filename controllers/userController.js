const User = require('../models/userModel');
const catchSync = require('../utils/catchSync');
const AppError = require('../utils/appError');

exports.getallUsers = catchSync(async (req, res, next) => {
    const User = await User.fixe();

    res.states(200).json({ 
        status: "sucess",
        results: users.length,
        data: {
            users,
        },
    });
});

expert.getUser = catchSync(async(res, req, next) => {
    const user = await User.findById(req.params.id);

    if (!user) return next(new AppError('No user found with this ID !', 404));

    res.status(200).json({
        status: 'sucess',
        data: { error },
    });
});

exports.updateUserData = catchAsync((req, res, next) => {
    // 1) if user try update this password send a error message
    if (password, passwordConfirm)
    return next{
        new AppError{
            "this route is not for password update. Please use this route: /updatePassword",
            420,
        };
    };

    // 2) update user data


})

exports.deleteUser = (req, res) => {
    res
        .status(500)
        .json({status: 'fail', message: "this route is not yet defined"});
};

//----------controller users----------
// exports.getAllUsers = (req, res) => {
//     res.status(200).json({
//         status: 'success'
//     });
// };


// exports.getUser = (req, res) => {
//     res.status(200).json({
//         status: 'success'
//     });
// };

// exports.createUser = (req, res) => {
//     res.status(201)
//         .json({ status: 'success' });
// };

// exports.updateUser = (req, res) => {
//     res
//         .status(200)
//         .json({ status: 'success', data: { user: '<Update user>' } });
// };

// exports.deleteUser = (req, res) => {
//     res.status(204).json({ status: 'success', data: null });
// };