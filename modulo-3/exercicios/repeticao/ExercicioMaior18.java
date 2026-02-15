package exercicios.repeticao;

import java.util.Scanner;

public class ExercicioMaior18 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int countMaior18 = 0;
        int total = 5;

        System.out.println("Informe a idade de " + total + " pessoas:");

        for (int i = 1; i <= total; i++) {
            int idade;
            while (true) {
                System.out.print("Idade da pessoa " + i + ": ");
                String line = sc.nextLine();
                try {
                    idade = Integer.parseInt(line.trim());
                    if (idade < 0) {
                        System.out.println("Idade não pode ser negativa. Tente novamente.");
                        continue;
                    }
                    break;
                } catch (NumberFormatException e) {
                    System.out.println("Entrada inválida. Informe um número inteiro para a idade.");
                }
            }

            if (idade > 18) {
                countMaior18++;
            }
        }

        System.out.println("Total de pessoas com idade maior que 18: " + countMaior18);
        sc.close();
    }
}

