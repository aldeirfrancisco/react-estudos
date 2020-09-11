import React, { useEffect, useState } from 'react';
import Checkbox from '../../shared/Checkbox/Checkbox';
import LineChart from '../../shared/LineChart';
import AppContainer from '../AppContainer';
import AppHeader from '../AppHeader';
import { Container, Wrapper} from './App.styles';

function App () {
    const [lettuce, setLettuce] = useState();
    const [ rice, setRice] = useState();
  
    const colors = ['#62CBC6','#00ABAD','#00858C','#006073','#004D61']

   
   
    return <Wrapper>
       
        <Container>

          <AppHeader/>
          <AppContainer
            left = {<div >
               produto disponiveis
               <Checkbox 
                value = {lettuce}
                title="Alface"
                onClick = {() => setLettuce(! lettuce)}
               />
                <Checkbox 
                value = {rice}
                title="Arroz"
                onClick = {() => setRice(! rice)}
               />
            </div>
            }
            middle = {<div >
                sua lista de compras
               
                </div>
                }
            right = {<div >
                 estatisticas
                 <LineChart color = {colors[0]} title = "saudavel" percentage = {80}/>
                  <LineChart color ={colors[1]} title = "nao tao saudavel assim" percentage = {20}/>
                  <LineChart color ={colors[2]} title = "limpeza"  percentage = {35} />
                  <LineChart color ={colors[3]} title = "outros" percentage = {15}/>
                    </div>
                    }
          />
        </Container>

    </ Wrapper>
}
export default App;