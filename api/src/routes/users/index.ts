import { Router } from 'express';

import { usersControllers } from '../../controllers';

const usersRoutes = Router();

usersRoutes.post('/', usersControllers.create);

export { usersRoutes };
