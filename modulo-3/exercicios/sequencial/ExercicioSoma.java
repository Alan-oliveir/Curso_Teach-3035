package exercicios.sequencial;

import java.util.Scanner;

public class ExercicioSoma {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);

        System.out.println("Olá, informe o primeiro número:");
        double num1 = leitor.nextDouble();

        System.out.println("Agora informe o segundo número:");
        double num2 = leitor.nextDouble();

        double resultado = num1 + num2;

        // %.2f formata para duas casas decimais, como no seu print "6,00"
        System.out.printf("Resultado: %.2f%n", resultado);

        leitor.close();
    }
}