function TodoItems (props) {
  return props.tasks.map(item => {
    return (
      <li>
        {item.title} &nbsp;
        <span className="remove-item">(Remove)</span>
      </li>
    )
  });
}

export default TodoItems;
