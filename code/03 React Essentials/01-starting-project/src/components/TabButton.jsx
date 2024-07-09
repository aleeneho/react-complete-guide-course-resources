export default function TabButton({children, onSelect}) {
  // function handleClick () {
  //   console.log('Hello')
  // }

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
