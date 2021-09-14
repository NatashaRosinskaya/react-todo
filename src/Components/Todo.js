import React from 'react'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;


class Todo extends React.Component{
    constructor(){
        super()
        this.list = [
            {
                id:1,
                description:'Выучить JS',
                flag: true
            },
            {
                id:2,
                description:'Выучить React',
                flag: false
            },
            {
                id:3,
                description:'Сделать ДЗ',
                flag: false
            },
        ]
        this.state = {
            listItem: this.list
        }
        this.todoDone = this.todoDone.bind(this)
        this.todoDelete = this.todoDelete.bind(this)  
        this.todoAdd = this.todoAdd.bind(this) 
        this.todoEdit = this.todoEdit.bind(this)    
    }


    todoDone(id){
        let newList = this.state.listItem.map(item=>{
            if(item.id === id){
                item.flag = !item.flag
            }
            return item
        })        
        this.setState({listItem: newList})        
    }

    todoDelete(id){
        const self = this
        confirm({
            title: 'Хотите удалить задачу?',
            icon: <ExclamationCircleOutlined />,
            content: 'Задача будет удалена навсегда',
            okText: 'Да',
            okType: 'danger',
            cancelText: 'Нет',
            onOk() {
                console.log(this)
                let newList = self.state.listItem.filter(item => item.id !== id)
                self.setState({listItem: newList}) 
            },
            onCancel() {
              console.log('Cancel');
            },
          });
          
    }

        todoEdit(id){
            console.log(id)
            let newList = this.state.listItem.map(item=>{
                if(item.id === id){
                    item.description = prompt ('')
                }
                return item
            })

          
            this.setState({listItem: newList})
        }

         todoAdd(value){
            let newTask = {
            id: new Date().getMilliseconds(),
            description: `${value}`,
            flag:false
        }
       

        this.state.listItem.push(newTask)

        let newList = this.state.listItem
        document.querySelector('.todo__input__value').value = ''

        this.setState({listItem: newList}) 
    }


    render(){
        return(
        <>
            <TodoInput todoAdd={this.todoAdd}/>
                <ul className = 'todo__items'>
               {console.log(this.state.listItem)}
                    {this.state.listItem.map((item,index) => {
                        console.log(item.flag)
                        return <TodoItem
                                    item={item}
                                    flag={item.flag}
                                    todoDone={this.todoDone}
                                    todoDelete={this.todoDelete}
                                    todoEdit={this.todoEdit}
                                    key={index+item.id}                 
                                />
                    })}
           </ul>
        </>
        )
    }
}

export default Todo