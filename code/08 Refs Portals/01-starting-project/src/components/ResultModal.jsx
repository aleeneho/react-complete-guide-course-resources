export default function ResultModal({ result, targetTime }) {
  return (
  <dialog>
    <h2>You {result}</h2>
    <p>The Target time was <strong>{targeTime} seconds.</strong></p>
    <p>You stopped the timer with <strong>X seconds left</strong></p>
    <form method="dialog">
      <button>Close</button>
    </form>
  </dialog>
  );

}
