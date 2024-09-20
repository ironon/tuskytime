from typing import Text
from venv import create
import PyPDF2
import warnings
warnings.filterwarnings("ignore")
import json

months = {
    "Jan": "1",
    "Feb": "2",
    "Mar": "3",
    "Apr": "4",
    "May": "5",
    "June": "6",
    "Aug": "8",
    "Sept": "9",
    "Sep": "9",
    "Oct": "10",
    "Nov": "11",
    "Dec": "12"
    
}
    
def generate():
    days = {}
    def createDay(date, ABDay, TT, special=None):
       
        if special == None:
            days[date] = {
                "date": date,
                "day": ABDay,
                "TT": TT,
                
            }
        else:
            days[date] = {
                "date": date,
                "day": ABDay,
                "TT": TT,
                "special": special
            }
            # print(days[date])
    def checkIfDayType(i, char, text):
        if i < 1 or i == len(text) - 1: return (False, 1)
        
        if text[i-1] == " " and text[i+1] == " ":
            if char == "A" or char == "B":
                return (True, char)
        return (False, char)
    def isCapital(text):
        if text >= "A" and text <= "Z":
            return True
        return False
                
            
    def getInfo(i, text):
        
        spaceOccurances = 0
        ni = i
        while spaceOccurances != 1:
            ni = ni - 1
            if text[ni] == "(":
                spaceOccurances = spaceOccurances + 1
        spaceOccurances = 0
        while spaceOccurances != 1:
            ni = ni - 1
            if isCapital(text[ni]):
                spaceOccurances = spaceOccurances + 1
        text = text[ni:i+1]
        
            # text = untilCapitalLetter(text)
        
       
        return(text)
    def getDate(text: Text):
        spaceOccurances = 0
        i = 0
        ni = i
        nii = 0
        month = ""
       
        # print(text)
        while spaceOccurances != 2:
            ni = ni + 1
            if text[ni] == " ":
                spaceOccurances = spaceOccurances + 1
                if spaceOccurances == 1:
                    month = text[i:ni]
                    month = month.replace(".", "")
                    month = month.replace(" ", "")
                    nii = ni
        day = text[nii+1:ni]
        # newText = newText.replace("\\n", "")
        return(month, day)
    
    def getTT(text: Text):
        spaceOccurances = 0
        i = 0
        ni = i
        while spaceOccurances != 1:
            ni = ni + 1
            if text[ni] == "(":
                spaceOccurances = spaceOccurances + 1
        i = ni
        spaceOccurances = 0
        # print(text)
        while spaceOccurances != 1:
            ni = ni + 1
            if text[ni] == ")":
                spaceOccurances = spaceOccurances + 1
        newText = text[i+1:ni]
        # newText = newText.replace("\\n", "")
        return(newText)    
    def getSpecial(text: Text):
        spaceOccurances = 0
        i = 0
        ni = i
        while spaceOccurances != 1:
            ni = ni + 1
            if text[ni] == ")":
                spaceOccurances = spaceOccurances + 1
        i = ni
        spaceOccurances = 0
        # print(text)
        while spaceOccurances != 1:
            ni = ni + 1
            if (text[ni] == "A" or text[ni] == "B") and text[ni-1] == " ":
                spaceOccurances = spaceOccurances + 1
        newText = text[i+2:ni-1]
        if newText == "":
            return(None)
        # newText = newText.replace("\\n", "")
        return(newText)    
       
        
    pdfFileObj = open('tt.pdf', 'rb')
    pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
    for page in range(pdfReader.numPages):
        page = pdfReader.getPage(page)
        text = ascii(page.extract_text())
        text = text.replace('\\n', "")
        
        for i, char in enumerate(text):
            day = checkIfDayType(i, char, text)
          
            if day[0]:
                
                
                info = getInfo(i, text)
                day = day[1]
                date = getDate(info)
                tuskytime = getTT(info)
                special = getSpecial(info)
                
                formattedDate = months[date[0]] + "/" + date[1]
                
                print(info + " formatted.")
                # print(formattedDate)
                # print(day)
                # print(tuskytime)
                createDay(formattedDate, day, tuskytime, special=special)
                
                
                
    with open("tuskytime.json", "w") as ttjson:
        json.dump(days, ttjson, indent=4) 
# try:
#     f = open("tuskytime.json", "r")
#     a = json.load(f)
# except:
#     generate()
        
        
if __name__ == "__main__":
    generate()
    
    