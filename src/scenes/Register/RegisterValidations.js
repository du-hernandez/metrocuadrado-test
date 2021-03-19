export const schema = {
	correo: [{
		required: true,
		type: 'email'
	}],
	password: [{
		required: true,
		min: 6,
		message: 'Debe tener al menos 6 caracteres'
	}],
	password_confirm: [
		{
			required: true,
			min: 6,
			message: 'Debe tener al menos 6 caracteres'
		},
		({ getFieldValue }) => ({
			validator(_, value) {
				if (!value || getFieldValue('password') === value) {
					return Promise.resolve();
				}
				return Promise.reject(new Error('Las dos contraseñas que ingresó no coinciden'));
			},
		})
	],
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
