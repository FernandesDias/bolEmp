var mongoose = require('mongoose');

var boletosSchema = mongoose.Schema({
    nomeEmpresa: {type: String},
    dados: {type: String}
});

module.exports = mongoose.model('Boletos', boletosSchema);