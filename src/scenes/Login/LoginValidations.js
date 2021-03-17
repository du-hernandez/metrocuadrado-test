export const schema = {
	correo: [{
		required: true,
		type: 'email'
	}],
	password: [{
		required: true,
		min: 5,
		message: 'Debe tener al menos 5 caracteres'
	}]
};

export const messages = {
	required: '${label} es requerido',
	types: {
		//   email: '${label} no es un e-mail válido',
		email: 'No parece un corrreo válido',
		number: 'No es un número válido',
		regexp: 'Sólo números',
	},
	number: {
		range: 'Debe ser entre ${min} y ${max}',
	},
};
