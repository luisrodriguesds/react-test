const init = {
		activeLession:{},
		activeModule:{},
		modules: [
			{id:1, title:'Iniciando com react', lessions:[
				{id:1, title:'Primeira Aula'},
				{id:2, title:'Segunda Aula'},
			]},
			{id:2, title:'Aprendendo Redux', lessions:[
				{id:3, title:'Terceira Aula'},
				{id:4, title:'Quarta Aula'},
			]}
		]
	};

export default function course(state=init, action){
	if (action.type == 'TOGGLE_LESSION') {
		return {...state, activeLession:action.lession, activeModule:action.module };
	}
	return state;
}