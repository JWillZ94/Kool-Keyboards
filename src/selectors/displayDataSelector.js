import { createSelector } from 'reselect';

const itemSelector = state => state.items;
const sortSelector = state => state.sort;
const priceRangeSelector = state => state.priceRange;
const conditionSelector = state => state.condition;

export const changeDisplayItems = createSelector(
  [itemSelector, sortSelector, priceRangeSelector, conditionSelector],
  (items, sort, priceRange, condition) => {
    function keepCommonItems(arr, args) {
      let count = 1;
      let kept = [];
      let seen = []
      for (let i = 0; i < arr.length; i++) {
        if (seen.includes(arr[i])) {
          i++;
        }
        for (let j = i + 1; j < arr.length; j++) {
          arr[i] === arr[j]
            ? count++
            : count = 1;
          if (count === args.length) {
            kept.push(arr[i]);
          }
        }
        seen.push(arr[i]);
      }
      return kept;
    }

    function filterArr() {
      let args = Array.prototype.slice.call(arguments);
      let arr = [];
      for (let i = 0; i < args.length; i++) {
        arr = keepCommonItems(arr.concat(args[i]), args);
      }
      return arr;
    }

    console.log(filterArr([1, 2], [1, 4]));
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
    // switch (priceRange) {
    //   case 'UNDER_25':
    //     return items.kbs.filter(i => i.price < 25);
    //   case 'PRICE_25_TO_50':
    //     return items.kbs.filter(i => i.price >= 25 && i.price <= 50);
    //   case 'PRICE_50_TO_100':
    //     return items.kbs.filter(i => i.price >= 50 && i.price <= 100);
    //   case 'PRICE_100_TO_200':
    //     return items.kbs.filter(i => i.price >= 100 && i.price <= 200);
    //   case 'PRICE_200_AND_UP':
    //     return items.kbs.filter(i => i.price >= 200);
    //   default:
    //     return items.kbs;
    // }
    // switch (condition) {
    //   case 'NEW':
    //     return items.kbs.filter(i => i.condition === "new");
    //   case 'USED':
    //     return items.kbs.filter(i => i.condition === "used");
    //   case 'REFURBISHED':
    //     return items.kbs.filter(i => i.condition === "refurbished");
    //   default:
    //     return items.kbs;
    // }
  }
);
