#there are duplicate course names in the file messing things up
# you must combine the duplicates, and potentially combine the closely related ones (e.g: combine all algebra I's together)

import json
def flatten(classes):
    flattened = {
        "Name": [],
        "Credit": [],
        "Grade": [],
        "Prerequisite": [],
        "Code": []
    }
    for key in classes["Name"]:
        flattened["Name"].append(classes["Name"][key])
        flattened["Credit"].append(classes["Credit"][key])
        flattened["Grade"].append(classes["Grade"][key])
        flattened["Prerequisite"].append(classes["Prerequisite"][key])
        flattened["Code"].append(classes["Code"][key])
    return flattened
    
def sort(dict):
    newDict = {}
    flattened = sorted(dict.items(), key=lambda kv: (kv[1], kv[0]))
    for value in flattened:
        newDict[value[0]] = value[1]
    return newDict
def removeCourse(id):
   
    if isinstance(id, int):
        id = str(id)
    toBeDeleted = None
    data = None
    with open("./auto/courses.json", "r+") as file:
        data = json.load(file)
        del data['Name'][id]
        del data['Code'][id]
        del data['Prerequisite'][id]
        del data['Grade'][id]
        del data['Credit'][id]
    json.dump(data, open("./auto/courses.json", "w"), indent=4)
def r(id):
    removeCourse(id)

def main():
    f = open("./auto/classes.json", 'r')
    classes = json.load(f)['data']
    names = classes['Name']
    
    toBeDeleted = []
    for name in names:
        if names[name] == None:
            toBeDeleted.append(name)
            if name in classes['Code']:
                del classes["Code"][name]
            if name in classes['Grade']:
                del classes["Grade"][name]
            if name in classes['Credit']:
                del classes["Credit"][name]
            if name in classes["Prerequisite"]:
                del classes["Prerequisite"][name]
    for name in toBeDeleted:
        del classes['Name'][name]

    names = classes['Code']
    toBeDeleted = []
    for name in names:
        if names[name] == None:
            toBeDeleted.append(name)
            if name in classes['Name']:
                del classes["Name"][name]
            if name in classes['Grade']:
                del classes["Grade"][name]
            if name in classes['Credit']:
                del classes["Credit"][name]
            if name in classes["Prerequisite"]:
                del classes["Prerequisite"][name]
    for name in toBeDeleted:
        del classes['Code'][name]
    toBeDeleted.clear()
    
    classes["Name"] = sort(classes["Name"])
    classes = flatten(classes)
      
    newFile = open("./auto/newData.json", 'w')
    json.dump(classes, newFile, indent=4)

if __name__ == "__main__":
    main()


