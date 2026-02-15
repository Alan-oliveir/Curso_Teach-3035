package exercicios.repeticao;

import java.util.Scanner;

class ExercicioTabuada {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite um número de 1 a 10 para ver a tabuada: ");
        int num = sc.nextInt();

        System.out.println("Tabuada de " + num + ":");
        for (int i = 1; i <= 10; i++) {
            System.out.printf("%d x %d = %d%n", num, i, (num * i));
        }

        sc.close();
    }
}