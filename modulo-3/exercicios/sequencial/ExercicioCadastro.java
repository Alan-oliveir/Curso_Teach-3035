package exercicios.sequencial;

import java.util.Scanner;

public class ExercicioCadastro {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);

        System.out.println("Olá, por favor informe seu nome:");
        String nome = leitor.nextLine();

        System.out.println("Agora informe sua idade:");
        int idade = leitor.nextInt();

        // Exibindo as informações de forma explicativa
        System.out.println("\n--- Dados Cadastrados ---");
        System.out.println("Nome: " + nome);
        System.out.println("Idade: " + idade + " anos");

        leitor.close();
    }
}