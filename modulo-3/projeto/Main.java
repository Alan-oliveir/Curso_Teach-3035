import java.util.Scanner;
import java.util.Random;

public class Main {
    // Configurações dos Níveis
    private static final String[] NIVEIS = {"Fácil", "Médio", "Difícil"};
    private static final int[] LIMITES = {50, 100, 200};
    private static final int[] TENTATIVAS_MAX = {10, 7, 5};
    private static final int[] PONTOS_BASE = {100, 200, 300};

    // Histórico e Recordes
    private static String[] historico = new String[10];
    private static int[] recordes = {0, 0, 0}; 
    private static int contadorHistorico = 0;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int opcao;

        do {
            exibirMenu();
            opcao = scanner.nextInt();

            switch (opcao) {
                case 1 -> iniciarNovoJogo(scanner);
                case 2 -> exibirRegras();
                case 3 -> exibirHistorico();
                case 0 -> System.out.println("Encerrando programa...");
                default -> System.out.println("Opção inválida!");
            }
        } while (opcao != 0);
    }

    private static void exibirMenu() {
        System.out.println("\n--- JOGO DE ADIVINHAÇÃO ---");
        System.out.println("1. Iniciar Novo Jogo");
        System.out.println("2. Ver Regras");
        System.out.println("3. Ver Histórico e Recordes");
        System.out.println("0. Sair");
        System.out.print("Escolha: ");
    }

    private static void iniciarNovoJogo(Scanner scanner) {
        System.out.println("\nSelecione a dificuldade: 1-Fácil, 2-Médio, 3-Difícil");
        int escolha = scanner.nextInt() - 1;

        if (escolha < 0 || escolha > 2) return;

        Random random = new Random();
        int numeroSecreto = random.nextInt(LIMITES[escolha]) + 1;
        int tentativas = TENTATIVAS_MAX[escolha];
        int pontuacao = PONTOS_BASE[escolha];
        boolean venceu = false;

        System.out.println("Número entre 1 e " + LIMITES[escolha] + " gerado!");

        while (tentativas > 0) {
            System.out.printf("\n[Tentativas: %d | Pontos: %d]", tentativas, pontuacao);
            System.out.print("\nDigite seu palpite (ou -1 para DICA): ");
            int palpite = scanner.nextInt();

            if (palpite == -1) {
                pontuacao = usarDica(numeroSecreto, pontuacao, LIMITES[escolha], scanner);
                continue;
            }

            if (palpite == numeroSecreto) {
                int bonus = (tentativas - 1) * 50;
                int totalFinal = pontuacao + bonus;
                System.out.println("ACERTOU! Pontuação Final: " + totalFinal);
                
                // Atualiza Recorde 
                if (totalFinal > recordes[escolha]) recordes[escolha] = totalFinal;
                
                salvarNoHistorico(totalFinal, NIVEIS[escolha]);
                venceu = true;
                break;
            } else {
                System.out.println(palpite < numeroSecreto ? "MAIOR!" : "MENOR!");
                tentativas--;
                pontuacao -= 10;
            }
        }

        if (!venceu) System.out.println("Game Over! O número era " + numeroSecreto);
    }

    private static int usarDica(int segredo, int pontosAtuais, int limite, Scanner sc) {
        System.out.println("\nDICAS DISPONÍVEIS:");
        System.out.println("1. Par ou Ímpar (-10 pts)");
        System.out.println("2. Intervalo (Metade superior/inferior) (-20 pts)");
        int tipo = sc.nextInt();

        if (tipo == 1 && pontosAtuais >= 10) {
            System.out.println("DICA: O número é " + (segredo % 2 == 0 ? "PAR" : "ÍMPAR"));
            return pontosAtuais - 10;
        } else if (tipo == 2 && pontosAtuais >= 20) {
            int metade = limite / 2;
            System.out.println("DICA: O número está na " + (segredo > metade ? "metade superior" : "metade inferior"));
            return pontosAtuais - 20;
        }
        System.out.println("Pontos insuficientes ou opção inválida.");
        return pontosAtuais;
    }

    private static void salvarNoHistorico(int pts, String nivel) {
        historico[contadorHistorico % 10] = String.format("Nível: %s | Pontos: %d", nivel, pts);
        contadorHistorico++;
    }

    private static void exibirHistorico() {
        System.out.println("\n--- RECORDES POR NÍVEL ---");
        for (int i = 0; i < NIVEIS.length; i++) {
            System.out.println(NIVEIS[i] + ": " + recordes[i]);
        }
        
        System.out.println("\n--- ÚLTIMOS RESULTADOS ---");
        for (String h : historico) {
            if (h != null) System.out.println(h);
        }
    }

    private static void exibirRegras() {
        System.out.println("\nRegras: Adivinhe o número. Dicas custam pontos. Bônus por rapidez!");
    }
}

