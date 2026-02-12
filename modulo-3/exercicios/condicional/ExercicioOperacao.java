package exercicios.condicional;

import java.util.Scanner;

public class ExercicioOperacao {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o valor A: ");
        int a = sc.nextInt();
        System.out.print("Digite o valor B: ");
        int b = sc.nextInt();

        int c;
        if (a == b) {
            c = a + b; // Soma se forem iguais 
        } else {
            c = a * b; // Multiplica se forem diferentes 
        }

        System.out.println("Resultado (C): " + c);
        sc.close();
    }
}