

export function getLocalStorage (name:string){
    const card = localStorage.getItem(name);
    return card ? JSON.parse(card): null;
}

export function setLocalStorage(name: string, data:any){
  localStorage.setItem(name , JSON.stringify(data))

}