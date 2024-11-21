import { Spinner } from "@nextui-org/spinner";
import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center bg-black/10 fixed inset-0 z-[888] backdrop-blur-sm">
        LoginPage
        <Spinner size="lg" />
      </div>
    </div>
  );
};

export default Loading;
