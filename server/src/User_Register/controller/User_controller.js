const User = require("../models/User");
const bcrypt = require("../bcrypt_utils/bcrypt")
module.exports = {
    createUser : async (req, res) =>{
        const {username, password, email} = req.body;


        const bcrypt_result_username = await bcrypt.bcrypt_hash(username);
        const bcrypt_result_password = await bcrypt.bcrypt_hash(password);
        const bcrypt_result_email = await bcrypt.bcrypt_hash(email);


        const create_user = {
            username: bcrypt_result_username,
            password: bcrypt_result_password,
            email: bcrypt_result_email,
        }
        const bcrypt_compare_username = await bcrypt.bcrypt_compare(username);
        

        console.log("Controller: ",bcrypt_compare_username);

        if(bcrypt_compare_username === undefined ){
            await User.create(create_user)

            return res.json({
                result: "walay user"
            })
        }else{
            return res.json({
                result: "The User Exist"
            })
        }

        
        
    },

    list_user: async (req,res) =>{
        const list_user = await User.findAll();

        return res.json({
            data:list_user
        })
    },

    delete_all_user: async (req,res) =>{
        await User.destroy({
        truncate: true
        });

        res.json({
            message: "All user has been deleted"
        })
    }
}
