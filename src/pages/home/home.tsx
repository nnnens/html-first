import {Card} from "../../components/card/card.tsx";
import {MainLayout} from "../../layout/main-layout.tsx";

export const HomePage = () => {
    return (
        <MainLayout>
            <h1>HomePage</h1>
            <div className='content-grid'>
               <Card text={`9,5 дюймовбольшой надувной мяч для тенниса, интерактивные игрушки для домашних животных`} />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card text="Я люблю Настю" />
            </div>
        </MainLayout>
    )
}