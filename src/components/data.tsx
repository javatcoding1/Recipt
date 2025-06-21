'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const DiscountCard = () => {
  const [discount, setDiscount] = useState<any>(null)

  useEffect(() => {
    async function fetchDiscount() {
      const res = await fetch('/api/discount')
      const json = await res.json()
      const first = json.data.getUserDiscounts
      console.log(first)
      setDiscount(first)
    }
    fetchDiscount()
  }, [])

  return (
    <>
      {discount && (
        <div className='bg-white flex-row mx-auto justify-center items-center rounded-2xl shadow p-4 max-w-md text-black w-full'>
          <Image
            src={discount.store.logo}
            alt='offer image'
            width={500}
            height={300}
            className='rounded-lg'
          />
          <h2 className='text-xl font-semibold mt-4'>{discount.store.name}</h2>
          <p className='text-sm text-gray-500 mt-1'>{discount.store.tag}</p>
          <div className='flex'>
            <p className='text-lg font-bold mt-2'>
              {discount.store.customer_cashback * 10} ₹ coins
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default DiscountCard