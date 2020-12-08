export default function Form({ title, customClass, type }) {
  return (
    <input
      type={type}
      className={`form-control ${customClass}`}
      placeholder={title}
    />
  );
}
