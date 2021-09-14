import  React, { Component } from 'react'
import { Button, Checkbox } from 'antd';

class TodoItem extends Component{
    constructor({item, todoDone, todoDelete, todoEdit}){
        super()
          this.doneForItem= todoDone 
          this.info = item
          this.deleteItem = todoDelete
          this.editItem = todoEdit
    }

    render(){
        return(          
            <li>
                <div className="todo__item__wrapper">
                    
                    <Checkbox checked={this.info.flag} onChange={()=>{this.doneForItem(this.info.id)}}/>
                    {console.log(this.info.flag)}
                    <span className={this.info.flag ? 'todo__item__description todo__item-done' : 'todo__item__description'}>{this.info.description}</span>
                </div>
                <Button className="todo__item-delete" onClick={()=>this.deleteItem(this.info.id)}>Удалить</Button> 
                <Button className="todo__item-edit" onClick={()=>this.editItem(this.info.id)}>Редактировать</Button>                
            </li>               
        )
    }
}

 export default TodoItem