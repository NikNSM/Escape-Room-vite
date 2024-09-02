/* eslint-disable @typescript-eslint/no-misused-promises */
import { InformationPostBookingUser, InformationQuestBooking, QuestPage } from '../../../type/type';
import { useAppDispatch, useAppSelector } from '../../../utils';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputRadio from './input-radio/inputRadio';
import { bookAQuest } from '../../../store/booking-slice/api-action';

type FormProps = {
  informationsBooking: InformationQuestBooking[];
  quest: QuestPage;
}

export type IFormInput = {
  data: string;
  name: string;
  tel: string;
  person: number;
  children: boolean;
  agreement: boolean;
}

export default function Form({ informationsBooking, quest }: FormProps): JSX.Element | string {
  const dayRegExp = /(today)|(tomorrow)/i;
  const timeRegExp = /\d{1,2}:\d{2}/i;
  const telReagExp = /^(\+7|8){1}\d{9,}/;
  const activeId = useAppSelector((state) => state.booking.active);
  const active = informationsBooking.find((item) => item.id === activeId);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const day = data.data.match(dayRegExp)?.[0] as string;
    const time = data.data.match(timeRegExp)?.[0] as string;
    const dataBooking: InformationPostBookingUser = {
      date: day,
      time,
      id: quest.id,
      contactPerson: data.name,
      withChildren: data.children,
      phone: data.tel,
      peopleCount: Number(data.person),
      placeId: activeId
    };
    dispatch(bookAQuest(dataBooking));
  };

  return (
    active ?
      <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="booking-form__section">
          <legend className="visually-hidden">Выбор даты и времени</legend>
          <fieldset className="booking-form__date-section">
            <legend className="booking-form__date-title">Сегодня</legend>
            <div className="booking-form__date-inner-wrapper">
              {active.slots.today.map((slot) => <InputRadio slot={slot} key={`key-${slot.time}`} register={register} day={'today'} />)}
            </div>
          </fieldset>
          <fieldset className="booking-form__date-section">
            <legend className="booking-form__date-title">Завтра</legend>
            <div className="booking-form__date-inner-wrapper">
              {active.slots.tomorrow.map((slot) => <InputRadio slot={slot} key={`key-${slot.time}`} register={register} day={'tomorrow'} />)}
            </div>
            <div style={{ textAlign: 'center', color: '#f2890f' }}>{errors?.data && errors.data.message}</div>
          </fieldset>
        </fieldset>
        <fieldset className="booking-form__section">
          <legend className="visually-hidden">Контактная информация</legend>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="name">Ваше имя</label>
            <input type="text" id="name" placeholder="Имя" {...register('name', {
              required: 'Поле обязательно к заполнение!',
              maxLength: {
                value: 15,
                message: 'До 15 символов!'
              }
            }
            )}
            />
            <div style={{ textAlign: 'center', color: '#f2890f' }}>{errors?.name && errors.name.message}</div>
          </div>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="tel" >Контактный телефон</label>
            <input type="tel" id="tel" placeholder="Телефон" {...register('tel', {
              required: 'Поле обязательно к заполнение!',
              pattern: {
                value: telReagExp,
                message: 'Введен не корректный номер телефона!'
              }
            })}
            />
            <div style={{ textAlign: 'center', color: '#f2890f' }}>{errors?.tel && errors.tel.message}</div>
          </div>
          <div className="custom-input booking-form__input">
            <label className="custom-input__label" htmlFor="person">Количество участников</label>
            <input type="number" id="person" placeholder="Количество участников" {...register('person', {
              required: 'Поле обязательно к заполнение!',
              min: {
                value: quest.peopleMinMax[0],
                message: `Не менее ${quest.peopleMinMax[0]}`
              },
              max: {
                value: quest.peopleMinMax[1],
                message: `Не более ${quest.peopleMinMax[1]}`
              }
            })}
            />
          </div>
          <div style={{ textAlign: 'center', color: '#f2890f' }}>{errors?.person && errors.person.message}</div>
          <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
            <input type="checkbox" id="children" {...register('children')} />
            <span className="custom-checkbox__icon">
              <svg width="20" height="17" aria-hidden="true">
                <use xlinkHref="#icon-tick"></use>
              </svg>
            </span>
            <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
          </label>
        </fieldset>
        <button className="btn btn--accent btn--cta booking-form__submit" type="submit" >Забронировать</button>
        <span style={{ textAlign: 'center', color: '#f2890f' }}>{errors?.agreement && errors.agreement.message}</span>

        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
          <input type="checkbox" id="id-order-agreement" {...register('agreement', {
            required: 'Необходимо ваше согласие на обработку персональных данных!',
          })}
          />
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Я&nbsp;согласен с
            <a className="link link--active-silver link--underlined" href="#">
              правилами обработки персональных данных
            </a>&nbsp;и пользовательским соглашением
          </span>
        </label>
      </form> : ''
  );
}
