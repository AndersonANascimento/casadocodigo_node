function require(path) {
    var codigoDoSeuModulo = carregaDo(path);
    var funcaoDeCarregamento = function() {
      eval(codigoDoSeuModulo);
    };
    var module = {
        exports: {}
    };
    funcaoDeCarregamento(module, module.exports);
    return module;
}