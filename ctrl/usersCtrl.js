const User = require('../model/user.model');

module.exports.register = async (req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;
        //const name = req.body.name || '';
        console.log(email);
        console.log(password);
        //if the user dont enter email or password
        if (!email || !password) return res.status(400).json({
            success: false,
            message: 'please enter email and password'

        });



        //create a new user
        let newUser = await User.create({
            email,
            password

        });
        console.log(newUser);


        res.json({success: true, data: newUser});
    } catch (e) {
        console.log("bamba");
        res.status(500).json({success: false, message: e})
    }
};

module.exports.login = async (req, res) => {

    try {
        const email = req.body.email;
        const password = req.body.password;
        if (!email || !password) return res.status(400).json({
            success: false,
            message: 'please enter username and password'
        });
        let user = await User.findOne({email: email, password: password}); //search user with this data
        if (!user) return res.status(400).json({success: false, message: 'email or password are incorrect'}); //the name or password is encorrct


    } catch (e) {
        res.status(500).json({success: false, message: e})
    }

};