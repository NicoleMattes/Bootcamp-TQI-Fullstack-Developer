package desafio;

public abstract class Conteudo {

    public static final double XpPadrao = 10d;

    private String titulo;
    private String descricao;

    public abstract double calcularxp();


    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}
