import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { TypeAppDispatch, TypeState } from './type/type-redux';

export const useAppDispatch = () => useDispatch<TypeAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TypeState> = useSelector;
