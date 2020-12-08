export default function Button({ customClass, title, onClick }) {
  return (
    <button className={`btn ${customClass}`} onClick={onClick}>
      {title}
    </button>
  );
}
