class Module{

    id;
    code;
    name;
    semester;
    lecturer;
    color;
    status;

    constructor(id, code, name, semester, lecturer, color, status){
        this.id = id;
        this.code = code;
        this.name = name;
        this.semester = semester;
        this.lecturer = lecturer;
        this.color = color;
        this.status = status
    }
    get id(){
        return this.id;
    }
    get code(){
        return this.code;
    }
    get name(){
        return this.name;
    }
    get semester(){
        return this.semester;
    }
    get lecturer(){
        return this.lecturer;
    }
    get color(){
        return this.color;
    }
    get status(){
        return this.status;
    }
    set id(id){
        this.id = id;
    }
    set code(code){
        this.code = code;
    }
    set name(name){
        this.name = name;
    }
    set semester(semester){
        this.semester = semester;
    }
    set lecturer(lecturer){
        this.lecturer = lecturer;
    }
    set color(color){
        this.color = color;
    }
    set status(status){
        this.status = status;
    }   
    getJson(){
        return {
            id: this.id,
            code: this.code,
            name: this.name,
            semester: this.semester,
            lecturer: this.lecturer,
            color: this.color,
            status: this.status
        }
    }

   
}