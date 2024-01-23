import { cleanEnv, str, port } from "envalid";

function validateEnv(){
    cleanEnv(process.env, {
        PORT: port(),
        NODE_ENV: str(),
        LOG_DIR: str()
    })
}

export default validateEnv;