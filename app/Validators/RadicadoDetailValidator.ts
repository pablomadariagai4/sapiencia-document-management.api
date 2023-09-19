import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class RadicadoDetailValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    dra_radicado: schema.string([rules.maxLength(12)]),
    dra_fecha_radicado: schema.date(),
    dra_radicado_origen: schema.string([rules.maxLength(12)]),
    dra_fecha_origen: schema.date(),
    dra_nombre_apellidos: schema.string([
      rules.minLength(3),
      rules.maxLength(100),
    ]),
  });

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    "dra_radicado.required": "El radicado es requerido",
    "dra_radicado.unique": "El radicado ya existe",
    "dra_radicado.maxLength": "El radicado debe tener máximo 12 dígitos",
    "dra_fecha_radicado.required": "La fecha de radicado es requerida",
    "dra_fecha_radicado.date": "La fecha de radicado debe ser una fecha valida",
    "dra_radicado_origen.required": "El radicado origen es requerido",
    "dra_radicado_origen.maxLength":
      "El radicado origen debe tener máximo 12 dígitos",
    "dra_fecha_origen.required": "La fecha de radicado origen es requerida",
    "dra_nombre_apellidos.required": "El nombre y apellidos es requerido",
    "dra_nombre_apellidos.minLength":
      "El nombre y apellidos debe tener mínimo 3 caracteres",
    "dra_nombre_apellidos.maxLength":
      "El nombre y apellidos debe tener máximo 100 caracteres",
  };
}
