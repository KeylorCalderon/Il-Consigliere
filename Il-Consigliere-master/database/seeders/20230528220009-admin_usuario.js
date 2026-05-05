module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuario', [{
      cedula: '1234',
      nombre: 'admin',
      apellido: 'admin',
      segundo_apellido: 'admin',
      clave: '$2b$10$wSwBXdbh3hQCkXRWokqqS.QfSVshTh6YeiHr2oaxzNAx3VS9JpVjm',
      id_tipo_convocado: 3
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuario', null, {});
  }
};
