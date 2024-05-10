import { Spinner } from "@material-tailwind/react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="p-4 rounded-md">
        <Spinner className="h-12 w-12 text-gray-900/50" />
      </div>
    </div>
  );
};

export default PageLoader;
