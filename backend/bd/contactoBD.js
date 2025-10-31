import Contacto from "../models/modelContacto.js"

export async function nuevoContacto({nombre, edad}){
	const contacto=new Contacto({nombre, edad})
	const respuestaMongo=await contacto.save()
	return respuestaMongo
}

export async function mostrarContactos(){
	const contactoBD=await Contacto.find()
	return contactoBD
}

export async function buscarPorId(id){
	const contactoBD=await Contacto.find(id)
	return contactoBD
}

export async function editarContacto({id,nombre,edad}){
	const respuestaMongo=await Contacto.findByIdAndUpdate(id, {nombre,edad})
	return respuestaMongo
}

export async function borrarContacto(id){
	const respuestaMongo=await Contacto.findByIdAndUpdate(id)
	return respuestaMongo
}

export async function buscarContacto(nombre){
	const contactoBD = await Contacto.find({nombre})
	return contactoBD 
}
