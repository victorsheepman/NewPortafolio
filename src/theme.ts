export const  textMixin = (color: string, size:string, weight?:number) => {
    if (weight) {
        return {
            color: color,
            fontSize: size,
            fontWeight: weight
        };     
    }else{
        return {
            color: color,
            fontSize: size,
        };     
    }
   
}