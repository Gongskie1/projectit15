const bcrypt = require('bcrypt');
const User = require("../../User_Register/models/User");

module.exports = {
    bcrypt_hash: (text) =>{

    const result = bcrypt
        .hash(text,10)
        .catch(err => console.error(err.message))

    return result;
    },

    bcrypt_compare: async (username) =>{
        try {
        const listOfUser = await User.findAll();

        const comparisonResults = await Promise.all(
            listOfUser.map(async (user) => {
                try {
                    const compare = await bcrypt.compare(username, user.username);
                    return compare;
                } catch (err) {
                    console.error(err.message);
                    return false; 
                }
            })
        );
        console.log(comparisonResults)
        const finding =  comparisonResults.find((word) => word);

        return finding
    } catch (error) {
        console.error(error.message);
        throw error;
    }


        
    }
}