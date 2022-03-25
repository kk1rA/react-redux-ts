import React, { useEffect } from 'react'
import { useAction } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector'

const TodoList: React.FC = () => {
  const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo);
  const {fetchTodos, setTododPage} = useAction();
  const pages = [1,2,3,4,5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page])

  if(loading) {
      return <h1>Идёт загрузка...</h1>
  }
  if(error) {
      return <h2>{error}</h2>
  }
  return (
    <div >
        {todos.map( todo => (
            <div key={todo.id}>{todo.id} - {todo.title}</div>
        ))}
        {pages.map( p => (
            <div style={{display: 'flex'}}>
              <div
              onClick={() => setTododPage(p)}
                style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 10}}
              >
                {p}
               </div>
            </div>
        ))}
    </div>
  )
}

export default TodoList