import { ButomLef } from "./style"
// chamando o texto dentro do meu  butom com o children
function BtnnLef({ children, ...Onclick }) {




    return (

        <>


            <ButomLef {...Onclick}>{children}</ButomLef>






        </>

    )
}




export default BtnnLef