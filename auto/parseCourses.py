import json
import os
import tabula
from PyPDF2 import PdfReader

reader = PdfReader("./auto/courses.pdf")

classes = [

]
def newClass(name, course_code, grade): 
    return {"name": name, "course_code":course_code, "grade":grade}
def getRidOfLetters(word:str):
    newWord = ""
    for character in word:
        if not character.isalpha():
            newWord = newWord + character
def isCourseCode(word):
    try:
        
        print(word)
        return int(word) > 100
    except:
        try:
            word = getRidOfLetters(word)
            print(word +  " NO LETTERS")
            return int(word) > 100
        except:
            return False


def utf(string: str):
    return string.encode('utf-8')
def getWords():
    alltext = "" 
    jsonD = {
        "data": []
    }
    tables = tabula.read_pdf("./auto/courses.pdf", pages="1-15", multiple_tables=False, lattice=True)
    print(len(tables))
    for table in tables:
        newJSON = json.loads(table.to_json())
        jsonD["data"].append(newJSON)
    json.dump(jsonD, open("./auto/classes.json", "w"), indent=4)

allwords = getWords()
print(allwords)


current_entry = ""
index = 0
# while index < len(allwords):
#     word = allwords[index]
#     if not isCourseCode(word):
#         current_entry = current_entry + word + " "
#         index += 1
#     else: 
#         print("is course code (rare)")
#         index += 1
#         current_entry = current_entry + word + " "
#         ## we have found the course code, iterate until we find the next course, so we can cut it off.
#         scannedWord = allwords[index]
#         while not isCourseName(index):
#             current_entry = current_entry + scannedWord + "_"
#             scannedWord = allwords[index]
#             index += 1
        
#         print(current_entry)
#         print('=================')
#         index += 1
#         current_entry = ""

