export interface ITodo{
    id:string,
    title:string,
    desc:string,
};
export interface ITodointialstate{
    todoList:ITodo[],
    todoData:ITodo,
    response:{}
};
