#!/usr/bin/env python
# coding: utf-8

# In[56]:


# returned cleaned lines
def read_file_database(file):
    names = []
    txt = open(file, "r")
    for t in txt:
        if t.strip() != "" and not t.startswith("#"):
            # if not blank and not comments - don't remove comments cause credit
            names.append(t.strip().lower())
            # remove spaces and convert to lowercase
    return names


# In[57]:


import gender_guesser.detector as gen

# guess if female or not, append to global array

predict = gen.Detector(case_sensitive=False)

def predict_gender_name(name):
    predicted_gender = predict.get_gender(name)
    if predicted_gender == "female" or predicted_gender == "mostly_female":
        return "Female"
    else:
        return "Other"


# In[58]:


def check_if_female(name):
    if name in femaleNames:   # checking from database and manual list
        return "Female"
    else:                  # last option use ai
        predict_gender_name(name)
        if name in femaleNames:    # now check the name again
            return "Female"
        else:
            return "Other"


# In[72]:


# look for two distinct named women
def check_if_women(names):
    counted_women = []
    women_count = 0
    for n in names: # loop thru every speakers
        if n in femaleNames: # some version of checking if female
            if n not in counted_women: # make sure you didn't already count that person
                women_count += 1
                counted_women.append(n) # add to counted women
    if women_count >= 2:
        return True
    else:
        return False


# In[84]:


# return true if two women talk
# if one female name is followed by another female name
def check_if_women_talking(names):

    prevWomen = "NULL"
    two_women_talking = False

    for n in names: # loop thru every speaker
        if check_if_female(n) == "Female": # some version of checking if female
            # print("FEM:     " + n, end="")
            # print("   ||  PREV:     " + prevWomen)
            if n != prevWomen and prevWomen != "NULL": # two women are talking
                two_women_talking = True
                break
            else: # women not talking to another women
                prevWomen = n
        else:
            prevWomen = "NULL" # not a women, no previous women talking
    return two_women_talking


# In[74]:


# Return an array of all the lines between two women talking
def women_convos(lines):
    prevWomen = "NULL"
    two_women_talking = False
    women_convo = []
    for l in lines:
        name = line_to_name(l) # parse names
        if check_if_female(name) == "Female": # if female

            if name != prevWomen and prevWomen != "NULL": # two women are talking
                two_women_talking = True

                # append current line and line before
                women_convo.append(l)
                prevLine = lines.index(l) - 1
                women_convo.append(lines[prevLine])

            else: # women not talking to another women
                prevWomen = name
        else:
            prevWomen = "NULL" # male talking
    return women_convo


# In[75]:


def check_if_women_talking_not_men(convos): # just need one line without men
    not_about_men = False
    for line in convos: # check each line
        for name in otherNames: # check each name
            #print(name)
            if name not in line:  # no mention of male in the lines
                #print(f"NO MALE {name}:   {line}")
                not_about_men = True
            else:
                #print(f"MALE {name}:   {line}")
                not_about_men = False   # one of the male names is mentioned
                break
        if not_about_men == True:  # no mention of any male in the line
            break
    return not_about_men


# In[89]:


def line_to_name(line): # clean line to extract name, from lowercase lines
    name = line.split(":")[0]   # lisa_lastname
    return name.strip().split("_")[0] #lisa


# In[92]:


def combined_bechdel_test(string_script):
    global lines, names
    script_lines = string_script.lower().split("\n")
    names = []
    for l in script_lines:
        if line_to_name(l) != "":
            names.append(line_to_name(l))

    global femaleNames, otherNames
    # Get input from website
    femaleNames = []
    otherNames = []
    # femaleNames.extend(input("Female: ").lower().split())
    # otherNames.extend(input("Other: ").lower().split())
    otherNames.extend(["him", "his", "he", "husband", "boyfriend", "brother", "father", "uncle", "boy"])

    femaleNames.extend(read_file_database("Names/FemaleNames.txt"))
    otherNames.extend(read_file_database("Names/MaleNames.txt"))

    for name in names:  # check with AI
        gender = check_if_female(name)
        if gender == "Female":     femaleNames.append(name)
        else:      otherNames.append(name)

    passed = 0
    if check_if_women(names) == True:
        passed += 1
        # print(names)
        if check_if_women_talking(names) == True:
            passed += 1
            womenConvo = women_convos(script_lines)
            if check_if_women_talking_not_men(womenConvo) == True:
                passed += 1
                print(passed)
    else:
        print(passed)

    return passed



# In[ ]:





# In[ ]:





# In[ ]:
