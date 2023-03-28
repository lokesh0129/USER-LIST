const InputField = (props) => {
    return (
      <div className="form-outline mb-2">
        <label className="form-label " for={props.id}>
          {props.label}
        </label>
        <input
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          className="form-control "
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    );
  };
  
  export default InputField;