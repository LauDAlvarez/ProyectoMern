const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemaskill = new schema({
    nombre: String,
    email: String,
    telefono: String,
    idUser: String
}) 

const ModeloSkills = mongoose.model('skills', schemaskill );

module.exports = ModeloSkills;