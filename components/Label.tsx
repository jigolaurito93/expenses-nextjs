interface LabelProps {
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
}
const Label = ({ htmlFor, className, children }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-gray-700 dark:text-gray-300 ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
