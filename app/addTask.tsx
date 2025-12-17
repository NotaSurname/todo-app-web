import { Input } from "@/app/components/input"
import { Button } from "@/app/components/button";
export function Content({size}: {size: string}) {
    return (
      <div className={`flex items-center justify-center min-w-screen ${size}`}>
        <div className="flex items-center justify-center space-x-15">
            <Input
              type="text"
              placeholder="Entrez une tâche"
              className="w-full sm:w-[500px]"
              id="enterTask"
              onChange={undefined}
              value={undefined}
            />
            <Button
              text={"Ajouter"}
              size={"w-full p-3"}
              style=
              {"border-2 border-black rounded-md text-black dark:text-[#F8F8FF] dark:border-gray-500 select-none cursor-pointer hover:scale-101 hover:text-lg transition-all duration-200 ease-out"}
              onClick={undefined}
            />
        </div>
      </div>
    );
}