
      /**0. O Grande Avisador (obrigatório)
      Crie um componente que apresenta inicialmente apenas um botão.
      Quando clicado esse botão faz aparecer a mensagem 
      "Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA."
      Essa mensagem deve ser exibida usando renderização condicional. */


import React from 'react'

const Aviso = () => {
  alert("Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.");
}



function Passo0() {
  return (
    <div className='container-0'>

      <button className='button-0' onClick={Aviso}>Apenas um Botão</button>

    </div>
  )
}

export default Passo0