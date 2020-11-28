import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Item  from './Items'
class App extends React.Component{
     constructor(props){
          super(props);
          this.state={
               items:[],
               currentItem:{
                    text:'',
                    key:''
               }
          }
          this.addItem = this.addItem.bind(this)
          this.handleInputItem = this.handleInputItem.bind(this)
          this.deleteItem = this.deleteItem.bind(this)
          this.setUpdate  = this.setUpdate.bind(this)
     }
     handleInputItem(e){
          this.setState({
               currentItem:{
                   text:e.target.value,
                   key:Date.now()
               }
          })
     }
    addItem(e){
         e.preventDefault()
        const inputval = this.state.currentItem
        if(inputval.text !== ""){
             const addtoitem = [...this.state.items,inputval]
             this.setState({
                  items:addtoitem,
                  currentItem:{
                      text:'',
                      key:''
                  }
             })
        }
     

    }


    deleteItem(key){
        const del = this.state.items.filter(item=> item.key !== key)
         this.setState({
              items:del
         })
   }

   setUpdate(text,key){
        const list = this.state.items
        list.map(item=>{
             if(item.key === key){
                item.text=text
             }
        })
         this.setState({
              items:list
         })
   }
    render(){
         return(
              <Container className="mt-3 bg-dark text-light w-75">
                  
               <Form onSubmit={this.addItem} className="mt-3">
                    <Form.Group className="d-flex">
                   <Form.Control type="text" 
                   placeholder="Enter item"
                   value={this.state.currentItem.text}
                   onChange={this.handleInputItem} />
                    <Button type="submit">Add</Button>
                    </Form.Group>
               </Form>
               <Item items={this.state.items} 
               setUpdate={this.setUpdate}
               deleteItem={this.deleteItem}/>
               </Container>
         )
    }
}
export default App