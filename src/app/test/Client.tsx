"use client"

import { Character } from "./page"

function Client({characters}:{characters:Character[] | undefined}) {
  console.log("characters :",characters);
  return (
    <div>Client</div>
  )
}

export default Client