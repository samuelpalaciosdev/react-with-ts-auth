import { useNavigate } from 'react-router-dom';
import { getFirstProduct } from '../../services';
import { useProductStore } from '../../store/store';
import { PrivateRoutes } from '../../types';
import { GetSingleProduct } from '../../types/product';

const Login = () => {
  const createProduct = useProductStore((state) => state.createProduct);
  const navigate = useNavigate();

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
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
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
