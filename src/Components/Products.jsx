import React from "react";

import PLeft from "./PLeft";
import PRight from "./PRight";
import PLefts from "./PLefts";
function Products() {
  return (
    <div className="mt-48 mb-10 flex flex-row justify-center pr-20 gap-10">
      <PLeft />
      <PRight />
    </div>
  );
}

export default Products;
