import { Checkbox } from "@/components/ui/checkbox";
import { filterOptions } from "@/config";
import React from "react";

const ProductFilter = ({ filters, handleFilter }) => {
  return (
    <div>
      <div>
        {Object.keys(filterOptions).map((filterItem, i) => {
          return (
            <div key={i} className="mb-6">
              <h1 className="mb-2 font-bold"> {filterItem}</h1>
              {filterOptions[filterItem].map((option) => {
                return (
                  <div
                    key={option.id}
                    className="flex justify-items-center items-center gap-3"
                  >
                    <Checkbox
                      checked={
                        filters &&
                        filters[filterItem] &&
                        Object.keys(filters).length > 0 &&
                        filters[filterItem].indexOf(option.id) > -1
                      }
                      id={option.id}
                      onCheckedChange={() =>
                        handleFilter(filterItem, option.id)
                      }
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFilter;
