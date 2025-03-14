"use client";
import FilterableTents from "@/components/compound/tentsCompound";
import { tents } from "@/data/tents";

const TentsPage = () => {
  return (
    <div>
      <FilterableTents tents={tents}>
        <FilterableTents.SearchBar></FilterableTents.SearchBar>
        <FilterableTents.TentsGrid></FilterableTents.TentsGrid>
      </FilterableTents>{" "}
    </div>
  );
};

export default TentsPage;
