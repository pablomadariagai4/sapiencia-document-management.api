import RadicadoDetail from "App/Models/RadicadoDetail";
import Factory from "@ioc:Adonis/Lucid/Factory";

export default Factory.define(RadicadoDetail, ({ faker }) => {
  return {
    DRA_RADICADO: faker.random.numeric(12),
    DRA_FECHA_RADICADO: faker.date.past(),
    DRA_RADICADO_ORIGEN: faker.random.numeric(12),
    DRA_FECHA_ORIGEN: faker.date.past(),
    DRA_NOMBRE_APELLIDOS: faker.name.fullName(),
  };
}).build();
