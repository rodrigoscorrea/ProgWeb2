import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from "joi"
/* const validate = (schema:ObjectSchema) => {
    return (req:Request, res:Response, next:NextFunction) => {
        const {error} = schema.validate(req.body, {
            abortEarly:
        });
    }
} */

const validate = (schema: ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {
    abortEarly: false
    });
    if (error) res.status(422).json({ error: error.details });
        else next();
    };
};

export default validate