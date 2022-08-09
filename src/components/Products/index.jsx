import { useState } from "react";
import { useCart } from "../../store/hooks/useCart";

import ContainerButtonsBuyAndNutricios from "../ContainerButtonsBuyAndNutricion";
import {
  InformationsPrimary,
  Nutritions,
  LineNutritions,
  Title,
} from "./styles";

function Products({
  name,
  genus,
  family,
  order,
  nutritions: { carbohydrates, protein, calories, fat, sugar },
}) {
  const [ShowingInformations, setShowingInformations] = useState(false);
  const {addToCart} = useCart();

  const handleShowingInformations = ()=>{
      setShowingInformations( !ShowingInformations )
  }
 
  const handleAddToCart = ()=>{
    addToCart( {
      name,
      genus,
      family,
      order,
      nutritions: { carbohydrates, protein, calories, fat, sugar } 
    }
      )
  }
  return (
    <InformationsPrimary>
      <Title>{name}</Title>
      <span>
        <strong>order: </strong> {order}
      </span>
      <span>
        <strong>family: </strong>
        {family}
      </span>
      <span>
        <strong>genus: </strong>
        {genus}
      </span>

      <ContainerButtonsBuyAndNutricios change={ handleShowingInformations } buy={handleAddToCart}/>

      <Nutritions show={ShowingInformations} >
        <Title>per 100g</Title>
        <LineNutritions>
          <strong>fat: </strong>
          {fat} g
        </LineNutritions>
        <LineNutritions>
          <strong>calories: </strong>
          {calories} kcal
        </LineNutritions>
        <LineNutritions>
          <strong>carbohydrates: </strong>
          {carbohydrates} g
        </LineNutritions>
        <LineNutritions>
          <strong>protein: </strong>
          {protein} g
        </LineNutritions>
        <LineNutritions>
          <strong>sugar: </strong>
          {sugar} g
        </LineNutritions>
      </Nutritions>
    </InformationsPrimary>
  );
}

export default Products;
