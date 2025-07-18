import string
import random

class CommonUtils():
    """
    Funções genéricas que podem ser chamadas em qualquer app/pacote.
    """

    @staticmethod
    def get_random_letters(n: int):
        """
        Retorna uma string de n letras aleatórias maiúsculas.
        """
        return ''.join(random.choices(string.ascii_uppercase, k=n))
    
    @staticmethod
    def get_random_numbers(n:int):
        """
        Retorna uma string de n números aleatórios.
        """
        return ''.join(random.choices(string.digits, k=n))


    @staticmethod
    def get_random_number_between(a:float, b:float):
        """
        Retorna um float entre os 2 parâmetros fornecidos, a < b.
        """
        return round(random.uniform(a, b),2)