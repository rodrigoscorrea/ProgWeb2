export function createLink(filename: string) {
    return `<a href="/${filename}">${filename}</a><br>\n`;
}

function createTupla<T>(v1: T, v2: T): [T,T]{ //Função genérica
    return [v1,v2];
}

//ex
createTupla<number>(1,2)
createTupla<string>('a','b')

function createTuplaNumber(v1:number, v2:number){
    return [v1,v2];
}

function createTuplaString(v1:string, v2:string){
    return [v1,v2];
}



export const valor = 10