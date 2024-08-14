function DecorationList({ itemsDeco, handleImageChange }) {
  return (
    <div className="decoration-box">
      <h2>Style your Party</h2>
      <p>
        Begin beautifying your table by choosing what you'd like to CRAFT for
        your table setting ...
      </p>
      <div className="deco-list">
        <ul className="deco-grid ">
          {itemsDeco.map((deco) => (
            <li key={deco.id}>
              <span className="label">{deco.name} </span>{" "}
              <select
                className="form-select"
                onChange={(e) =>
                  handleImageChange(deco.id, e.target.value, deco.class)
                }
              >
                <option value="">---</option>
                {deco.options.map((option) => (
                  <option key={option.illustration} value={option.illustration}>
                    {option.name}
                  </option>
                ))}
              </select>
              <img
                className="arrow-down"
                src="./assets/svg/chevron-down-outline.svg"
                alt=""
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default DecorationList;
