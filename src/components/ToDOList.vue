<template>
  <div class="toDoList">
    <div class="emptyInput" v-if="emptyInput">Введите текст</div>
    <h2>Список дел</h2>

    <div class="input">
        <input v-model="inputValue" type="text" placeholder="Напишите" ref="input" v-on:keyup.enter="addList">
        <button class="addBtn" v-on:click="addList">Добавить</button>
    </div>

    <div v-for="(task, index,) in tasks" v-bind:key="task.id">
        <div class="list">
            <div class="text" v-bind:class="{ doneText: this.tasks[index].done}" ref="listText">{{ task.taskText }}</div>
            <div class="listButtons">
                <button class="done" v-on:click=doneTask(index)>done</button>
                <button class="delete" v-on:click=deleteTask(index)>delete</button>
            </div>
        </div>
    </div>

    <div v-if="this.tasks == 0">
        <div class="emptyTasks">Список дел пуст</div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            inputValue:'',
            tasks:[{id:1, taskText: 'Задача на сегодня: удалить этот пост', done:false,},],
            emptyInput: false,
        }
    },
    beforeMount(){
        if(localStorage.getItem('tasks') == null){
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        }else{
            this.tasks = JSON.parse(localStorage.getItem('tasks'))  
        }
    },
    methods:{
        addList(){
            if(this.inputValue.match(/[а-яА-ЯA-Za-z0-9]/i)){
                this.tasks.unshift({id: Date.now(), taskText: this.inputValue, done: false,})
                this.inputValue = ''
                this.$refs.input.focus()
                localStorage.setItem('tasks', JSON.stringify(this.tasks))
            }else{
                this.emptyInput = true
                setTimeout(()=>{
                    this.emptyInput = false
                },2000)
                this.$refs.input.focus()
            }
        },
        doneTask(index){
            this.$refs.listText.reverse()
            this.tasks[index].done = !this.tasks[index].done
            this.$refs.listText.reverse()
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        deleteTask(index){
            this.tasks.splice(index,1)
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        }
    }
}
</script>

<style scoped>
.toDoList{
    margin: 20px auto;
    padding: 10px;
    max-width: 600px;
    background-color: rgb(203, 212, 69);
    border-radius: 20px;
    position: relative;
}
.emptyInput{
    padding: 15px 30px;
    background-color: crimson;
    font-size: 25px;
    width: fit-content;
    height: fit-content;
    border-radius: 10px;
    color: white;
    position: absolute;
    margin: auto;
    top: 170; left: 0; right: 0;
}
h2{
    text-align: center;
    margin: 20px 0;
}
.input{
    text-align: center;
}
input{
    width: 300px;
    padding: 10px;
    border-radius: 10px 0 0 10px;
    border: 1px solid black;
}
.addBtn{
    padding: 10px;
    border-radius: 0 10px 10px 0;
    border: 1px solid black;
}
.addBtn:hover{
    cursor: pointer;
}
.list{
    margin: 15px;
    background-color: rgb(79, 129, 236);
    color: white;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.text{
    max-width: 410px;
}
.doneText{
    color:black;
    text-decoration: line-through;
	text-decoration-color: red;
}
.done{
    padding: 5px;
    border: 2px solid rgb(62, 196, 62);
    background-color: rgb(62, 196, 62);;
    border-radius: 10px 0 0 10px;
    transition: all 0.5s;
}
.done:hover{
    cursor: pointer;
    background-color: white;
}
.delete{
    padding: 5px;
    border-radius: 0 10px 10px 0;
    border: 2px solid rgb(255, 68, 68);
    background-color: rgb(255, 68, 68);
    color: white;
    transition: all 0.5s;
}
.delete:hover{
    cursor: pointer;
    background-color: white;
    color: black;
}
.emptyTasks{
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    margin: 20px 0 15px;
}
</style>