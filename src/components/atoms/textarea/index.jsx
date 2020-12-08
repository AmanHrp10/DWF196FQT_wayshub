export default function TextArea({ title, customClass }) {
  return (
    <textarea
      placeholder={title}
      name=''
      id=''
      cols='30'
      rows='6'
      className={`form-control ${customClass}`}
    />
  );
}
