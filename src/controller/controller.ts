import { Request, Response } from 'express'

export interface Controller {
  /**
   * It returns a response
   * @param {Request} req - Request - This is the request object that contains all the information
   * about the request.
   * @param {Response} res - Response - The response object that will be returned to the client.
   * @returns The response object
   */
  list(req: Request, res: Response): Promise<Response>

  /**
   * It returns a response
   * @param {Request} req - Request - This is the request object that contains all the information
   * about the request.
   * @param {Response} res - Response - The response object that will be returned to the user.
   * @returns The response object
   */
  show(req: Request, res: Response): Promise<Response>
  /**
   * The function is called create, it takes in a request and a response, and returns a promise of a
   * response
   * @param {Request} req - Request - This is the request object that contains all the information
   * about the request.
   * @param {Response} res - Response - The response object that will be returned to the client.
   * @returns The response object
   */
  create(req: Request, res: Response): Promise<Response>
  /**
   * It updates a user
   * @param {Request} req - Request - This is the request object that contains all the information
   * about the request.
   * @param {Response} res - Response - The response object that will be returned to the client.
   * @returns The response object
   */
  update(req: Request, res: Response): Promise<Response>

  /**
   * A function that is used to destroy a resource.
   * @param {Request} req - Request - This is the request object that contains all the information
   * about the request.
   * @param {Response} res - Response - The response object that will be returned to the user.
   * @returns The response object
   */
  destroy(req: Request, res: Response): Promise<Response>
}
