import RadicadoDetail from "App/Models/RadicadoDetail";
import Factory from "@ioc:Adonis/Lucid/Factory";

export default Factory.define(RadicadoDetail, ({ faker }) => {
  return {
    dra_codigo: parseInt(faker.random.numeric(2)),
    dra_radicado: faker.random.numeric(12),
    dra_fecha_radicado: faker.date.past(),
    dra_radicado_origen: faker.random.numeric(12),
    dra_fecha_origen: faker.date.past(),
    dra_nombre_apellidos: faker.person.fullName(),
  };
}).build();
