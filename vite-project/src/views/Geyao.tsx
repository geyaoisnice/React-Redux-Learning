import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NumberStatus from "@/store/Numberstatus"

export const Geyao = () => {
  const { number } = useSelector((state:RootState) => ({
    number: state.handleNum.number
  }))
  const dispatch = useDispatch()
  const handleChange = () => {

      dispatch(NumberStatus.aysncActions.asyncAdd1)
 
  }
  
  const handleArr = () => {
    dispatch( {type: "geyaopush",value:100})
  }
  const { geyao } = useSelector((state:RootState) => ({
    geyao: state.handleArray.geyao
  }))
  return (
    <div>
      fanghome
      <p>{number}</p>
      <button onClick={handleChange}>按钮</button>
      <p>{geyao}</p>
      <button onClick={handleArr}>按钮</button>
    </div>
  )
  }

export default Geyao
