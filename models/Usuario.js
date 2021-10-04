module.exports =(sequelize, Datatypes) =>{
    const u = sequelize.define(
        'Usuario',
        {
            nome: Datatypes.STRING(200),
            email: Datatypes.STRING(200),
            senha: Datatypes.STRING(256)
        },

        {
            tableName: "usuarios",
            // timestamps: false

        }
    );
    return u
    }