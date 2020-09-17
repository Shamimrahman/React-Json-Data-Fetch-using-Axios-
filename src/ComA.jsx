import React,{useEffect, useState} from 'react'
import axios from 'axios'

function ComA() {

    useEffect(()=>{

        async function getData(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)

            ucname(res.data.name)
            umoves(res.data.moves.length)

        }


        getData();

    
    })



    let[num,unum]=useState()
    let[cname,ucname]=useState()
    let[moves,umoves]=useState()

    let op=(event)=>{

        unum(event.target.value)

    }
    return (


        <div >

        <h1>You Select {num}</h1>
        <h1> I am {cname}</h1>
        <h1> i Have {moves} moves</h1>



       
        <select value={num} onChange={op}>

        <option value='1'>1</option>
        <option value='25'>25</option>
        <option value='3'>3</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        
        </select>
            
        </div>

    )
}

export default ComA
