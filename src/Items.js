import React from 'react'
import { Container } from 'react-bootstrap'
import './Edit.css'
export default function Items(props) {
     const items = props.items
    return (
        <div>
            {items.map(item=>(
              
              <Container className="d-flex bg-light text-dark mb-2 rounded p-1"  key={item.key}>

                <input type="text" 
                value={item.text} 
                onChange={(e)=>{props.setUpdate(e.target.value,item.key)}}
                id="Editinput" />
                <span className="ion-trash-a ml-auto mr-2" 
                onClick={()=>props.deleteItem(item.key)}
                style={{"cursor":"pointer"}}></span>
              </Container>
            ))}
           
        </div>
    )
}
