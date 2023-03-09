import { GetAllProducts, GetSingleProduct } from '../types/product';

const baseUrl = 'https://gold-wide-eyed-sparrow.cyclic.app/';
const productsUrl = `${baseUrl}/api/products`;

export const getAllProducts = async (): Promise<GetAllProducts> => {
  try {
    const res = await fetch(productsUrl);

    if (!res.ok) {
      throw new Error('Failed to retrieve products');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to retrieve products');
  }
};

export const getFirstProduct = async (): Promise<GetSingleProduct> => {
  try {
    const res = await fetch(`${productsUrl}/1`);

    if (!res.ok) {
      throw new Error('Failed to retrieve product with id: 1');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to retrieve product with id: 1');
  }
};
