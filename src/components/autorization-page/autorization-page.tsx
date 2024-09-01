/* eslint-disable @typescript-eslint/no-misused-promises */
import BackgroundImage from './background-image/background-image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { autorizationUser } from '../../store/user-slice/api-action';
import { useAppDispatch } from '../../utils';
import { useLocation } from 'react-router-dom';
import { UserPostLogin } from '../../type/type';

type IFormInput = {
  email: string;
  password: string;
  agreement: boolean;
}
type CustomizedState = {
  pathName: string;
}
export default function AutorizationPage(): JSX.Element {
  const location = useLocation();
  const state = location.state as CustomizedState;
  const { pathName } = state;

  const regEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+).\w{2,3}$/i;
  const regPasseword = /[a-z]+.*\d+|\d+.*[a-z]+/i;
  const dispatch = useAppDispatch();
  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
  } = useForm<IFormInput>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const user: UserPostLogin = {
      email: data.email,
      password: data.password,
      pathName: pathName,
    };

    dispatch(autorizationUser(user));
  };

  return (
    <main className="decorated-page login">
      <BackgroundImage />
      <div className="container container--size-l">
        <div className="login__form">
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="login-form__inner-wrapper">
              <h1 className="title title--size-s login-form__title">Вход</h1>
              <div className="login-form__inputs">
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
                  <input type="email" id="email" placeholder="Адрес электронной почты"
                    {...register('email', {
                      required: 'Поле обязательно к заполнение!',
                      pattern: {
                        value: regEmail,
                        message: 'Введен не корректный адрес электронной почты!'
                      }
                    })}
                  />
                  <div style={{ textAlign: 'center', color: '#f2890f' }}>{errors?.email && errors.email.message}</div>
                </div>
                <div className="custom-input login-form__input">
                  <label className="custom-input__label" htmlFor="password">Пароль</label>
                  <input type="password" id="password" placeholder="Пароль"
                    {...register('password', {
                      required: 'Поле обязательно к заполнение!',
                      minLength: {
                        value: 3,
                        message: 'Минимум 3 символа!'
                      },
                      maxLength: {
                        value: 15,
                        message: 'Не больше 15 символов!'
                      },
                      pattern: {
                        value: regPasseword,
                        message: 'Пароль должен содержать минимум одну букву и одну цифру!'
                      },
                    })}
                  />
                  <div style={{ textAlign: 'center', color: '#f2890f' }}>{errors?.password && errors.password.message}</div>
                </div>
              </div>
              <button className="btn btn--accent btn--general login-form__submit" type="submit" disabled={!isValid}>Войти</button>
              <span style={{ textAlign: 'center', color: '#f2890f' }}>{errors?.agreement && errors.agreement.message}</span>
            </div>
            <label className="custom-checkbox login-form__checkbox">
              <input type="checkbox" id="id-order-agreement" {...register('agreement', { required: 'Необходимо ваше согласие на обработку персональных данных!' })} />
              <span className="custom-checkbox__icon">
                <svg width="20" height="17" aria-hidden="true">
                  <use xlinkHref="#icon-tick"></use>
                </svg>
              </span>
              <span className="custom-checkbox__label">Я&nbsp;согласен с
                <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных
                </a>&nbsp;и пользовательским соглашением
              </span>
            </label>
          </form>
        </div>
      </div>
    </main>
  );
}

