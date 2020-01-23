import React from 'react'
import ReactDOM from 'react-dom'
import { Autocomplete } from '@material-ui/lab'
import {
  TextFiield,
  Card,
  CardActions,
  CardContent
}from '@material-ui/core'

const ContentView = props => {
  const {id, name} = props.item
  return (
    <div>
      <label>{id}</label>
      <label>{name}</label>
    </div> 
  )
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {items:[
      {id:'n19001', name:'ishigaki'}
                ],
                  item : {id:'undef', name:'undef'}
}
}
}
render () {
  return (
    <Card>
      <CardActions>
        <ActionView items = {this.state.items} />
      </CardActions>
      <CardContent>
        <ContentView item = {this.state.item} />
      </CardContent>
    </Card>
  )
}          

export default App
