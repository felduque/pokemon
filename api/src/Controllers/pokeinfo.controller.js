import axios from "axios";

export const getPokemon = async (req, res) => {
    try{

        let {data}  = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=18&offset=1")

        let arrPokes = []
        
        
        for(let i = 0; i <= data.results.length; i++){
             let j = data?.results[i]

            if(j?.url !== undefined){
                let res =  await axios.get(j?.url)
                arrPokes.push({
                    id: res?.data?.id,
                    name: res?.data?.name,
                    image: res?.data?.sprites?.back_default,
                })
            }

        }



        
        res.status(200).json(arrPokes)

    }catch(err){
        res.status(500).json("Se produjo un error")
        console.log("Se podrujo un error en getPokemon", err)

    }
} 


// const fetchDataPokemon = async(url) => {
// try{

//     let {data} = await axios.get(url)

//     let info =  []

//     let dataObj = {
//         name: data.name,
//         image: data?.sprites.back_default
//     }


//     info.push([...info, dataObj])



// return info

// }catch(err){
//     console.log(err)
// }

// }