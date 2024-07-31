import { FieldError } from "react-hook-form";

interface FormErrorProps {
  error?: FieldError | undefined;
}

const FormError: React.FC<FormErrorProps> = ({ error }) => {
  return error && <div className="text-red-500">{error.message}</div>;
};

export default FormError;
