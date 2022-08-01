import { Request, Response, NextFunction } from 'express';

const errors: Record<string, number> = {
  ValidationError: 400,
  RequiredError: 400,
  UnauthorizedError: 401,
};

const erroHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  const { name, message } = err;
  const status = errors[name];
  if (!status) return res.status(500).json({ message });
  res.status(status).json({ message });
};

export default erroHandler;