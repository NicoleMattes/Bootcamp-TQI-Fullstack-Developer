package Banco;

public class banco {
    private String name;
    private list<Conta> contas;

    public String getName() {
        return name;
    }
    public list<Conta> getContas(){
        return contas;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setContas(list<Conta> contas){
        this.contas = contas;
    }

}
