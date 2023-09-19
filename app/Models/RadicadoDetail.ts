import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class RadicadoDetail extends BaseModel {
  public static table = "radicado_details";

  @column({ columnName: "DRA_CODIGO", isPrimary: true })
  public dra_codigo: number;

  @column({ columnName: "DRA_RADICADO" })
  public dra_radicado: string;

  @column({ columnName: "DRA_FECHA_RADICADO" })
  public dra_fecha_radicado: Date;

  @column({ columnName: "DRA_RADICADO_ORIGEN" })
  public dra_radicado_origen: string;

  @column({ columnName: "DRA_FECHA_ORIGEN" })
  public dra_fecha_origen: Date;

  @column({ columnName: "DRA_NOMBRE_APELLIDOS" })
  public dra_nombre_apellidos: string;
}
