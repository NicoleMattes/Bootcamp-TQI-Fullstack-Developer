package Banco;

public class Main {

    public static void main(String[] args) {
        Cliente Nicole = new Cliente();
        Nicole.setNome("Nicole");

        Conta cc = new ContaCorrente(Nicole);
        Conta poupanca = new ContaPoupanca(Nicole);

        cc.depositar(100);
        cc.transferir(100, poupanca);

        cc.imprimirExtrato();
        poupanca.imprimirExtrato();
    }

}