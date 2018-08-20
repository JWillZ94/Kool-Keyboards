import { createSelector } from 'reselect';

const itemSelector = state => state.items;
const sortSelector = state => state.sort;
const priceRangeSelector = state => state.priceRange;
const conditionSelector = state => state.condition;

export const changeDisplayItems = createSelector(
  [itemSelector, sortSelector, priceRangeSelector, conditionSelector],
  (items, sort, priceRange, condition) => {
    // switch (sort) {
    //   case 'SORT_PRICE_LOW_TO_HIGH':
    //     return items.kbs.sort((a, b) => a.price - b.price);
    //   case 'SORT_PRICE_HIGH_TO_LOW':
    //     return items.kbs.sort((a, b) => b.price - a.price);
    //   case 'SORT_RATING':
    //     return items.kbs.sort((a, b) => b.rating - a.rating);
    //   default:
    //     return items.kbs;
    // }
    function findpr() {
      let priceRangeArr;
      switch (priceRange) {
        case 'UNDER_25':
          return priceRangeArr = items.kbs.filter(i => i.price < 25);
          break;
        case 'PRICE_25_TO_50':
          return priceRangeArr = items.kbs.filter(i => i.price >= 25 && i.price <= 50);
          break;
        case 'PRICE_50_TO_100':
          return priceRangeArr = items.kbs.filter(i => i.price >= 50 && i.price <= 100);
          break;
        case 'PRICE_100_TO_200':
          return priceRangeArr = items.kbs.filter(i => i.price >= 100 && i.price <= 200);
          break;
        case 'PRICE_200_AND_UP':
          return priceRangeArr = items.kbs.filter(i => i.price >= 200);
          break;
        default:
          return priceRangeArr = items.kbs;
      }
    }


    let conditionArr = items.kbs;
    switch (condition) {
      case 'NEW':
        conditionArr = items.kbs.filter(i => i.condition === "new");
        break;
      case 'USED':
        conditionArr = items.kbs.filter(i => i.condition === "used");
        break;
      case 'REFURBISHED':
        conditionArr = items.kbs.filter(i => i.condition === "refurbished");
        break;
      default:
        conditionArr = items.kbs;
    }

    function keepCommonItems(arr, args) {
      let count = 1;
      let kept = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] === arr[j]) count++;
        }
        if (count === args.length) {
          kept.push(arr[i]);
        }
        count = 1;
      }
      return kept;
    }

    function filterArr() {
      let args = Array.prototype.slice.call(arguments);
      return keepCommonItems([].concat.apply([], args), args);
    }

    console.log(filterArr(findpr()));

  }
);
