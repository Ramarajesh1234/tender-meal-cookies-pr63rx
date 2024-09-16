import "./index.css";

const mealItem = (props) => {
  const { mealDetails } = this.props;
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    mealDetails;

  return (
    <li>
      <div className="item-container">
        <h1 className="item-name">{strCategory}</h1>
        <img src={strCategoryThumb} className="image-item" alt={strCategory} />
        <p className="description">{strCategoryDescription}</p>
      </div>
    </li>
  );
};

export default mealItem;
