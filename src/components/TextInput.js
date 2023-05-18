function TextInput(props) {
  const { type, id, placeholder, className, onChange } = props;

  return <input type={type} id={id} placeholder={placeholder} className={className} onChange={onChange} />;
}

export default TextInput;
