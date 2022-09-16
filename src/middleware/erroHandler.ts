import { Request, Response, NextFunction } from 'express';

const errors: Record<string, number> = {
  ValidationError: 400,
  NotFoundError: 401,
  RequiredError: 400,
  UnauthorizedError: 401,
  Unprocessable_Entity: 422,
};

const erroHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  const { name, message } = err;
  const status = errors[name];
  if (message.includes('must be ')) {
    return res.status(422).json({ message });
  }
  if (!status) return res.status(500).json({ message });
  res.status(status).json({ message });
};

export default erroHandler;