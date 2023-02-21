const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = () => {
	mongoose
        .connect(
            "mongodb://nilifri:Plvkyiw7pAbBDui0@ac-2okoeot-shard-00-01.jrz19fq.mongodb.net:27017/niliDB?ssl=true&replicaSet=atlas-szqdd3-shard-0&authSource=admin&retryWrites=true&w=majority"
        )
		.then(() => console.log("Connected to niliDB!"))
		.catch((error) => console.log(error));
};

module.exports = connectDB;

            
