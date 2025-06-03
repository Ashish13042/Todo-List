import DeleteIcon from '@material-ui/icons/Delete';
const TodoList = (props) => {
  return (
    <>
      <div className="todo-style">
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <DeleteIcon />
        </button>
        <li> {props.text} </li>
      </div>
    </>
  );
};

export default TodoList;
