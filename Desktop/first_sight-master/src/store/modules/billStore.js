import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const billStore = createSlice({
  name: 'bill',
  initialState: {
    billList: []
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload
    },
    addBill(state, action) {
      state.billList.push(action.payload)
    }
  }
})

const { setBillList, addBill } = billStore.actions
const getBillList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:8000/ka')
    dispatch(setBillList(res.data))
  }
}

const addBillList = (data) => {  
  return async (dispatch) => {  
    try {  
      const res = await axios.post('http://localhost:8000/ka', data);  
      dispatch(addBill(res.data));  
    } catch (error) {  
      console.error('Error adding bill list:', error)
    }  
  }
}
export { getBillList, addBillList }
const reducer = billStore.reducer
export default reducer