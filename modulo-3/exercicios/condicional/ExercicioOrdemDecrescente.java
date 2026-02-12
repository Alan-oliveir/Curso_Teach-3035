package exercicios.condicional;

import java.util.Scanner;

public class ExercicioOrdemDecrescente {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o primeiro número: ");
        int a = sc.nextInt();
        System.out.print("Digite o segundo número: ");
        int b = sc.nextInt();
        System.out.print("Digite o terceiro número: ");
        int c = sc.nextInt();

        if (a > b && a > c) {
            if (b > c) {
                System.out.println("Ordem decrescente: " + a + ", " + b + ", " + c);
            } else {
                System.out.println("Ordem decrescente: " + a + ", " + c + ", " + b);
            }
        } else if (b > a && b > c) {
            if (a > c) {
                System.out.println("Ordem decrescente: " + b + ", " + a + ", " + c);
            } else {
                System.out.println("Ordem decrescente: " + b + ", " + c + ", " + a);
            }
        } else {
            if (a > b) {
                System.out.println("Ordem decrescente: " + c + ", " + a + ", " + b);
            } else {
                System.out.println("Ordem decrescente: " + c + ", " + b + ", " + a);
            }
        }

        sc.close();
    }
}
