import { Slot } from '../../../../type/type';
import { UseFormRegister } from 'react-hook-form';
import { IFormInput } from '../form';

type TypeInputRadioProps = {
  slot: Slot;
  register: UseFormRegister<IFormInput>;
  day: 'tomorrow' | 'today';
}
export default function InputRadio({ slot, register, day }: TypeInputRadioProps): JSX.Element {
  return (
    <label className="custom-radio booking-form__date">
      <input type="radio" id="today9h45m" value={`${day}${slot.time}`} disabled={slot.isAvailable} {...register('data', {
        required: 'Пожалуйста выберите время'
      })}
      />
      <span className="custom-radio__label">{slot.time}</span>
    </label>
  );
}
