import { Component } from "react";
import "./index.css";

import mealItem from "../mealItem";

class mealsSection extends Component {
  state = {
    searchInput: "",
  };

  onChangeSearchMeal = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const { searchInput } = this.state;
    const mealsList = this.props;

    const searchResults = mealsList.filter((eachMeal) =>
      eachMeal.toLowerCase().includes(searchInput.toLocaleLowerCase())
    );

    return (
      <div className="app-container">
        <div className="section-container">
          <h1 className="heading">Meal Finder</h1>
          <input
            type="search"
            value={searchInput}
            className="search-input"
            placeholder="Search Meal"
            onChange={onChangeSearchMeal}
          />
          <div className="list-container">
            <ul className="meals-list">
              {searchResults.map((eachMeal) => (
                <mealItem key={eachMeal.id} mealDetails={eachMeal} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default mealsSection;
