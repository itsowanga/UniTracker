class Task{
    id;
    moduleId;
    title;
    dueDate;
    type;
    weight;
    status;

    constructor(id, moduleId, title, dueDate, type, weight, status){
        this.id = id;
        this.title = title;
        this.moduleId = moduleId;
        this.dueDate = dueDate;
        this.type = type;
        this.weight = weight;
        this.status = status;
        
    }
}