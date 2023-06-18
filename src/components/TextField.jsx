const TextField = (props) => {
  const { className } = props;

  return (
    <input
      {...props}
      className={`bg-white  border-2 rounded-lg m-h-14 px-2 py-5 focus:border-blue focus:outline-none ${className}`}
    />
  );
};

export default TextField;
