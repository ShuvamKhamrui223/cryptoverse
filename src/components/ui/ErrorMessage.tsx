interface ErrorMessageProp{
  errorMessage:string
}
const ErrorMessage = ({ errorMessage }) => {
  return <p className="text-red-50 bg-red-900 px-3 py-2">{errorMessage}</p>;
};

export default ErrorMessage;
