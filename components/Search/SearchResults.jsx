import Result from "./Result";
import { useStore } from "@/store/store";

export default function SearchResults({ searchResults }) {
  const { setCloseSearch } = useStore();
  if (!searchResults) return null;
  return (
    <>
      {searchResults.length === 0 ? (
        <div className="w-full py-3 px-2 md:px-6 flex justify-center items-center">
          <p className="text-sm md:text-md">
            {searchResults.length} Results Found.
          </p>
        </div>
      ) : (
        <div className="w-full max-h-[350px] overflow-y-scroll scroll-smooth">
          {searchResults.map((result, index) => {
            return (
              <Result
                key={index}
                result={result}
                setCloseSearch={setCloseSearch}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
