import { Button } from "../components/button/button";
import { Container } from "../../components/container/container";
import { header } from "../components/Header/Header";
import { Title } from "../components/Header/headerTite";
import { useCallback } from "react";
import { title } from "../components/Title/title";
import { title } from './../components/Title/title';
import { classNames } from 'classnames';

const genderBocks = [
    'Ação',
    'Aventura',
    'Biografia',
    'Comédia',
    'Drama', 
    'Ficção',
]

export function Home(){

    const [SelectedGender, setselectedGender] = useState <String[]>([]);
    console.log('🚀 Home - selectedGender:', setselectedGender)

    const handleSelect = useCallback ((title: string) => {
        if (setselectedGender.includes(title)){
            const removeGender = setselectedGender.filter(item => item !== title)
            setselectedGender(removeGender);
        } else {
            setselectedGender([...setselectedGender, title]);
        }
    }, [SelectedGender])
    
    return (
    <>
        <header/>
        <Container>
        <Title title "O que você quer ler hoje?"/>
        <div className="gap-8 grid grid-cols-8">
        {genderBocks.map(book =>(
        <button
        title={book}
        variant={setselectedGender.includes(book) ? "dark" : "light"}
        onClick={() => handleSelect(book)}/>
        ))}
        </div>

        <div className="pt-7" >
            <p className="text-evergreen font-semibold text-2xl">Sobre o que você gostaria de receber recomendações</p>
            <imput type="trxt" classNames/>
        </div>

        </Container>
    </>
    );
}