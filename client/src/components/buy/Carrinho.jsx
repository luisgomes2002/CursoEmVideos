import { CardContainer, PaymentMethod, UserInfo } from "./CarrinhoStyle";
import Cartao from "../../assets/cartao.png";

const Buy = () => {
  return (
    <CardContainer>
      <UserInfo>
        <h1>
          <i className="fa-solid fa-list"></i> Informações basicas
        </h1>
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Nome Completo" />
        <input type="text" placeholder="CPF" />
        <input type="text" placeholder="Número do cartão" />
        <input type="text" placeholder="CVV" />
        <input type="text" placeholder="Celular" />
      </UserInfo>
      <UserInfo>
        <h1>
          <i className="fa-solid fa-location-dot"></i> Endereço
        </h1>
        <input type="text" placeholder="Endereço" />
        <input type="text" placeholder="Número da casa" />

        <h2>
          <i className="fa-solid fa-comment"></i> Como conheceu nosso site?
        </h2>
        <input type="text" placeholder="Informe como conheceu!" />
      </UserInfo>
      <UserInfo>
        <h1>
          <i className="fa-regular fa-credit-card"></i> Escolha do cartão
        </h1>
        <PaymentMethod>
          <input type="radio" name="paymentMethod" value="creditCard" />
          <h1>Cartão</h1>
        </PaymentMethod>
        <PaymentMethod>
          <input type="radio" name="paymentMethod" value="creditCard" />
          <h1>Pix</h1>
        </PaymentMethod>
        <PaymentMethod>
          <input type="radio" name="paymentMethod" value="boleto" />
          <h1>Boleto</h1>
        </PaymentMethod>
        <img src={Cartao} alt="" />
      </UserInfo>
      <div></div>
      <button>
        <i className="fa-solid fa-check"></i> Finalizar Compra
      </button>
    </CardContainer>
  );
};

export default Buy;
