package exercicios.repeticao;

public class ExercicioPares0a100 {
    public static void main(String[] args) {
        System.out.println("Números pares de 0 a 100:");
        for (int i = 0; i <= 100; i++) {
            if (i % 2 == 0) {
                System.out.println(i);
            }
        }
    }
}

