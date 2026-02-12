package exercicios.sequencial;

import java.util.Locale;
import java.util.Scanner;

public class ExercicioSalario {
    public static void main(String[] args) {
        // Define o locale para Brasil para usar a vírgula como separador decimal
        Locale.setDefault(new Locale("pt", "BR"));
        Scanner sc = new Scanner(System.in);

        System.out.println("Olá, informe o seu salário:"); [cite: 121]
        double salario = sc.nextDouble(); [cite: 118]

        // Formata com 2 casas decimais [cite: 119, 123]
        System.out.printf("Salário: R$ %.2f\n", salario); [cite: 123]

        sc.close();
    }
}