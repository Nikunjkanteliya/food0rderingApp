import React, { useState } from "react";
import { ShimmerPostList } from "react-shimmer-effects";

function Shimmereffect() {
  return <ShimmerPostListWrapper />;
}

function ShimmerPostListWrapper() {
  const [col, setCol] = useState(3);
  const [row, setRow] = useState(10);
  const [gap, setGap] = useState(30);
  const [centre, setCentre] = useState(true);

  return (
    <ShimmerPostList
      postStyle="STYLE_FOUR"
      col={col}
      row={row}
      gap={gap}
      center={centre}
      fitOnFrame={true}
      className="max-w-[1020px] mx-[auto] mt-[56px] min-h-[100vh]"
    />
  );
}

export default Shimmereffect;
