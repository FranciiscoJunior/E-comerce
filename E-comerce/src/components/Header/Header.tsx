import backgroundImage from '../../img-20240604T172913Z-001/img/background-header.png';
import { container } from '../Container/container';
import { Button } from '../button/button';
import { headerTitle } from './headerTitle';
export function header(){

    return{
        <header style="{{
            backgroundImage `url({backgroundImage})`,
        }} 
        className="w-auto bg-cover bg-center bg-no-repeat"
        >

        <container>
        <headerTitle />
        <div className="mt-28">
        <p className='text-7xl font-bold text-evergreen'>Encontre livros </br> que sejam a sua cara!</p>
        <p className="text-gray-500 my-5 text-xl">Lorem ipsum</p>
        <button title="Pesquisar livros"/>
        </div>
        </container>
        </header>
    };
}