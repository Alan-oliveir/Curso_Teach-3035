package exercicios.condicional;

import java.util.Scanner;

public class ExercicioDobroTriplo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite um número: ");
        int numero = sc.nextInt();

        if (numero > 0) {
            int dobro = numero * 2;
            System.out.println("O dobro de " + numero + " é " + dobro);
        } else {
            int triplo = numero * 3;
            System.out.println("O triplo de " + numero + " é " + triplo);
        }

        sc.close();
    }
}
