function Aluno(nomeParam, qtFaltasParam, notasParam) {
    this.nome = nomeParam
    this.qtFaltas = qtFaltasParam
    this.notas = notasParam
    
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
const aluno1 = new Aluno("Diovano", 1, [10, 9, 10])
const aluno2 = new Aluno("Daiane", 1, [5, 5, 8, 90])
const aluno3 = new Aluno("Jose", 6, [8.6])git 
const aluno4 = new Aluno("Camila", 50, [8.9])

function Curso(nomeDoCursoParam, notaDeAprovacaoParam, faltasMaximasParam, listaDeEstudantesParam) {
    this.nomeDoCurso = nomeDoCursoParam
    this.notaDeAprovacao = notaDeAprovacaoParam
    this.faltasMaximas = faltasMaximasParam
    this.listaDeEstudantes = listaDeEstudantesParam
    
    this.adicionarAluno = function (alunoNovo) {
        return this.listaDeEstudantes.push(alunoNovo)
    }
    this.aprovarAluno = function (alunoAvaliado) {
        let aprovado = false
        if (alunoAvaliado.calcularMedia() >= this.notaDeAprovacao && alunoAvaliado.qtFaltas < this.faltasMaximas) {
            
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
            console.log(this.aprovarAluno(this.listaDeEstudantes[i]))
        }

            console.log(listaAlunosAprovados)

    }


}
const FrontEnd = new Curso("Front-End", 8, 8, [aluno1])
const ProgImperativa = new Curso("Programação Imperativa", 7, 9, [aluno1, aluno2, aluno3, aluno4])


console.log(FrontEnd.aprovarAluno(aluno1))



ProgImperativa.alunosAprovados() 