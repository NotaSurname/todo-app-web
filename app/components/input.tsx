'use client'

export function Input({type, label, id, size}: {type: string, label: string, id: string, size: string}){
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        placeholder=" "
        className={`
          peer ${size} p-3 text-lg
          bg-white dark:bg-[#0A0A0A]
          border-2 rounded-lg
          border-black dark:border-gray-600
          text-gray-900 dark:text-white
          focus:border-[#0A0A0A]
          focus:outline-none dark:focus:border-white/70
          transition tracking-wide
        `}
      />

      <label
        htmlFor={id}
        className="
          absolute left-3 top-3
          text-lg
          text-gray-500 dark:text-gray-400
          bg-white dark:bg-[#0A0A0A] px-1
          pointer-events-none
          transition-all duration-200 ease-out

          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-lg
          peer-placeholder-shown:text-gray-500

          peer-focus:-top-2
          peer-focus:text-sm
          peer-focus:text-black
          dark:peer-focus:text-white

          peer-not-placeholder-shown:-top-2
          peer-not-placeholder-shown:text-sm
        "
      >
        {label}
      </label>
    </div>
  )
}
