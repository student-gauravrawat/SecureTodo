import React from 'react'
import { AllTodo, TodoInput, Header} from './index'

function Home() {
  return (
    <div>
      <Header/>
      <TodoInput/>
      <AllTodo/>
    </div>
  )
}

export default Home
