package exercicios.condicional;

import java.util.Scanner;

public class ExercicioPessoa {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o nome: ");
        String nome = sc.nextLine();

        System.out.print("Digite o sexo (F/M): ");
        String sexo = sc.nextLine().toUpperCase();

        System.out.print("Digite o estado civil: ");
        String estadoCivil = sc.nextLine().toUpperCase();

        if (sexo.equals("F") && estadoCivil.equals("CASADA")) {
            System.out.print("Digite o tempo de casada (anos): ");
            int anosCasada = sc.nextInt();
            System.out.println("Nome: " + nome + ", Sexo: " + sexo + ", Estado Civil: " + estadoCivil + ", Anos Casada: " + anosCasada);
        } else {
            System.out.println("Nome: " + nome + ", Sexo: " + sexo + ", Estado Civil: " + estadoCivil);
        }

        sc.close();
    }
}
