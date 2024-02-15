import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from "joi"
import { StatusCodes} from 'http-status-codes';

const validate = (schema: ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);  

        if (error) res.status(StatusCodes.BAD_REQUEST).json({ error: error.details });
        next();
    };
};

export default validate