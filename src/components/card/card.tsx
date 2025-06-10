import classnames from "classnames";
import cardStyle from './card.module.css';

interface ICardProps {
    text?: string
}


export const Card = ({text}: ICardProps) => {
    const textCard = text || 'Я люблю Персика';

    return (
        <div className={classnames(cardStyle['card-one'])}>
            <div className={classnames(cardStyle['pict-card1'])}></div>
            <div className={classnames(cardStyle["price-card1"])}>
                <div className={cardStyle["price1"]}>1247 <span className={cardStyle["price_ruble"]}>₽</span></div>
                <div className={cardStyle["price2"]}>4299</div>
                <div className={cardStyle["price4"]}>429</div>
                <div className={cardStyle["price3"]}>70%</div>
            </div>
            <div className={cardStyle["indent"]}>
                <div className={cardStyle["text-card1"]}>{textCard}</div>
            </div>
        </div>
    )
}