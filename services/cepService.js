import axios from 'axios';

export async function buscar(cep){

    const res = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

    const endereco = {
        cep: res.data.cep,
        rua: res.data.logradouro,
        cidade: res.data.localidade,
        estado: res.data.uf
     };

     return endereco;

    //.then((res) => {
    //    const endereco = {
    //       cep: res.data.cep,
    //       rua: res.data.logradouro,
    //       cidade: res.data.localidade,
    //       estado: res.data.uf
    //    };
    //    navigation.navigate('Page3',endereco);
   // });

};