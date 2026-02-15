package exercicios.repeticao;

import java.util.Scanner;

public class ExercicioParesAteN {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n;

        while (true) {
            System.out.print("Digite um número inteiro não-negativo: ");
            String line = sc.nextLine();
            try {
                n = Integer.parseInt(line.trim());
                if (n < 0) {
                    System.out.println("Número não pode ser negativo. Tente novamente.");
                    continue;
                }
                break;
            } catch (NumberFormatException e) {
                System.out.println("Entrada inválida. Informe um número inteiro.");
            }
        }

        System.out.println("Números pares de 0 até " + n + ":");
        for (int i = 0; i <= n; i += 2) {
            System.out.println(i);
        }

        sc.close();
    }
}
