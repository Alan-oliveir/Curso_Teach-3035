package exercicios.condicional;

import java.util.Scanner;

public class ExercicioSomaCondicional {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite um número: ");
        int numero = sc.nextInt();

        int resultado;
        if (numero % 2 == 0) {
            resultado = numero + 5;
            System.out.println("O número é par. " + numero + " + 5 = " + resultado);
        } else {
            resultado = numero + 8;
            System.out.println("O número é ímpar. " + numero + " + 8 = " + resultado);
        }

        sc.close();
    }
}
