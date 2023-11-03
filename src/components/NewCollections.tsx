import { useEffect } from "react";
import { Item } from "./Item";
import { setInitData, useCollectionStore } from "@/stores/collectionStore";

export const NewCollections = () => {
  const initItems = useCollectionStore((state) => state.initItems);
  console.log(initItems);
  useEffect(() => {
    setInitData();
  }, []);
  return (
    <div className="container flex flex-col items-center justify-center gap-10 py-20 ">
      {/* title */}
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-bold">NEW COLLECTIONS</h1>
        <progress className="w-56 progress"></progress>
      </div>
      {/* item list */}
      <div className="grid justify-center gap-10 mb-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-content-center place-items-center ">
        {initItems!.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
