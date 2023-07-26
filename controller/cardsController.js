import Cards from "../models/dbCards.js";

export const createCard = async (req, res)=>{
    const dbCard = new Cards(req.body);  
    console.log(dbCard)
        try {
            const savedCard = await dbCard.save();
            res.status(200).json(savedCard);
          } catch (err) {
            console.log(err);
          }
        
}


export const getCard =async (req, res)=>{
    try {
        const GetCards = await Cards.find();
        res.status(200).json(GetCards);
      } catch (err) {
        console.log(err);
      }
        
}

