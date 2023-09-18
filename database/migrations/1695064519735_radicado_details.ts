import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "radicado_details";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .increments("DRA_CODIGO")
        .unsigned()
        .primary()
        .comment("llave primaria");
      table
        .string("DRA_RADICADO", 12)
        .notNullable()
        .unique()
        .comment("Radicado de tipo numero de maximo 12 digitos");
      table.date("DRA_FECHA_RADICADO").notNullable();
      table
        .string("DRA_RADICADO_ORIGEN", 12)
        .notNullable()
        .comment("Radicado Origen de tipo numero de maximo 12 digitos");
      table.date("DRA_FECHA_ORIGEN").notNullable();
      table
        .string("DRA_NOMBRE_APELLIDOS", 100)
        .notNullable()
        .comment("se carga con los nombres y apellidos del usuario logueado");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      //table.timestamp("created_at", { useTz: true });
      //table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
