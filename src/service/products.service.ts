import {Product} from '../interface'

export  const getProducts = async(page = 0): Promise<Product[]> =>{
    try {
        const response = await fetch(`https://ecommerce-dh-production.up.railway.app/products?_page=${page}&_per_page=24`) 
        if (response) {
            const data = await response.json()
            return data.data
        } else {
            throw new Error('Failed to fetch products')
        }
    } catch (error) {
        throw new Error('Network error')
    }
  }

  export const createProduct = async(product: Product): Promise<Product> => {
    try {
        const response = await fetch('https://ecommerce-dh-production.up.railway.app/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })

        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            throw new Error('Failed to create product')
        }

    } catch (error) {
        throw new Error('Network error')
    }
  }