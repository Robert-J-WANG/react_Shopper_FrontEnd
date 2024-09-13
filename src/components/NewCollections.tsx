import { useEffect } from "react";
import { Item } from "./Item";
import { setInitData, useCollectionStore } from "@/stores/collectionStore";

export const NewCollections = () => {
  const initItems = useCollectionStore((state) => state.initItems);
  useEffect(() => {
    setInitData();
  }, []);
  return (
    <div className="container flex flex-col items-center justify-center gap-10 py-20 2xl:max-w-[1280px]">
      {/* title */}
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-xl font-bold xl:text-4xl lg:text-3xl md:text-2xl ">
          NEW COLLECTIONS
        </h1>
        <progress className="w-40 xl:w-56 lg:w-52 md:w-48 progress"></progress>
      </div>
      {/* item list */}
      <div className="grid justify-center gap-10 mb-10 md:grid-cols-2 xl:grid-cols-3 place-content-center place-items-center ">
        {initItems!.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};