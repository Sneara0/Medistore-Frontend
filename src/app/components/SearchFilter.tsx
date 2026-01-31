interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchFilter = ({ search, setSearch }: Props) => {
  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search medicines..."
        className="px-4 py-2 rounded-lg border border-gray-300 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

export default SearchFilter;
