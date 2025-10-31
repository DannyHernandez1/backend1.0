import mongoose from "mongoose"
import 'dotenv/config'

async function conectarBD(){
	try{
		const conexion=await mongoose.connect(process.env.KEY_MONGO)
		//const conexion=mongoose.connect("mongodb://localhost:27017/backend")
		console.log("Conexión establecida con Mongo Atlas")
	}
	catch(err){
		console.log("Error"+err)
	}
}

export default conectarBD