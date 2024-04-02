import { useForm, SubmitHandler } from 'react-hook-form';
import instance from '~/apis';
import { usersTpye } from '~/types/User';
import { joiResolver } from "@hookform/resolvers/joi";
import Joi, { required } from 'joi';
import { useNavigate } from 'react-router-dom';

type Pops = {
  onRegister: (user: usersTpye) => void;
};
const userSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required().min(6),
});
const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm<usersTpye>({
      resolver: joiResolver(userSchema),
    });
  const onSubmit = (user: usersTpye) => {
    (async () => {
      const { data } = await instance.post('/register', user)
      if (data.accessToken) {
        window.confirm('Are you sure') && navigate("/login");
      }
      console.log(data);

    })();
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Đăng kí tài khoản</h2>
          <form onSubmit={handleSubmit(onSubmit)} >
            {/* <div className="mb-3">
              <label htmlFor="firstName" className="form-label">Họ của bạn</label>
              <input type="text" className="form-control" id="firstName"  />
            
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Tên của bạn</label>
              <input type="text" className="form-control" id="lastName"  />
            </div> */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email"
                {...register("email", { required: true })} />
              {errors.email && (
                <div className='text-danger'>{errors.email.message}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mật khẩu</label>
              <input type="password" className="form-control" id="password"
                {...register("password", { required: true, minLength: 6 })} />
              {errors.password && (
                <div className='text-danger'>{errors.password.message}</div>
              )}

            </div>
            <button type="submit" className="btn btn-primary">Đăng kí</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
