import  React, { Component } from 'react';
import { Input, Button } from 'antd';

class TodoInput extends Component{
    constructor({todoAdd}){
        super()
        this.add = todoAdd
        this.addvalue=this.addvalue.bind(this)     
    }
        
    addvalue(){        
        const input = document.querySelector('.todo__input__value')
        const value = document.querySelector('.todo__input__value').value
input.value =''
       
       return value
    } 
    
    
      render(){
        return(          
            <div className="todo__create">{
                console.log('rend')
            }
                <Input className="todo__input__value" id='test' type='text' placeholder="Новая задача" />
                <Button className='input__btn' onClick={()=>this.add(this.addvalue())}>Добавить задачу</Button>
            </div>                      
        )
    }
}

 export default TodoInput