import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class RadicadoDetail extends BaseModel {
  @column({ isPrimary: true })
  public DRA_CODIGO: number;

  @column()
  public DRA_RADICADO: string;

  @column()
  public DRA_FECHA_RADICADO: Date;

  @column()
  public DRA_RADICADO_ORIGEN: string;

  @column()
  public DRA_FECHA_ORIGEN: Date;

  @column()
  public DRA_NOMBRE_APELLIDOS: string;
}
