#!/usr/bin/env python
# coding: utf-8

# # Combined Methods to Predict Gender of Name
#
# 1) Check if user added names
#
# > If name not in user's added names (either female or other)
#
# 2) Check for name in database list
#
# > If name not in database list
#
# 3) Predict using AI

# ### Read File - return cleaned lines from script

# In[152]:


# returned cleaned lines
def read_file(text):
    lines = text.strip("\n")

    return lines


# In[153]:


# script_lines = read_file("Dialogue.txt")


# ### Parse Names - return names in script
# - only the first name

# In[154]:


def line_to_name(line): # clean line to extract name, from lowercase lines
    name = line.split(":")[0]   # lisa_lastname
    return name.split("_")[0] #lisa


# In[155]:


# names = []
# for l in script_lines:
#     names.append(line_to_name(l))


# # Predicting Genders of Names

# ## From User Input

# In[158]:


# # Get input from website
# femaleNames = input("Female: ").lower().split()
# otherNames = input("Other: ").lower().split()


# ## From Database

# In[160]:


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


# ## From ML

# In[162]:


import gender_guesser.detector as gen

# guess if female or not, append to global array

predict = gen.Detector(case_sensitive=False)

def predict_gender_name(name):
    predicted_gender = predict.get_gender(name)
    if predicted_gender == "female" or predicted_gender == "mostly_female":
        return "Female"
    else:
        return "Other"


# ## Combined

# In[163]:


def check_if_female(name):
    if name in femaleNames:   # checking from database and manual list
        return "Female"
    elif name in data_femaleNames:   # check in database
        return "Female"
    else:                  # last option use ai
        predict_gender_name(name)
        if name in femaleNames:    # now check the name again
            return "Female"
        else:
            return "Other"


# # Test 1 - If there are two women

# In[165]:


# look for two distinct named women
def check_if_women(names):
    counted_women = []
    women_count = 0
    for n in names: # loop thru every speaker
        if check_if_female(n) == "Female": # some version of checking if female
            if n not in counted_women: # make sure you didn't already count that person
                women_count += 1
                counted_women.append(n) # add to counted women
    if women_count >= 2:
        return True
    else:
        return False


# # Test 2 - Check if they talk

# In[167]:


# return true if two women talk
# if one female name is followed by another female name
def check_if_women_talking(names):

    prevWomen = "NULL"
    two_women_talking = False

    for n in names: # loop thru every speaker
        if check_if_female(n) == "Female": # some version of checking if female
#             print("FEM:     " + n, end="")
#             print("   ||  PREV:     " + prevWomen)
            if n != prevWomen and prevWomen != "NULL": # two women are talking
                two_women_talking = True
                break
            else: # women not talking to another women
                prevWomen = n
        else:
            prevWomen = "NULL" # not a women, no previous women talking
    return two_women_talking


# # Test 3 - Two women talking about something that is not a man

# In[169]:


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



# In[172]:


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
