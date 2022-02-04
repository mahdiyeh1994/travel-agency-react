 export const subStrText = (text:string, number:number) => {
    if (text.length > number)
        return text.substr(0, number) + "..."
    else
        return text
}
export const alphabeticalSort =(data:Array<object>)=>{
    data.sort((a: any, b: any) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
}

export const numberSort=(data:Array<object>)=>{
    data.sort((a: any, b: any) => {
        return a.price - b.price;
      });
}