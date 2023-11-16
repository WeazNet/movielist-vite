export const SearchInput = ({ placeholder, onChange, value = "" }: { placeholder: string, onChange: (e: any) => void, value: string }) => {
  return (
    <input
      className="text-white px-4 rounded-full min-w-full sm:min-w-[20em] dark:bg-gray-700"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => { onChange(e.target.value) }}
    />
  );
};
