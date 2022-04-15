const defaultState = {
	customers: [],
};

// ниже офигенно хорошая практика, чтобы не ошибиться в этих типах
const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';

export const customerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_CUSTOMER':
			return { ...state, customers: [...state.customers, action.payload] }; // т.к. состояние является неизменяемым, мы возвращаем новый объект, в него разворачиваем через ... spread старое состояние, и изменяем конкретное поле // здесь мы возвращаем и разворачиваем старый массив клиентов, и к нему добавляем новых через action

		case 'REMOVE_CUSTOMER':
			return {
				...state,
				customers: state.customers.filter(
					customer => customer.id !== action.payload
				),
			}; //возвращаем только те объекты, для которых коллбек возвращает true, т.е. если айди клиента = тому айдишнику который мы будем передавать как payload, то он не попадет в массив
		default:
			return state;
	}
};


// эти простейшие функции (экшн криэйторы) будут возвращать нам объекты с типами и данными которые передаем через параметры, короче это очень удобно для создания новых объектов которые будут передаваться в диспатч
export const addCustomerAction = payload => ({ type: ADD_CUSTOMER, payload });

export const removeCustomerAction = payload => ({
	type: REMOVE_CUSTOMER,
	payload,
});
