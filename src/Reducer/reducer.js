import { ADD_TO_CART, CHANGED_QUANTITY, CHANGE_ORDER_CART } from "../action";

const initialStateProduct = {
    products:[
      {id:1,
      name:'Sony WX-5',
      price:100.75,
      category:'Headphone',
      rating:3,
      color:'red',
      size:'S',
      details:{
          product:'',
          warrenty:'',
          merchant:''
      },
      image:'product-1-square',
      img:['image-1-square','image-1-square','image-1-square']
  },
      {
          id:2,
      name:'Apple Watch 2',
      price:500.75,
      category:'SmartWatch',
      rating:4,
      color:'black',
      size:'M',
      details:{
          product:'',
          warrenty:'',
          merchant:''
      },
      image:'product-2-square',
      img:['image-2-square','image-2-square','image-2-square']
  },
      {
          id:3,
      name:'Apple iPhone 11',
      price:700.75,
      category:'Mobile',
      rating:4,
      color:'black',
      size:'',
      details:{
          product:'',
          warrenty:'',
          merchant:''
      },
      image:'product-3-square',
      img:['image-3-square','image-3-square','image-3-square']
  },
  ]
  }

  const initialStateCart={
    items:[]
  }

  const initialStateOrder={
    items:[],
    shipping_charge:50,
    discount_in_percent:10,
    shipping_address:''
  }
  
  const productReducer=(state=initialStateProduct,action)=>{
    return state;
  }

  const cartReducer=(state=initialStateCart,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            if(state.items.find((item)=>item.id===action.payload.id)){
                return state;
            }
            return {...state,items:[...state.items,{...action.payload,quantity:1}]}

            case CHANGED_QUANTITY:
                const oldItem = state.items.find((item)=>item.id===action.payload.id)
                let index = state.items.indexOf(oldItem)
                const newItems = [...state.items]
                newItems[index]=action.payload
                return {...state,items:newItems}
            
        default:
            return state;
    }
  }
  const OrderReducer=(state=initialStateOrder,action)=>{
    switch (action.type) {
       case CHANGE_ORDER_CART:
        return {...state,items:action.payload}
    
        default:
            return state;
    }
  }


  

  export {productReducer,cartReducer,OrderReducer}