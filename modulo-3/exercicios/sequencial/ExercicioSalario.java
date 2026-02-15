package exercicios.sequencial;

import java.util.Locale;
import java.util.Scanner;

public class ExercicioSalario {
    public static void main(String[] args) {
        Locale.setDefault(Locale.forLanguageTag("pt-BR"));
        Scanner sc = new Scanner(System.in);

        System.out.println("Olá, informe o seu salário:");
        double salario = sc.nextDouble();

        // Formata com 2 casas decimais
        System.out.printf("Salário: R$ %.2f\n", salario);

        sc.close();
    }
}