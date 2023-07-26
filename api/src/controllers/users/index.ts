import { hashSync } from 'bcrypt';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import User from '../../models/User';

export const usersControllers = {
  create: async (request: Request, response: Response): Promise<Response> => {
    const {
      body: { name, email, password },
    } = request;

    const createdUser = await User.create({
      id: uuidv4(),
      name,
      email,
      password: hashSync(password, 8),
    });

    return response.status(201).send(createdUser);
  },
};
