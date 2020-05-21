# -*- coding: utf-8 -*-
"""
Created on Thu Apr  9 22:40:40 2020

@author: 92938
"""

##import sys
#from pdfminer.pdfparser import PDFParser
#from pdfminer.pdfdocument import PDFDocument
#from pdfminer.pdftypes import resolve1
##os.popen(r'"C:/Program Files (x86)/Adobe/Reader 11.0/Reader/AcroRd32.exe" abc.pdf')
##filename = sys.argv[1]
#fp = open("abc5.pdf", 'rb')
#
#parser = PDFParser(fp)
#doc = PDFDocument(parser)
#fields = resolve1(doc.catalog['AcroForm'])['Fields']
#for i in fields:
#    field = resolve1(i)
#    name, value = field.get('T'), field.get('V')
#    print ('{0}: {1}'.format(name, value))


#import PyPDF2
#f = PyPDF2.PdfFileReader('abc3.pdf')
#ff = f.getFields()
#print(ff)

from pymongo import MongoClient
import re
from pdfminer.pdfparser import PDFParser
from pdfminer.pdfdocument import PDFDocument
from pdfminer.pdftypes import resolve1
import sys, json
from PyPDF2 import PdfFileWriter, PdfFileReader
from PyPDF2.generic import BooleanObject, NameObject, IndirectObject
class web:
    def read_in(self):
        lines = sys.stdin.readlines()
        #Since our input would only be having one line, parse our JSON data from that
        return json.loads(lines[0])
    
    def readinpara(self):
        #get our data as an array from read_in()
        lines = self.read_in()
        return lines
    
        #return the sum to the output stream
        
class allcamps:


    def __init__(self,firstname,page):
        self.firstname = firstname
        self.page = page - 1 

    def start_server(self):
        client = MongoClient("mongodb+srv://Xinni:123@test-j20kt.mongodb.net/test?retryWrites=true&w=majority")
        #os.popen(r'"C:/Program Files (x86)/Adobe/Reader 11.0/Reader/AcroRd32.exe" abc.pdf')
        #filename = sys.argv[1]
        db = client.all_camps
        # print(db)
        #print(db.list_collection_names())
        collection = db.exercises
        #print(collection.name)
        x = collection.find_one({'firstname':self.firstname})
        return x
        #pprint(x)
#        print(x['firstname'])


    def set_need_appearances_writer(self,pdf,writer: PdfFileWriter):
        # See 12.7.2 and 7.7.2 for more information: http://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/PDF32000_2008.pdf
        try:
            catalog = writer._root_object
            # get the AcroForm tree
            if "/AcroForm" not in catalog:
                writer._root_object.update({
                    NameObject("/AcroForm"): IndirectObject(len(writer._objects), 0, writer)
                })
            if "/AcroForm" in pdf.trailer["/Root"]:
                
                pdf.trailer["/Root"]["/AcroForm"].update(
                    {NameObject("/NeedAppearances"): BooleanObject(True)}
                )
            need_appearances = NameObject("/NeedAppearances")
            writer._root_object["/AcroForm"][need_appearances] = BooleanObject(True)
            # del writer._root_object["/AcroForm"]['NeedAppearances']
            return writer,pdf
    
        except Exception as e:
            print('set_need_appearances_writer() catch : ', repr(e))
            return writer,pdf

    def dic(self):
        a = {}
        a["b'Text36'"] = "parent1name"
        a["b'Text37'"] = "parent1bd"
        a["b'Text38'"] = "parent1relationship"
        a["b'Text39'"] = "parent1phone"
        a["b'Text40'"] = "parent1work"
        a["b'Text41'"] = "parent1phone"
        a["b'Text42'"] = "parent1work"
        a["b'Text43'"] = "parent1phone"
        a["b'Text44'"] = "email"
        a["b'Text45'"] = "homeaddress"
        a["b'Text46'"] = "parent2name"
        a["b'Text47'"] = "parent2bd"
        a["b'Text48'"] = "parent2relationship"
        a["b'Text49'"] = "parent2phone"
        a["b'Text50'"] = "parent2work"
        a["b'Text51'"] = "parent2phone"
        a["b'Text52'"] = "parent2work"
        a["b'Text53'"] = "parent2phone"
        a["b'Text54'"] = "email"
        a["b'Text55'"] = "homeaddress"
        a["b'Text10'"] = "today date"
        a["b'Text11'"] = "child firstname"
        a["b'Text13'"] = "child lastname" 
        a["b'Text14'"] = "childbirthdate"
        a["b'Text15'"] = "gender"
        a["b'Text16'"] = "homeaddress"
        a["b'Text56'"] = "parent1name"
        a["b'Text57'"] = "homeaddress"
        # a["b'Text58'"] = "homeaddress"
        a["b'Text59'"] = "parent1phone"
        a["b'Text60'"] = "parent1phone"
        a["b'Text61'"] = "parent1phone"
        a["b'Text62'"] = "parent2name"
        a["b'Text63'"] = "parent2phone"
        a["b'Text64'"] = "homeaddress"
        a["b'Text66'"] = "parent2phone"
        a["b'Text67'"] = "parent1phone"
        a["b'Text68'"] = "doctorname"
        a["b'Text69'"] = "doctorphone"
        a["b'Parent\x90s\tName'"] = "paraent1name"
        a["b'Parent'"] = "parent1name"
        a["b'Guardian'"] = "parent1name"
        a["b'Guardian Email'"] = "email"
        a["b'Participants Full Name Print'"] = "childname"
        a["b'Minor Child Date of birth'"] = "birthdate"
        a["b'parent1phone1'"] = "parent1phone"
        a["b'parent1phone2'"] = "parent1phone"
        a["b'parent1phone2'"] = "parent1phone"
        a["b'parent2phone1'"] = "parent2phone"
        a["b'parent2phone2'"] = "parent2phone"
        a["b'parent2phone3'"] = "parent2phone"
        a["b'parent1relationship1'"] = "parent1relationship"
        a["b'parent2relationship1'"] = "parent2relationship"
        a["b'parent1relationship2'"] = "parent1relationship"
        a["b'parent2relationship2'"] = "parent2relationship"
        a["b'email2'"] = "email"
        a["b'email1'"] = "email"
        a["b'homeaddress1'"] = "homeaddress"
        a["b'homeaddress2'"] = "homeaddress"
        a["b'Childs Name'"] = "childname"
        a["b'Childs Name_2'"] = "childname"
        a["b'parent1name1'"] = "parent1name"
        a["b'parent1name2'"] = "parent1name"
        a["b'parent1name3'"] = "parent1name"
        a["b'parent2name1'"] = "parent2name"
        a["b'parent2name2'"] = "parent2name"
        a["b'parent2name3'"] = "parent2name"

        return a
    
    def pdffill(self):
        x = self.start_server()
        mapping = self.dic()
        myfile = PdfFileReader("./routes/up/blank_table.pdf")
        writer = PdfFileWriter()
        writer , myfile = self.set_need_appearances_writer(myfile,writer)
        if "/AcroForm" in writer._root_object:
            writer._root_object["/AcroForm"].update(
            {NameObject("/NeedAppearances"): BooleanObject(True)})
        print(1)
        fp = open("./routes/up/blank_table.pdf", 'rb')
#        pdf_writer = PyPDF2.PdfFileWriter()
        parser = PDFParser(fp)
        doc = PDFDocument(parser)
        fields = resolve1(doc.catalog['AcroForm'])['Fields']
        
        first_page = myfile.getPage(self.page)
#for i in fields:
#    field = resolve1(i)
#    name, value = field.get('T'), field.get('V')
##    print (str(name))
#    if str(name) == "b'Text11'":
#        writer.updatePageFormFieldValues(first_page, fields={'Text11':x['firstname']})
#    if str(name) == "b'Text13'":
#        writer.updatePageFormFieldValues(first_page, fields={'Text13':x['lastname']})
#    if str(name) == "b'Text16'":
#        writer.updatePageFormFieldValues(first_page, fields={'Text16':x['homeaddress']})
#    if str(name) == "b'Text15'":
#        writer.updatePageFormFieldValues(first_page, fields={'Text15':x['gender']})
#    if str(name) == "b'Text14'":
#        writer.updatePageFormFieldValues(first_page, fields={'Text14':str(x['birthdate'])[:10]})
        for p in x.keys():
        
            for i in fields:
                temp = []
                field = resolve1(i)
                name, value = field.get('T'), field.get('V')   
                label = (re.split(b'\t|\x90s',name))
                q = ""
                for j in label:
                    # temp.append(j.decode('utf-8').lower())
                    q = q+(j.decode('utf-8').lower())
                temp.append(q)
                # print(temp)
                # print(1)
                if (str(name) in mapping.keys() and p in mapping[str(name)]) or p in temp:
                    # print(p)
                    # print(str(name) in mapping.keys() and p in mapping[str(name)])
                    # print( p in temp)
                    
                    if p == "birthdate":
                        writer.updatePageFormFieldValues(first_page, fields={str(name)[2:len(str(name))-1]:str(x[p])[:10]})
                    else:
                        print(str(name)[2:len(str(name))-1])
                        print(str(x[p]))
                        writer.updatePageFormFieldValues(first_page, fields={str(name)[2:len(str(name))-1]:str(x[p])})
        #    print ('{0}: {1}'.format(name, value))
        # writer.addPage(first_page)
        writer.updatePageFormFieldValues(first_page, fields={'parent1name':"123"})
        return first_page

if __name__ == "__main__":  
    w = web()
    webreadin = w.readinpara()
    page = webreadin['page']
    pages = page.split(",")
    newpdf = PdfFileWriter()
    for i in pages:
        f = allcamps(webreadin['firstname'], int(i))
        writer = f.pdffill()
        # writer.addPage(int(i))
        newpdf.addPage(writer)
    with open("newfile.pdf","wb") as new:
        # newpdf.write(new)
        newpdf.write(new)