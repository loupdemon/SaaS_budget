"use client"
import React, { useEffect, useState } from 'react'
import Wrapper from '../components/Wrapper'
import { useUser } from '@clerk/nextjs'
import EmojiPicker from 'emoji-picker-react'
import { addBudget } from '../actions'

const page = () => {
   const {user} = useUser()
   const [budgetName, setBudgetName] = useState<string>("")
   const [budgetAmount, setBudgetAmount] = useState<string>("")
   const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false)
   const [selectedEmoji, setSelectedEmoji] = useState<string>("")
   
   const handleEmojiSelected = (emojiObject : {emoji : string})=>{
      setSelectedEmoji(emojiObject.emoji)
      setShowEmojiPicker(false)
   }

   const handleAddBudget = async () => {
      try{
         const amount = parseFloat(budgetAmount)
         if(isNaN(amount) || amount <= 0){
            throw new Error("Le montant doit être un nombre positif")
         }
         await addBudget (
            user?.primaryEmailAddress?.emailAddress as string, 
            budgetName,
            amount,
            selectedEmoji,
         )

         const modal= document.getElementById("my_modal_3") as HTMLDialogElement
         
         if(modal){
            modal.close()
         }
      }
      catch(error){

      }
   }
 return (
      <Wrapper>
         <button className="btn" 
            onClick={()=> (document.getElementById('my_modal_3') as HTMLDialogElement).showModal()}>
               Nouveau Budget         
         </button>
         <dialog id="my_modal_3" className="modal">
         <div className="modal-box">
            <form method="dialog">
               <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
               </button>
            </form>
            <h3 className="font-bold text-lg">Création d'un budget</h3>
            <p className="py-4">Permet de controller ces dépences facilement</p>
            <div className='w-full flex flex-col'>
               <input type="text"
                  value={budgetName}
                  placeholder='nom du budget'
                  onChange={(e)=>setBudgetName(e.target.value)}
                  className='input input-bordered mb-3'
                  required
               />
               <input type="number"
                  value={budgetAmount}
                  placeholder='le solde'
                  onChange={(e)=>setBudgetAmount(e.target.value)}
                  className='input input-bordered mb-3'
                  required
               />

               <button className='btn mb-3' onClick={()=> setShowEmojiPicker(!showEmojiPicker)}>
                     {selectedEmoji || "sélectionnez un emoji 👻"}
               </button>

               <div className='flex justify-center items-center my-4'>
                  { showEmojiPicker && (
                     <EmojiPicker onEmojiClick={handleEmojiSelected}/>
                  )}
               </div>

               <button className='btn'
                  onClick={handleAddBudget}
               >
                  Ajouter un Budget
               </button>

            </div>
         </div>
         </dialog>     
      </Wrapper>
  )
}

export default page