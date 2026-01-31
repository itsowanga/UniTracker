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
    get id(){
        return this.id;
    }
    get moduleId(){
        return this.moduleId;
    }
    get title(){
        return this.title;
    }
    get dueDate(){
        return this.dueDate;
    }
    get type(){
        return this.type;
    }
    get weight(){
        return this.weight;
    }
    get status(){
        return this.status;
    }
    set id(id){
        this.id = id;
    }
    set moduleId(moduleId){
        this.moduleId = moduleId;
    }
    set title(title){
        this.title = title;
    }
    set dueDate(dueDate){
        this.dueDate = dueDate;
    }
    set type(type){
        this.type = type;
    }
    set weight(weight){
        this.weight = weight;
    }
    set status(status){
        this.status = status;
    }
    getJson(){
        return {
            id: this.id,
            moduleId: this.moduleId,
            title: this.title,
            dueDate: this.dueDate,
            type: this.type,
            weight: this.weight,
            status: this.status
        }
    }
    
}