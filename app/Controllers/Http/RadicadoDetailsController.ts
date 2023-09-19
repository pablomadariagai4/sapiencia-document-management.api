import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import RadicadoDetail from "App/Models/RadicadoDetail";

export default class RadicadoDetailsController {
  public async index({ response }: HttpContextContract) {
    const radicadoDetailsList = await RadicadoDetail.all();

    return response.status(200).send(radicadoDetailsList);
  }

  public async store({ response }: HttpContextContract) {
    // const payload = await request.validate({
    //   schema: RadicadoDetailValidator
    // })
    return response.status(200).json({
      message: "Radicado store",
    });
  }

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params();
    try {
      const RadicadoDetails = await RadicadoDetail.findByOrFail(
        "DRA_RADICADO",
        id
      );
      return response
        .status(200)
        .json({
          data: RadicadoDetails,
          message: { success: "Radicado Encontrado" },
        });
    } catch (err) {
      return response
        .status(404)
        .json({ data: null, message: { error: "Radicado no Encontrado" } });
    }
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
