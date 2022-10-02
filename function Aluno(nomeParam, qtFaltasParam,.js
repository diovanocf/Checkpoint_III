function Aluno(nomeParam, qtFaltasParam, notasParam) {
    this.nome = nomeParam
    this.qtFaltas = qtFaltasParam
    this.notas = notasParam
    //2º Criar metodos "calcular media" e "faltas"
    this.calcularMedia = function () {
        let media = 0
        for (let i = 0; i < this.notas.length; i++) {
            media += this.notas[i]
        }
        return media / this.notas.length
    }
    this.faltas = function () {
        return this.qtFaltas + 1
    }
}
const aluno1 = new Aluno("Marcos", 7, [8, 8, 8, 8])
const aluno2 = new Aluno("Paulo", 1, [5, 4, 8, 80])
const aluno3 = new Aluno("Costa", 60, [7.8])
const aluno4 = new Aluno("Agostinho", 60, [9.8])
//3º Criar objeto literal curso
function Curso(nomeDoCursoParam, notaDeAprovacaoParam, faltasMaximasParam, listaDeEstudantesParam) {
    this.nomeDoCurso = nomeDoCursoParam
    this.notaDeAprovacao = notaDeAprovacaoParam
    this.faltasMaximas = faltasMaximasParam
    this.listaDeEstudantes = listaDeEstudantesParam
    //4º Criar método que permite adicionar alunos à lista do curso
    this.adicionarAluno = function (alunoNovo) {
        return this.listaDeEstudantes.push(alunoNovo)
    }
    this.aprovarAluno = function (alunoAvaliado) {
        let aprovado = false
        if (alunoAvaliado.calcularMedia() >= this.notaDeAprovacao && alunoAvaliado.qtFaltas < this.faltasMaximas) {
            //Caso o aluno tenha a media maior ou igual e faltas menor
            aprovado = true
        } else if (alunoAvaliado.calcularMedia() >= (this.notaDeAprovacao + (this.notaDeAprovacao * 0.1)) && alunoAvaliado.qtFaltas == this.faltasMaximas) {
            aprovado = true
        } 
            return aprovado
    }

    this.alunosAprovados = function () {
        let listaAlunosAprovados = []

        for(let i=0;i<this.listaDeEstudantes.length;i++){
            listaAlunosAprovados.push(this.aprovarAluno(this.listaDeEstudantes[i]))
            //console.log(this.aprovarAluno(this.listaDeEstudantes[i]))
        }

            console.log(listaAlunosAprovados)

    }


}
const FrontEnd = new Curso("Front-End", 7, 7, [aluno1, aluno2, aluno3])
const ProgImperativa = new Curso("Programação Imperativa", 7, 2, [aluno1, aluno2, aluno3])

console.log(curso.listaAlunosAprovados)