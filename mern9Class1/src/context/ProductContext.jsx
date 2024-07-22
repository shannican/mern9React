import React, { createContext } from 'react'

export const PhoneContext =  createContext()

const ProductContext = ({children}) => {

    const PhoneData  = [
        {
          id: 1,
          name: "Samsung Galaxy S21",
          price: 799,
          color: "Phantom Gray",
          company: "Samsung",
          memory: "128GB",
          description: "Flagship phone with excellent camera, sleek design, and powerful performance for everyday use."
        },
        {
          id: 2,
          name: "iPhone 13 Pro",
          price: 999,
          color: "Sierra Blue",
          company: "Apple",
          memory: "256GB",
          description: "Premium build, superior camera system, and A15 Bionic chip for unmatched speed and efficiency."
        },
        {
          id: 3,
          name: "Google Pixel 6",
          price: 699,
          color: "Stormy Black",
          company: "Google",
          memory: "128GB",
          description: "Top-notch camera capabilities, pure Android experience, and innovative features powered by Google."
        },
        {
          id: 4,
          name: "OnePlus 9",
          price: 729,
          color: "Winter Mist",
          company: "OnePlus",
          memory: "128GB",
          description: "High performance, Hasselblad camera system, and fast charging with premium design and build quality."
        },
        {
          id: 5,
          name: "Xiaomi Mi 11",
          price: 749,
          color: "Horizon Blue",
          company: "Xiaomi",
          memory: "256GB",
          description: "Stunning display, powerful Snapdragon 888 processor, and excellent camera setup for versatile photography."
        }
      ];
      
  return (
    <div>
        <PhoneContext.Provider value={PhoneData}>
        {children}
        </PhoneContext.Provider>
    </div>
  )
}

export default ProductContext