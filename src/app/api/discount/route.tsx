import { NextResponse } from 'next/server'
//why did we did this because when we are extracting the data from database we will extract the require information so i did this
export async function GET(request: Request) {
  return NextResponse.json({
    data: {
      getUserDiscounts: {
        error: false,
        discountCode:
          "Hey there 👋,\nYou’ve received an exclusive discount for accessing our services via Recipto.\n\nDiscounts:\n- Salaried Tax Filing – Advanced - (₹1,500–₹5,000) → Now ₹975 (35% OFF)\n- Salaried Tax Filing – Basic - (₹750) → Now ₹488 (35% OFF)\n\nLock in your FREE consultation ✨ and deep discounts today.\nOur experts are ready to help!",
        store: {
          logo:
            'https://cdn.recipto.in/uploads/d45d44c9d1f4e917fd8eb2c87ff080bc.jpg',
          name:
            'Salaried? Get FREE Tax Help + 40% OFF On Tax Services',
          tag: 'For Salaried Professionals',
          customer_cashback:900,
        },
      },
    },
  })
}