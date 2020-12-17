import React, {useState, useEffect} from 'react';
import api from '../../services/apiConversor';
import './form.css'

const Form = () =>{
    const [moedaBR, setMoedaBR] = useState(1);
    const [moedaUSD, setMoedaUSD] = useState(0);
    const [monitorar, setMonitorar] = useState(0);
    useEffect(()=>{
        const pegarMoedas = async () => {
            
            const moedas = await (await api.get()).data;
            setMonitorar(moedas.USD.ask);
            
        }
        pegarMoedas();
        
    },[]);
    
    return (
        <form>
            <div>
                <label>
                    RS$:
                    <input type="number" value={moedaBR} onChange={event => setMoedaBR(event.target.value)}/>              
                </label>
            </div>
            <div>
                <label>
                    US$:
                    <input type="number" value={moedaUSD}/>
                </label>
            </div>
            
            <div>
                <button type="button" onClick={()=> setMoedaUSD(monitorar*moedaBR)}>Converter</button>
            </div>
            
        </form>
    );
}

export default Form;