import { Request, Response } from 'express'

export abstract class Controller {
  /**
   * It returns a response
   * @param {Request} req - Request - This is the request object that contains all the information
   * about the request.
   * @param {Response} res - Response - The response object that will be returned to the client.
   * @returns The response object
   */
  async list(req: Request, res: Response): Promise<Response> {
    return res
  }

  /**
   * It returns a response
   * @param {Request} req - Request - This is the request object that contains all the information
   * about the request.
   * @param {Response} res - Response - The response object that will be returned to the user.
   * @returns The response object
   */
  async show(req: Request, res: Response): Promise<Response> {
    return res
  }

  /**
   * The function is called create, it takes in a request and a response, and returns a promise of a
   * response
   * @param {Request} req - Request - This is the request object that contains all the information
   * about the request.
   * @param {Response} res - Response - The response object that will be returned to the client.
   * @returns The response object
   */
  async create(req: Request, res: Response): Promise<Response> {
    return res
  }

  /**
   * It updates a user
   * @param {Request} req - Request - This is the request object that contains all the information
   * about the request.
   * @param {Response} res - Response - The response object that will be returned to the client.
   * @returns The response object
   */
  async update(req: Request, res: Response): Promise<Response> {
    return res
  }

  /**
   * A function that is used to destroy a resource.
   * @param {Request} req - Request - This is the request object that contains all the information
   * about the request.
   * @param {Response} res - Response - The response object that will be returned to the user.
   * @returns The response object
   */
  async destroy(req: Request, res: Response): Promise<Response> {
    return res
  }
}
