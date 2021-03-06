import User from "./../models/userModel";
import {getToken} from "../middlewares/util";

export default {
    createUser: async (req, res) => {
        const user = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
        const newUser = await user.save();
        if (newUser) {
          res.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
          })
        } else {
          res.status(401).send({ message: 'Invalid User Data.' });
        }
      
      },

      createAdmin: async (req, res) => { // TODO
        try {
          const user = new User({
            name: 'Alex',
            email: 'alexxldub@gmail.com',
            password: '1234',
            isAdmin: true
          });
          const newUser = await user.save();
          res.send(newUser);
        } catch (error) {
          res.send({ message: error.message });
        }
      },

      signIn: async (req, res) => {

        const signinUser = await User.findOne({
          email: req.body.email,
          password: req.body.password
        });
        if (signinUser) {
          res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
          })
      
        } else {
          res.status(401).send({ message: 'Invalid Email or Password.' });
        }
      
      },

      updateUser: async (req, res) => {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (user) {
          user.name = req.body.name || user.name;
          user.email = req.body.email || user.email;
          user.password = req.body.password || user.password;
          const updatedUser = await user.save();
          res.send({
            _id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: getToken(updatedUser)
          });
        } else {
          res.status(404).send({ message: 'User Not Found' });
        }
      
      },

      deleteUser: async (req, res) => {
        const deletedUser = await User.findById(req.params.id);
        if (deletedUser) {
          await deletedUser.remove();
          res.send({ message: "User Deleted", deletedUser });
        } else {
          res.status(404).send("Error in Deletion.");
        }
      },

}