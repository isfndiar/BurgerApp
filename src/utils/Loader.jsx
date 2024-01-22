import { Skeleton } from "antd";
import React from "react";

const Loader = () => {
  return (
    <Skeleton
      avatar
      paragraph={{
        rows: 4,
      }}
    />
  );
};

export default Loader;
