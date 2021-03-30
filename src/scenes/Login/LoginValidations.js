export const schema = {
	correo: [{
		required: true,
		type: 'email'
	}],
	password: [{
		required: true,
		min: 6,
		message: 'Debe tener al menos 6 caracteres'
	}]
};

export const messages = {
	required: 'Es requerido',
	types: {
		//   email: '${label} no es un e-mail válido',
		email: 'No parece un corrreo válido',
		number: 'No es un número válido',
		regexp: 'Sólo números',
	},
};
