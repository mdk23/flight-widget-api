 
    import Table from './components/Table';
   

  function App() {
    
    /*
    Flight_Api devolve um promise,prosmise tem tres estados, quando fullied imprime-se os dados
    Para ter acesso aos dados é necessario fazer then(result=> console.log(data))

    result devolve um array com 2996, slice(0,n) devolve um array com tamanho n 
    */


    // console.log(data) //Visualizar os dados vindo da API
  
    return (
    
        <div className='departures'>
          
          <h1> DEPARTURES ✈️</h1>
            <Table/> 
        </div>
      
    );
  }

  export default App;

 