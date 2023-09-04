import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import store from '@/store'

export const Fang = () => {
  const { number } = useSelector((state:RootState) => ({
    number: state.number
  }))
  const dispatch = useDispatch()
  const handleChange = () => {
    dispatch( {type: "add1"})
  }
  return (
    <div>
      fanghome
      <p>{number}</p>
      <button onClick={handleChange}>按钮</button>
    </div>
  )
}

export default Fang
