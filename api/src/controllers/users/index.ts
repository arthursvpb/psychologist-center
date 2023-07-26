import { Request, Response } from 'express';

export const usersControllers = {
  create: async (request: Request, response: Response): Promise<Response> => {
    const { body } = request;

    console.log('body', body);

    return response.status(201).send(body);
  },
};
