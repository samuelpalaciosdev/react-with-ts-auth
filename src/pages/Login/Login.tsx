import { getFirstProduct } from '../../services';
import { useProductStore } from '../../store/store';
import { GetSingleProduct } from '../../types/product';

const Login = () => {
  const createProduct = useProductStore((state) => state.createProduct);

  // useProductStore((state) => {
  //   // Initial state
  //   product: state.product;
  //   // Actions
  //   createProduct: state.createProduct;
  //   updateProduct: state.updateProduct;
  //   resetProduct: state.resetProduct;
  // });

  const login = async () => {
    try {
      const res: GetSingleProduct = await getFirstProduct();
      createProduct(res.product);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Este es el login</h1>
      <button onClick={login}>Login</button>
    </div>
  );
};
export default Login;
