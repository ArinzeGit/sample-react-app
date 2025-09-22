interface props {
  title: string;
}

function Button({ title }: props) {
  return <button>{title}</button>;
}

export default Button;
