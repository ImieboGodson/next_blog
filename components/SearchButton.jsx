import { useStore } from "@/store/store";
import { RiSearch2Line } from "react-icons/ri";

export default function SearchButton({ page }) {
  const { setShowSearch } = useStore();
  return (
    <button
      className="mt-[-28px] w-[80%] sm:w-[500px] min-h-fit overflow-hidden h-[56px] px-2 flex justify-center items-center bg-white rounded-[15px] z-10 search-shadow"
      onClick={setShowSearch}
    >
      <div className="w-[5%] p-2 mr-2">
        <RiSearch2Line size={20} />
      </div>
      <div className="w-[92%] h-full p-3 flex justify-start items-center text-sm">
        <p className="text-slate-400">Search in {page}</p>
      </div>
    </button>
  );
}
