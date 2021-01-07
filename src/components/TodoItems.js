function TodoItems (props) {

  function handleRemove(e) {
    props.removeItem(e.target.id)
  }

  return props.tasks.map(item => {
    return (
      <li key={item.id} >
        {item.title} &nbsp;
        <span id={item.id} className="remove-item" onClick={handleRemove}>(Remove)</span>
      </li>
    )
  });
}

export default TodoItems;
