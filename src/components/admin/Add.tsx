import { useForm ,SubmitHandler} from 'react-hook-form';
import { TpProducts } from '~/types/Product';
import Joi from 'joi';
import { joiResolver } from "@hookform/resolvers/joi";
type Pops = {
  onAdd: (product: TpProducts) => void
};
const productSchema = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(null, ""),
});
const Add = ({ onAdd }: Pops) => {
  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm<TpProducts>({ resolver: joiResolver(productSchema),
    });
const onSubmit : SubmitHandler<TpProducts>=(product) =>{onAdd(product)}
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Thêm Sản Phẩm</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">  
              <label htmlFor="title" className="form-label">Tên Sản phẩm</label>
              <input
                type="text"
                className="form-control"
                id="title"
                {...register("title",{required : true,minLength:3,maxLength:255})} />
                {errors.title && (
                <div className='text-danger'>{errors.title.message}</div>  
                )} 
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">giá Sản phẩm</label>
              <input
                type="text"
                className="form-control"
                id="price" {...register("price", {required:true,min:0})}/>
                  {errors.price && (
                <div className='text-danger'>{errors.price.message}</div>  
                )} 
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Mô tả Sản phẩm</label>
              <input
                type="text"
                className="form-control"
                id="description" {...register("description",)} />
            </div>
            <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
