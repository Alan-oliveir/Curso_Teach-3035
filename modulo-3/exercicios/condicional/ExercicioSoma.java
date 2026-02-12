package exercicios.condicional;

import java.util.Scanner;

public class ExercicioSoma {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o valor A: ");
        int a = sc.nextInt();
        System.out.print("Digite o valor B: ");
        int b = sc.nextInt();
        System.out.print("Digite o valor C: ");
        int c = sc.nextInt();

        if (a + b < c) {
            System.out.println("A soma de A + B é menor que C");
        } else {
            System.out.println("A soma de A + B nao é menor que C");
        }

        sc.close();
    }
}
