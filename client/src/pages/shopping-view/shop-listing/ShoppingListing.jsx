import { Checkbox } from "@/components/ui/checkbox";
import { filterOptions, sortOptions } from "@/config";
import {
  fetchAllFilterProduct,
  fetchAllProduct,
} from "@/store/shop-slice/shopSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import CardSkeleton from "../skeleton/CardSkeleton";
import { ArrowUpDown } from "lucide-react";
import ProductTile from "./ProductTile";
import ProductFilter from "./ProductFilter";
import { useSearchParams } from "react-router-dom";

function createSearchParamsHelper(filterParams) {
  let queryParams = [];

  for (const [key, value] of Object.entries(filterParams)) {
    if (Array.isArray(value) && value.length > 0) {
      const paramValue = value.join(",");
      queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
    }
  }
  return queryParams.join("&");
}

const ShoppingListing = () => {
  const { productList, isLoading } = useSelector((state) => state.shop);
  const [sort, setSort] = useState("price-lowtohigh");
  const [filters, setFilter] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  function handleFilter(getSectionId, getCurrentOption) {
    console.log(getSectionId, getCurrentOption);
    let cpyFilters = { ...filters };
    const indexOfCurrentSection = Object.keys(cpyFilters).indexOf(getSectionId);
    if (indexOfCurrentSection === -1) {
      cpyFilters = {
        ...cpyFilters,
        [getSectionId]: [getCurrentOption],
      };
    } else {
      const indexOfCurrentOption =
        cpyFilters[getSectionId].indexOf(getCurrentOption);
      if (indexOfCurrentOption === -1) {
        cpyFilters[getSectionId].push(getCurrentOption);
      } else {
        cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
      }
    }
    setFilter(cpyFilters);
    sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
  }
  console.log(filters);
  function handleSort(value) {
    console.log(value);
    setSort(value);
  }

  useEffect(() => {
    setSort("price-lowtohigh");
    setFilter(JSON.parse(sessionStorage.getItem("filters")));
  }, []);

  useEffect(() => {
    if (filters && Object.keys(filters).length > 0) {
      const createQuery = createSearchParamsHelper(filters);
      setSearchParams(new URLSearchParams(createQuery));
    }
  }, [filters]);
  useEffect(() => {
    if (filters !== null && sort !== null) {
      dispatch(
        fetchAllFilterProduct({ filterParams: filters, sortParams: sort })
      );
    }
  }, [filters, sort, dispatch]);



  return (
    <>
      <div className="flex">
        <div className="grid basis-1/6 gap-6  justify-center m-4 border-r-2">
          <ProductFilter filters={filters} handleFilter={handleFilter} />
        </div>
      
        {isLoading ? (
          <div className="basis-5/6 grid grid-cols-3 gap-3">
            <CardSkeleton count={6} />
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center w-full py-2 px-4 border-b-2 mb-2">
              <div>
                <p>all products</p>
              </div>
              <div>
                <span className="mr-2">{productList.length} products</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <ArrowUpDown />
                      <span>Sort By</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[250px]">
                    <DropdownMenuRadioGroup
                      value={sort}
                      onValueChange={handleSort}
                    >
                      {sortOptions.map((sortItem) => {
                        return (
                          <div key={sortItem.id}>
                            <DropdownMenuRadioItem value={sortItem.id}>
                              {sortItem.label}
                            </DropdownMenuRadioItem>
                          </div>
                        );
                      })}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="basis-5/6 grid grid-cols-3 gap-3 w-full">
              {productList.map((productItem) => (
                <ProductTile product={productItem} key={productItem._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingListing;
