import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import RadicadoDetailFactory from "Database/factories/RadicadoDetailFactory";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await RadicadoDetailFactory.createMany(10);
  }
}
