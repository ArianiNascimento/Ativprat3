import '../App.css';

function Home() {
    return (
        <>
            <h1>Seja bem-vindo(a)!</h1>
            <h2>Compre passagens para todo o Brasil, promoções de até 50% de desconto, aproveite!</h2>
            <div className="formulario">
                <h4>Realize seu cadastro</h4>
                <form>
                    <label htmlFor="name">Nome Completo: </label>
                    <input type="text"/>
                    <br/>
                    <br/>
                    <label htmlFor="num">CPF (apenas números): </label>
                    <input type="text"/>
                    <br/>
                    <br/>
                    <label htmlFor="email">E-mail: </label>
                    <input type="email"/>
                    <br/>
                    <br/>
                    <label htmlFor="senha">Senha: </label>
                    <input type="password"/>
                    <br/>
                    <br/>
                    <button><b>Cadastrar</b></button>
                    <br/>
                    <br/>
                </form>
            </div></>
    );
}

export default Home;