function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round(100 - (numPacked * 100) / numItems);
  if (!items.length)
    return (
      <div className="stats">
        <em> Start Adding some items to your Shopping List...</em>
      </div>
    );
  return (
    <div className="stats">
      <em>
        {percentage === 0 ? (
          <>
            You got everything Ready to Party
            <img src="./assets/svg/congratulation.svg" alt="" />
          </>
        ) : (
          `You have ${numItems} items on our list and 
        ${numPacked} of them are ready for the party (${percentage}% left to go)`
        )}
      </em>
    </div>
  );
}

export default Stats;
