import { Button as AntdButton } from 'antd'; 

export const Button = ({buttonType, text, clicked, block}) => {
    return (
        <AntdButton type={buttonType} onClick={clicked} block={block}>
            {text}
        </AntdButton>
    )
}
