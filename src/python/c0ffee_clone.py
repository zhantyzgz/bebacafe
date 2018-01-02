import re
from unidecode import unidecode
import json

def string_to_hex(string):
    string = string.lower()
    original_char = 'goistz'
    new_char = '601572'
    for i in range(len(original_char)):
        string = string.replace(original_char[i], new_char[i])
    while (6 > len(string) > 3 or 3 > len(string) or len(string) == 7) and len(string) != 4:
        string = '0' + string
    return string

def spanish(): #from https://github.com/javierarce/palabras/blob/master/listado-general.txt
    filename = 'listado-general.txt'
    pattern = re.compile("^[abcedfgoist]{1,8}$", re.IGNORECASE | re.MULTILINE)
    result_list = []
    set_of_words = set()
    with open(filename, encoding='utf-8') as file:
        for word in file.readlines():
            word = word.strip('\n').upper()
            unaccented_word = unidecode(word).upper()
            if pattern.match(unaccented_word):
                if word in set_of_words: continue
                hex_color = '#' + string_to_hex(unaccented_word)
                result_list.append({'word': word, 'unaccented_word': unaccented_word, 'hex_color': hex_color})
                set_of_words.add(word)
    result_list.sort(key=lambda x: x['unaccented_word'])
    with open('colors.json', 'w', encoding="utf8")  as result_file:
        json.dump(result_list, result_file, indent=4, ensure_ascii=False)
    print(len(result_list))

spanish()