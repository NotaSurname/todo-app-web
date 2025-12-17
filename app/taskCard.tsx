'use client'

import React from "react";
import { useState } from "react"
import { Input } from "@/app/components/input"
import { Button } from "@/app/components/button"


export function TaskCard({ taskName }: {taskName: string}) {

  const [completed, setCompleted] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(taskName)


  const handleSaveButton = () => {
    // DB handling here
    setIsEditing(false)
  }




  return (
    <>
      <div className="flex justify-center w-full mt-4">
        <div
        className="
        flex items-center justify-between
        w-1/2 h-20 px-4
        border-2 border-gray-600
        rounded-xl
        transition-all duration-200 ease-out
        hover:scale-[1.02]
        hover:bg-gray-100/50 dark:hover:bg-white/5
        "
      >

        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted(prev => !prev)}
            className="h-5 w-5 cursor-pointer accent-blue-500"
          />

          <p
            className={`
              text-lg font-semibold select-none transition text-black dark:text-white
              ${completed ? 'line-through text-gray-400' : ''}
            `}
          >
            {taskName}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="/edit.svg"
            alt="Modifier la tâche"
            className="h-6 w-6 cursor-pointer opacity-70 hover:opacity-100 transition"
            onClick={() => setIsEditing(true)}
          />

          <img
            src="/delete.svg"
            alt="Supprimer la tâche"
            className="h-6 w-6 cursor-pointer opacity-70 hover:opacity-100 transition"
          />
        </div>
      </div>
    </div>

      {isEditing && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black-80 backdrop-blur-xs"
          onClick={() => setIsEditing(false)}
        >
          <div
            className="bg-white dark:bg-[#0A0A0A] p-6 rounded-xl w-[400px] border border-white/20 "
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-[#F8F8FF]">Modifier la tâche</h2>

            <Input
              type="text"
              placeholder="Nom de la tâche"
              id="edit-task"
              className="w-full"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            <div className="flex justify-end gap-3 mt-6">
              <Button
                text={"Annuler"}
                size={"w-full p-3"}
                style={"rounded-md border border-black text-black cursor-pointer dark:text-[#F8F8FF] hover:bg-black/10 hover:dark:bg-white/10"}
                onClick={() => setIsEditing(false)}
              />
              <Button
                text={"Enregistrer"}
                size={"w-full p-3"}
                style={"rounded-md bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"}
                onClick={handleSaveButton}
              />
            </div>
          </div>
        </div>
      )}
              </>
  )
}