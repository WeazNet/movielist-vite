export const Input = ({ placeholder, onChange, value = "" }: { placeholder: string, onChange: (e: any) => void, value: string }) => {
  return (
    <input
      className="dark:text-white text-gray-900 px-4 py-2 rounded-full min-w-full sm:min-w-[20em] bg-gray-200 dark:bg-gray-700 focus:ring-offset-0 focus:ring-2 focus:ring-yellow-200 transition ease-in-out"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => { onChange(e.target.value) }}
    />
  );
};
