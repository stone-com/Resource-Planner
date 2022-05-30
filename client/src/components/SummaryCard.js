// card component, with icon, title, and description props passed in to render the summaries on the dash board.
export default ({ icon, title, number, color }) => {
  return (
    <div class={`card-counter ${color}`}>
      <i class={`fa ${icon}`}></i>
      <span class='count-numbers'>{number}</span>
      <span class='count-name'>{title}</span>
    </div>
  );
};


