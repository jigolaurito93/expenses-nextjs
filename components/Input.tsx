interface InputProps {
  type: string;
  placeholder?: string;
  id?: string;
}

const Input = ({ type, placeholder, id }: InputProps) => {
  const styles: { [key: string]: string } = {
    checkbox:
      "rounded border-gray-300 text-gray-700 bg-white dark:bg-gray-950 dark:text-gray-500 shadow-sm",
    default:
      "w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950",
  };
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={styles[type] ?? styles["default"]}
      id={id}
    />
  );
};

export default Input;
