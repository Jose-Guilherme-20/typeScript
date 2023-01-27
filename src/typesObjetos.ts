function resumo(usuario: { nome: string; idade?: number }) {
  if (usuario.idade !== undefined) {
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
  } else {
    return `Olá ${usuario.nome}, tudo bem?`;
  }
}

let u = {
  nome: "José Guilherme",
};
resumo(u);

// ponto de interrogação antes dos dois pontos pra colocar o tipo a variavel se torna opcional.
