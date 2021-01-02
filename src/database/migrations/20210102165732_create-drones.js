
exports.up = function(knex) {
  return knex.schema
    .createTable('drone', (table) => {
      table.increments('id').primary()
      table.string('modelo').notNu
      table.string('fabricante').notNullable
      table.string('peso').notNullable
      table.string('dimensao').notNullable
      table.string('velocidade').notNullable
      table.string('velocascensao').notNullable
      table.string('velocdescensao').notNullable
      table.string('alturamax').notNullable
      table.string('duracaovoo').notNullable
      table.string('duracaovooest').notNullable
      table.string('duracaomediavoo').notNullable
      table.string('distanciamax').notNullable
      table.string('frequenciaa').notNullable
      table.string('armazenagem')
      table.string('btcapacidade').notNullable
      table.string('btvolts').notNullable
      table.string('btipo').notNullable
      table.string('btpeso')
      table.string('bateria').notNullable
      table.string('remotofreq').notNullable
      table.string('remotodistancia').notNullable
      table.string('remotobateria').notNullable
      table.string('camerasensor').notNullable
      table.string('cameraiso').notNullable
      table.string('camodosfoto').notNullable
      table.string('camodosvideo').notNullable
      table.string('camtxbites').notNullable
      table.string('camformatosft').notNullable
      table.string('camformatosvd').notNullable
      table.float('price')
      table.timestamp('created_at')
      table.timestamp('updated_at')
  })
}

exports.down = function(knex) {
  return knex.schema
    .dropTable("drone")
}
