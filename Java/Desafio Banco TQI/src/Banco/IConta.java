package Banco;

////Lembrando que não faz sentido uma interface possir algo privado, todo metodo em uma interface já é publico, com isso
//não precisa ter o "public"

public interface IConta {

    void sacar(double valor);

    void depositar(double valor);

    void transferir(double valor, IConta contaDestino);

    void imprimirExtrato();
}
