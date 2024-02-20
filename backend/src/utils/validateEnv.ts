import { cleanEnv, str, port, num } from "envalid";

function validateEnv(){
    cleanEnv(process.env, {
        PORT: port(),
        NODE_ENV: str(),
        LOG_DIR: str(),
        SALT_ROUNDS: num()
    })
}

export default validateEnv;